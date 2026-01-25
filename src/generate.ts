import * as fs from 'fs';
import * as path from 'path';
import { 
    TokenColor, LanguageTokenColorBuilder, LanguageTokenColorBuilderFactory,
    ThemeColors, ThemeColorFactory
} from './struct';
import { 
    buildEditorWorkerbenchColors, 
    buildEditorSemanticTokenColors,
    buildEditorGeneralTokenColors,
} from './editor/general-color';
import * as LanguageTokenColorBuilderList from './editor';
import * as ThemeList from './theme';

export class ThemeBuilder {

    private themes: ThemeColors[];
    private languageTokenBuilders: LanguageTokenColorBuilder[];

    constructor() {
        this.languageTokenBuilders = this.loadLanguageTokenColorBuilders();
        this.themes = this.loadThemes();
    }

    private loadLanguageTokenColorBuilders(): LanguageTokenColorBuilder[] {
        Object.values(LanguageTokenColorBuilderList).forEach(Builder => {
            if (typeof Builder === 'function') {
                const instance = new Builder();
                LanguageTokenColorBuilderFactory.register(instance);
            }
        });
        return LanguageTokenColorBuilderFactory.getAllBuilders();
    }

    private loadThemes(): ThemeColors[] {
        Object.values(ThemeList).forEach(Builder => {
            if (typeof Builder === 'object' && Builder.name) {
                ThemeColorFactory.register(Builder);
            }
        });
        return ThemeColorFactory.getAllThemes();
    }

    public generateTokenColors(): void {
        // this.clearOutDir();
        this.themes.forEach(theme => {
            this.buildTheme(theme);
        });
    }

    private clearOutDir(): void {
        // 先删除 themes 目录下的所有文件
        const themeDir = path.join(__dirname, '..', 'themes');
        if (fs.existsSync(themeDir)) {
            const files = fs.readdirSync(themeDir);
            files.forEach(file => {
                const filePath = path.join(themeDir, file);
                fs.unlinkSync(filePath);
            });
        } else {
            fs.mkdirSync(themeDir);
        }
    }

    /**
     * name
     * colors
     * tokenColors
     * semanticHighlighting
     * semanticTokenColors
     */
    public buildTheme(theme: ThemeColors): void {
        const editorWorkerBenchColors = buildEditorWorkerbenchColors(theme);
        const workbenchColors = { ...theme.workbenchColors, ...editorWorkerBenchColors };
        const semanticTokenColors = buildEditorSemanticTokenColors(theme);
        const generalTokenColors: TokenColor[] = buildEditorGeneralTokenColors(theme);
        const languageTokenColors: TokenColor[] = this.buildLanguageTokenColors(theme);
        const tokenColors = [...generalTokenColors, ...languageTokenColors];
        const themeConfig = {
            name: theme.name,
            colors: workbenchColors,
            semanticHighlighting: true,
            semanticTokenColors: semanticTokenColors,
            tokenColors: tokenColors,
        };

        const themeDir = path.join(__dirname, '..', 'themes');
        const outputPath = path.join(themeDir, `${theme.name}-color-theme.json`);

        // 写入文件
        try {
            fs.writeFileSync(outputPath, JSON.stringify(themeConfig, null, '\t'));
            console.log(`主题已生成: ${outputPath}`);
        } catch (error) {
            console.error('写入主题文件失败:', error);
        }
    }

    private buildLanguageTokenColors(theme: ThemeColors): TokenColor[] {
        const tokenColors: TokenColor[] = [];
        this.languageTokenBuilders.forEach(builder => {
            const tokenColorItem = builder.buildTokenColors(theme.editColors);
            tokenColors.push(...tokenColorItem);
        });
        return tokenColors;
    }
}