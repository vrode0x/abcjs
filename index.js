var animation = require('./src/api/abc_animation');
var tuneBook = require('./src/api/abc_tunebook');
var midiCreate = require("./src/midi/abc_midi_create");//vr
var Parse = require('./src/parse/abc_parse');//vr

var abcjs = {};

abcjs.signature = "abcjs-basic v5.6.2";

Object.keys(animation).forEach(function (key) {
	abcjs[key] = animation[key];
});

Object.keys(tuneBook).forEach(function (key) {
	abcjs[key] = tuneBook[key];
});

abcjs.renderAbc = require('./src/api/abc_tunebook_svg');
abcjs.TimingCallbacks = require('./src/api/abc_timing_callbacks');

var editor = require('./src/edit/abc_editor');
abcjs['Editor'] = editor;

abcjs['midiCreate'] = midiCreate;//vr
abcjs['Parse'] = Parse;//vr
abcjs['Transpose'] = require("./src/parse/abc_transpose");//vr
abcjs['spacing'] = require('./src/write/abc_spacing');//vr
abcjs['parseKeyVoice'] = require("./src/parse/abc_parse_key_voice");//vr

module.exports = abcjs;
