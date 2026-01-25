import { Style, ThemeColors } from "../struct";

export function buildEditorWorkerbenchColors(theme: ThemeColors): { [key: string]: string | undefined } {
    return {
        "editor.background": theme.editColors.background.foreground,
        "editor.foreground": theme.editColors.foreground.foreground,
        "editor.lineHighlightBackground": theme.editColors.lineHighlightBackground.foreground,
        "editorBracketHighlight.foreground1": theme.editColors.foreground.foreground,
		"editorBracketHighlight.foreground2": theme.editColors.foreground.foreground,
		"editorBracketHighlight.foreground3": theme.editColors.foreground.foreground,
		"editorBracketHighlight.foreground4": theme.editColors.foreground.foreground,
		"editorBracketHighlight.foreground5": theme.editColors.foreground.foreground,
		"editorBracketHighlight.foreground6": theme.editColors.foreground.foreground,
		"editorBracketHighlight.unexpectedBracket.foreground": theme.editColors.warn.foreground,
    };
}

export function buildEditorSemanticTokenColors(theme: ThemeColors): { [key: string]: Style } {
    return {
        "variable": theme.editColors.variable,
		"parameter": theme.editColors.parameter,
		"property": theme.editColors.property,
		"method.declaration": theme.editColors.function,
		"function.declaration": theme.editColors.function,
		"property.static": theme.editColors.propertyStatic,
		"keyword.documentation": theme.editColors.parameter,
		"enum.declaration": theme.editColors.function,
		"enumMember": theme.editColors.enumMember,
    }
}