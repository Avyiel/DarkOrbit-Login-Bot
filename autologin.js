// +-------------------------------------------+
// | User Configuration (feel free to edit it) |
// +-------------------------------------------+
//https://shop.bigpoint-payment.com/?req=YToyMDp7czo2OiJkZXNpZ24iO3M6NDoibWF5YSI7czo2OiJpZnJhbWUiO2k6MTtzOjk6Iml0ZW1Hcm91cCI7aToxMDE7czo0OiJpdGVtIjthOjE6e2k6MDtzOjMxOiIxMDFfbWluaWp1ZWdvc19jcF8xLjAwMDBfMF9OT05FIjt9czo3OiJpc0V2ZW50IjtiOjE7czo2OiJ1c2VySUQiO3M6OToiMTY5NDk5ODE2IjtzOjg6InVzZXJuYW1lIjtzOjM1OiLjgI5q44CP44COb%2BOAj%2BOAjmvjgI%2FjgI5l44CP44COcuOAjyI7czo4OiJtZW1iZXJJRCI7czo5OiIzMzMyMjAzODQiO3M6NDoiYnBpZCI7czozMjoiNWJlYzQ0MjJMWXJhZWljRGpWRnczVzBtRnEzc1ZlOEIiO3M6NzoidXNlckFnZSI7aTo0OTtzOjE3OiJyZXF1ZXN0VHJhY2tpbmdJZCI7czoyMzoiNWMzNjczYWJlMDg2YTEuNjEwMzIyMDQiO3M6MTQ6ImZiX2FwcGxpY2F0aW9uIjtiOjA7czo5OiJwcm9qZWN0SUQiO3M6MzoiMTQ1IjtzOjM6ImFpZCI7czozOiI4NjUiO3M6MzoiYWlwIjtzOjA6IiI7czo0OiJsYW5nIjtzOjI6ImVuIjtzOjU6ImJwdGlkIjtzOjMyOiIyY2ZjYTFkZTkxMzBhOTk2ODk5NmRmZjJjNGEwNWQxMyI7czozOiJkZXYiO2I6MDtzOjQ6InRpbWUiO2k6MTU0NzA3MjQyODtzOjEwOiJzZXNzaW9uX2lkIjtzOjMyOiI5MWc1YzM2NzNhY2dhMWE1Y2E4ZzVjMzY3M2FjZDIxZiI7fQ%3D%3D&aid=865&aip=&bptid=2cfca1de9130a9968996dff2c4a05d13&hash=01b7380fb93e654a111a2c916ba6372a&sid=91g5c3673acga1a5ca8g5c3673acd21f&itemGroup=101&action=internalPaymentProxy
//https://shop.bigpoint-payment.com/?req=YToyMDp7czo2OiJkZXNpZ24iO3M6NDoibWF5YSI7czo2OiJpZnJhbWUiO2k6MTtzOjk6Iml0ZW1Hcm91cCI7aToxMDE7czo0OiJpdGVtIjthOjE6e2k6MDtzOjMxOiIxMDFfbWluaWp1ZWdvc19jcF8xLjAwMDBfMF9OT05FIjt9czo3OiJpc0V2ZW50IjtiOjE7czo2OiJ1c2VySUQiO3M6ODoiNjI2ODg5OTAiO3M6ODoidXNlcm5hbWUiO3M6MTI6IkRhcmsuU2hhZG93MSI7czo4OiJtZW1iZXJJRCI7czo5OiIxMzQ3MzUwMzQiO3M6NDoiYnBpZCI7czozMjoiNWMxODFjZmZwNWNlYXNNVFVPU2hLbWdqRFNuWUhvQ0IiO3M6NzoidXNlckFnZSI7aTo0ODtzOjE3OiJyZXF1ZXN0VHJhY2tpbmdJZCI7czoyMzoiNWMzNmNiMGQwYWY5NjIuMDI0Nzc3NTkiO3M6MTQ6ImZiX2FwcGxpY2F0aW9uIjtiOjA7czo5OiJwcm9qZWN0SUQiO3M6MzoiMTQ1IjtzOjM6ImFpZCI7czoxOiIwIjtzOjM6ImFpcCI7czowOiIiO3M6NDoibGFuZyI7czoyOiJlbiI7czo1OiJicHRpZCI7czozMjoiMzU3NTkwMDU3ZjM2NTk5Zjg1NmRiOTJlZjE2OWVkOTEiO3M6MzoiZGV2IjtiOjA7czo0OiJ0aW1lIjtpOjE1NDcwOTQ3OTg7czoxMDoic2Vzc2lvbl9pZCI7czozMjoiOTFnNWMzNmNiMGVnM2JjOGVkZWc1YzM2Y2IwZTFhMDIiO30%3D&aid=0&aip=&bptid=357590057f36599f856db92ef169ed91&hash=315cb0e0b01dd7017dd0133dbbc6c42f&sid=91g5c36cb0eg3bc8edeg5c36cb0e1a02&itemGroup=101&action=internalPaymentProxy
var CONFIG_USE_AUTO_LOGIN = true;
var SelectedUser = "all";
// [user ,password ,sep amount ,promarium amount, ship with the largest cargo capacity the number where ship is located]
var mainaccountsInfo = [["dark.shadow1","slam6550",9100,0,1],["slamangell4","slam0443",9100,0,9]
,["dont*tread*on*me","1234Iamcool",9100,0,5],["--NoFear--","slam0443",0,12900,7],["-*nobo*-","slam0443",0,10000,1],
["angell_of_death","6550slam",0,11100,2],["-MK28-","slam0443",0,10000,1],["-MK28x2-","slam0443",0,10000,1]
,["-nothimagen-","slam0443",0,10800,1],["-nothimagen-","slam0443",0,10800,1]];
var sellUsingPet = false;
var startingAcount = 3;

// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

var SCRIPT_VERSION = "1.1.1";


var TEMPLATE_DIR = "templates/";
var CLIENT_TPL_DIR = TEMPLATE_DIR + "client/";
var MINIMAP_DIR = TEMPLATE_DIR + "minimap/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var SHIPS_DIR = TEMPLATE_DIR + "ships/";
var MM_LEVEL_DIR = MINIMAP_DIR + "levels/";
var MM_MAPNAMES_DIR = MINIMAP_DIR + "mapnames/";



var LOGOUT_BUTTON_TPL = new Image(TEMPLATE_DIR + "logout_button.png");
var START_BUTTON_TPL = new Image(CLIENT_TPL_DIR + "start_button.png");

var PET_PLAY_BTN_TPL = new Image(PET_TPL_DIR + "play_button.png");
var PET_STOP_BTN_TPL = new Image(PET_TPL_DIR + "stop_button.png");
var GENERIC_PET_BTN_TPL = new Image(PET_TPL_DIR + "generic_button.png");
var GEAR_DROPDOWN_BTN_TPL = new Image(PET_TPL_DIR + "gear_dropdown_button.png");
var MINIMIZI_TPL = new Image(TEMPLATE_DIR + "minimize.png");
var XBUTTONS_TPL = new Image(TEMPLATE_DIR + "xbtn2.png");
var X2BUTTONS_TPL = new Image(TEMPLATE_DIR + "exmark.png");

var PET_WINDOW_CORNER_TPL = new Image(PET_TPL_DIR + "window_corner.png");

var AutoLogin = function(username, password) {
	Helper.log("Loading game website...");
	
	Browser.loadUrl("http://darkorbit.com/?lang=en");
	Browser.finishLoading();

	Helper.log("Entering account credentials...");

	var fill_uname_js = "document.getElementById('bgcdw_login_form_username').value = '" + username + "';";
	Browser.executeJavascript(fill_uname_js);
	Helper.sleep(1);
	
	var fill_pword_js = "document.getElementById('bgcdw_login_form_password').value = '" + password + "';";
	Browser.executeJavascript(fill_pword_js);
	Helper.sleep(1);
	
	var formsubmit_js = "document.bgcdw_login_form.submit();";
	Browser.executeJavascript(formsubmit_js);

	Helper.log("Form submitted.");
	Helper.sleep(2);

	Browser.finishLoading();
}

