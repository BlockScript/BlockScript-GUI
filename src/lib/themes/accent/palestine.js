// TODO: Use flag colors
import * as yellowTheme from './yellow';

import icon from './palestine-flag.svg';
import watermelonStrip from './palestine-bg-strip.svg';

const guiColors = {
    ...yellowTheme.guiColors,
    /*
    'motion-primary': '#ff4c4c',
    'motion-primary-transparent': '#ff4c4ce6',
    'motion-tertiary': '#cc3333',

    'looks-secondary': '#ff4c4c',
    'looks-transparent': '#ff4d4d59',
    'looks-light-transparent': '#ff4d4d26',
    'looks-secondary-dark': 'hsla(0, 42%, 51%, 1)',

    'extensions-primary': 'hsla(10, 85%, 65%, 1)',
    'extensions-tertiary': 'hsla(10, 85%, 40%, 1)',
    'extensions-transparent': 'hsla(10, 85%, 65%, 0.35)',
    'extensions-light': 'hsla(10, 57%, 85%, 1)',
    */

    'menu-bar-background-image': `url('${watermelonStrip}')`,
    'menu-bar-background-repeat': 'repeat-x',
    'menu-bar-background-size': "contain",

    //'drop-highlight': '#ff8c8c',
};

/*
const blockColors = {
    checkboxActiveBackground: '#ff4c4c',
    checkboxActiveBorder: '#cc3333'
};
*/

export {
    guiColors,
    //blockColors,
    icon
};
