import { EditColors, ThemeColors, ThemeType, WorkbenchColors, Style } from "../struct";

const name: string = 'dark';
const type: ThemeType = ThemeType.Dark;

const sidBarBackground: Style = { foreground: '#2b2d30' };
const editWarn: Style = { foreground: '#A31515' };
const editorBackground: Style = { foreground: '#1E1F22' };
const editorForeground: Style = { foreground: '#6f737a' };
const editorLineHighlightBackground: Style = { foreground: '#26282D' };
const editorComments: Style = { foreground: '#6f7370'};
const editorConstant: Style = { foreground: '#888888' };
const editorString: Style = { foreground: '#888888' };
const editorAnnotation: Style = { foreground: '#b3ae50' };
const editorFunction: Style = { foreground: '#6aab73' };
const editorVariable: Style = { foreground: '#999999' };
const editorParameter: Style = { foreground: '#999999', fontStyle: "underline" };
const editorProperty: Style = { foreground: '#c87dbb' };
const editoePropertyStatic: Style = { fontStyle: 'bold' };
const editorEnumMember: Style = { foreground: '#c87dbb', fontStyle: 'italic' };
const editorKeywordControl: Style = { fontStyle: 'italic' };

const editColors: EditColors = {
    warn: editWarn,
    background: editorBackground,
    foreground: editorForeground,
    lineHighlightBackground: editorLineHighlightBackground,
    comments: editorComments,
    constant: editorConstant,
    string: editorString,
    annotation: editorAnnotation,
    function: editorFunction,
    method: editorFunction,
    variable: editorVariable,
    parameter: editorParameter,
    property: editorProperty,
    propertyStatic: editoePropertyStatic,
    enumMember: editorEnumMember,
    keywordControl: editorKeywordControl,
}

const workbenchColors: WorkbenchColors = {
    "sideBar.background": sidBarBackground.foreground,
    "sideBar.foreground": editorVariable.foreground,
    "terminal.foreground": editorForeground.foreground,
}

export const darkTheme: ThemeColors = {
    name: name,
    type: type,
    editColors: editColors,
    workbenchColors: workbenchColors,
}

