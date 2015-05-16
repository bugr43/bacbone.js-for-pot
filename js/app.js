var Game = Backbone.Model.extend({
    initialize: function(){
        console.log("Oh hey!");
    },
    defaults: {
        name: "Default title",
        releaseDate: 2015
    }
});

var GameCollection = Backbone.Collection.extend({
    model: Game,
    url: "/games",
    old: function(){
        return this.filter(function(game){
            return game.get("releaseDate") < 2009;
        })
    }
});

var GameView = Backbone.View.extend({
    tagName: 'div',
    className: 'game',
    events: {
        'click .name': 'handleClick'
    },
    handleClick: function(){
        console.log('In the name of science... you monster');
    },
    initialize: function(args){
        //_.bindAll(this, 'name');
        //this.model.bind('change:name', this.name);
    },
    render: function(){
        //this.el.innerHTML = this.model.get('name');
        $(this.el).html(this.model.get('name'));
    }
});

var Hashbangs = Backbone.Router.extend({
   routes: {
       "": "root",
       "/games": "games"
   },
    root: function(){

    },
    games: function(){

    }

});


Backbone.history.start();

var portal = new Game({name: "Portal 2", releaseDate: 2011});
var portalView = new GameView(portal);
var games = new GameCollection;
var route = Hashbangs();
//games.fetch();
//portal.save();