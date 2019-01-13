(function(){
var voterRegistration = new Object();

// canvas
voterRegistration.canvas = document.getElementById('output-canvas');
voterRegistration.signarea = document.getElementById('sign-area');

// chinese telecode
voterRegistration.telecode = window.telecode;

// form data
voterRegistration.data = {
	"optin": false,
	"idcard": "",
	"gender": "",
	"name-zh": "",
	"telecode": "",
	"name-en-surname": "",
	"name-en-othername": "",
	"address-flat": "",
	"address-floor": "",
	"address-block": "",
	"address-line0": "",
	"address-line1": "",
	"address-line2": "",
	"address-line3": "",
	"extra-landline": "",
	"extra-mobile": "",
	"extra-office": "",
	"extra-email": "",
	"extra-dc": "✔ ",
	"extra-lang": "✔ ",
	"date": (new Date().toJSON().slice(0,10).split("-").join("")),
	"step": 0,
};

// text position on canvas
voterRegistration.textPosition = [
	{"key":"idcard", // data key
		"position": [
			[382,340],[409,340],
			[512,340],[546,340],[578,340],[609,340],[642,340],[674,340],[786,340]
		], // position for each char
		"size": 36,
	},
	{"key":"gender",
		"position": [[1004,340],[1084,340]],
		"size": 36,
	},
	{"key":"name-zh",
		"position": [[449,418],[569,418],[689,418],[809,418],[929,418],[1049,418]],
		"size": 36,
	},
	{"key":"telecode",
		"position": [
			[410,454],[440,454],[470,454],[500,454],
			[534,454],[564,454],[594,454],[624,454],
			[656,454],[686,454],[716,454],[746,454],
			[778,454],[808,454],[838,454],[868,454],
			[900,454],[930,454],[960,454],[990,454],
			[1022,454],[1052,454],[1082,454],[1112,454],
		],
		"size": 28,
	},
	{"key":"name-en-surname",
		"position": [
			[306,496],[336,496],[365,496],[395,496],
			[424,496],[454,496],[484,496],[514,496],
			[543,496],[573,496],[603,496],[633,496],
			[663,496],[693,496],[723,496],[753,496],
			[782,496],[812,496],[842,496],[872,496],
			[902,496],[932,496],[962,496],[992,496],
			[1022,496],[1052,496],[1082,496],[1112,496],
		],
		"size": 28,
	},
	{"key":"name-en-othername",
		"position": [
			[306,538],[336,538],[365,538],[395,538],
			[424,538],[454,538],[484,538],[514,538],
			[543,538],[573,538],[603,538],[633,538],
			[663,538],[693,538],[723,538],[753,538],
			[782,538],[812,538],[842,538],[872,538],
			[902,538],[932,538],[962,538],[992,538],
			[1022,538],[1052,538],[1082,538],[1112,538],
		],
		"size": 28,
	},
	{"key":"address-flat",
		"position": [[166,628],[200,628],[236,628],[266,628],[306,628]],
		"size": 28,
	},
	{"key":"address-floor",
		"position": [[470,628],[505,628],[535,628]],
		"size": 28,
	},
	{"key":"address-block",
		"position": [[1005,628],[1040,628],[1075,628]],
		"size": 28,
	},
	{"key":"address-line0", "position": [[395,670]], "size": 28, "align": "left"},
	{"key":"address-line1", "position": [[395,710]], "size": 28, "align": "left"},
	{"key":"address-line2", "position": [[395,750]], "size": 28, "align": "left"},
	{"key":"address-line3", "position": [[395,790]], "size": 28, "align": "left"},
	{"key":"extra-landline", "position": [[475,827]], "size": 28 },
	{"key":"extra-mobile", "position": [[995,827]] ,"size": 28 },
	{"key":"extra-office", "position": [[475,870]], "size": 28 },
	{"key":"extra-email", "position": [[370,900]], "size": 22, "align": "left"},
	{"key":"extra-dc",
		"position": [[72,1105],[72,1182]],
		"size": 22,
	},
	{"key":"extra-lang",
		"position": [[717,1372],[940,1372]],
		"size": 22,
	},
	{"key":"date",
		"position": [
			[425,1615],[458,1615],[490,1615],[515,1615],
			[305,1615],[335,1615],
			[185,1615],[215,1615],
		],
		"size": 22,
	},
];

// calculate checkdigit for id card
voterRegistration.calculateCheckdigit = function(letters, digits){
	var checkdigit = 0;
	var weightedSum = 0;
	var charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	// Add letters' value to the sum
	if (letters.length == 2) {
		weightedSum += ((10 + charList.indexOf(letters.charAt(0)))*9 );
		weightedSum += ((10 + charList.indexOf(letters.charAt(1)))*8 );
	} else {
		weightedSum += ( 36*9 );
		weightedSum += ((10 + charList.indexOf(letters.charAt(0)))*8 );
	}
	// Add digits' value to the sum
	for (var i = 0, j = 7; i < digits.length; i++, j--) {
		weightedSum += j * digits.charAt(i);
	}
	// Calculate numeric checkdigit
	checkdigit = 11-(weightedSum%11);
	// Return checkdigit srting
	switch(checkdigit) {
	    case 11:
	        return '0';
	    case 10:
	        return 'A';
	    default:
	        return checkdigit.toString();
	}
}

// check id card number format, call calculate checkdegit and show it.
voterRegistration.setIdCheckdigit = function(){
	// Calculate ID card checksum
	var letterRegExp = new RegExp("^[A-z]{1,2}$");
	var letters = $("#idcard-letters").val().match(letterRegExp)[0].toUpperCase();

	var digitsRegExp = new RegExp("^[0-9]{6}$");
	var digits = $("#idcard-digits").val().match(digitsRegExp)[0];

	var checkdigit = voterRegistration.calculateCheckdigit(letters, digits);
	console.log(checkdigit);

	// UI draw checksum
	$("#idcard-checksum").text("("+checkdigit+")");
	// save data to voterRegistration object
	if (letters.length==1) {
		letters = " "+letters;
	}
	voterRegistration.data["idcard"] = letters+digits+checkdigit;
}

// set chinese telecode as user type their chinese name
voterRegistration.setNameZhAndTelecode = function(){
	var name = $("#name-zh").val();
	var fullcode="";
	for (var i = 0; i <= 5; i++) {
		if (i<name.length) {
			if (typeof voterRegistration.telecode[name.charAt(i)] != 'undefined') {
				$("#name-telecode-"+i).show().val(voterRegistration.telecode[name.charAt(i)]);
				fullcode += voterRegistration.telecode[name.charAt(i)];
			} else {
				$("#name-telecode-"+i).show().val("????");
				fullcode += "    ";
			}
		}else{
			$("#name-telecode-"+i).hide().val('');
		}
	}
	voterRegistration.data["telecode"] = fullcode;
	voterRegistration.data["name-zh"] = name;
}

voterRegistration.setTelecodeOnly = function(){
	var fullcode = "";
	for (var i = 0; i <= 5; i++) {
		if ($("#name-telecode-"+i).val().match(/\d{4}/)) {
			fullcode += $("#name-telecode-"+i).val();
		} else {
			fullcode += "    ";
		}
	}
	voterRegistration.data["telecode"] = fullcode;
}

// FIXME: quick and dirty radio button to string
voterRegistration.setRadio = function(){
	if (this.id == "optin-agree") {
		voterRegistration.data.optin = true;
		return false;
	}
	if (this.id == "optin-decline") {
		voterRegistration.data.optin = false;
		return false;
	}
	if ($.inArray(this.id, ["gender-male", "dc-yes-new", "dc-yes-exist", "extra-lang-zh"]) >= 0) {
		voterRegistration.data[this.name] = "✔ ";
	} else {
		voterRegistration.data[this.name] = " ✔";
	}
	if ($.inArray(this.id, ["dc-fc"]) >= 0) {
		voterRegistration.data[this.name] = "  ";
	}
}

// FIXME: quick and dirty next step button
voterRegistration.nextStep = function(){
	voterRegistration.data.step++;
	voterRegistration.setStep(voterRegistration.data.step);
	return false;
}
voterRegistration.setStep = function(step){
	var target = $(".step-container");
	target.removeClass("step-current-"+(step-1)).addClass("step-current-"+step);

	var navtarget = $(".step-nav-container");
	navtarget.removeClass("step-current-"+(step-1)).addClass("step-current-"+step);

	$(".step-nav-1 .nav-content").text(voterRegistration.data["name-zh"]+", "+voterRegistration.data["telecode"]);
	$(".step-nav-2 .nav-content").text(voterRegistration.data["name-en-surname"]+", "+voterRegistration.data["name-en-othername"]);
	$(".step-nav-3 .nav-content").text(voterRegistration.data["idcard"]+", "+	$(".gender-btn.active .btn-text").text());
	$(".step-nav-4 .nav-content").text(
		voterRegistration.data["address-flat"]+" "+
		voterRegistration.data["address-floor"]+" "+
		voterRegistration.data["address-block"]+" "+
		voterRegistration.data["address-line0"]+" "+
		voterRegistration.data["address-line1"]+" "+
		voterRegistration.data["address-line2"]+" "+
		voterRegistration.data["address-line3"]
  );
	$(".step-nav-5 .nav-content").text(
		voterRegistration.data["extra-landline"]+" "+
		voterRegistration.data["extra-mobile"]+" "+
		voterRegistration.data["extra-office"]+" "+
		voterRegistration.data["extra-email"]+" "+
		$(".lang-btn.active .btn-text").text()+" "+
		$(".extra-dc-btn.active .btn-text").text()
	);

	$('html, body').animate({
		scrollTop: 0
	}, 500);

	return false;
}

// FIXME: quick and dirty generate button
voterRegistration.generate = function(){
	if (voterRegistration.data.optin) {
		$("<img src='https://www.google-analytics.com/collect?v=1&t=event&tid=UA-72771086-1&cid=force-anonymous-client-id&ec=Form&ea=Generate&ni=1'>").appendTo("body");
	}
	var canvas = voterRegistration.canvas;
	var context = voterRegistration.canvas.getContext('2d');
	canvas.height = 3368;
	canvas.width = 1190;

	context.drawImage(document.getElementById("source-img"), 0, 0);

	voterRegistration.insertTexts(context);
	voterRegistration.initSign();
	voterRegistration.resetSign();
}

// signature area initialisation and set event handle
voterRegistration.initSign = function(){
	var canvas = voterRegistration.signarea;
	var context = voterRegistration.signarea.getContext('2d');
	canvas.height = 150;
	canvas.width = 320;

	context.drawsignature = function(x, y) {
		var path=new Path2D();

		context.strokeStyle = 'black';
		context.lineWidth = 2;
		context.lineJoin = 'round';
		context.lineCap = 'round';

		path.moveTo(context.prevX,context.prevY);
		path.lineTo(x,y);
		path.closePath();

		context.stroke(path);

		context.prevX = x;
		context.prevY = y;
	};
	canvas.onmousemove = function(e) {
		if (!canvas.isDrawing) {
			return;
		}
		var x = e.pageX - $(canvas).offset().left;
		var y = e.pageY - $(canvas).offset().top;
		context.drawsignature(x, y);
	};
	canvas.onmousedown = function(e) {
		canvas.isDrawing = true;
		var x = e.pageX - $(canvas).offset().left;
		var y = e.pageY - $(canvas).offset().top;
		context.prevX = x;
		context.prevY = y;
	};
	document.onmouseup = function(e) {
		canvas.isDrawing = false;
		voterRegistration.sendSign();
		voterRegistration.updateImgLink();
	};
	canvas.addEventListener('touchmove', function(e) {
		if (!canvas.isDrawing) {
			return;
		}
		var x = e.targetTouches[0].pageX - $(canvas).offset().left;
		var y = e.targetTouches[0].pageY - $(canvas).offset().top;
		context.drawsignature(x, y);
		e.preventDefault();
	}, false);
	canvas.addEventListener('touchstart', function(e) {
		canvas.isDrawing = true;
		var x = e.targetTouches[0].pageX - $(canvas).offset().left;
		var y = e.targetTouches[0].pageY - $(canvas).offset().top;
		context.prevX = x;
		context.prevY = y;
		e.preventDefault();
	}, false);
	canvas.addEventListener('touchend', function(e) {
		canvas.isDrawing = false;
		voterRegistration.sendSign();
		voterRegistration.updateImgLink();
		e.preventDefault();
	}, false);
}

// clear signature area and output canvas
voterRegistration.resetSign = function(){
	var canvas = voterRegistration.signarea;
	var context = voterRegistration.signarea.getContext('2d');
	context.fillStyle="white";
	context.fillRect(0, 0, 320, 150);
	context.fillStyle=null;
	context.strokeStyle = '#c91f37';
	context.lineWidth = 1;
  var path=new Path2D();
	path.moveTo(0,102);
	path.lineTo(320,102);
	path.closePath();
	context.stroke(path);
	voterRegistration.sendSign();
	voterRegistration.updateImgLink();
	return false;
}

// mirror signature stokes to output canvas
voterRegistration.sendSign = function(){
	var target = voterRegistration.canvas.getContext('2d');
	target.drawImage(voterRegistration.signarea, 775, 1470);
}

// convert output canvas to png data url
voterRegistration.updateImgLink = function(){
	if (voterRegistration.data.optin) {
		$("<img src='https://www.google-analytics.com/collect?v=1&t=event&tid=UA-72771086-1&cid=force-anonymous-client-id&ec=Form&ea=Download&ni=1'>").appendTo("body");
		voterRegistration.data.optin=false;
	}
	var dataURL = voterRegistration.canvas.toDataURL("image/png");
	$("#downloadButton").attr("href", dataURL);
	$("#downloadArea").attr("src", dataURL);
}

// render data string on output canvas
voterRegistration.insertTexts = function(context){
	context.fillStyle = "black";
	for (var text of voterRegistration.textPosition) {
		context.font = text.size+"px 'Noto Sans TC', sans-serif";
		if (text.align) {
			context.textAlign = text.align;
		} else {
			context.textAlign = "center"
		}
		if (text.position.length > 1) {
			for (var i = 0; i < text.position.length; i++) {
				context.fillText(voterRegistration.data[text.key].charAt(i), text.position[i][0], text.position[i][1]);
			}
		} else {
			context.fillText(voterRegistration.data[text.key], text.position[0][0], text.position[0][1]);
		}
	}
}

// FIXME: quick and dirty bind
voterRegistration.simpleBind = function(){
	voterRegistration.data[this.id] = $(this).val().toUpperCase();
}

// FIXME: quick and dirty bind for email
voterRegistration.emailBind = function(){
	voterRegistration.data["extra-email"] = $("#extra-email").val();
}

// MISC
$("#idcard-letters").on('input', voterRegistration.setIdCheckdigit);
$("#idcard-digits").on('input', voterRegistration.setIdCheckdigit);

$("#name-zh").on('input', voterRegistration.setNameZhAndTelecode);
$(".name-telecode").each(function(){
	$(this).on('input', voterRegistration.setTelecodeOnly);
});

$(".radio-button").each(function(){
	$(this).on('change', voterRegistration.setRadio);
});

$("#name-en-form input").each(function(){
	$(this).on('input', voterRegistration.simpleBind);
});
$("#address-form input").each(function(){
	$(this).on('input', voterRegistration.simpleBind);
});
$("#extra-form input.phone-control").each(function(){
	$(this).on('input', voterRegistration.simpleBind);
});
$("#extra-form input.email-control").each(function(){
	$(this).on('input', voterRegistration.emailBind);
});

$(".nextButton").on('click', voterRegistration.nextStep);
$(".checkButton").on('click', voterRegistration.generate);

$(".resetSign").on('click', voterRegistration.resetSign);

voterRegistration.randomname = [
	['王一心', 'WONG', 'Yat Sum'],
	['王一心', 'WONG', 'Yat Sum'],
	['王一心', 'WONG', 'Yat Sum'],
	['林幼羚', 'LAM', 'Yau Ling'],
	['陳英秀', 'CHAN', 'Ying Sau'],
	['余允行', 'YU', 'Wan Han'],
	['李思賢', 'LEE', 'See Yin'],
	['慕容有容', 'MO YUNG', 'Yau Yung']
][Math.floor(8 * Math.random())];

$("#name-zh").attr('placeholder', voterRegistration.randomname[0]);
$("#name-en-surname").attr('placeholder', voterRegistration.randomname[1]);
$("#name-en-othername").attr('placeholder', voterRegistration.randomname[2]);

})();