var findAndClick = function(image,screenShot){
	
	if(screenShot===""){
		screenShot = Browser.takeScreenshot();
	}
	var location=Vision.findMatch(screenShot, image, 0.90);
	Helper.log(location.isValid());
	Helper.sleep(4);
	if (location.isValid()) {
		Browser.leftClick(location.getRect().getCenter());
		Helper.log("clicked image");

	}else{

	}
	
	return location.isValid();
}
var GoToTechLab = function(items){
	return
}
var GoToSkyLab = function(){
	var skyLab_url = Browser.getUrl().getHost() + "/indexInternal.es?action=internalSkylab";
	Browser.loadUrl(skyLab_url);
	Browser.finishLoading();
	return
}
var isIngame = function() {
	if (Browser.getUrl().getQuery().indexOf("internalMapRevolution") === -1) {
		Helper.debug("Client not ingame. Url does not contain internalMapRevolution");
		return false;
	}

	var screenshot = Browser.takeScreenshot();
	var logout_button_match = Vision.findMatch(Browser.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);

	Helper.debug("Logout button match (isIngame check):", logout_button_match);
	return logout_button_match.isValid();
}
var GoInToGame = function() {
	var ingame_url = Browser.getUrl().getHost() + "/indexInternal.es?action=internalMapRevolution";

	Browser.loadUrl(ingame_url);
	Browser.finishLoading();
	var btnclicked=false;
	while (true) {
		Helper.log("Waiting for the game to load...")

		var screenshot = Browser.takeScreenshot();
		var start_button_match = Vision.findMatch(screenshot, START_BUTTON_TPL, 0.97);
		
		if (start_button_match.isValid()) {
			Browser.leftClick(start_button_match.getRect().getCenter());
			Helper.log("Game start button clicked.");
			btnclicked=true
		}else{
			if(btnclicked){
				return;
			}
		}

		Helper.sleep(3);
	}
}
var minimiseAllWindows = function() {
	while (true) {
		var screenshot = Browser.takeScreenshot();
		var logout_match = Vision.findMatch(screenshot, LOGOUT_BUTTON_TPL, 0.97);
		if (logout_match.isValid()) {
			break;
		}
	}

	Helper.sleep(5);
	
	while (true) {
		Helper.log("clicked minimise")
		var screenshot = Browser.takeScreenshot();
		var minimize_match = Vision.findMatch(screenshot, MINIMIZI_TPL, 0.95);
		var x_match = Vision.findMatch(screenshot, XBUTTONS_TPL, 0.93);
		var x2_match = Vision.findMatch(screenshot, X2BUTTONS_TPL, 0.93);
		if (minimize_match.isValid()||x_match.isValid()) {
			if(x_match.isValid()){
				x=x_match.getRect().getRight()-3;
				y=x_match.getRect().getTop()+3;
				Browser.leftClick(Point(x,y));
				Helper.log("minimize button clicked.");
			}
			if(x2_match.isValid()){
				x=x2_match.getRect().getRight()-3;
				y=x2_match.getRect().getTop()+3;
				Browser.leftClick(Point(x,y));
				Helper.log("minimize button clicked.");
			}
			if(minimize_match.isValid()){
				x=minimize_match.getRect().getRight()-3;
				y=minimize_match.getRect().getTop()+3;
				Browser.leftClick(Point(x,y));
				Helper.log("minimize button clicked.");
			}
			
		}else{
			return;
		}
		Helper.sleep(1);
	}
}

var PET_SHOW_HIDE_TPL = new Image(PET_TPL_DIR + "petIcon.png");


var TEMPLATE_DIR = "templates/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var REFINING_DIR =TEMPLATE_DIR + "refining/";

var REFINING_TPL = new Image(REFINING_DIR + "refining.png");
var LASER_TPL = new Image(REFINING_DIR + "lasers.png");
var SEPROM_TPL = new Image(REFINING_DIR + "seprom.png");
var UPGRADE_TPL = new Image(REFINING_DIR + "upgradeBtn.png");
var SHOW_MORE_TPL = new Image(REFINING_DIR + "goDown.png");
var SEP_SELECT_TPL = new Image(REFINING_DIR + "downerow.png");
var UPGRADE2_TPL = new Image(REFINING_DIR + "upgradebtn.png");
var AT_MAX_SEP_TPL = new Image(REFINING_DIR + "atBotom.png");
var HIGH_SEP_TPL = new Image(REFINING_DIR + "highSep.png");

