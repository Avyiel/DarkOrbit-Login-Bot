// +-------------------------------------------+
// | User Configuration (feel free to edit it) |
// +-------------------------------------------+

// Currently supported languages: EN, DE
const LANGUAGE = 'EN';

// Remember: on JavaScript, we start counting at 0
// That means the 3rd account's index is actually 2
const SELECTED_USER = 'ALL';

// You may have as many accounts as you want. Just copy/paste and edit
const ACCOUNTS = [
  {
    username: '',         // Enter your username between quotes -> ''
    password: '',         // Enter your password between quotes -> ''
    hangar: 1,            // The hangar with the biggest cargo space
    sellOre: false,       // Should the bot sell ALL the ore?
    upgradeLasers: true,  // Should the bot upgrade lasers with ALL the Seprom?
    sellWithPet: true,    // Should be bot user the PET trade gear to sell?
    seprom: 9100,         // How much Seprom to send
    promerium: 0,         // How much Promerium to send
  },
];

// Whether the game will auto start or not
const AUTO_START = true;

// +---------------------------------------------------------------------+
// | Templates and Data (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +---------------------------------------------------------------------+

const SCRIPT_VERSION = '0.5.1';


const TEMPLATE_DIR = 'templates/';
const CLIENT_TPL_DIR = TEMPLATE_DIR + 'client/';
const PET_TPL_DIR = TEMPLATE_DIR + 'pet/';
const REFINING_DIR = TEMPLATE_DIR + 'refining/';
const TRADE_DIR = TEMPLATE_DIR + 'trade/';

const START_BUTTON_TPL = new Image(CLIENT_TPL_DIR + 'start_button.png');
const LOGOUT_BUTTON_TPL = new Image(CLIENT_TPL_DIR + 'logout_button.png');
const MINIMIZE_TPL = new Image(CLIENT_TPL_DIR + 'minimize_button.png');
const XBUTTONS_TPL = new Image(CLIENT_TPL_DIR + 'close_button.png');
const X2BUTTONS_TPL = new Image(CLIENT_TPL_DIR + 'close_button_two.png');
const LOADING_SPINNER_TPL = new Image(CLIENT_TPL_DIR + 'loading_spinner.png');

const PET_ICON_TPL = new Image(PET_TPL_DIR + 'pet_icon.png');
const PET_PLAY_BTN_TPL = new Image(PET_TPL_DIR + 'start_button.png');
const PET_STOP_BTN_TPL = new Image(PET_TPL_DIR + 'stop_button.png');
const PET_GEAR_BTN_TPL = new Image(PET_TPL_DIR + 'gear_dropdown_button.png');
const PET_CARGO_TRADE = new Image(PET_TPL_DIR + 'trade_dropdown_entry.png');

const REFINING_TPL = new Image(REFINING_DIR + 'refine.png');
const LASER_TPL = new Image(REFINING_DIR + 'lasers.png');
const SEPROM_TPL = new Image(REFINING_DIR + 'seprom.png');
const SEPROM_EMPTY = new Image(REFINING_DIR + 'seprom_empty.png');
const SELECT_QTY_DROPDOWN_TPL = new Image(REFINING_DIR + 'qty_dropdown.png');
const SCROLL_DOWN_TPL = new Image(REFINING_DIR + 'scroll_down.png');
const NO_SCROLL_DROPDOWN_TPL = new Image(REFINING_DIR + 'no_scroll_dropdown.png');
const MAX_SEPROM_TPL = new Image(REFINING_DIR + 'max_seprom.png');
var UPGRADE_BUTTON_TPL = new Image(REFINING_DIR + 'upgrade_button.png');
var UPGRADE_BUTTON_ON_TPL = new Image(REFINING_DIR + 'upgrade_button_on.png');
var UPGRADE_BUTTON_OFF_TPL = new Image(REFINING_DIR + 'upgrade_button_off.png');

const TRADE_ICON_TPL = new Image(TRADE_DIR + 'trade_button.png');
const TRADE_WINDOW_CORNER_TPL = new Image(TRADE_DIR + 'trade_window_corner.png');
var SELL_BUTTON_TPL = new Image(TRADE_DIR + 'sell_button.png');

