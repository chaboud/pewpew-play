// stub for the pmndrs "postprocessing" package: N8AO's dist imports its
// Pass class only to define N8AOPostPass (the pmndrs-composer variant),
// which this viewer never instantiates. Resolving the specifier to this
// empty base class keeps the module graph local and CSP-clean.
export class Pass {}
