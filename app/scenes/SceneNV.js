alert('SceneSceneNV.js loaded');

function SceneSceneNV() {

};

SceneSceneNV.prototype.initialize = function () {
	alert("SceneSceneNV.initialize()");
	// this function will be called only once when the scene manager show this scene first time
	// initialize the scene controls and styles, and initialize your variables here
	// scene HTML and CSS will be loaded before this function is called

};

SceneSceneNV.prototype.handleShow = function (data) {
	alert("SceneSceneNV.handleShow()");
	// this function will be called when the scene manager show this scene
};

SceneSceneNV.prototype.handleHide = function () {
	alert("SceneSceneNV.handleHide()");
	// this function will be called when the scene manager hide this scene
};

SceneSceneNV.prototype.handleFocus = function () {
	alert("SceneSceneNV.handleFocus()");
	// this function will be called when the scene manager focus this scene
};

SceneSceneNV.prototype.handleBlur = function () {
	alert("SceneSceneNV.handleBlur()");
	// this function will be called when the scene manager move focus to another scene from this scene
};

SceneSceneNV.prototype.handleKeyDown = function (keyCode) {
	alert("SceneSceneNV.handleKeyDown(" + keyCode + ")");
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
			sf.scene.hide('SceneNV');
			sf.scene.show('Scene2');
			sf.scene.focus('Scene2');
			break;
		default:
			alert("handle default key event, key code(" + keyCode + ")");
			break;
	}
};
