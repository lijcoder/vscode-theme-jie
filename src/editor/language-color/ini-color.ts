import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class IniTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "ini";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
		{
			"scope": [
				"comment.line.semicolon.ini",
				"comment.line.number-sign.ini"
			],
			"settings": theme.comments,
		},
		{
			"scope": [
				"entity.name.section.group-title.ini"
			],
			"settings": theme.annotation,
		},
		{
			"scope": [
				"keyword.other.definition.ini"
			],
			"settings": theme.variable,
		},
		{
			"scope": [
				"string.quoted.double.ini"
			],
			"settings": theme.string,
		},
    ];
  }
}