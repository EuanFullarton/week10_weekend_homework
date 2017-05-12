var Food = require('../food.js');

var assert = require('assert');

var food1 = new Food("Steak", 50, false);

describe('Food', function() {

  it("has a name", function(){
    assert.deepEqual("Steak", food1.name);
  })

  it("has a replenishment value", function(){
    assert.deepEqual(50, food1.replenishment);
  })

  it("has a poisoned value", function(){
    assert.deepEqual(false, food1.poisoned);
  })

});

