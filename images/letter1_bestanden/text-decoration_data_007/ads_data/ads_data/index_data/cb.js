function runOnInit() {
  function id(input) {
    return document.getElementById(input);
  }

  var doVisualUpdates = true;
	document.addEventListener('visibilitychange', function(){
		doVisualUpdates = !document.hidden;
	});

  var bannerWidth = id('page1').offsetWidth,
		bannerHeight = id('page1').offsetHeight,
		format = bannerWidth + 'x'+ bannerHeight;

	if(format == '120x600' || format == '122x602') format = '120x600';
	if(format == '160x600' || format == '162x602') format = '160x600';
	if(format == '300x600' || format == '302x602') format = '300x600';
	if(format == '200x200' || format == '202x202') format = '200x200';
	if(format == '250x250' || format == '252x252') format = '250x250';
	if(format == '300x250' || format == '302x252') format = '300x250';
	if(format == '336x280' || format == '338x282') format = '336x280';
	if(format == '468x60' || format == '470x62') format = '468x60';
	if(format == '728x90' || format == '730x92') format = '728x90';
	if(format == '970x90' || format == '972x92') format = '970x90';
	if(format == '970x250' || format == '972x252') format = '970x250';

  var logoStartWidth = 90;
	switch(format) {
		case '120x600':
			var min = 17,
				max = 22;
        amountShiftPx = 120;
        isHorizontal = false;
				logoStartWidth = 90;
			break;
		case '160x600':
			var min = 19,
				max = 24;
        amountShiftPx = 160;
        isHorizontal = false;
				logoStartWidth = 90;
			break;
		case '200x200':
			var min = 13,
				max = 20;
        amountShiftPx = 150;
        isHorizontal = false;
				logoStartWidth = 75;
			break;
		case '250x250':
			var min = 17,
				max = 20;
        amountShiftPx = 230;
        isHorizontal = false;
				logoStartWidth = 90;
			break;
		case '300x250':
			var min = 18,
				max = 26;
        amountShiftPx = 300;
        isHorizontal = false;
				logoStartWidth = 90;
			break;
		case '336x280':
			var min = 20,
				max = 29;
        amountShiftPx = 336;
        isHorizontal = false;
				logoStartWidth = 110;
			break;
		case '300x600':
			var min = 19,
				max = 28;
        amountShiftPx = 160;
        isHorizontal = false;
				logoStartWidth = 120;
			break;
		case '728x90':
			var min = 20,
				max = 26;
        amountShiftPx = 90;
        isHorizontal = true;
				logoStartWidth = 70;
			break;
		case '970x90':
			var min = 20,
				max = 26;
        amountShiftPx = 90;
        isHorizontal = true;
				logoStartWidth = 70;
			break;
		case '970x250':
			var min = 20,
				max = 34;
        amountShiftPx = 200;
        isHorizontal = true;
				logoStartWidth = 140;
			break;
	}



	  var logo = id('logo'),
		  logoWidth = logo.offsetWidth,
		  blue = id('blue'),
		  transTime = .3,
		  delayTime = transTime*3,
		  logoPos = logo.getBoundingClientRect(),
		  logoPosX = logoPos.left,
		  logoPosY = logoPos.top,
		  pageOffsetWidth = id('page1').offsetWidth,
		  pageOffsetHeight = id('page1').offsetHeight,
		  logoStartPosX = pageOffsetWidth/2 - logoPosX,
		  logoStartPosY = pageOffsetHeight/2 - logoPosY,
		  blueBarHeight = blue.offsetHeight;

	  TweenMax.set(logo, {
		  x: logoStartPosX,
		  y: logoStartPosY,
		  height: 0,
		  width: 0
	  });

	  TweenMax.set(blue, {
		  y: 0,
		  height: pageOffsetHeight
	  });

	  TweenMax.to(logo, .8, {
		  x: logoStartPosX-logoStartWidth/2,
		  y: logoStartPosY-logoStartWidth/2,
		  height: logoStartWidth,
		  width: logoStartWidth,
		  delay: .25,
		  ease: Elastic.easeOut.config(.75, 0.3)
	  });

	  TweenMax.to(logo, transTime, {
		x: 0,
		y: 0,
		height: logoWidth,
		width: logoWidth,
		delay: delayTime + .4,
		ease: Power1.easeInOut
	  });

	switch(format) {
		case '728x90':
    case '970x90':
    case '970x250':
			var options = {
				y: 0,
				autoAlpha: 0,
				delay: delayTime + .4,
				ease: Power1.easeInOut
			  };
			break;
		default:
			var options = {
				y: 0,
				height: blueBarHeight,
				delay: delayTime + .4,
				ease: Power1.easeInOut
			  };
	}
	TweenMax.to(blue, transTime, options);

  var topProducts = [];
  id('emptyDiv').addEventListener('click', function() {
    var positionTriggers = [Enabler.counter('positie_1', 1), Enabler.counter('positie_2', 1), Enabler.counter('positie_3', 1), Enabler.counter('positie_4', 1), Enabler.counter('positie_5', 1), Enabler.counter('positie_6', 1), Enabler.counter('positie_7', 1), Enabler.counter('positie_8', 1), Enabler.counter('positie_9', 1), Enabler.counter('positie_10', 1)];
    var exitTriggers = [Enabler.counter('exit_1', 1), Enabler.counter('exit_2', 1), Enabler.counter('exit_3', 1), Enabler.counter('exit_4', 1), Enabler.counter('exit_5', 1), Enabler.counter('exit_6', 1), Enabler.counter('exit_7', 1), Enabler.counter('exit_8', 1), Enabler.counter('exit_9', 1), Enabler.counter('exit_10', 1)];
  });

  TweenLite.lagSmoothing(0)

  function readoutFeed() {
    dynamicContent.ProductfeedTop10_NL_ProductIDS.forEach(function(arrayItem) {
      topProducts.push({
        name: arrayItem.name,
        price: arrayItem.priceinvat,
        link: arrayItem.link,
        img: arrayItem.image_link.Url,
        order: arrayItem.weightedsales,
        reviewCount: arrayItem.reviewcount,
        reviewScore: arrayItem.reviewstars.Url
      });
    });
    topProducts.sort(function(a, b) {
      return a.order - b.order
    });
    topProducts = topProducts.slice(0, 10);
  }
  readoutFeed();



  function newText() {

    function id(input) {
      return document.getElementById(input);
    }

    id('producttype').innerHTML = dynamicContent.ProductfeedTop10_NL_ProductIDS[0].Producttype_NL_single_short;

    function adjustHeights(elem) {
      //console.log(elem);
      var fontstep = 1;
      var elemHeight = elem.offsetHeight;
      var elemWidth = elem.offsetWidth;
      var parentHeight = elem.parentElement.offsetHeight;
      var parentWidth = elem.parentElement.offsetWidth;
      var elemFontSize = elem.style.fontSize;
      var elemChildWidth = elem.children[0].offsetWidth;

      //console.log(elem, elemWidth, parentWidth, elemChildWidth);

      if (elemHeight > parentHeight || elemWidth > parentWidth || elemChildWidth > parentWidth) {
        var newFontsize = elemFontSize.substr(0,2)-fontstep + 'px';
        elem.style.fontSize = newFontsize;
        //console.log(elemFontSize, newFontsize);
        adjustHeights(elem);
      }
    }
    var pElement = id('title');
    adjustHeights(pElement);
  }
  newText();


  var output = '';
  var hasBtn = false;
  for (var position = 0; position < 10; position++) {
    var img = topProducts[position].img;
    var name = topProducts[position].name;
    var price = topProducts[position].price;
    var btnClass = 'Btn' + (position + 1);
    var reviewCount = topProducts[position].reviewCount;
    //var reviewScoreImg = "" + (Math.round(topProducts[position].reviewScore) * 10) + ".png";
    var reviewScoreImg = topProducts[position].reviewScore;
    var rank = parseInt(position) + 1;

    switch (format) {
      case '120x600':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '<div class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer info</div>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      case '160x600':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '<div class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer info</div>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      case '300x600':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '<div class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer info</div>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      case '200x200':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<p class="gwd-p-rsel" style="line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price" bind-text="display_top10_nl_laptops.0.price">' + price + '</p>';
        output += '</div>';
        output += '</div>';
        break;
      case '250x250':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<p class="gwd-p-rsel" style="line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price" bind-text="display_top10_nl_laptops.0.price">' + price + '</p>';
        output += '</div>';
        output += '</div>';
        output += '</div>';
        break;
      case '300x250':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price" bind-text="display_top10_nl_laptops.0.price">' + price + '</p>';
        //output += '<img is="gwd-image" src="ctaArrow.png" id="ctaArrow" class="gwd-img-dg6u" style="position: relative; float: left;">';
		output += '<gwd-image source="ctaArrow.svg" id="ctaArrow" class="gwd-img-dg6u" style="position: relative; float: left;" scaling="stretch"></gwd-image>';
        output += '<p class="gwd-p-qpr8" style="position: relative; color: rgb(0, 144, 227); font-family: "Open Sans"; line-height: 100%; float: left;" id="ctaText">Meer informatie</p>';
        output += '</div>';
        output += '</div>';
        break;
      case '336x280':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price" bind-text="display_top10_nl_laptops.0.price">' + price + '</p>';
        //output += '<img is="gwd-image" src="ctaArrow.png" id="ctaArrow" class="gwd-img-dg6u" style="position: relative; float: left;">';
		output += '<gwd-image source="ctaArrow.svg" id="ctaArrow" class="gwd-img-dg6u" style="position: relative; float: left;" scaling="stretch"></gwd-image>';
        output += '<p class="gwd-p-qpr8" style="position: relative; color: rgb(0, 144, 227); font-family: "Open Sans"; line-height: 100%; float: left;" id="ctaText">Meer informatie</p>';
        output += '</div>';
        output += '</div>';
        break;
      case '468x60':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
        output += '<div class="productContent gwd-div-1wmv" id="productContent">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '<div class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer info</div>';
        output += '</div>';
        output += '</div>';
      case '728x90':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		    output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '<p class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '"><gwd-image id="ctaArrow" source="arrow-white.svg" scaling="stretch" class="gwd-image-16us"></gwd-image></p>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      case '970x90':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<div class="cnPC">';
        output += '<div class="inner">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price">' + price + '</p>';
        output += '</div>';
        output += '</div>';
        output += '<p class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer informatie</p>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      case '970x250':
        output += '<div class="product" id="product' + rank + '">';
        output += '<gwd-taparea id="Exit' + rank + '" class="gwd-taparea-zdx1" data-gwd-tl-locked="" data-gwd-tl-hidden=""></gwd-taparea>';
        //output += '<img is="gwd-image" scaling="contain" src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz">';
		output += '<gwd-image src="' + img + '" id="gwd-image_1" class="gwd-img-o8jz" scaling="contain"></gwd-image>';
        output += '<p class="gwd-span-1diz" style="line-height: 100%;">' + rank + '<span class="orangeDot gwd-span-wj5f">.</span></p>';
        output += '<div class="productContent gwd-div-1wmv" id="productContent" style="position: absolute;">';
        output += '<p class="gwd-p-173r" style="position: relative;" id="productName">' + name + '</p>';
        output += '<div class="productItemsReviews">';
        //output += '<img is="gwd-image" scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;">';
        output += '<gwd-image scaling="contain" src="' + reviewScoreImg + '" id="ratingImg" class="gwd-img-1tyh" style="position: relative; vertical-align: middle;"></gwd-image>';
        output += '<span style="font-family:Open Sans;font-size: 10px;margin-left: 4px;vertical-align:  middle;line-height:  12px;color: rgb(0,144,227);">(';
        output += '<span id="productReviewCount">' + reviewCount + '</span>';
        output += ')</span>';
        output += '</div>';
        output += '<p class="gwd-p-rsel" style="vertical-align: text-top; line-height: 100%; position: relative; width: auto; max-width: 122px;" id="price" bind-text="display_top10_nl_laptops.0.price">' + price + '</p>';
        output += '<div class="gwd-p-qpr8 CTA-btn blue" id="' + btnClass + '">Meer informatie</div>';
        output += '</div>';
        output += '</div>';
        hasBtn = true;
        break;
      default:
      break;
    }
  }
  var productsHolder = id('productsHolder');
  productsHolder.innerHTML = output;
  // set for each product the correct exitURL
  var exits = document.getElementsByClassName('gwd-taparea-zdx1');
  for (var i = 0; i < exits.length; i++) {
    exits[i].addEventListener("click", function() {
      var exitId = this.id;
      var position = parseInt(exitId.slice(4)) - 1;
      var exitURL = topProducts[position].link;
      var exitCounter = 'exit_' + (parseInt(position) + 1);
      Enabler.counter(exitCounter, 1);
      Enabler.exitOverride(exitId, exitURL);
    }, false);
  }
  var activeCount = 1;
  var maxCount = topProducts.length;
  var leftNavContainer = id('leftNavWrapper') || id('topNavWrapper');
  var rightNavContainer = id('rightNavWrapper') || id('bottomNavWrapper');
  var slowTrans = .6;
  var quickTrans = .3;
  var oldGone = TweenMax.to(id('product1'), 0, {
    x: 0
  });
  var newArrive = TweenMax.to(id('product1'), 0, {
    x: 0
  });
  /*       var initAnimLeft = TweenMax.to(leftNavContainer, slowTrans, {
          x: -20,
          alpha: 0,
          ease: Power1.easeInOut,
          delay: 1
        });
        var initAnimRight = TweenMax.to(rightNavContainer, slowTrans, {
          x: 20,
          alpha: 0,
          ease: Power1.easeInOut,
          delay: 1
        });
  function disableArrows() {
    if (activeCount === 1) {
      //disable left arrow
      id('navLeftTap').style.display = "none";
      id('leftNav').style.display = "none";
    } else if (activeCount === maxCount) {
      //disable right arrow
      id('navRightTap').style.display = "none";
      id('rightNav').style.display = "none";
    } else {
      id('navLeftTap').style.display = "block";
      id('leftNav').style.display = "inline-block";
      id('navRightTap').style.display = "block";
      id('rightNav').style.display = "inline-block";
    }
  }*/
  var navigationTimerAuto = setTimeout(function() {

  }, 10);

      function disableArrows() {
        console.log(activeCount);
        clearTimeout(navigationTimerAuto);
        if (leftNavWrapper) {
          TweenMax.to(leftNavWrapper, 0.4,{
            autoAlpha: 1
          });
        }
        if (rightNavWrapper) {
          TweenMax.to(rightNavWrapper, 0.4,{
            autoAlpha: 1
          });
        }
        if (activeCount === 1) {
          TweenMax.to(leftNavContainer, quickTrans, {
            autoAlpha: 0,
            ease: Power1.easeInOut
          });
        } else if (activeCount === maxCount) {
          TweenMax.to(rightNavContainer, quickTrans, {
            autoAlpha: 0,
            ease: Power1.easeInOut
          });
        } else {
          TweenMax.to(leftNavContainer, quickTrans, {
            autoAlpha: 1,
            ease: Power1.easeInOut
          });
          TweenMax.to(rightNavContainer, quickTrans, {
            autoAlpha: 1,
            ease: Power1.easeInOut
          });
        }
        navigationTimerAuto = setTimeout(function() {
          clearNavigation();
        }, 3500);
      }
  disableArrows();

  function transProduct(currentNo, nextNo) {
    var shiftPx = '+='+amountShiftPx;
    if (currentNo < nextNo) {
      shiftPx = '-='+amountShiftPx;
    }

    if (isHorizontal) {
      oldGone = TweenMax.to(id('product' + currentNo), quickTrans, {
        y: shiftPx,
        autoAlpha: 0,
        x: 0,
        scale: 1,
        ease: Power1.easeInOut
      });
      newArrive = TweenMax.to(id('product' + nextNo), quickTrans, {
        y: shiftPx,
        autoAlpha: 1,
        x: 0,
        scale: 1,
        ease: Power1.easeInOut
      });
    } else {
      oldGone = TweenMax.to(id('product' + currentNo), quickTrans, {
        x: shiftPx,
        autoAlpha: 0,
        y: 0,
        scale: 1,
        ease: Power1.easeInOut
      });
      newArrive = TweenMax.to(id('product' + nextNo), quickTrans, {
        x: shiftPx,
        autoAlpha: 1,
        y: 0,
        scale: 1,
        ease: Power1.easeInOut
      });
    }
    //disableArrows();
    if (activeCountAutoPlay == 1) {
      autoPlay = false;
    }
    setTimeout(function(){
  		if (autoPlay && doVisualUpdates) {
        if (activeCountAutoPlay == 3) {
          reverse = true;
        }
        if (reverse) {
          activeCount--;
          var nextAutoCount = activeCountAutoPlay - 1;
        } else {
          activeCount++;
          var nextAutoCount = activeCountAutoPlay + 1;
        }
        var theCurrentValue = activeCountAutoPlay
        activeCountAutoPlay = nextAutoCount;
				requestAnimationFrame(function(){
          transProduct(theCurrentValue, nextAutoCount);
          disableArrows();
        });
      }
		}, 3000);
  }

  var navLeftTap = id('navLeftTap') || id('navTopTap');
  var navRightTap = id('navRightTap') || id('navBottomTap');
  var leftNavWrapper = id('leftNavWrapper') || id('topNavWrapper');
  var rightNavWrapper = id('rightNavWrapper') || id('bottomNavWrapper');

  function clearNavigation() {
    if (leftNavWrapper) {
      TweenMax.to(leftNavWrapper, 0.4,{
        autoAlpha: 0
      });
    }
    if (rightNavWrapper) {
      TweenMax.to(rightNavWrapper, 0.4,{
        autoAlpha: 0
      });
    }
  }

  var navigationTimer = setTimeout(function() {
    
  }, 3500);

  id('page1').addEventListener("mouseover", function() {
    autoPlay = false;
    clearTimeout(navigationTimer);
    disableArrows();
  });

  id('page1').addEventListener("mouseout", function() {
    clearTimeout(navigationTimer);
    navigationTimer = setTimeout(function() {
      clearNavigation();
    }, 1000);
  });

  navLeftTap.addEventListener("click", function() {
    if (!oldGone.isActive() || !newArrive.isActive()) {
      //go for transition
      transProduct(activeCount, (activeCount - 1));
      //update active number
      activeCount--;
      disableArrows();
      var counterCount = 'positie_' + activeCount.toString();
      Enabler.counter(counterCount, 1);
    }
  });
  navRightTap.addEventListener("click", function() {
    if (!oldGone.isActive() || !newArrive.isActive()) {
      //go for transition
      transProduct(activeCount, (activeCount + 1));
      //update active number
      activeCount++;
      disableArrows();
      var counterCount = 'positie_' + activeCount.toString();
      Enabler.counter(counterCount, 1);
    }
  });
  var exits = document.getElementsByClassName('gwd-taparea-zdx1');
  if (hasBtn) {
    for (var i = 0; i < exits.length; i++) {
      exits[i].onmouseover = function(event) {
        var area = this.id;
        var index = area.replace(/^\D+/g, '');
        var btn = document.getElementById('Btn' + index);
        btn.className += " hover";
      };
      exits[i].onmouseout = function(event) {
        var area = this.id;
        var index = area.replace(/^\D+/g, '');
        var btn = document.getElementById('Btn' + index);
        btn.className = btn.className.replace(/(?:^|\s)hover(?!\S)/g, '')
      };
    }
  }
  var activeCountAutoPlay = 2;
  var reverse = false;
  var autoPlay = true;
  var autoPlayTimeOut = setTimeout(function(){
		if (!doVisualUpdates || !autoPlay) {
			return;
		}
    activeCount++;
    transProduct(1, 2);
    disableArrows();
	}, 3000);

}
