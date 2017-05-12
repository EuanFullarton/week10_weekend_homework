var Rat = require('../rat.js');
var Food = require('../food.js');


var assert = require('assert');

var rat = new Rat();
var food1 = new Food("Steak", 50, false);

describe('Rat', function() {

  it("can poison food", function(){
    rat.touch_food(food1);
    assert.deepEqual(true, food1.poisoned);
  })

});