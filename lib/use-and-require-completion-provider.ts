/// <reference path="../typings/bundle.d.ts" />

import {Provider, SuggestionInfo} from "./provider";
import {ISuggestion} from "./suggestion";
import {Range, Point} from "atom";

class UseAndRequireCompletionProvider extends Provider {
  getSuggestions(info : SuggestionInfo) : Promise<ISuggestion> {
    return new Promise((resolve) => {
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
  UseAndRequireCompletionProvider
}
