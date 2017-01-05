/// <reference path="../typings/bundle.d.ts" />
"use strict";
const config_1 = require("./config");
const package_completion_provider_1 = require("./package-completion-provider");
class AutocompletPerlProvider {
    constructor() {
        this.providers = null;
        this.config = config_1.Config.config;
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
            this.providers = [new package_completion_provider_1.PackageCompletionProvider()];
        }
        return this.providers;
    }
    consumeSnippets(snippets) {
        if (this.providers !== null) {
        }
    }
}
module.exports = new AutocompletPerlProvider();