var MINIMIZI_TPL = new Image(TEMPLATE_DIR + "minimize.png");
var TRADE_SCREEN_TPL = new Image(TEMPLATE_DIR + "tradeRaw.png");
var SELL_BTN_TPL = new Image(TEMPLATE_DIR + "sellBtn.png");
var PET_PLAY_BTN_TPL = new Image(PET_TPL_DIR + "play_button.png");
var PET_STOP_BTN_TPL = new Image(PET_TPL_DIR + "stop_button.png");
var GEAR_DROPDOWN_BTN_TPL = new Image(PET_TPL_DIR + "gear_dropdown_button.png");
var PET_CARGO_TRADE = new Image(PET_TPL_DIR + "cargoTrade.png");

var LOGOUT_BUTTON_TPL = new Image(TEMPLATE_DIR + "logout_button.png");


var findAndClick = function(image, screenShot, threshold){
	// click center of image
	if(screenShot===""){
		screenShot = Browser.takeScreenshot();
	}
	var location=Vision.findMatch(screenShot, image, threshold);
	Helper.log(location.isValid());
	Helper.sleep(2);
	if (location.isValid()) {
		Browser.leftClick(location.getRect().getCenter());
		Helper.log("clicked image");
	}
	
	return location.isValid();
}
var testImage=function(image){
	screenShot = Browser.takeScreenshot();
	var location=Vision.findMatch(screenShot, image, 0.97);
	return location.isValid();
}
var clickButtonTillEspectedHappens = function(clickImage, expectedImage, stall){
	var loops=0
	while(true){
		Helper.log("clicking the center of an image");
		findAndClick(clickImage,"",0.92);
		Browser.moveMouseTo(new Point(0,0));
		Helper.log("test expected image");
		Helper.sleep(stall);
		if(testImage(expectedImage)){
			return true;
		}
		loops+=1
		if (loops>12){
			return false;
		}
	}
}
var clickAllInstances= function (image){
	while(true){
		if(testImage(image)){
			Helper.log()
			findAndClick(image,"",0.97)
		}else{
			return;
		}

	}
}

var startDragStop = function(startImage,stopImage){
	Helper.sleep(3)
	var screenShot = Browser.takeScreenshot();
	var position=Vision.findMatch(screenShot, startImage, 0.94);
	Browser.pressLeft(position.getRect().getCenter());
	Helper.sleep(2)

	var location=Vision.findMatch(screenShot, stopImage, 0.94);
	Browser.releaseLeft(location.getRect().getCenter());
	Browser.leftClick(location.getRect().getCenter());
}

var TRADE_BUTTON_TPL = new Image(TEMPLATE_DIR + "tradeBtn.png");
var SELL_ICON_TPL = new Image(TEMPLATE_DIR + "sellbtn.png");
var CANT_REFINE_TPL = new Image(REFINING_DIR + "cantRefine.png");
function sellAndUpgrade() {
	var val = true;
	if(sellUsingPet){
		Helper.log("starting pet");
		findAndClick(PET_SHOW_HIDE_TPL,"",0.90);
		Helper.sleep(2);
		findAndClick(PET_PLAY_BTN_TPL,"",0.90);
		Helper.sleep(2);
		findAndClick(GEAR_DROPDOWN_BTN_TPL,"",0.90);
		Helper.sleep(2);
		findAndClick(PET_CARGO_TRADE,"",0.90);
		Helper.sleep(2);
	}
	findAndClick(SELL_ICON_TPL,"",0.90);
	Helper.sleep(2);
	while(true){
		if(testImage(SELL_BTN_TPL)){
			Helper.log();
			findAndClick(SELL_BTN_TPL,"",0.97);
		}else{
			break;
		}
	
	}
		Helper.sleep(2);
		findAndClick(TRADE_BUTTON_TPL,"",0.90);
		Helper.sleep(2);
		findAndClick(PET_STOP_BTN_TPL,"",0.90);
	

	Helper.sleep(2);
	findAndClick(REFINING_TPL,"",0.90);
	Helper.sleep(2);
	findAndClick(UPGRADE_TPL,"",0.90);
	Helper.sleep(2);
	if (!testImage(CANT_REFINE_TPL)){
		startDragStop(SEPROM_TPL,LASER_TPL);
		Helper.log("click sep");
		Helper.sleep(2);
		findAndClick(SEP_SELECT_TPL,"",0.90);
		Helper.sleep(2)
		findAndClick(SHOW_MORE_TPL,"",0.90);
		Helper.sleep(2)
		findAndClick(HIGH_SEP_TPL,"",0.95);
		Helper.sleep(2)
		findAndClick(UPGRADE2_TPL,"",0.97);
	}
	Helper.sleep(2)
	findAndClick(LOGOUT_BUTTON_TPL,"",0.97);
	

	
}

