"use strict";
class Config {
    static get perlPath() {
        return atom.config.get('autocomplete-perl.perlPath');
    }
    static get cartonPath() {
        return atom.config.get('autocomplete-perl.cartonPath');
    }
    static get useCarton() {
        return atom.config.get('autocomplete-perl.useCarton');
    }
}
exports.Config = Config;
Config.config = {
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
};
