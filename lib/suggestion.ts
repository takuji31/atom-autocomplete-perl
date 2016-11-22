/// <reference path="../typings/bundle.d.ts" />

type SuggestionType = 'variable'|'constant'|'property'|'value'|'method'|'function'|'class'|'type'|'keyword'|'tag'|'snippet'|'import'|'require';

interface ISuggestion {
  displayText?: string
  replacementPrefix?: string
  type?: SuggestionType;
  leftLabel?: string
  leftLabelHTML?: string
  rightLabel?: string
  rightLabelHTML?: string
  className?: string
  iconHTML?: string
  description?: string
  descriptionMoreURL?: string
}

class TextSuggestion implements ISuggestion {
  constructor(public snippet: string, public type: SuggestionType) {
  }
}
class SnippetSuggestion implements ISuggestion {
  constructor(public text: string) {

  }
}

export {
  ISuggestion,
  TextSuggestion,
  SnippetSuggestion,
  SuggestionType
}
