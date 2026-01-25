import { EditColors, Style, ThemeColors, ThemeType, WorkbenchColors } from "../struct";

const name: string = 'light-hight';
const type: ThemeType = ThemeType.Light;

const sidBarBackground: Style = { foreground: '#EEEEEE' };
const editWarn: Style = { foreground: '#A31515' };
const editorBackground: Style = { foreground: '#FFFFFF' };
const editorForeground: Style = { foreground: '#333333' };
const editorLineHighlightBackground: Style = { foreground: '#EEEEEE' };
const editorComments: Style = { foreground: '#888888'};
const editorConstant: Style = { foreground: '#5C6B7C' };
const editorString: Style = { foreground: '#5C6B7C' };
const editorAnnotation: Style = { foreground: '#9e880d' };
const editorFunction: Style = { foreground: '#0000FF' };
const editorVariable: Style = { foreground: '#0133B3' };
const editorParameter: Style = { foreground: '#0133B3', fontStyle: "underline" };
const editorProperty: Style = { foreground: '#871094' };
const editoePropertyStatic: Style = { fontStyle: 'bold' };
const editorEnumMember: Style = { foreground: '#b418c6', fontStyle: 'italic' };
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
}

export const lightHightTheme: ThemeColors = {
    name: name,
    type: type,
    editColors: editColors,
    workbenchColors: workbenchColors,
}

