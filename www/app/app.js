window.App = Ember.Application.create();

App.Router.map(function(){
	this.resource("raffler", { path: '/' });
});

App.RafflerRoute = Ember.Route.extend({
	setupController: function(controller) {
	  return controller.set('content', []);
	}
});

App.Store = DS.Store.extend({
  revision: 11,
  url: "DS.FixtureAdpater"
});

App.RafflerController = Ember.ArrayController.extend({
    newEntry: function() {
      this.pushObject(Ember.Object.create({
        name: this.get('name')
      }));
      return this.set('name', "");
    },

    drawWinner: function() {
      var entry, pool;
      pool = this.rejectProperty('win');
      if (pool.length > 0) {
        entry = pool[Math.floor(Math.random() * pool.length)];
        entry.set('win', true);
      }
    },

    clear1: function() {
     this.clear();
    }
  });



  // });