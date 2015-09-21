Template.fruits.onRendered(function(){

  Session.setDefault('fruitsList',[]);
})


Template.fruits.helpers({

  basket : function(){
    return Session.get('fruitsList');
  }
})


Template.fruits.events({
  'submit #insertFruits' : function(event,template){
      var fruitName  = event.currentTarget.fruitName.value;
      var countryName = event.currentTarget.countryOrigin.value;


      var fruitsListArr = Session.get('fruitsList');
      fruitsListArr.push({fruit : fruitName,origin : countryName});
      Session.set('fruitsList',fruitsListArr);
      event.currentTarget.fruitName.value = "";
event.currentTarget.countryOrigin.value = "";
      return false;
  }
})
