var vrUrils = {};

vrUrils.encodeUTF8 = function (string) {
	string = string.replace(/\r\n/g,"\n");
	var utftext = "";

  try {
	  for (var n = 0; n < string.length; n++) {

		  var c = string.charCodeAt(n);

		  if (c < 128) {
			  utftext += String.fromCharCode(c);
		  }
		  else if((c > 127) && (c < 2048)) {
			  utftext += String.fromCharCode((c >> 6) | 192);
			  utftext += String.fromCharCode((c & 63) | 128);
		  }
		  else {
			  utftext += String.fromCharCode((c >> 12) | 224);
			  utftext += String.fromCharCode(((c >> 6) & 63) | 128);
			  utftext += String.fromCharCode((c & 63) | 128);
		  }
	  }
  }
  catch (e) {
    utftext = "";
  }
	return utftext;
};

vrUrils.decodeUTF8 = function (utftext) {
    var string = "";
    var i = 0;
    var c, c2, c3;

    try {
      while ( i < utftext.length ) {

          c = utftext.charCodeAt(i);

          if (c < 128) {
              string += String.fromCharCode(c);
              i++;
          }
          else if((c > 191) && (c < 224)) {
              c2 = utftext.charCodeAt(i+1);
              string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
              i += 2;
          }
          else {
              c2 = utftext.charCodeAt(i+1);
              c3 = utftext.charCodeAt(i+2);
              string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
              i += 3;
          }

      }
    }
    catch (e) {
      string = "";
    }
    return string;
};

module.exports = vrUrils;
