/// <reference path="../typings/bundle.d.ts" />
import {ISuggestion} from './suggestion';

interface SuggestionInfo {
  editor: AtomCore.IEditor;
  bufferPosition: {row: number, column: number};
  scopeDescriptor: AtomCore.ScopeDescriptor;
  prefix: string;
  activatedManually: boolean;
}

abstract class Provider {
  selector : string = ".source.perl"
  abstract getSuggestions(info : SuggestionInfo) : Promise<ISuggestion[]>
}
export {
  Provider,
  SuggestionInfo
 }
