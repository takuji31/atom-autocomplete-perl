class Config {
  static config = {
    perlPath: {
      type: 'string',
      default: 'perl'
    },
    cartonPath: {
      type: 'string',
      default: 'carton'
    },
    useCarton: {
      type: 'boolean',
      description: 'Use carton when building completion suggestions. only effects when cpanfile and carton executable exists.',
      default: false,
    }
  }
  static get perlPath():String {
    return atom.config.get('autocomplete-perl.perlPath');
  }
  static get cartonPath():String {
    return atom.config.get('autocomplete-perl.cartonPath');
  }
  static get useCarton():boolean {
    return atom.config.get('autocomplete-perl.useCarton');
  }
}
export {
  Config
}