if (LANGUAGE === 'DE') {
  UPGRADE_BUTTON_TPL = new Image(REFINING_DIR + 'upgrade_button.de.png');
  UPGRADE_BUTTON_ON_TPL = new Image(REFINING_DIR + 'upgrade_button_on.de.png');
  UPGRADE_BUTTON_OFF_TPL = new Image(REFINING_DIR + 'upgrade_button_off.de.png');
  SELL_BUTTON_TPL = new Image(TRADE_DIR + 'sell_button.de.png');
}

// +-----------------------------------------------------------------+
// | Business Logic (DON'T TOUCH ANYTHING BELOW THIS LINE AS A USER) |
// +-----------------------------------------------------------------+

function findAndClick(image, ss, threshold) {
  const screenshot = ss || Browser.takeScreenshot();
  const location = Vision.findMatch(screenshot, image, threshold);

  Helper.sleep(2);

  if (location.isValid()) {
    Browser.leftClick(location.getRect().getCenter());
  }

  return location.isValid();
}

function autoLogin(username, password) {
  Helper.log('Loading game website...');

  Browser.loadUrl('http://darkorbit.com/?lang=en');
  Browser.finishLoading();

  Helper.log('Entering account credentials...');

  const fillUnameJs = "document.getElementById('bgcdw_login_form_username').value = '" + username + "';";
  Browser.executeJavascript(fillUnameJs);
  Helper.sleep(1);

  const fillPasswJs = "document.getElementById('bgcdw_login_form_password').value = '" + password + "';";
  Browser.executeJavascript(fillPasswJs);
  Helper.sleep(1);

  const submitFormJs = 'document.bgcdw_login_form.submit();';
  Browser.executeJavascript(submitFormJs);

  Helper.log('Form submitted.');
  Helper.sleep(2);

  Browser.finishLoading();
}

function logout() {
  Browser.loadUrl('http://darkorbit.com/indexInternal.es?action=externalLogout');
  Browser.finishLoading();
}

function isImagePresent(image, score) {
  screenshot = Browser.takeScreenshot();
  const match = Vision.findMatch(screenshot, image, score);
  Helper.debug(match, score);
  return match.isValid();
}

function dragAndDrop(startImage, stopImage) {
  const startPos = Vision.findMatch(Browser.takeScreenshot(), startImage, 0.94);
  const endPos = Vision.findMatch(Browser.takeScreenshot(), stopImage, 0.94);

  Browser.pressLeft(startPos.getRect().getCenter());
  Helper.sleep(2);
  Browser.moveMouseTo(endPos.getRect().getCenter());
  Helper.sleep(2);
  Browser.releaseLeft(endPos.getRect().getCenter());
  Helper.msleep(500);
  Browser.leftClick(endPos.getRect().getCenter());
}

function waitForLoadingSpinner() {
  var loading = true;
  while (loading) {
    loading = isImagePresent(LOADING_SPINNER_TPL, 0.90);
    Helper.sleep(1);
  }
}

function isIngame() {
  if (Browser.getUrl().getQuery().indexOf('internalMapRevolution') === -1) {
    Helper.debug('Client not ingame. Url does not contain internalMapRevolution');
    return false;
  }

  const logoutButtonMatch = Vision.findMatch(Browser.takeScreenshot(), LOGOUT_BUTTON_TPL, 0.99);

  Helper.debug('Logout button match (isIngame check):', logoutButtonMatch);
  return logoutButtonMatch.isValid();
}

function openGameMap() {
  var ingame = false;
  var startPressed = false;
  const ingameUrl = Browser.getUrl().getHost() + '/indexInternal.es?action=internalMapRevolution';

  Browser.loadUrl(ingameUrl);
  Browser.finishLoading();
  Helper.sleep(5);

  while (!ingame) {
    Helper.log('Waiting for the game to load...');

    const startButtonMatch = Vision.findMatch(Browser.takeScreenshot(), START_BUTTON_TPL, 0.97);

    if (AUTO_START || startPressed) {
      ingame = isIngame();
    } else if (startButtonMatch.isValid()) {
      Helper.debug('Searching for start button', startButtonMatch);
      Browser.leftClick(startButtonMatch.getRect().getCenter());
      Helper.log('Game start button clicked.');
      startPressed = true;
    }

    Helper.sleep(3);
  }
  Helper.sleep(3);
}

