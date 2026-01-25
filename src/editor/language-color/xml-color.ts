import {
  EditColors,
  LanguageTokenColorBuilder,
  TokenColor,
} from "../../struct";

export class XmlTokenColorBuilder implements LanguageTokenColorBuilder {
  public language: string = "xml";
  public buildTokenColors(theme: EditColors): TokenColor[] {
    return [
      {
			"name": "Comments",
			"scope": [
				"comment.block.xml",
			],
			"settings": theme.comments,
		},
		{
			"name": "Tag",
			"scope": [
				"entity.name.tag.localname.xml",
				"punctuation.definition.tag.xml",
				"entity.name.tag.namespace.xml",
			],
			"settings": theme.variable,
		},
		{
			"name": "Variable",
			"scope": [
				"entity.other.attribute-name.localname.xml",
				"entity.other.attribute-name.namespace.xml",
				
			],
			"settings": theme.variable,
		},
    ];
  }
}