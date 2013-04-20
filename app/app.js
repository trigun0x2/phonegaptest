window.App = Ember.Application.create();

App.Router.map(function(){
	this.resource("about", { path: "/about" });
	this.resource("resume", { path: "/resume"});
	this.resource("tiaoc", { path: '/tiaoc' });
	this.resource("raffler", { path: '/raffler' });
});

App.TiaocRoute = Ember.Route.extend({
	renderTemplate: function(){
		this.render('ticmain',{
			outlet: "main"
		});
	}
});

App.Store = DS.Store.extend({
  revision: 11,
  url: "DS.FixtureAdpater"
});

App.Tiaoc = DS.Model.extend({
	check: DS.attr('integer'),
	circle: DS.attr('integer'),
	message: DS.attr('string')
});

App.RafflerController = Ember.Controller.extend({
    entries: [],
    newEntry: function() {
      this.entries.pushObject({
        name: this.get('name')
      });
      this.set('name', "");
    }
  });