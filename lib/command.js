"use strict";
/// <reference path="../typings/bundle.d.ts" />
const config_1 = require("./config");
class Command {
    constructor(program, ...args) {
        this.program = program;
        this.args = args && args.length ? args : [];
    }
    execute() {
        if (config_1.Config.useCarton) {
            var textEditor = atom.workspace.getActiveTextEditor();
            textEditor.getPath();
        }
    }
}
exports.Command = Command;
