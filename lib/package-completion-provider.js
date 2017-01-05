/// <reference path="../typings/bundle.d.ts" />
"use strict";
const provider_1 = require("./provider");
const atom_1 = require("atom");
function hasAnyScope(got, expected) {
    return got.some((value, index, array) => {
        return expected.indexOf(value) !== -1;
    }, null);
}
class PackageCompletionProvider extends provider_1.Provider {
    getSuggestions(info) {
        return new Promise((resolve) => {
            let scopeDescriptor = info.editor.scopesForBufferPosition(info.bufferPosition);
            let inQuotedString = hasAnyScope(scopeDescriptor, ['', '']);
            var text = info.editor.getTextInRange(new atom_1.Range(new atom_1.Point(info.bufferPosition.row, 0), info.bufferPosition));
            var matched = text.match("^(use|require|use\+(base|parent)).+");
            if (matched === null) {
                resolve([]);
                return;
            }
            else {
                if (matched[2] === null) {
                }
                else {
                }
                resolve([]);
            }
        });
    }
}
exports.PackageCompletionProvider = PackageCompletionProvider;
