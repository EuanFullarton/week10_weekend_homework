// Create a constructor to create Rat objects.
// Rats should be able to touch food, if they do the food becomes poisonous.

var Rat = function() {
}

Rat.prototype = {
  touch_food: function(food){
    food.poisoned = true;
  }

};

module.exports = Rat;