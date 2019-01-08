// +-------------------------------------------+
// | User Configuration (feel free to edit it) |
// +-------------------------------------------+

var CONFIG_USE_AUTO_LOGIN = true;
var SelectedUser = 0;
var CONFIG_AUTO_LOGIN_USERNAME = {"",""};
var CONFIG_AUTO_LOGIN_PASSWORD = {"",""};
var BuildTechItems = false;
var TechItems = {"" ,"" ,""}


var CONFIG_AUTO_RECONNECT = true;


// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

var SCRIPT_VERSION = "1.1.1";

var TEMPLATE_DIR = "templates/";
var CLIENT_TPL_DIR = TEMPLATE_DIR + "client/";
var MINIMAP_DIR = TEMPLATE_DIR + "minimap/";
var PET_TPL_DIR = TEMPLATE_DIR + "pet/";
var MM_LEVEL_DIR = MINIMAP_DIR + "levels/";
var MM_MAPNAMES_DIR = MINIMAP_DIR + "mapnames/";

var LOGOUT_BUTTON_TPL = new Image(TEMPLATE_DIR + "logout_button.png");
var START_BUTTON_TPL = new Image(CLIENT_TPL_DIR + "start_button.png");

var PET_PLAY_BTN_TPL = new Image(PET_TPL_DIR + "play_button.png");
var PET_STOP_BTN_TPL = new Image(PET_TPL_DIR + "stop_button.png");
var GENERIC_PET_BTN_TPL = new Image(PET_TPL_DIR + "generic_button.png");
var GEAR_DROPDOWN_BTN_TPL = new Image(PET_TPL_DIR + "gear_dropdown_button.png");


var PET_WINDOW_CORNER_TPL = new Image(PET_TPL_DIR + "window_corner.png");
var PET_WINDOW_SIZE = new Size(272, 320); // Including the gear dropdown menu with max gears

var GENERAL_CHECK_TIMEOUT_IN_MS = 1000 * 60 * 3; // Check every 3 minutesvar JGATE_POS = 

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
	}
	
	return location.isValid();
}
var GoToTechLab = function(items){
	return
}
function main() {
	if(SelectedUser==="all"){
		for(var plyernum=0; plyernum){
			AutoLogin();
			GoToSkyLab();
			if(BuildTechItems){
				GoToTechLab(TechItems);
			}
		}
	}else{
		AutoLogin(CONFIG_AUTO_LOGIN_USERNAME[SelectedUser], CONFIG_AUTO_LOGIN_PASSWORD[SelectedUser]);
		if(BuildTechItems){
			GoToTechLab(TechItems);
		}
		GoToSkyLab();
	}
}

main();
