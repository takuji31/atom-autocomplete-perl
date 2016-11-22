"use strict";
var AutocompletPerlProvider = (function () {
    function AutocompletPerlProvider() {
        this.provider = null;
    }
    AutocompletPerlProvider.prototype.activate = function () {
    };
    AutocompletPerlProvider.prototype.deactivate = function () {
        this.provider = null;
    };
    AutocompletPerlProvider.prototype.provide = function () {
        if (this.provider === null) {
            //TODO initialize
            this.provider = new AutocompletPerlProvider();
        }
        return this.provider;
    };
    AutocompletPerlProvider.prototype.consumeSnippets = function (snippets) {
        if (this.provider !== null) {
        }
    };
    return AutocompletPerlProvider;
}());
module.exports = AutocompletPerlProvider;
