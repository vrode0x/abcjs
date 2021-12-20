require('./license');
var version = require('./version');
//var animation = require('./src/api/abc_animation');
var tuneBook = require('./src/api/abc_tunebook');
//var sequence = require('./src/synth/abc_midi_sequencer');
var midiCreate = require("./src/midi/abc_midi_create");//vr
var bookParser = require('./src/parse/abc_parse_book');//vr
var Parse = require('./src/parse/abc_parse');//vr

var abcjs = {};

abcjs.signature = "abcjs-basic v" + version;

//Object.keys(animation).forEach(function (key) {
//	abcjs[key] = animation[key];
//});

Object.keys(tuneBook).forEach(function (key) {
	abcjs[key] = tuneBook[key];
});

abcjs.renderAbc = require('./src/api/abc_tunebook_svg');
//abcjs.TimingCallbacks = require('./src/api/abc_timing_callbacks');
//
//var glyphs = require('./src/write/abc_glyphs');
//abcjs.setGlyph = glyphs.setSymbol;

//var CreateSynth = require('./src/synth/create-synth');
//var instrumentIndexToName = require('./src/synth/instrument-index-to-name');
//var pitchToNoteName = require('./src/synth/pitch-to-note-name');
//var SynthSequence = require('./src/synth/synth-sequence');
//var CreateSynthControl = require('./src/synth/create-synth-control');
//var registerAudioContext = require('./src/synth/register-audio-context');
//var activeAudioContext = require('./src/synth/active-audio-context');
//var supportsAudio = require('./src/synth/supports-audio');
//var playEvent = require('./src/synth/play-event');
//var SynthController = require('./src/synth/synth-controller');
//var getMidiFile = require('./src/synth/get-midi-file');
//
//abcjs.synth = {
//	CreateSynth: CreateSynth,
//	instrumentIndexToName: instrumentIndexToName,
//	pitchToNoteName: pitchToNoteName,
//	SynthController: SynthController,
//	SynthSequence: SynthSequence,
//	CreateSynthControl: CreateSynthControl,
//	registerAudioContext: registerAudioContext,
//	activeAudioContext: activeAudioContext,
//	supportsAudio: supportsAudio,
//	playEvent: playEvent,
//	getMidiFile: getMidiFile,
//	sequence: sequence,
//};

//abcjs['Editor'] = require('./src/edit/abc_editor');
//abcjs['EditArea'] = require('./src/edit/abc_editarea');

abcjs.midiCreate = midiCreate;//vr
abcjs.Parse = Parse;//vr
abcjs.bookParser = bookParser;//vr
abcjs.Transpose = require("./src/parse/abc_transpose");//vr
abcjs.spacing = require('./src/write/abc_spacing');//vr
abcjs.parseKeyVoice = require("./src/parse/abc_parse_key_voice");//vr
abcjs.vrVer = 6;//vr

module.exports = abcjs;

