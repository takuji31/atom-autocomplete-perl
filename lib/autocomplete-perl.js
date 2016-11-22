/// <reference path="../typings/bundle.d.ts" />
"use strict";
const keyword_provider_1 = require("./keyword-provider");
class AutocompletPerlProvider {
    constructor() {
        this.providers = null;
    }
    activate() {
    }
    deactivate() {
        this.providers = null;
    }
    provide() {
        console.log('debug');
        if (this.providers === null) {
            //TODO initialize
            this.providers = [new keyword_provider_1.KeywordProvider()];
        }
        return this.providers;
    }
    consumeSnippets(snippets) {
        if (this.providers !== null) {
        }
    }
}
module.exports = new AutocompletPerlProvider();
