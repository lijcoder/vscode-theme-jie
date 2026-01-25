import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class JavaPropertiesTokenColorBuilder implements LanguageTokenColorBuilder {
    public language: string = "java-properties";
    public buildTokenColors(theme: EditColors): TokenColor[] {
        return [
            {
                "name": "Comments",
                "scope": [
                    "comment.line.java-properties",
                ],
                "settings": theme.comments,
            },
            {
                "name": "Variable",
                "scope": [
                    "support.constant.java-properties"
                ],
                "settings": theme.variable,
            },
            {
                "name": "String",
                "scope": [
                    "string.unquoted.java-properties",
                ],
                "settings": theme.string
            },
        ];
    }
}