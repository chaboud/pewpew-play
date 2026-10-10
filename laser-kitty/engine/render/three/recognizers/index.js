// recognizers/index.js — the registry. A recognizer is a small module:
// { name, order, match(row) -> bool, build(row, kit) -> { parts, glows?,
// light?, anim?, grow? } }. `order` is the line of the branch it was moved
// from in main.js meshFor, so the registry checks them in the old chain's
// order and a body the old viewer decorated one way is not claimed by a
// later, broader signature. Porting a branch = one module + one line here.
import spark from './spark.js?v=k62';
import paint from './paint.js?v=k62';
import { tv, flatscreen } from './tv.js?v=k62';
import chandelier from './chandelier.js?v=k62';
import { fridgeDoor, cabinetDoor } from './doors.js?v=k62';
import { steelPot, mug, plate } from './kitchenware.js?v=k62';
import cardboard from './cardboard.js?v=k62';
import { floorLampShade, tableLamp } from './lamps.js?v=k62';
import neon from './neon.js?v=k62';
import windowR from './window.js?v=k62';
import fixture from './fixtures.js?v=k62';
import bottle from './bottle.js?v=k62';

const RECOGNIZERS = [];
export function register(r) {
  RECOGNIZERS.push(r);
  RECOGNIZERS.sort((x, y) => x.order - y.order);
}
for (const r of [spark, paint, tv, flatscreen, chandelier, fridgeDoor, cabinetDoor, steelPot, mug, plate, cardboard, floorLampShade, tableLamp, neon, windowR, fixture, bottle]) register(r);

/** the first recognizer (in main.js chain order) that claims this row */
export function recognize(row) {
  for (const r of RECOGNIZERS) if (r.match(row)) return r;
  return null;
}
export const recognizers = () => RECOGNIZERS.map((r) => r.name);
