import * as chokidar from 'chokidar';
import { exec } from 'child_process';
import * as path from 'path';

class FileWatcher {
    private watcher: chokidar.FSWatcher | null = null;
    private isBuilding: boolean = false;
    private buildQueue: boolean = false;

    /**
     * 启动文件监听
     */
    public start(): void {
        console.log('启动文件监听...');
        // 获取当前工作目录
        const currentDir: string = process.cwd();
        console.log(`当前工作目录: ${currentDir}`);
        // 监听需要监视的目录和文件
        const watchPaths = [
            `${currentDir}/src/theme/`,
            `${currentDir}/src/editor/`,
        ];

        this.watcher = chokidar.watch(watchPaths, {
            persistent: true,
            ignoreInitial: true,  // 忽略初始文件扫描
            awaitWriteFinish: {
                stabilityThreshold: 300,  // 文件稳定后触发
                pollInterval: 100
            },
            ignored: /(^|[\/\\])\../,  // 忽略隐藏文件
        });

        // 监听文件变化事件
        this.watcher
            .on('add', (filePath) => this.handleFileChange('添加', filePath))
            .on('change', (filePath) => this.handleFileChange('修改', filePath))
            .on('unlink', (filePath) => this.handleFileChange('删除', filePath))
            .on('error', (error) => console.error('监听错误:', error));

        console.log('正在监听以下文件模式:');
        watchPaths.forEach(pattern => console.log(`  - ${pattern}`));
        console.log('\n按 Ctrl+C 停止监听');
    }

    /**
     * 处理文件变化
     */
    private handleFileChange(event: string, filePath: string): void {
        console.log(`\n[${new Date().toLocaleTimeString()}] 检测到文件${event}: ${path.relative(process.cwd(), filePath)}`);

        // 防抖处理：如果正在构建，标记需要重新构建
        if (this.isBuilding) {
            this.buildQueue = true;
            console.log('当前正在构建，已加入构建队列...');
            return;
        }

        this.debouncedBuild();
    }

    /**
     * 防抖构建函数
     */
    private debouncedBuild(): void {
        this.isBuilding = true;
        
        // 延迟一小段时间，避免连续的文件变化导致多次构建
        setTimeout(() => {
            this.runBuild();
        }, 500);
    }

    /**
     * 执行 npm run build
     */
    private runBuild(): void {
        console.log('开始执行 npm run build...');
        
        const buildProcess = exec('npm run build', (error, stdout, stderr) => {
            if (error) {
                console.error(`构建失败: ${error.message}`);
                return;
            }
            
            if (stderr) {
                console.error(`构建错误: ${stderr}`);
            }
            
            console.log(`构建输出:\n${stdout}`);
            console.log('构建完成！');
        });

        // 监听进程事件
        buildProcess.on('exit', (code) => {
            this.isBuilding = false;
            
            // 检查是否有排队的构建请求
            if (this.buildQueue) {
                this.buildQueue = false;
                console.log('执行队列中的构建请求...');
                this.debouncedBuild();
            }
        });
    }

    /**
     * 停止监听
     */
    public stop(): void {
        if (this.watcher) {
            this.watcher.close();
            console.log('已停止文件监听');
        }
    }

    /**
     * 立即执行一次构建
     */
    public buildNow(): void {
        console.log('立即执行构建...');
        this.runBuild();
    }
}

// 如果直接运行此文件，启动监听
if (require.main === module) {
    const watcher = new FileWatcher();
    
    // 捕获退出信号
    process.on('SIGINT', () => {
        console.log('\n正在停止监听...');
        watcher.stop();
        process.exit(0);
    });
    
    // 立即构建一次
    // watcher.buildNow();
    
    // 启动监听
    watcher.start();
}