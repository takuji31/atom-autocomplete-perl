import {Provider, SuggestionInfo} from "./provider";
import {ISuggestion, TextSuggestion} from './suggestion';

class KeywordProvider extends Provider {
  public filterSuggestions = true
  getSuggestions(info: SuggestionInfo) : Promise<ISuggestion[]> {
    console.log(arguments)
    return new Promise((resolve) => {
      resolve([
        new TextSuggestion("use", 'keyword'),
        new TextSuggestion("say", 'function'),
        new TextSuggestion("print", 'function'),
      ]);
    });
  }

}
export {
  KeywordProvider
}