var TEMPLATE_DIR = "templates/";
var SEND_BTN_TPL = new Image(TEMPLATE_DIR + "send.png");





function fillInMatiralAmounts(userNum){
	
	
	var fillInSep = "document.getElementById('module_transportModule_small').click();";
	Browser.executeJavascript(fillInSep);
	Helper.sleep(1);

	var fill_pword_js = "document.getElementById('count_seprom').value = " + mainaccountsInfo[userNum][2] + ";";
	Browser.executeJavascript(fill_pword_js);

	fill_pword_js = "document.getElementById('count_promerium').value = " + mainaccountsInfo[userNum][3] + ";";
	Browser.executeJavascript(fill_pword_js);
	
	Helper.sleep(3)
	findAndClick(SEND_BTN_TPL,"",0.80)

} 


var SHIPS_DIR = TEMPLATE_DIR + "ships/";
var SHIPS = [10 ,28 ,45 ,66 ,80 ,100 ,120 ,140 ,160 ]
var HANGER_TPL = new Image(SHIPS_DIR + "hanger.png");
function GotoSelectShip(shipNum){
	screenShot = Browser.takeScreenshot();
	var location=Vision.findMatch(screenShot, HANGER_TPL, 0.90);
	Helper.log("the ships number is",shipNum);
	Helper.sleep(2);
	var x=location.getRect().getRight();
	var y = location.getRect().getCenter().getY()
	clickpnt=new Point(x+24,y)
	Browser.leftClick(clickpnt)
	Helper.sleep(2);
	
	Browser.moveMouseTo(new Point(40,40));
	Helper.sleep(1);
	Browser.leftClick(new Point(x+SHIPS[shipNum-1],y))
	Helper.sleep(6);
}
function main() {
	if(SelectedUser==="all"){
		numAccounts=mainaccountsInfo.length;
		for(var i=startingAcount; i < numAccounts-1;i++){
			AutoLogin(mainaccountsInfo[i][0], mainaccountsInfo[i][1]);
			GoToSkyLab();
			GoToSkyLab();
			var fillInSep = "document.getElementById('module_transportModule_small').click();";
			Browser.executeJavascript(fillInSep);
			Helper.sleep(1);
			var screenShot = Browser.takeScreenshot();
			
			var location=Vision.findMatch(screenShot,SEND_BTN_TPL, 0.90);
			Helper.log(location.isValid());
			Helper.sleep(1);

			if (location.isValid()) {
				GotoSelectShip(mainaccountsInfo[i][4])
				GoInToGame();
				minimiseAllWindows();
				sellAndUpgrade();
				GoToSkyLab();
				fillInMatiralAmounts(i);
			}
		}
	}else{
		if (Browser.getUrl().getQuery().indexOf("internalMapRevolution") === -1) {
			AutoLogin(mainaccountsInfo[SelectedUser][0], mainaccountsInfo[SelectedUser][1]);
			GoToSkyLab();
			Helper.sleep(2);
			GotoSelectShip(mainaccountsInfo[SelectedUser][4])
			GoInToGame();
		}
		minimiseAllWindows();
		sellAndUpgrade();
		GoToSkyLab()
		fillInMatiralAmounts(SelectedUser)
		
	}
}

main();
