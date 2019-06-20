(function(){

  var voterRegistration = new Object();

  // canvas
  voterRegistration.reo1Canvas = document.getElementById('reo1-canvas');
  voterRegistration.reo2Canvas = document.getElementById('reo2-canvas');
  voterRegistration.reo41Canvas = document.getElementById('reo41-canvas');
  voterRegistration.reo43Canvas = document.getElementById('reo43-canvas');
  voterRegistration.signarea = document.getElementById('sign-area');

  // form data
  voterRegistration.data = {
    "reo1TextPosition": {},
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
    "contact-address": "",
    "extra-landline": "",
    "extra-mobile": "",
    "extra-office": "",
    "extra-fax": "",
    "extra-email": "",
    "email-to-candidate": "",
    "extra-lang": "✔ ",
    "application-type": "new-district",
    "extra-not-district": "",
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
    {"key":"address-line3", "position": [[[810, 700],[870, 720]],[[890,700],[930,720]],[[945,700],[985,720]]], "size": 28, "align": "left", "type": "strike-except"},
    {"key":"contact-address", "position": [[125,1965]], "size": 28, "align": "left"},
    {"key":"extra-landline", "position": [[206,762]], "size": 28, "align": "left" },
    {"key":"extra-mobile", "position": [[768,762]] ,"size": 28, "align": "left"},
    {"key":"extra-office", "position": [[206,804]], "size": 28, "align": "left"},
    {"key":"extra-fax", "position": [[768,804]], "size": 28, "align": "left"},
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

  voterRegistration.reo2TextPosition = [
    {"key":"idcard", // data key
     "position": [
       [393,337],[427,337],
       [528,337],[563,337],[597,337],[631,337],[666,337],[700,337],[815,337]
     ], // position for each char
     "size": 36,
    },
    {"key":"gender",
     "position": [[1048,337],[1132,337]],
     "size": 36,
    },
    {"key":"name-zh", "position": [[190,425]], "size": 36, "align": "left"},
    {"key":"name-en-surname",
     "position": [
       [318,469],[350,469],[381,469],[412,469],
       [443,469],[474,469],[456,469],[537,469],
       [568,469],[600,469],[631,469],[662,469],
       [693,469],[724,469],[755,469],[786,469],
       [818,469],[849,469],[880,469],[911,469],
       [942,469],[973,469],[1004,469],[1035,469],
       [1067,469],[1098,469],[1129,469],[1159,469],
       [1187,469],
     ],
     "size": 28,
    },
    {"key":"name-en-othername",
     "position": [
       [318,508],[350,508],[381,508],[412,508],
       [443,508],[474,508],[456,508],[537,508],
       [568,508],[600,508],[631,508],[662,508],
       [693,508],[724,508],[755,508],[786,508],
       [818,508],[849,508],[880,508],[911,508],
       [942,508],[973,508],[1004,508],[1035,508],
       [1067,508],[1098,508],[1129,508],[1159,508],
       [1187,508],
     ],
     "size": 28,
    },
    {"key":"address-flat", "position": [[180,582]], "size": 28, "align": "left"},
    {"key":"address-floor", "position": [[472,582]], "size": 28, "align": "left"},
    {"key":"address-block", "position": [[1004,582]], "size": 28, "align": "left"},
    {"key":"address-line0", "position": [[344,627]], "size": 28, "align": "left"},
    {"key":"address-line1", "position": [[344,672]], "size": 28, "align": "left"},
    {"key":"address-line2", "position": [[344,720]], "size": 28, "align": "left"},
    {"key":"address-line3", "position": [[[800,740],[860,760]],[[880,740],[920,760]],[[935,740],[975,760]]], "size": 28, "align": "left", "type": "strike-except"},
    {"key":"contact-address", "position": [[115,1965]], "size": 28, "align": "left"},
    {"key":"extra-landline", "position": [[202,806]], "size": 28, "align": "left"},
    {"key":"extra-mobile", "position": [[770,806]] ,"size": 28, "align": "left"},
    {"key":"extra-office", "position": [[202,844]], "size": 28, "align": "left"},
    {"key":"extra-fax", "position": [[770,844]], "size": 28, "align": "left"},
    {"key":"extra-email", "position": [[202,892]], "size": 28, "align": "left"},
    {"key":"email-to-candidate",
     "position": [[88,923]],
     "size": 22,
    },
    {"key":"extra-lang",
     "position": [[559,1287],[719,1287]],
     "size": 22,
    },
    {"key":"date",
     "position": [
       [445,1663],[476,1663],[508,1663],[539,1663],
       [319,1663],[350,1663],
       [192,1663],[224,1663],
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
    {"key":"address-line3", "position": [[[820,615],[870,630]],[[890,615],[920,630]],[[935,615],[970,630]]], "size": 28, "align": "left", "type": "strike-except"},
    {"key":"contact-address", "position": [[125,1965]], "size": 28, "align": "left"},
    {"key":"extra-landline", "position": [[365,670]], "size": 28, "align": "left" },
    {"key":"extra-mobile", "position": [[890,670]] ,"size": 28, "align": "left"},
    {"key":"extra-office", "position": [[365,710]], "size": 28, "align": "left"},
    {"key":"extra-fax", "position": [[890,710]], "size": 28, "align": "left"},
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
    {"key":"extra-not-district",
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

  voterRegistration.getApplicationType = function() {
    var query = window.location.search.slice(1);
    var item = query.split('&').map(function(item) {
      return item.split('=');
    }).filter((function(item) {
      return item[0] === 'type';
    }));
    var value = '';
    if (item.length >= 1) {
      if (item[0].length >= 2) {
        value = item[0][1];
      }
    }
    return value;
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
    if (this.id == "email-to-candidate-yes") {
      voterRegistration.data[this.name] = "✔";
      return false;
    }
    if (this.id == "email-to-candidate-no") {
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
    var step = voterRegistration.data.step;
    step++;
    if (voterRegistration.data['application-type'] === 'new-district') {
      // Skip step 1 and 7 if register for 超級區議會
      if (step === 1 || step === 7) {
        voterRegistration.setStep(step);
        step++;
      }
    } else if (voterRegistration.data['application-type'] === 'new-functional') {
      // Skip step 1 if register for 功能組別
      if (step === 1) {
        voterRegistration.setStep(step);
        step++;
      }
    } else if (voterRegistration.data['application-type'] === 'change-address') {
      // Skip step 7 if register for change address-proof
      if (step === 7) {
        voterRegistration.setStep(step);
        step++;
      }
    } else if (voterRegistration.data['application-type'] === 'change-functional') {
      // Skip step 1, 5, and 6 if register for change functional constituency
      if (step === 1) {
        voterRegistration.setStep(step);
        step++;
      } else if (step === 5) {
        voterRegistration.setStep(step);
        step++;
        voterRegistration.setStep(step);
        step++;
      }
    }
    voterRegistration.setStep(step);
    return false;
  }

  voterRegistration.setStep = function(step){
    voterRegistration.data.step = step;

    var target = $(".step-container");
    target.removeClass(function(index, classNames) {
      return classNames.split(' ').filter(function(className) {
        return className.search(/step-current-[\d]+/) !== -1;
      }).join(' ');
    }).addClass("step-current-"+step);

    var navtarget = $(".step-nav-container");
    navtarget.removeClass(function(index, classNames) {
      return classNames.split(' ').filter(function(className) {
        return className.search(/step-current-[\d]+/) !== -1;
      }).join(' ');
    }).addClass("step-current-"+step);

    if (voterRegistration.data.step > 2) {
      $(".step-nav-2 .nav-content").text(voterRegistration.data["name-zh"]);
    }
    if (voterRegistration.data.step > 3) {
      var englishNameText = '';
      var surname = voterRegistration.data["name-en-surname"];
      var othername = voterRegistration.data["name-en-othername"];
      if (surname && othername) {
        englishNameText = surname + ', ' + othername;
      } else if (surname) {
        englishNameText = surname;
      } else if (othername) {
        englishNameText = othername;
      }
      $(".step-nav-3 .nav-content").text(englishNameText);
    }
    if (voterRegistration.data.step > 4) {
      var idcardText = '';
      var idcard = voterRegistration.data["idcard"];
      var gender = $(".gender-btn.active .btn-text").text();
      if (idcard && gender) {
        idcardText = idcard + ', ' + gender;
      } else if (idcard) {
        idcardText = idcard;
      } else if (gender) {
        idcardText = gender;
      }
      $(".step-nav-4 .nav-content").text(idcardText);
    }
    if (voterRegistration.data.step > 5) {
      $(".step-nav-5 .nav-content").text(
        voterRegistration.data["address-flat"]+" "+
          voterRegistration.data["address-floor"]+" "+
          voterRegistration.data["address-block"]+" "+
          voterRegistration.data["address-line0"]+" "+
          voterRegistration.data["address-line1"]+" "+
          voterRegistration.data["address-line2"]+" "
      );
    }
    if (voterRegistration.data.step > 6) {
      var emailToCandidateText = '';
      if (voterRegistration.data["extra-email"]) {
        if (voterRegistration.data['email-to-candidate']) {
          emailToCandidateText = '提供電郵地址予區候選人';
        } else {
          emailToCandidateText = '不提供電郵地址予候選人';
        }
      }
      $(".step-nav-6 .nav-content").html('')
        .append($('<div></div>').text(voterRegistration.data["extra-mobile"]))
        .append($('<div></div>').text(voterRegistration.data["extra-landline"]))
        .append($('<div></div>').text(voterRegistration.data["extra-office"]))
        .append($('<div></div>').text(voterRegistration.data["extra-email"]))
        .append($('<div></div>').text($(".lang-btn.active .btn-text").text()))
        .append($('<div></div>').text(emailToCandidateText))
    }
    if (voterRegistration.data.step > 7) {
      $(".step-nav-7 .nav-content").html('')
        .append($('<div></div>').text(voterRegistration.data["functional-constituency"]))
        .append($('<div></div>').text(voterRegistration.data["election-commitee"]))
        .append($('<div></div>').text(voterRegistration.data["organisation-name"]))
        .append($('<div></div>').text(voterRegistration.data["membership"]))
        .append($('<div></div>').text(voterRegistration.data["staff-number"]))
    }

    if (step === 9) {
      voterRegistration.generate();
    }

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  }

  // FIXME: quick and dirty generate button
  voterRegistration.generate = function(){
    var reo1Canvas = voterRegistration.reo1Canvas;
    var reo1Context = voterRegistration.reo1Canvas.getContext('2d');
    var reo2Canvas = voterRegistration.reo2Canvas;
    var reo2Context = voterRegistration.reo2Canvas.getContext('2d');
    var reo41Canvas = voterRegistration.reo41Canvas;
    var reo41Context = voterRegistration.reo41Canvas.getContext('2d');
    var reo43Canvas = voterRegistration.reo43Canvas;
    var reo43Context = voterRegistration.reo43Canvas.getContext('2d');
    reo1Canvas.height = 3508;
    reo1Canvas.width = 1240;
    reo2Canvas.height = 3508;
    reo2Canvas.width = 1240;
    reo41Canvas.height = 3508;
    reo41Canvas.width = 1240;
    reo43Canvas.height = 3508;
    reo43Canvas.width = 1240;

    if (voterRegistration.data['application-type'] === 'new-district') {
      reo1Context.drawImage(document.getElementById("reo1-source-img"), 0, 0);
      voterRegistration.insertTexts(reo1Context, voterRegistration.reo1TextPosition);
      $('#reo1-canvas').css('display', 'initial');
      $('#reo2-canvas').css('display', 'none');
      $('#reo41-canvas').css('display', 'none');
      $('#reo43-canvas').css('display', 'none');
      $('#reo1DeclarationContainer').css('display', 'block');
      $('#reo2DeclarationContainer').css('display', 'none');
      $('#reo41DeclarationContainer').css('display', 'none');
      $('#reo43DeclarationContainer').css('display', 'none');
      $('#reo1DownloadBtnContainer').css('display', 'block');
      $('#reo2DownloadBtnContainer').css('display', 'none');
      $('#reo41DownloadBtnContainer').css('display', 'none');
      $('#reo43DownloadBtnContainer').css('display', 'none');
    } else if (voterRegistration.data['application-type'] === 'new-functional') {
      reo41Context.drawImage(document.getElementById("reo41-source-img"), 0, 0);
      voterRegistration.insertTexts(reo41Context, voterRegistration.reo41TextPosition);
      $('#reo1-canvas').css('display', 'none');
      $('#reo2-canvas').css('display', 'none');
      $('#reo41-canvas').css('display', 'initial');
      $('#reo43-canvas').css('display', 'none');
      $('#reo1DeclarationContainer').css('display', 'none');
      $('#reo2DeclarationContainer').css('display', 'none');
      $('#reo41DeclarationContainer').css('display', 'block');
      $('#reo43DeclarationContainer').css('display', 'none');
      $('#reo1DownloadBtnContainer').css('display', 'none');
      $('#reo2DownloadBtnContainer').css('display', 'none');
      $('#reo41DownloadBtnContainer').css('display', 'block');
      $('#reo43DownloadBtnContainer').css('display', 'none');
    } else if (voterRegistration.data['application-type'] === 'change-address') {
      reo2Context.drawImage(document.getElementById("reo2-source-img"), 0, 0);
      voterRegistration.insertTexts(reo2Context, voterRegistration.reo2TextPosition);
      $('#reo1-canvas').css('display', 'none');
      $('#reo2-canvas').css('display', 'initial');
      $('#reo41-canvas').css('display', 'none');
      $('#reo43-canvas').css('display', 'none');
      $('#reo1DeclarationContainer').css('display', 'none');
      $('#reo2DeclarationContainer').css('display', 'block');
      $('#reo41DeclarationContainer').css('display', 'none');
      $('#reo43DeclarationContainer').css('display', 'none');
      $('#reo1DownloadBtnContainer').css('display', 'none');
      $('#reo2DownloadBtnContainer').css('display', 'block');
      $('#reo41DownloadBtnContainer').css('display', 'none');
      $('#reo43DownloadBtnContainer').css('display', 'none');
    } else if (voterRegistration.data['application-type'] === 'change-functional') {
      reo43Context.drawImage(document.getElementById("reo43-source-img"), 0, 0);
      voterRegistration.insertTexts(reo43Context, voterRegistration.reo43TextPosition);
      $('#reo1-canvas').css('display', 'none');
      $('#reo2-canvas').css('display', 'none');
      $('#reo41-canvas').css('display', 'none');
      $('#reo43-canvas').css('display', 'initial');
      $('#reo1DeclarationContainer').css('display', 'none');
      $('#reo2DeclarationContainer').css('display', 'none');
      $('#reo41DeclarationContainer').css('display', 'none');
      $('#reo43DeclarationContainer').css('display', 'block');
      $('#reo1DownloadBtnContainer').css('display', 'none');
      $('#reo2DownloadBtnContainer').css('display', 'none');
      $('#reo41DownloadBtnContainer').css('display', 'none');
      $('#reo43DownloadBtnContainer').css('display', 'block');
    }

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
      voterRegistration.updateImgLinks();
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
      voterRegistration.updateImgLinks();
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
    voterRegistration.updateImgLinks();
    return false;
  }

  // mirror signature stokes to output canvas
  voterRegistration.sendSign = function(){
    var reo1Context = voterRegistration.reo1Canvas.getContext('2d');
    var reo2Context = voterRegistration.reo2Canvas.getContext('2d');
    var reo41Context = voterRegistration.reo41Canvas.getContext('2d');
    var reo43Context = voterRegistration.reo43Canvas.getContext('2d');
    if (voterRegistration.data['application-type'] === 'new-district') {
      reo1Context.drawImage(voterRegistration.signarea, 807, 1555);
    } else if (voterRegistration.data['application-type'] === 'new-functional') {
      reo41Context.drawImage(voterRegistration.signarea, 716, 2107, 288, 99.2);
    } else if (voterRegistration.data['application-type'] === 'change-address') {
      reo2Context.drawImage(voterRegistration.signarea, 845, 1589, 288, 99.2);
    } else if (voterRegistration.data['application-type'] === 'change-functional') {
      reo43Context.drawImage(voterRegistration.signarea, 840, 2082, 180, 62);
    }
  }

  // convert output canvas to png data url
  voterRegistration.updateImgLinks = function(){
    if (voterRegistration.data['application-type'] === 'new-district') {
      var reo1DataURL = voterRegistration.reo1Canvas.toDataURL("image/png");
      $("#reo1DownloadButton").attr("href", reo1DataURL);
    } else if (voterRegistration.data['application-type'] === 'new-functional') {
      var reo41DataURL = voterRegistration.reo41Canvas.toDataURL("image/png");
      $("#reo41DownloadButton").attr("href", reo41DataURL);
    } else if (voterRegistration.data['application-type'] === 'change-address') {
      var reo2DataURL = voterRegistration.reo2Canvas.toDataURL("image/png");
      $("#reo2DownloadButton").attr("href", reo2DataURL);
    } else if (voterRegistration.data['application-type'] === 'change-functional') {
      var reo43DataURL = voterRegistration.reo43Canvas.toDataURL("image/png");
      $("#reo43DownloadButton").attr("href", reo43DataURL);
    }
  }

  // render data string on output canvas
  voterRegistration.insertTexts = function(context, position){
    context.fillStyle = "black";
    for (var text of position) {
      context.font = text.size+"px 'Noto Sans TC Regular', sans-serif";
      if (text.type === 'strike-except') {
        var key = voterRegistration.data[text.key];
        for (var i in text.position) {
          if (i == key) {
            continue;
          }
          var positions = text.position[i];
          if (positions.length === 2) {
            context.beginPath();
            context.moveTo(positions[0][0], positions[0][1]);
            context.lineTo(positions[1][0], positions[1][1]);
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.stroke();
          }
        }
      } else {
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

  voterRegistration.strikeBind = function() {
    if (this.id === 'address-line3') {
      switch ($(this).val()) {
        case '香港島':
        voterRegistration.data[this.id] = 0;
        break;
        case '九龍':
        voterRegistration.data[this.id] = 1;
        break;
        case '新界':
        voterRegistration.data[this.id] = 2;
        break;
      }
    }
  };

  voterRegistration.checkboxBind = function() {
    console.log($(this).is(':checked'));
    voterRegistration.data[this.id] = $(this).is(':checked') ? '✔' : '';
  }

  if ($.inArray(voterRegistration.getApplicationType(), ['new-district', 'new-functional', 'change-address', 'change-functional']) >= 0) {
    voterRegistration.data['application-type'] = voterRegistration.getApplicationType();
  }

  if (voterRegistration.data['application-type'] === 'new-district') {

    $(".step-nav-1").css('display', 'none');
    $(".step-nav-2").css('display', 'initial');
    $(".step-nav-3").css('display', 'initial');
    $(".step-nav-4").css('display', 'initial');
    $(".step-nav-5").css('display', 'initial');
    $(".step-nav-6").css('display', 'initial');
    $(".step-nav-7").css('display', 'none');
    $(".step-nav-8").css('display', 'initial');
    $(".step-nav-9").css('display', 'initial');

    $(".step-nav-2 .step-nav-number").html('1');
    $(".step-nav-3 .step-nav-number").html('2');
    $(".step-nav-4 .step-nav-number").html('3');
    $(".step-nav-5 .step-nav-number").html('4');
    $(".step-nav-6 .step-nav-number").html('5');
    $(".step-nav-8 .step-nav-number").html('6');
    $(".step-nav-9 .step-nav-number").html('7');

    $(".step-2 .step-number").html('一');
    $(".step-3 .step-number").html('二');
    $(".step-4 .step-number").html('三');
    $(".step-5 .step-number").html('四');
    $(".step-6 .step-number").html('五');
    $(".step-8 .step-number").html('六');
    $(".step-9 .step-number").html('七');

    $(".step-8 .form-name").html('Completed REO-1 Form.png');
    $(".step-8 .uploader-img").attr('src', 'assets/uploader-1.png');
  } else if (voterRegistration.data['application-type'] === 'new-functional') {

    $(".step-nav-1").css('display', 'none');
    $(".step-nav-2").css('display', 'initial');
    $(".step-nav-3").css('display', 'initial');
    $(".step-nav-4").css('display', 'initial');
    $(".step-nav-5").css('display', 'initial');
    $(".step-nav-6").css('display', 'initial');
    $(".step-nav-7").css('display', 'initial');
    $(".step-nav-8").css('display', 'initial');
    $(".step-nav-9").css('display', 'initial');

    $(".step-nav-2 .step-nav-number").html('1');
    $(".step-nav-3 .step-nav-number").html('2');
    $(".step-nav-4 .step-nav-number").html('3');
    $(".step-nav-5 .step-nav-number").html('4');
    $(".step-nav-6 .step-nav-number").html('5');
    $(".step-nav-7 .step-nav-number").html('6');
    $(".step-nav-8 .step-nav-number").html('7');
    $(".step-nav-9 .step-nav-number").html('8');

    $(".step-2 .step-number").html('一');
    $(".step-3 .step-number").html('二');
    $(".step-4 .step-number").html('三');
    $(".step-5 .step-number").html('四');
    $(".step-6 .step-number").html('五');
    $(".step-7 .step-number").html('六');
    $(".step-8 .step-number").html('七');
    $(".step-9 .step-number").html('八');

    $(".step-8 .form-name").html('Completed REO-41 Form.png');
    $(".step-8 .uploader-img").attr('src', 'assets/uploader-2.png');
  } else if (voterRegistration.data['application-type'] === 'change-address') {
    $(".step-nav-1").css('display', 'initial');
    $(".step-nav-2").css('display', 'initial');
    $(".step-nav-3").css('display', 'initial');
    $(".step-nav-4").css('display', 'initial');
    $(".step-nav-5").css('display', 'initial');
    $(".step-nav-6").css('display', 'initial');
    $(".step-nav-7").css('display', 'none');
    $(".step-nav-8").css('display', 'initial');
    $(".step-nav-9").css('display', 'initial');

    $(".step-nav-1 .step-nav-number").html('1');
    $(".step-nav-2 .step-nav-number").html('2');
    $(".step-nav-3 .step-nav-number").html('3');
    $(".step-nav-4 .step-nav-number").html('4');
    $(".step-nav-5 .step-nav-number").html('5');
    $(".step-nav-6 .step-nav-number").html('6');
    $(".step-nav-8 .step-nav-number").html('7');
    $(".step-nav-9 .step-nav-number").html('8');

    $(".step-1 .step-number").html('一');
    $(".step-2 .step-number").html('二');
    $(".step-3 .step-number").html('三');
    $(".step-4 .step-number").html('四');
    $(".step-5 .step-number").html('五');
    $(".step-6 .step-number").html('六');
    $(".step-8 .step-number").html('七');
    $(".step-9 .step-number").html('八');

    $(".step-8 .form-name").html('Completed REO-2 Form.png');
    $(".step-8 .uploader-img").attr('src', 'assets/uploader-1.png');
  } else if (voterRegistration.data['application-type'] === 'change-functional') {

    $(".step-nav-1").css('display', 'none');
    $(".step-nav-2").css('display', 'initial');
    $(".step-nav-3").css('display', 'initial');
    $(".step-nav-4").css('display', 'initial');
    $(".step-nav-5").css('display', 'none');
    $(".step-nav-6").css('display', 'initial');
    $(".step-nav-7").css('display', 'initial');
    $(".step-nav-8").css('display', 'initial');
    $(".step-nav-9").css('display', 'initial');

    $(".step-nav-2 .step-nav-number").html('1');
    $(".step-nav-3 .step-nav-number").html('2');
    $(".step-nav-4 .step-nav-number").html('3');
    $(".step-nav-6 .step-nav-number").html('4');
    $(".step-nav-7 .step-nav-number").html('5');
    $(".step-nav-8 .step-nav-number").html('6');
    $(".step-nav-9 .step-nav-number").html('7');

    $(".step-2 .step-number").html('一');
    $(".step-3 .step-number").html('二');
    $(".step-4 .step-number").html('三');
    $(".step-6 .step-number").html('四');
    $(".step-7 .step-number").html('五');
    $(".step-8 .step-number").html('六');
    $(".step-9 .step-number").html('七');

    $(".step-6 .step-number").parent().next().css('display', 'none');
    $(".step-6 #extra-mobile").parent().find('label').html('聯絡電話');
    $(".step-6 #extra-landline").parent().css('display', 'none');
    $(".step-6 #extra-office").parent().css('display', 'none');
    $(".step-6 #extra-fax").parent().css('display', 'none');
    $(".step-6 #extra-email").parent().css('display', 'none');
    $(".step-6 .lang-btn").parent().parent().css('display', 'none');
    $(".step-6 .lang-btn").parent().parent().next().css('display', 'none');
    $(".step-8 .form-name").html('Completed REO-43 Form.png');
    $(".step-8 .uploader-img").attr('src', 'assets/uploader-1.png');

    $('#functional-constituency, #election-commitee, #organisation-name, #membership, #staff-number, #other').on('change', function() {
      if ($('#functional-constituency').val() ||
          $('#election-commitee').val() ||
          $('#organisation-name').val() ||
          $('#membership').val() ||
          $('#staff-number').val() ||
          $('#other').val()) {
        $('#extra-not-district').parent().css('display', 'none');
      } else {
        $('#extra-not-district').parent().css('display', 'initial');
      }
    });
    $('#extra-not-district').on('change', function() {
      if ($(this).is(':checked')) {
        $('#functional-constituency, #election-commitee, #organisation-name, #membership, #staff-number, #other').parent().css('display', 'none');
      } else {
        $('#functional-constituency, #election-commitee, #organisation-name, #membership, #staff-number, #other').parent().css('display', 'initial');
      }
    });
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
  $("#address-form select").each(function(){
    $(this).on('change', voterRegistration.strikeBind);
  });
  $("#extra-form input.phone-control").each(function(){
    $(this).on('input', voterRegistration.simpleBind);
  });
  $("#extra-form input.email-control").each(function(){
    $(this).on('input', voterRegistration.emailBind);
  });
  $('#extra-not-district').on('change', voterRegistration.checkboxBind);
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

  $(".resetSign").on('click', voterRegistration.resetSign);

  $(".step-nav-header").on('click', function() {
    voterRegistration.setStep(parseInt($(this).attr("data-step")));
  });

  // skip placeholder step
  voterRegistration.nextStep();

  window.onload = function() {
    if (voterRegistration.data['application-type'] === 'new-functional') {
      document.getElementById('contact-address').parentElement.parentElement.style.display = "none";;
    }
  }

})();
