var NUMBER_OF_VISITTED_KEY="NUMBER_OF_VISITTED";var numberOfVisitted=0;if(window.localStorage&&localStorage.getItem(NUMBER_OF_VISITTED_KEY)!=null){numberOfVisitted=parseInt(window.localStorage&&localStorage.getItem(NUMBER_OF_VISITTED_KEY));}
numberOfVisitted++;window.localStorage&&localStorage.setItem(NUMBER_OF_VISITTED_KEY,numberOfVisitted);if(numberOfVisitted>=4){OneSignal.push(function(){OneSignal.registerForPushNotifications();});}
var isInMobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);var isIniOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;var ua=navigator.userAgent.toLowerCase();var isInAndroid=ua.indexOf("android")>-1;if(isIniOS){$("#cftg_app_ios").show();}
else
$("#cftg_app_ios").hide();if(isInAndroid){$("#cftg_app_android").show();}
else
$("#cftg_app_android").hide();$('input').keyup(function(event){if(event.which===13){$(this).blur();}});