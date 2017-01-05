/// <reference path="../typings/bundle.d.ts" />

import {Provider, SuggestionInfo} from "./provider";
import {ISuggestion} from "./suggestion";
import {Range, Point} from "atom";

function hasAnyScope(got : string[], expected : string[]) : boolean {
  return got.some((value, index, array) => {
    return expected.indexOf(value) !== -1;
  }, null)
}

class PackageCompletionProvider extends Provider {
  getSuggestions(info : SuggestionInfo) : Promise<ISuggestion> {
    return new Promise((resolve) => {
      let scopeDescriptor = info.editor.scopesForBufferPosition(info.bufferPosition);
      let inQuotedString = hasAnyScope(scopeDescriptor, ['', '']);
      var text: string = info.editor.getTextInRange(new Range(new Point(info.bufferPosition.row, 0), info.bufferPosition))
      var matched = text.match("^(use|require|use\+(base|parent)).+");
      if (matched === null) {
        resolve([])
        return;
      } else {
        if (matched[2] === null) {
          // use or require
        } else {
          // use base or use parent
        }
        resolve([])
      }
    });
  }
}
export {
  PackageCompletionProvider
}
