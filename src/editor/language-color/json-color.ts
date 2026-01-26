import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class JsonTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "json";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
		{
			"scope": [
				"support.type.property-name.json",
			],
			"settings": theme.variable,
		},
		{
			"scope": [
				"string.quoted.double.json",
				"constant.numeric.json",
				"constant.language.json",
			],
			"settings": theme.string,
		},
    ];
  }
}