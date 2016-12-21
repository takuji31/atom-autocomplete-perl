/// <reference path="../typings/bundle.d.ts" />

import {Config} from "./config";
import {Provider} from "./provider";
import {UseAndRequireCompletionProvider} from "./use-and-require-completion-provider";

class AutocompletPerlProvider {
  providers: Provider[] = null
  config =  Config.config
  activate() {

  }
  deactivate() {
    this.providers = null
  }
  provide() {
    console.log('debug')
    if (this.providers === null) {
      //TODO initialize
      this.providers = [new UseAndRequireCompletionProvider()];
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
