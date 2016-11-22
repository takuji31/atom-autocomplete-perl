class AutocompletPerlProvider {
  provider: AutocompletPerlProvider = null
  activate() {

  }
  deactivate() {
    this.provider = null
  }
  provide() {
    if (this.provider === null) {
      //TODO initialize
      this.provider = new AutocompletPerlProvider()
    }
    return this.provider
  }

  consumeSnippets(snippets)  {
    if (this.provider !== null) {
      // this.provider.setSnippetsSource(snippets)
    }
  }
}
export = AutocompletPerlProvider
