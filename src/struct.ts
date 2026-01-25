
export enum ThemeType {
    Dark = 'dark',
    Light = 'light',
    HighContrast = 'high-contrast'
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
    private static builders: Map<string, LanguageTokenColorBuilder> = new Map();
    
    public static register(builder: LanguageTokenColorBuilder): void {
        if (this.builders.has(builder.language)) {
            console.warn(`warn: register language token color fail. cause ${builder.language} exists`);
        } else {
            console.info(`info: register language token color success. language ${builder.language}`);
            this.builders.set(builder.language, builder);
        }
    }
    
    public static getAllBuilders(): LanguageTokenColorBuilder[] {
        const instances: LanguageTokenColorBuilder[] = [];
        for (const builder of this.builders.values()) {
            instances.push(builder);
        }
        return instances;
    }
    
    public static getBuilder(language: string): LanguageTokenColorBuilder | undefined {
        const builder = this.builders.get(language);
        return builder;
    }
}

class ThemeColorFactory {
    private static themes: Map<string, ThemeColors> = new Map();
    
    public static register(theme: ThemeColors): void {
        if (this.themes.has(theme.name)) {
            console.warn(`warn: register theme fail. cause ${theme.name} exists`);
        } else {
            console.info(`info: register theme success. theme ${theme.name}`);
            this.themes.set(theme.name, theme);
        }
    }

    public static getAllThemes(): ThemeColors[] {
        const instances: ThemeColors[] = [];
        for (const theme of this.themes.values()) {
            instances.push(theme);
        }
        return instances;
    }

    public static getTheme(name: string): ThemeColors | undefined {
        const theme = this.themes.get(name);
        return theme;
    }
}

export {
    WorkbenchColors,
    EditColors,
    Style,
    TokenColor,
    LanguageTokenColorBuilder,
    ThemeColors,
    LanguageTokenColorBuilderFactory,
    ThemeColorFactory,
};