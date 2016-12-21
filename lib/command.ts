/// <reference path="../typings/bundle.d.ts" />
import {Config} from "./config";
import {exec} from "child_process";

class Command {
  private args : string[]
  constructor(private program: string, ...args:string[]) {
    this.args = args && args.length ? args : [];
  }
  execute() : string {
    if (Config.useCarton) {
      var textEditor = atom.workspace.getActiveTextEditor()
      textEditor.getPath();
    }
  }
}

export {
  Command
}
