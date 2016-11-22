/// <reference path="../typings/bundle.d.ts" />

import {KeywordProvider} from "./keyword-provider";
import {Provider} from "./provider";
import {UseAndRequireCompletionProvider} from "./use-and-require-completion-provider";

class AutocompletPerlProvider {
  providers: Provider[] = null
  activate() {

  }
  deactivate() {
    this.providers = null
  }
  provide() {
    console.log('debug')
    if (this.providers === null) {
      //TODO initialize
      this.providers = [new KeywordProvider()];
    }
    return this.providers
  }

  consumeSnippets(snippets)  {
    if (this.providers !== null) {
      // this.providers.setSnippetsSource(snippets)
    }
  }
}
export = new AutocompletPerlProvider()
