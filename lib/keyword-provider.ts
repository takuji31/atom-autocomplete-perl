import {Provider, SuggestionInfo} from "./provider";
import {ISuggestion, TextSuggestion} from './suggestion';

class KeywordProvider extends Provider {
  public filterSuggestions = true
  getSuggestions(info: SuggestionInfo) : Promise<ISuggestion[]> {
    return new Promise((resolve) => {
      resolve([]);
    });
  }

}
export {
  KeywordProvider
}
