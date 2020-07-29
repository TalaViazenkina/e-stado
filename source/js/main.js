import {polyfills} from './utils/polyfills';
import passFocus from './modules/pass-focus';
import toggleQuestion from './modules/toggle-question';
import telMask from './modules/tel-mask';
// Utils
// ---------------------------------

polyfills();

// Modules
// ---------------------------------

passFocus();
toggleQuestion();
telMask();
