alert('SceneSceneAF.js loaded');

function SceneSceneAF() {

};

SceneSceneAF.prototype.initialize = function () {
	alert("SceneSceneAF.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneAF.prototype.handleShow = function (data) {
	alert("SceneSceneAF.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneAF.prototype.handleHide = function () {
	alert("SceneSceneAF.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneAF.prototype.handleFocus = function () {
	alert("SceneSceneAF.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneAF.prototype.handleBlur = function () {
	alert("SceneSceneAF.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneAF.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneAF.handleKeyDown(" + keyCode + ")");
	// TODO : write an key event handler when this scene get focued
	switch (keyCode) {
		case sf.key.LEFT:
			break;
		case sf.key.RIGHT:
			break;
		case sf.key.UP:
			break;
		case sf.key.DOWN:
			break;
		case sf.key.ENTER:
			break;
		case sf.key.RETURN:
			event.preventDefault();
			sf.scene.hide('SceneAF');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
