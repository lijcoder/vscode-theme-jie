import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class GoTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "go";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
		{
			"scope": [
				"string.quoted.double.go",
				"string.quoted.raw.go",
			],
			"settings": theme.string,
		},
        {
			"scope": [
				"keyword.control.go",
			],
			"settings": theme.keywordControl,
		},
    ];
  }
}