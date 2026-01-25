import * as xx from './editor/index';
import * as yy from './theme/index';
import { LanguageTokenColorBuilderFactory, ThemeColorFactory } from './struct';

// just for test
Object.values(xx).forEach(Builder => {
    if (typeof Builder === 'function') {
        const instance = new Builder();
        LanguageTokenColorBuilderFactory.register(instance);
    }
});

Object.values(yy).forEach(Builder => {
    if (typeof Builder === 'object' && Builder.name) {
        ThemeColorFactory.register(Builder);
    }
});