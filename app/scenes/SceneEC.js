alert('SceneSceneEC.js loaded');

function SceneSceneEC() {

};

SceneSceneEC.prototype.initialize = function () {
	alert("SceneSceneEC.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneEC.prototype.handleShow = function (data) {
	alert("SceneSceneEC.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneEC.prototype.handleHide = function () {
	alert("SceneSceneEC.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneEC.prototype.handleFocus = function () {
	alert("SceneSceneEC.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneEC.prototype.handleBlur = function () {
	alert("SceneSceneEC.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneEC.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneEC.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('SceneEC');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
