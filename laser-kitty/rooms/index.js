// rooms/index.js — the look of each newer room, by sim room id. main.js
// asks the active room's module before its own recognizer chain (see
// rooms/README.md for the contract).
import * as reddot from './reddot.js?v=k64';
import * as museum from './museum.js?v=k64';
import * as studio from './studio.js?v=k64';

export const ROOM_ART = { 10: reddot, 11: museum, 12: studio };
