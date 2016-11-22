/// <reference path="../typings/bundle.d.ts" />
"use strict";
class TextSuggestion {
    constructor(snippet, type) {
        this.snippet = snippet;
        this.type = type;
    }
}
exports.TextSuggestion = TextSuggestion;
class SnippetSuggestion {
    constructor(text) {
        this.text = text;
    }
}
exports.SnippetSuggestion = SnippetSuggestion;
