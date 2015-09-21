

  Template.hello.onRendered(function(){
    Session.set('counter', 0);
    Session.set('name','');
  })

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    },
    name : function(){
      return Session.get('name');
    }
  });

  Template.hello.events({
    'keyup #somebodyName' : function(event,template){
      var value = event.currentTarget.value;
      Session.set('name',value);
    },

  });
