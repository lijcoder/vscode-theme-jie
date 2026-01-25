import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class TypescriptTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "typescript";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
        {
			"scope": [
				"keyword.control.flow.ts"
			],
			"settings": theme.keywordControl,
		}
    ];
  }
}