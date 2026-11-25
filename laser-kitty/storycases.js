// storycases.js — the docket, as data. Story mode (story.js) is a civil
// trial: one case per location, the flashback is the level, and the three
// stars are dollars of damage established on the record
// (wiki/game/story.md). Everything a case IS lives in this table — who is
// claiming, where, how many cats, what three stars cost, what is said on the
// stand and what the judge says after — so a new case, or a rewrite of an
// old one, is an edit here and nowhere else.
//
// Tone rules for the copy (wiki/game/story.md): Kitty is the named
// defendant and is never in trouble — nobody scolds, scares or blames a
// cat, and no cat is ever anything but at ease. Nobody is cruel. The
// comedy is procedure, applied with a straight face to a cat chasing a
// dot. Testimony teaches the room without being a tutorial — each witness
// says, in passing, the one thing a first-time player needs to know about
// the place.
//
// LENGTH (founder, 2026-11-25: "The court readings are too long. Too many
// taps."). A hearing is THREE lines and no more: counsel's question, the
// witness's answer, the bench. story.js shows the question and answer as
// one beat and the bench as a second, so a hearing is two taps. Keep the
// answer under about 130 characters: it has to fit a phone's dialogue box
// under the question without scrolling.

// THE PROCEEDING. The game ships as "Laser v. Kitty" (founder,
// 2026-11-11): the title is a case caption, so the trial is the title.
// Every location's claim is heard under it as one consolidated matter,
// each with its own number and claimant. Kitty is the defendant and could
// not care less. Who "Laser" is — the side the claimants are on, the
// player, the pointer itself — is the founder's open question, so nothing
// in this file answers it: the people on the stand are "claimants", their
// lawyer is "counsel for the claimant", and nobody addresses Laser.
export const PROCEEDING = {
  title: 'Laser v. Kitty',
  parties: ['Laser', 'Kitty'], // the title, set as a caption: Laser <i>v.</i> Kitty
  kind: 'Consolidated claims',
};

export const COURT = {
  name: 'Superior Court',
  division: 'Civil Division',
  dept: 'Department 9', // lives
};

// who can speak in testimony: [who, line]. The witness's label is the
// case's own; the rest are fixed.
export const SPEAKERS = {
  counsel: 'COUNSEL FOR THE CLAIMANT',
  defense: 'COUNSEL FOR THE DEFENSE',
  court: 'THE COURT',
  reporter: 'THE REPORTER',
};

// said from the bench when a run establishes no stars (rotates by attempt)
export const NO_STARS = [
  'The record does not support the claim. The claimant may refile. The Court suggests more of an evening.',
  'Insufficient damages established. The Court cannot award what did not break.',
  'Dismissed without prejudice. The witness is invited to remember harder.',
];

// said when a location turns out to hold nothing of value (an unfurnished
// room): the case is taken as heard so the docket can never dead-end
export const EMPTY_ROOM = 'The premises were empty. The Court finds that suspicious, and moves on.';

