
enum ThemeType {
    Dark = 'dark',
    Light = 'light',
}

/**
 * theme 结构体
 */
interface ThemeColors {
    type: ThemeType;
    name: string;
    workbenchColors: WorkbenchColors;
    editColors: EditColors;
}

/**
 * 编辑区配色结构体
 */
interface WorkbenchColors {
}

/**
 * 编辑区配色结构体
 */
interface EditColors {
    warn: Style;
    background: Style;
    foreground: Style;
    lineHighlightBackground: Style;
    // 语言相关颜色
    comments: Style;
    constant: Style;
    string: Style;
    annotation: Style;
    function: Style;
    method: Style;
    variable: Style;
    parameter: Style;
    property: Style;
    propertyStatic: Style;
    enumMember: Style;
    keywordControl: Style;
}

/**
 * 样式结构体
 */
interface Style {
    foreground?: string;
    fontStyle?: string;
}

/**
 * editor token color 结构体
 */
interface TokenColor {
    name?: string;
    scope: string[];
    settings: Style;
}

/**
 * language token build interface
 */
interface LanguageTokenColorBuilder {
    language: string;
    buildTokenColors(theme: EditColors): TokenColor[];
}

class LanguageTokenColorBuilderFactory {
    private static builders: Array<LanguageTokenColorBuilder> = [];
    
    public static register(builder: LanguageTokenColorBuilder): void {
        for (const item of this.builders) {
            if (item.language === builder.language) {
                console.warn(`warn: register language token color fail. cause ${builder.language} exists`);
                return;
            }
        }
        console.info(`info: register language token color success. language ${builder.language}`);
        this.builders.push(builder);
    }
    
    public static getAllBuilders(): LanguageTokenColorBuilder[] {
        return this.builders;
    }
    
    public static getBuilder(language: string): LanguageTokenColorBuilder | undefined {
        for (const item of this.builders) {
            if (item.language === language) {
                return item;
            }
        }
        return undefined;
    }
}

class ThemeColorFactory {
    private static themes: Array<ThemeColors> = [];
    
    public static register(theme: ThemeColors): void {
        for (const item of this.themes) {
            if (item.name === theme.name) {
                console.warn(`warn: register theme fail. cause ${theme.name} exists`);
                return;
            }
        }
        console.info(`info: register theme success. theme ${theme.name}`);
        this.themes.push(theme);
    }

    public static getAllThemes(): ThemeColors[] {
        return this.themes;
    }

    public static getTheme(name: string): ThemeColors | undefined {
        for (const item of this.themes) {
            if (item.name === name) {
                return item;
            }
        }
        return undefined;
    }
}

export {
    ThemeType,
    WorkbenchColors,
    EditColors,
    Style,
    TokenColor,
    LanguageTokenColorBuilder,
    ThemeColors,
    LanguageTokenColorBuilderFactory,
    ThemeColorFactory,
};