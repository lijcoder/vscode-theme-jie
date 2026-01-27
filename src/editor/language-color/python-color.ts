import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class PythonTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "python";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
        {
			"scope": [
				"keyword.control.flow.python"
			],
			"settings": theme.keywordControl,
		},
		{
			"scope": [
				"entity.name.function.decorator.python",
				"meta.function.decorator.python"
			],
			"settings": theme.annotation,
		},
		{
			"scope": [
				"string.quoted.single.python",
			],
			"settings": theme.string,
		},
    ];
  }
}