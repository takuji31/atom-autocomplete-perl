"use strict";
const provider_1 = require("./provider");
const suggestion_1 = require("./suggestion");
class KeywordProvider extends provider_1.Provider {
    constructor() {
        super(...arguments);
        this.filterSuggestions = true;
    }
    getSuggestions(info) {
        console.log(arguments);
        return new Promise((resolve) => {
            resolve([
                new suggestion_1.TextSuggestion("use", 'keyword'),
                new suggestion_1.TextSuggestion("say", 'function'),
                new suggestion_1.TextSuggestion("print", 'function'),
            ]);
        });
    }
}
exports.KeywordProvider = KeywordProvider;