// STARS. Three dollar thresholds per case. `stars: [a, b, c]` is absolute
// dollars, set from headless bot runs (wiki/game/story.md has the
// measurements) and PROVISIONAL until the founder plays them.
// `starsOf: [a, b, c]` is a share of the room's appraised inventory,
// struck when the room is built — for rooms that were not furnished when
// this table was written, so nothing could be measured.
//
// exhibit: each location is itself an exhibit in the proceeding — Exhibit
// A for the first claim, onward — and the things damaged in it are
// numbered under that letter (A-1, A-2 ...). A presentation layer may
// show the room as a scale model on the evidence table under the same
// tag. In testimony and rulings, {X} stands for the case's own letter, so
// reordering the docket never leaves a line pointing at the wrong exhibit.
//
// witness: how the claimant is drawn on the stand (storycourt.js).
// claimant: read as "Claim of <claimant>" (a leading "The" is lowered).
export const CASES = [
  {
    id: 'living', room: 0, cats: 1, no: '26-CV-0142', exhibit: 'A',
    claimant: 'Halvorsen', witnessName: 'MS. HALVORSEN',
    place: 'The living room', address: '12 Alder Court',
    claim: 'One television, assorted shelving, and a lamp she liked.',
    when: 'Tuesday, March 14', time: '9:47 p.m.',
    stars: [2000, 3700, 4900],
    witness: { skin: '#e9b98f', hair: '#7a4a2a', style: 'bob', top: '#5b8f8a', acc: 'glasses' },
    testimony: [
      ['counsel', 'Ms. Halvorsen. On the evening of March 14th, where was the red dot?'],
      ['witness', 'On the bookcase. Then the television. The cat doesn’t go around things. He goes through them.'],
      ['court', 'Let the record show the defendant is asleep on Exhibit {X}. Proceed.'],
    ],
    ruling: [
      'Damages established. The Court notes the lamp was, by all accounts, liked.',
      'The Court finds the damages substantial and the cat unavailable for comment.',
      'The Court has reviewed the living room. There is no longer a living room. So ordered.',
    ],
  },
  {
    id: 'bath', room: 2, cats: 2, no: '26-CV-0187', exhibit: 'B',
    claimant: 'Pemberton Property Management', witnessName: 'MR. PEMBERTON',
    place: 'The bathroom', address: 'Unit 2B, 31 Quill Street',
    claim: 'Water damage. All of it.',
    when: 'Friday, April 3', time: '7:20 a.m.',
    stars: [2300, 6000, 7100],
    witness: { skin: '#f0c7a4', hair: '#b9b4c4', style: 'bald', top: '#6f6a86', acc: 'tie' },
    testimony: [
      ['counsel', 'Mr. Pemberton. Describe the bathroom as you last inspected it.'],
      ['witness', 'Dry. By the 3rd the sink had left the wall. I didn’t know a sink could be talked into that.'],
      ['court', 'The plumber’s invoice is admitted. The Court has seen worse invoices. Not many.'],
    ],
    ruling: [
      'Damages established. The security deposit is noted, and is not nearly enough.',
      'The Court finds for the claimant and recommends a wet-floor sign.',
      'The Court is advised the bathroom is now, legally, a water feature. So ordered.',
    ],
  },
  {
    id: 'kitchen', room: 3, cats: 2, no: '26-CV-0203', exhibit: 'C',
    claimant: 'Abernathy', witnessName: 'MS. ABERNATHY',
    place: 'The kitchen', address: '8 Marrow Lane',
    claim: 'Eight quarts of stock and the good plates.',
    when: 'Sunday, April 19', time: '6:15 p.m.',
    stars: [1200, 2500, 3800],
    witness: { skin: '#c98f66', hair: '#2b2230', style: 'bun', top: '#efe6d2', acc: 'apron' },
    testimony: [
      ['counsel', 'Ms. Abernathy. What was on the stove at a quarter past six?'],
      ['witness', 'Stock. Eight quarts. The counter is three feet high. I had always taken that to be the point of a counter.'],
      ['court', 'And the plates were on the high shelf, “where they’d be safe.” The Court is leaving that in.'],
    ],
    ruling: [
      'Damages established. The Court extends its sympathies regarding the stock.',
      'Substantial damages. The Court observes that the high shelf was not, in the event, high.',
      'The Court finds the kitchen a total loss and the refrigerator, somehow, open. So ordered.',
    ],
  },
  {
    id: 'great', room: 1, cats: 3, no: '26-CV-0266', exhibit: 'D',
    claimant: 'Ashby', witnessName: 'MR. ASHBY',
    place: 'The great room', address: 'Ashby House, Larkspur Road',
    claim: 'A clock that survived two wars.',
    when: 'Friday, May 22', time: '8:05 p.m.',
    stars: [3700, 9000, 15000],
    witness: { skin: '#f1d0b5', hair: '#d8d4e0', style: 'side', top: '#7a3f4a', acc: 'bowtie' },
    testimony: [
      ['counsel', 'Mr. Ashby. How long has the grandfather clock been in your family?'],
      ['witness', 'A hundred and forty years. Two wars and a move to Cleveland. Then one good shove near the top.'],
      ['court', 'Counsel, there is a cat on my bench. No — leave it. Proceed.'],
    ],
    ruling: [
      'Damages established. The clock is entered under Exhibit {X}. It is no longer running.',
      'The Court finds the damages considerable, and the piano out of tune at best.',
      'A hundred and forty years. Three minutes. The Court needs a moment. So ordered.',
    ],
  },
  {
    id: 'cafe', room: 9, cats: 2, no: '26-CV-0311', exhibit: 'E',
    claimant: 'Café Lune, LLC', witnessName: 'MS. MARCHETTI',
    place: 'The café', address: 'Café Lune, 5 Passage Street',
    claim: 'An espresso machine with a name.',
    when: 'Saturday, June 6', time: '3:40 p.m.',
    stars: [5500, 11000, 15000],
    witness: { skin: '#e2ab80', hair: '#3a2a25', style: 'curly', top: '#2f6f5e', acc: 'scarf' },
    testimony: [
      ['counsel', 'Ms. Marchetti, what does a two-group espresso machine cost?'],
      ['witness', 'Seven thousand four hundred dollars. She has a name. And every table in the place stands on one leg.'],
      ['court', 'The customers have filed separately. One catastrophe at a time.'],
    ],
    ruling: [
      'Damages established. The tip jar is included, over the defense’s objection.',
      'Substantial damages. The Court takes notice that every cup was full.',
      'The Court finds the café closed until further notice, and the cats well rested. So ordered.',
    ],
  },
  {
    id: 'garage', room: 5, cats: 3, no: '26-CV-0358', exhibit: 'F',
    claimant: 'Kowalczyk', witnessName: 'MR. KOWALCZYK',
    place: 'The garage', address: '77 Ferndale Avenue',
    claim: 'A 1967 coupe, mid-restoration since 2009.',
    when: 'Sunday, June 28', time: '2:10 p.m.',
    stars: [2500, 5500, 8000],
    witness: { skin: '#e6b48c', hair: '#8a8798', style: 'cap', top: '#4a6a8f', acc: 'mustache' },
    testimony: [
      ['counsel', 'Mr. Kowalczyk. The 1967 coupe has been mid-restoration since when?'],
      ['witness', '2009. I don’t see how that’s relevant. The boxes were six high. You bat the bottom one, you get all six.'],
      ['court', 'The Court will not be valuing the coupe “as finished.” Proceed.'],
    ],
    ruling: [
      'Damages established. The Court declines, again, to count sorting the screws as labor.',
      'Substantial damages. Both bicycles, the Court notes, were on their kickstands.',
      'The Court finds the garage finally cleared out, though not as Mrs. Kowalczyk asked. So ordered.',
    ],
  },
  {
    id: 'bar', room: 8, cats: 3, no: '26-CV-0402', exhibit: 'G',
    claimant: 'Lou’s Tap Room, Inc.', witnessName: 'MS. TRAN',
    place: 'The bar', address: 'Lou’s Tap Room, Route 9',
    claim: 'A hundred and forty-eight bottles, counted.',
    when: 'Thursday, July 16', time: '1:55 a.m.',
    stars: [5300, 9200, 10000],
    witness: { skin: '#d9a273', hair: '#1f1a24', style: 'pony', top: '#8f3b3b', acc: null },
    testimony: [
      ['counsel', 'Ms. Tran, how many bottles were on the back bar at closing?'],
      ['witness', 'A hundred and forty-eight. I do inventory. They went up it like stairs. Stool, bar top, shelf, shelf.'],
      ['court', 'The neon in the window says LIVE CATS. The Court has read the sign. Proceed.'],
    ],
    ruling: [
      'Damages established. The Court will not hear argument about the jukebox selections.',
      'Substantial damages. The top shelf, the Court notes, was reached.',
      'The Court finds the bar dry for the first time since 1987. So ordered.',
    ],
  },
  {
    id: 'studio', room: 12, cats: 2, no: '26-CV-0455', exhibit: 'H',
    claimant: 'Inner Stillness Yoga Collective', witnessName: 'MS. LINDQVIST',
    place: 'The yoga studio', address: 'Inner Stillness, 2nd floor, 40 Juniper Row',
    claim: 'Loss of stillness.',
    when: 'Sunday, August 9', time: '7:00 p.m.',
    stars: [6800, 14000, 17000],
    witness: { skin: '#f0c9a8', hair: '#c9a15a', style: 'long', top: '#b48fc9', acc: 'headband' },
    testimony: [
      ['counsel', 'Ms. Lindqvist. Was there stillness on the evening of the 9th?'],
      ['witness', 'For forty seconds. Then somebody rang the gong, and it wasn’t one of us. Everything in that room is balanced or hanging.'],
      ['court', 'The witness will stop breathing at the Court like that.'],
    ],
    ruling: [
      'Damages established. The Court acknowledges the witness’s journey.',
      'Substantial damages. The Court is told the cats found it very centering.',
      'The Court finds nothing left to balance. The witness may let that go. So ordered.',
    ],
  },
  {
    id: 'home', room: 6, cats: 3, no: '26-CV-0519', exhibit: 'I',
    claimant: 'Reyes', witnessName: 'MR. REYES',
    place: 'The family home', address: '204 Sycamore Drive',
    claim: 'Both floors.',
    when: 'Saturday, September 5', time: '8:30 p.m.',
    stars: [1500, 2900, 4600],
    witness: { skin: '#b9825a', hair: '#231c1c', style: 'short', top: '#c9742a', acc: 'stubble' },
    testimony: [
      ['counsel', 'Mr. Reyes, how many floors does the house have?'],
      ['witness', 'Two. The dot went up the stairs, so they went up the stairs. Then they brought the upstairs down with them.'],
      ['court', 'The Court is told the children were cheering. That will not appear in the order.'],
    ],
    ruling: [
      'Damages established. The Court suggests the hatchback be parked outside.',
      'Substantial damages, on both floors, which the Court did not expect to have to specify.',
      'The Court finds the house is now one story. So ordered.',
    ],
  },
  {
    id: 'mansion', room: 4, cats: 4, no: '26-CV-0577', exhibit: 'J',
    claimant: 'The Harcourt Family Trust', witnessName: 'MR. PYM',
    place: 'The mansion', address: 'Harcourt Hall, the entry',
    claim: 'Everything that was on top of something else.',
    when: 'Saturday, October 3', time: '11:15 p.m.',
    stars: [8600, 19000, 25000],
    witness: { skin: '#f3d6be', hair: '#56505f', style: 'side', top: '#22202b', acc: 'wingcollar' },
    testimony: [
      ['counsel', 'Mr. Pym. Exhibit {X} is the entry hall. What stood in it?'],
      ['witness', 'Vases, on pillars. Busts, on pedestals. Armor, at attention. All of it is on the floor now, sir, without distinction.'],
      ['court', 'The Court will not ask how a cat reaches a chandelier. It notes only that it is on the list.'],
    ],
    ruling: [
      'Damages established. The Trust is reminded that “attributed” is not a valuation.',
      'Substantial damages. The armor, the Court finds, offered no resistance.',
      'The Court has never seen a record this complete. It would like never to see another. So ordered.',
    ],
  },
  {
    id: 'reddot', room: 10, cats: 5, no: '26-CV-0623', exhibit: 'K',
    title: 'Red Dot Rampage',
    claimant: 'Design Within Scratch, Inc.', witnessName: 'MR. VANTERPOOL',
    place: 'The furniture showroom', address: 'Design Within Scratch, the showroom floor',
    claim: 'The lamps were arranged.',
    when: 'Tuesday, October 27', time: '6:02 p.m.',
    stars: [57000, 100000, 160000],
    witness: { skin: '#e8c3a0', hair: '#1c1a22', style: 'short', top: '#17151d', acc: 'roundglasses' },
    testimony: [
      ['counsel', 'Mr. Vanterpool. What does Design Within Scratch sell?'],
      ['witness', 'We don’t sell. We place. The lamps, Your Honor, were arranged. Nothing in that room was merely standing.'],
      ['court', 'The Court is told the name was chosen before the incident. The cats were not told.'],
    ],
    ruling: [
      'Damages established. The Court declines to rule on whether the vase was “in dialogue” with the floor.',
      'Substantial damages. The Court is advised the pieces were hard to stand up before the incident, also.',
      'The Court finds the showroom fully deconstructed, and is told that this, too, was a movement. So ordered.',
    ],
  },
  {
    id: 'tower', room: 7, cats: 6, no: '26-CV-0688', exhibit: 'L',
    claimant: 'The Tenants of 400 Wexler Street', witnessName: 'MRS. FONTAINE',
    classAction: true,
    place: 'The apartment tower', address: '400 Wexler Street, all nine floors',
    claim: 'Thirty-six households, one noise.',
    when: 'Wednesday, November 18', time: '10:40 p.m.',
    stars: [950, 2400, 3800],
    witness: { skin: '#8a5a3c', hair: '#e6e2f0', style: 'bun', top: '#3f6fb0', acc: 'pearls' },
    testimony: [
      ['counsel', 'Mrs. Fontaine. Thirty-six households. How was the class certified?'],
      ['witness', 'We all heard the same noise. It started on nine and worked down. A cat on every floor, and one dot between them.'],
      ['court', 'The bailiff will count the cats again. The Court had six a minute ago.'],
    ],
    ruling: [
      'Damages established, per household. The clerk is still adding.',
      'Substantial damages across the class. The Court notes that nobody, on any floor, called it in.',
      'The Court finds for all thirty-six households, and for the building across the street, which had the view. So ordered.',
    ],
  },
  {
    id: 'museum', room: 11, cats: 4, no: '26-CV-0701', exhibit: 'M',
    claimant: 'The Museum of Fine & Fragile Arts', witnessName: 'DR. ACHTERBERG',
    place: 'The museum', address: 'The Museum, all six rooms',
    claim: 'Priceless, itemized.',
    when: 'Monday, December 7', time: '9:00 p.m.',
    stars: [650000, 7800000, 16000000],
    witness: { skin: '#edc4a2', hair: '#a8a3b5', style: 'bob', top: '#3a3350', acc: 'chain' },
    testimony: [
      ['counsel', 'Dr. Achterberg, how do you value the collection?'],
      ['witness', 'We don’t. It is priceless. …I brought a list. Six rooms, all of it on a plinth or a hook, which I now see was an invitation.'],
      ['court', 'This Court has heard twelve of these. It will hear the thirteenth standing up. Proceed.'],
    ],
    ruling: [
      'Damages established. “Priceless” has been struck and a number written in.',
      'Substantial damages. The Court notes the velvet rope was observed by everyone but the cats.',
      'Judgment is entered in an amount the Court will not read aloud. The cats are free to go. They were always free to go.',
    ],
  },
];
