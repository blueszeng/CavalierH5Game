cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    ToCutsceneOne:function(){
        cc.director.loadScene('CutsceneOne');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
