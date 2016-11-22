"use strict";
const provider_1 = require("./provider");
class KeywordProvider extends provider_1.Provider {
    constructor() {
        super(...arguments);
        this.filterSuggestions = true;
    }
    getSuggestions(info) {
        return new Promise((resolve) => {
            resolve([]);
        });
    }
}
exports.KeywordProvider = KeywordProvider;