function minimizeAllWindows() {
  var anyMatched = true;
  while (anyMatched) {
    const screenshot = Browser.takeScreenshot();
    const minimizeMatch = Vision.findMatch(screenshot, MINIMIZE_TPL, 0.95);
    const xMatch = Vision.findMatch(screenshot, XBUTTONS_TPL, 0.93);
    const x2Match = Vision.findMatch(screenshot, X2BUTTONS_TPL, 0.93);

    anyMatched = xMatch.isValid() || x2Match.isValid() || minimizeMatch.isValid();
    if (anyMatched) {
      if (xMatch.isValid()) {
        x = xMatch.getRect().getRight() - 3;
        y = xMatch.getRect().getTop() + 3;
        Browser.leftClick(Point(x, y));
        Helper.log('Minimize button clicked.');
      }
      if (x2Match.isValid()) {
        x = x2Match.getRect().getRight() - 3;
        y = x2Match.getRect().getTop() + 3;
        Browser.leftClick(Point(x, y));
        Helper.log('Minimize button clicked.');
      }
      if (minimizeMatch.isValid()) {
        x = minimizeMatch.getRect().getRight() - 3;
        y = minimizeMatch.getRect().getTop() + 3;
        Browser.leftClick(Point(x, y));
        Helper.log('Minimize button clicked.');
      }
    }

    Helper.sleep(1);
  }
  Helper.log('All windows minimized.');
}

function upgradeLasers() {
  findAndClick(REFINING_TPL, null, 0.90);
  Helper.sleep(1);

  if (!isImagePresent(UPGRADE_BUTTON_ON_TPL, 0.99)) {
    findAndClick(UPGRADE_BUTTON_OFF_TPL, null, 0.95);
    Helper.sleep(1);
  }

  if (isImagePresent(SEPROM_EMPTY, 0.97)) {
    Helper.log('No Seprom on ship. Skipping step...');
    return false;
  }

  dragAndDrop(SEPROM_TPL, LASER_TPL);
  Helper.sleep(2);
  findAndClick(SELECT_QTY_DROPDOWN_TPL, null, 0.90);
  Helper.sleep(2);
  if (isImagePresent(NO_SCROLL_DROPDOWN_TPL, 0.9)) {
    const noScrollMatch = Vision.findMatch(Browser.takeScreenshot(), NO_SCROLL_DROPDOWN_TPL, 0.95);
    if (noScrollMatch.isValid()) {
      const x = noScrollMatch.getRect().getRight() - 30;
      const y = noScrollMatch.getRect().getBottom() - 10;
      Browser.leftClick(Point(x, y));
    }
  } else {
    findAndClick(SCROLL_DOWN_TPL, null, 0.90);
    Helper.sleep(2);
    findAndClick(MAX_SEPROM_TPL, null, 0.95);
  }
  Helper.sleep(2);
  findAndClick(UPGRADE_BUTTON_TPL, null, 0.90);

  return true;
}

function sellOre(sellWithPet) {
  var sold = false;

  if (sellWithPet) {
    Helper.log('Starting up pet.');
    findAndClick(PET_ICON_TPL, null, 0.90);
    Helper.sleep(1);
    findAndClick(PET_PLAY_BTN_TPL, null, 0.90);
    Helper.sleep(1);
    findAndClick(PET_GEAR_BTN_TPL, null, 0.90);
    Helper.sleep(1);
    Helper.log('Opening Trade window.');
    findAndClick(PET_CARGO_TRADE, null, 0.90);
    Helper.sleep(1);
  } else if (isImagePresent(TRADE_ICON_TPL, 0.9)) {
    Helper.log('Opening Trade window.');
    findAndClick(TRADE_ICON_TPL, null, 0.90);
    Helper.sleep(1);
  } else {
    Helper.log('Not near Trade base, skipping ore sale.');
    return false;
  }

  while (!sold) {
    if (isImagePresent(SELL_BUTTON_TPL, 0.99)) {
      Helper.log('Selling ore...');
      findAndClick(SELL_BUTTON_TPL, null, 0.99);
    } else {
      Helper.log('No more ore to sell.');
      sold = true;
    }
  }

  Helper.sleep(2);
  findAndClick(TRADE_WINDOW_CORNER_TPL, null, 0.90);
  Helper.sleep(2);

  if (sellWithPet) {
    findAndClick(PET_STOP_BTN_TPL, null, 0.90);
    Helper.sleep(1);
    findAndClick(PET_ICON_TPL, null, 0.90);
  }

  return true;
}

