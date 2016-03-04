alert('SceneSceneAB.js loaded');

function SceneSceneAB() {

};

SceneSceneAB.prototype.initialize = function () {
	alert("SceneSceneAB.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneAB.prototype.handleShow = function (data) {
	alert("SceneSceneAB.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneAB.prototype.handleHide = function () {
	alert("SceneSceneAB.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneAB.prototype.handleFocus = function () {
	alert("SceneSceneAB.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneAB.prototype.handleBlur = function () {
	alert("SceneSceneAB.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneAB.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneAB.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('SceneAB');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
