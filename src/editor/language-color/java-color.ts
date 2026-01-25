import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class JavaTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "java";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
      {
        name: "Comments",
        scope: ["comment.line.double-slash.java", "comment.block.java"],
        settings: theme.comments,
      },
      {
        name: "KeywordControl",
        scope: [
          "variable.language.java",
          "keyword.control.java",
          "keyword.control.catch-exception.java",
        ],
        settings: theme.keywordControl,
      },
      {
        name: "Annotation",
        scope: [
          "storage.type.annotation.java",
          "punctuation.definition.annotation.java",
        ],
        settings: theme.annotation,
      },
      {
        name: "Constant",
        scope: [
          "constant.language.java",
          "constant.numeric.integer.java",
          "constant.numeric.float.java",
          "constant.numeric.hex.java",
          "constant.numeric.octal.java",
          "constant.numeric.binary.java",
          "constant.numeric.hex-float.java",
        ],
        settings: theme.constant,
      },
      {
        name: "String",
        scope: ["string.quoted.double.java", "string.quoted.single.java"],
        settings: theme.string,
      },
    ];
  }
}