(function(){
  var voterRegistration = new Object();

  // canvas
  voterRegistration.reo1Canvas = document.getElementById('reo1-canvas');
  voterRegistration.reo41Canvas = document.getElementById('reo41-canvas');
  voterRegistration.reo43Canvas = document.getElementById('reo43-canvas');
  voterRegistration.signarea = document.getElementById('sign-area');

  // form data
  voterRegistration.data = {
    "reo1TextPosition": {},
    "optin": false,
    "idcard": "",
    "gender": "",
    "name-zh": "",
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
    "email-to-candidate": "",
    "extra-lang": "✔ ",
    "extra-is-district": true,
    "extra-not-district-text": "",
    "functional-constituency": "",
    "election-commitee": "",
    "organisation-name": "",
    "membership": "",
    "staff-number": "",
    "other": "",
    "date": (new Date().toJSON().slice(0,10).split("-").join("")),
    "step": 0,
  };

  // text position on canvas
  voterRegistration.reo1TextPosition = [
    {"key":"idcard", // data key
     "position": [
       [393,282],[427,282],
       [529,282],[563,282],[597,282],[631,282],[665,282],[699,282],[815,282]
     ], // position for each char
     "size": 36,
    },
    {"key":"gender",
     "position": [[1049,282],[1137,282]],
     "size": 36,
    },
    {"key":"name-zh",
     "position": [[200,370],[240,370],[280,370],[320,370],[360,370],[400,370]],
     "size": 36,
    },
    {"key":"name-en-surname",
     "position": [
       [318,414],[349,414],[380,414],[411,414],
       [443,414],[474,414],[505,414],[536,414],
       [569,414],[598,414],[629,414],[660,414],
       [692,414],[723,414],[754,414],[785,414],
       [816,414],[847,414],[878,414],[909,414],
       [940,414],[971,414],[1002,414],[1033,414],
       [1065,414],[1096,414],[1127,414],[1158,414]
     ],
     "size": 28,
    },
    {"key":"name-en-othername",
     "position": [
       [318,452],[349,452],[380,452],[411,452],
       [443,452],[474,452],[505,452],[536,452],
       [569,452],[598,452],[629,452],[660,452],
       [692,452],[723,452],[754,452],[785,452],
       [816,452],[847,452],[878,452],[909,452],
       [940,452],[971,452],[1002,452],[1033,452],
       [1065,452],[1096,452],[1127,452],[1158,452]
     ],
     "size": 28,
    },
    {"key":"address-flat",
     "position": [[190,540],[222,540],[254,540],[286,540],[318,540]],
     "size": 28,
    },
    {"key":"address-floor",
     "position": [[490,540],[522,540],[554,540]],
     "size": 28,
    },
    {"key":"address-block",
     "position": [[1010,540],[1042,540],[1074,540]],
     "size": 28,
    },
    {"key":"address-line0", "position": [[340,583]], "size": 28, "align": "left"},
    {"key":"address-line1", "position": [[340,630]], "size": 28, "align": "left"},
    {"key":"address-line2", "position": [[340,678]], "size": 28, "align": "left"},
    {"key":"address-line3", "position": [[340,720]], "size": 28, "align": "left"},
    {"key":"extra-landline", "position": [[206,762]], "size": 28, "align": "left" },
    {"key":"extra-mobile", "position": [[768,762]] ,"size": 28, "align": "left"},
    {"key":"extra-office", "position": [[206,804]], "size": 28, "align": "left"},
    {"key":"extra-email", "position": [[206,850]], "size": 28, "align": "left"},
    {"key":"email-to-candidate",
     "position": [[88,892]],
     "size": 22,
    },
    {"key":"extra-lang",
     "position": [[559,1258],[719,1258]],
     "size": 22,
    },
    {"key":"date",
     "position": [
       [445,1650],[477,1650],[508,1650],[540,1650],
       [319,1650],[351,1650],
       [192,1650],[225,1650],
     ],
     "size": 22,
    },
  ];

  voterRegistration.reo41TextPosition = [
    {"key":"idcard", // data key
     "position": [
       [447,248],[481,248],
       [548,248],[582,248],[616,248],[650,248],[684,248],[718,248],[810,248]
     ], // position for each char
     "size": 36,
    },
    {"key":"gender",
     "position": [[1064,248],[1145,248]],
     "size": 36,
    },
    {"key":"name-zh",
     "position": [[340,320],[370,320],[400,320],[430,320],[460,320],[490,320]],
     "size": 26,
    },
    {"key":"name-zh",
     "position": [[665,2239]],
     "size": 26,
     "align": "left"
    },
    {"key":"name-en-surname",
     "position": [
       [337,356],[367,356],[395,356],[423,356],
       [452,356],[481,356],[510,356],[539,356],
       [567,356],[596,356],[625,356],[654,356],
       [683,356],[711,356],[740,356],[769,356],
       [798,356],[827,356],[855,356],[884,356],
       [913,356],[942,356],[971,356],[1000,356],
       [1028,356],[1057,356],[1086,356],[1115,356]
     ],
     "size": 28,
    },
    {"key":"name-en-othername",
     "position": [
       [337,391],[367,391],[395,391],[423,391],
       [452,391],[481,391],[510,391],[539,391],
       [567,391],[596,391],[625,391],[654,391],
       [683,391],[711,391],[740,391],[769,391],
       [798,391],[827,391],[855,391],[884,391],
       [913,391],[942,391],[971,391],[1000,391],
       [1028,391],[1057,391],[1086,391],[1115,391]
     ],
     "size": 28,
    },
    {"key":"address-flat",
     "position": [[150,500],[182,500],[214,500],[246,500],[278,500]],
     "size": 28,
    },
    {"key":"address-floor",
     "position": [[456,500],[488,500],[520,500]],
     "size": 28,
    },
    {"key":"address-block",
     "position": [[1006,500],[1038,500],[1070,500]],
     "size": 28,
    },
    {"key":"address-line0", "position": [[280,536]], "size": 28, "align": "left"},
    {"key":"address-line1", "position": [[280,565]], "size": 26, "align": "left"},
    {"key":"address-line2", "position": [[280,598]], "size": 28, "align": "left"},
    {"key":"address-line3", "position": [[280,633]], "size": 28, "align": "left"},
    {"key":"extra-landline", "position": [[365,670]], "size": 28, "align": "left" },
    {"key":"extra-mobile", "position": [[890,670]] ,"size": 28, "align": "left"},
    {"key":"extra-office", "position": [[365,710]], "size": 28, "align": "left"},
    {"key":"extra-email", "position": [[360,752]], "size": 28, "align": "left"},
    {"key":"email-to-candidate",
     "position": [[58,776]],
     "size": 20,
    },
    {"key":"extra-lang",
     "position": [[689,1672],[873,1672]],
     "size": 36,
    },
    {"key": "functional-constituency", "position": [[260,954]], "size": 28, "align": "left"},
    {"key": "election-commitee", "position": [[260,992]], "size": 28, "align": "left"},
    {"key": "organisation-name", "position": [[385,1419]], "size": 28, "align": "left"},
    {"key": "membership", "position": [[385,1460]], "size": 28, "align": "left"},
    {"key": "staff-number", "position": [[385,1500]], "size": 28, "align": "left"},
    {"key": "other", "position": [[385,1541]], "size": 28, "align": "left"},
    {"key":"date",
     "position": [
       [400,2182],[424,2182],[448,2182],[472,2182],
       [328,2182],[352,2182],
       [255,2182],[279,2182],
     ],
     "size": 22,
    }
  ];

  voterRegistration.reo43TextPosition = [
    {"key":"idcard", // data key
     "position": [
       [426,427],[461,427],
       [540,427],[574,427],[608,427],[642,427],[676,427],[710,427],[802,427]
     ], // position for each char
     "size": 36,
    },
    {"key":"name-zh",
     "position": [[340,507],[372,507],[404,507],[436,507],[468,507],[500,507]],
     "size": 28,
    },
    {"key":"name-zh",
     "position": [[739,2194]],
     "size": 28,
     "align": "left"
    },
    {"key":"name-en-surname",
     "position": [
       [331,553],[360,553],[388,553],[417,553],
       [446,553],[475,553],[504,553],[533,553],
       [562,553],[591,553],[620,553],[649,553],
       [678,553],[707,553],[736,553],[765,553],
       [794,553],[823,553],[851,553],[881,553],
       [909,553],[939,553],[967,553],[996,553],
       [1025,553],[1054,553],[1083,553],[1112,553]
     ],
     "size": 28,
    },
    {"key":"name-en-othername",
     "position": [
       [331,595],[360,595],[388,595],[417,595],
       [446,595],[475,595],[504,595],[533,595],
       [562,595],[591,595],[620,595],[649,595],
       [678,595],[707,595],[736,595],[765,595],
       [794,595],[823,595],[851,595],[881,595],
       [909,595],[939,595],[967,595],[996,595],
       [1025,595],[1054,595],[1083,595],[1112,595]
     ],
     "size": 28,
    },
    {"key":"extra-mobile", "position": [[739,2262]] ,"size": 28, "align": "left"},
    {"key":"extra-not-district-text",
     "position": [[62, 1497]],
     "size": 20,
    },
    {"key": "functional-constituency", "position": [[255,685]], "size": 28, "align": "left"},
    {"key": "election-commitee", "position": [[255,720]], "size": 24, "align": "left"},
    {"key": "organisation-name", "position": [[400,1206]], "size": 28, "align": "left"},
    {"key": "membership", "position": [[400,1244]], "size": 28, "align": "left"},
    {"key": "staff-number", "position": [[400,1283]], "size": 28, "align": "left"},
    {"key": "other", "position": [[400,1321]], "size": 28, "align": "left"},
    {"key":"date",
     "position": [
       [387,2126],[413,2126],[439,2126],[465,2126],
       [300,2126],[326,2126],
       [220,2126],[246,2126],
     ],
     "size": 22,
    }
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

    // UI draw checksum
    $("#idcard-checksum").text("("+checkdigit+")");
    // save data to voterRegistration object
    if (letters.length==1) {
      letters = " "+letters;
    }
    voterRegistration.data["idcard"] = letters+digits+checkdigit;
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
    if (this.id == "email-to-candidate-yes") {
      voterRegistration.data[this.name] = "✔";
      return false;
    }
    if (this.id == "email-to-candidate-no") {
      return false;
    }
    if (this.id == "fc-district") {
      voterRegistration.data["extra-is-district"] = true;
      voterRegistration.data["extra-not-district-text"] = "";
      return false;
    }
    if (this.id == "fc-other") {
      voterRegistration.data["extra-is-district"] = false;
      voterRegistration.data["extra-not-district-text"] = "✔";
      return false;
    }
    if ($.inArray(this.id, ["gender-male", "extra-lang-zh"]) >= 0) {
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

    $(".step-nav-1 .nav-content").text(voterRegistration.data["name-zh"]);
    $(".step-nav-2 .nav-content").text(voterRegistration.data["name-en-surname"]+", "+voterRegistration.data["name-en-othername"]);
    $(".step-nav-3 .nav-content").text(voterRegistration.data["idcard"]+", "+$(".gender-btn.active .btn-text").text());
    $(".step-nav-4 .nav-content").text(
      voterRegistration.data["address-flat"]+" "+
        voterRegistration.data["address-floor"]+" "+
        voterRegistration.data["address-block"]+" "+
        voterRegistration.data["address-line0"]+" "+
        voterRegistration.data["address-line1"]+" "+
        voterRegistration.data["address-line2"]+" "+
        voterRegistration.data["address-line3"]
    );
    var emailToCandidateText = '';
    if (voterRegistration.data["extra-email"]) {
      if (voterRegistration.data['email-to-candidate']) {
        emailToCandidateText = '提供電郵地址予相關選區候選人';
      } else {
        emailToCandidateText = '不提供電郵地址予相關選區候選人';
      }
    }
    $(".step-nav-5 .nav-content").text(
      voterRegistration.data["extra-landline"]+" "+
        voterRegistration.data["extra-mobile"]+" "+
        voterRegistration.data["extra-office"]+" "+
        voterRegistration.data["extra-email"]+" "+
        $(".lang-btn.active .btn-text").text()+" "+
        emailToCandidateText
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
    var reo1Canvas = voterRegistration.reo1Canvas;
    var reo41Canvas = voterRegistration.reo41Canvas;
    var reo43Canvas = voterRegistration.reo43Canvas;
    var reo1Context = voterRegistration.reo1Canvas.getContext('2d');
    var reo41Context = voterRegistration.reo41Canvas.getContext('2d');
    var reo43Context = voterRegistration.reo43Canvas.getContext('2d');

    reo1Canvas.height = 3508;
    reo1Canvas.width = 1240;
    reo41Canvas.height = 3508;
    reo41Canvas.width = 1240;
    reo43Canvas.height = 3508;
    reo43Canvas.width = 1240;

    reo1Context.drawImage(document.getElementById("reo1-source-img"), 0, 0);
    reo41Context.drawImage(document.getElementById("reo41-source-img"), 0, 0);
    reo43Context.drawImage(document.getElementById("reo43-source-img"), 0, 0);

    voterRegistration.insertTexts(reo1Context, voterRegistration.reo1TextPosition);
    voterRegistration.insertTexts(reo41Context, voterRegistration.reo41TextPosition);
    voterRegistration.insertTexts(reo43Context, voterRegistration.reo43TextPosition);
    voterRegistration.initSign();
    voterRegistration.resetSign();
  }

  // signature area initialisation and set event handle
  voterRegistration.initSign = function(){
    var canvas = voterRegistration.signarea;
    var context = voterRegistration.signarea.getContext('2d');
    canvas.height = 124;
    canvas.width = 360;

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
    context.fillRect(0, 0, 360, 124);
    context.fillStyle=null;
    context.strokeStyle = '#black';
    context.lineWidth = 1;
    var path=new Path2D();
    path.moveTo(0,100);
    path.lineTo(360,100);
    path.closePath();
    context.stroke(path);
    voterRegistration.sendSign();
    voterRegistration.updateImgLink();
    return false;
  }

  // mirror signature stokes to output canvas
  voterRegistration.sendSign = function(){
    var reo1Context = voterRegistration.reo1Canvas.getContext('2d');
    var reo41Context = voterRegistration.reo41Canvas.getContext('2d');
    var reo43Context = voterRegistration.reo43Canvas.getContext('2d');
    reo1Context.drawImage(voterRegistration.signarea, 807, 1555);
    reo41Context.drawImage(voterRegistration.signarea, 716, 2107, 288, 99.2);
    reo43Context.drawImage(voterRegistration.signarea, 840, 2082, 180, 62);
  }

  // convert output canvas to png data url
  voterRegistration.updateImgLink = function(){
    if (voterRegistration.data.optin) {
      $("<img src='https://www.google-analytics.com/collect?v=1&t=event&tid=UA-72771086-1&cid=force-anonymous-client-id&ec=Form&ea=Download&ni=1'>").appendTo("body");
      voterRegistration.data.optin=false;
    }
    var dataURL = voterRegistration.reo1Canvas.toDataURL("image/png");
    $("#downloadButton").attr("href", dataURL);
    $("#downloadArea").attr("src", dataURL);
  }

  // render data string on output canvas
  voterRegistration.insertTexts = function(context, position){
    context.fillStyle = "black";
    for (var text of position) {
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

  voterRegistration.literalBind = function() {
    voterRegistration.data[this.id] = $(this).val();
  }

  // MISC
  $("#idcard-letters").on('input', voterRegistration.setIdCheckdigit);
  $("#idcard-digits").on('input', voterRegistration.setIdCheckdigit);


  $(".radio-button").each(function(){
    $(this).on('change', voterRegistration.setRadio);
  });

  $("#name-zh-form input").each(function(){
    $(this).on('input', voterRegistration.simpleBind);
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
  $(".fc-form select").each(function() {
    $(this).on('change', voterRegistration.literalBind);
  });
  $('.fc-form input').each(function() {
    $(this).on('input', voterRegistration.literalBind);
  });

  $('#extra-email').on('input', function() {
    if ($(this).val()) {
      $('.email-to-candidate-container').css('display', 'initial');
    } else {
      $('.email-to-candidate-container').css('display', 'none');
    }
  });

  $(".nextButton").on('click', voterRegistration.nextStep);
  $(".checkButton").on('click', voterRegistration.generate);

  $(".resetSign").on('click', voterRegistration.resetSign);

})();

var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (iOS) {
  $(".ios").removeClass("sr-only");
  $(".mainform").remove();
}