function goToSkylab() {
  const skylabUrl = Browser.getUrl().getHost() + '/indexInternal.es?action=internalSkylab';
  Browser.loadUrl(skylabUrl);
  Browser.finishLoading();
  Helper.sleep(2);
}

function fillMaterialAmounts(userIdx) {
  const openTransportModule = "Skylab.showModule('transportModule');";
  const sendMaterials = "Skylab.sendTransport('normal');";
  const fillSepromAmount = "document.getElementById('count_seprom').value = " + ACCOUNTS[userIdx].seprom + ';';
  const fillPromAmount = "document.getElementById('count_promerium').value = " + ACCOUNTS[userIdx].promerium + ';';

  Browser.executeJavascript(openTransportModule);
  Helper.sleep(1);
  Browser.executeJavascript(fillSepromAmount);
  Browser.executeJavascript(fillPromAmount);
  Helper.sleep(1);
  Browser.executeJavascript(sendMaterials);
  Helper.sleep(3);
}

function selectHangar(hangarIdx) {
  const clickHangarIdx = "document.getElementsByClassName('header_hangar_slot')[" + (hangarIdx - 1) + '].click();';
  Helper.debug('Opening hangar with JS:', clickHangarIdx);
  Browser.executeJavascript(clickHangarIdx);
  Helper.sleep(2);
  Browser.finishLoading();
  waitForLoadingSpinner();
}

function runScriptLogic(userIdx) {
  Helper.log('Logging in automatically to account #', userIdx);
  autoLogin(ACCOUNTS[userIdx].username, ACCOUNTS[userIdx].password);
  Helper.log('Logged in automatically.');

  Helper.log('Finishing up previous transfers...');
  goToSkylab();
  Helper.log('Finished up previous transfers.');

  Helper.log('Selecting target Hangar...');
  selectHangar(ACCOUNTS[userIdx].hangar);
  Helper.log('Selected target Hangar.');

  Helper.log('Opening game map...');
  openGameMap();
  Helper.log('Opened game map.');

  minimizeAllWindows();

  if (ACCOUNTS[userIdx].sellOre) {
    Helper.log('Selling ore...');
    sellOre(ACCOUNTS[userIdx].sellWithPet);
    Helper.log('Sold ore.');
  } else {
    Helper.log('Selling ore disabled, skipping.');
  }

  if (ACCOUNTS[userIdx].upgradeLasers) {
    Helper.log('Upgrading lasers with Seprom...');
    upgradeLasers();
    Helper.log('Upgraded lasers with Seprom.');
  } else {
    Helper.log('Upgrading lasers with Seprom disabled, skipping.');
  }

  Helper.log('Transfering ore to ship...');
  goToSkylab();
  goToSkylab();
  fillMaterialAmounts(userIdx);
  Helper.log('Transfered ore to ship.');

  Helper.sleep(1);

  Helper.log('Logging out of account #', userIdx);
  logout();
  Helper.log('Logged out.');
}

function main() {
  // +--------------------------+
  // | Inform and warn the user |
  // +--------------------------+
  var idx;

  Helper.log('Used script version:', SCRIPT_VERSION, '(You have to check for updates manually)');

  if (SELECTED_USER === 'ALL') {
    // +---------------------------------+
    // | Run the script for all accounts |
    // +---------------------------------+

    Helper.log('Running script for all accounts:', ACCOUNTS.length);

    const numAccs = ACCOUNTS.length;
    for (idx = 0; idx < numAccs; idx += 1) {
      Helper.log('Running for account #', idx);
      runScriptLogic(idx);
      Helper.log('Finished running for account #', idx);
    }
  } else {
    // +------------------------------------------+
    // | Run the script only for selected account |
    // +------------------------------------------+
    Helper.log('Running script ONLY for account #', SELECTED_USER);
    runScriptLogic(SELECTED_USER);
    Helper.log('Finished running script ONLY for account #', SELECTED_USER);
  }
}

main();
