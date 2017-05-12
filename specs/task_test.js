var Task = require('../task.js');

var assert = require('assert');

var task1 = new Task("Hard", "High", 1000, false);

describe('Task', function() {

  it("has a difficulty level", function(){
    assert.deepEqual("Hard", task1.difficulty);
  })

  it("has an urgency value", function(){
    assert.deepEqual("High", task1.urgency);
  })

  it("has a reward", function(){
    assert.deepEqual(1000, task1.reward);
  })

  it("has a boolean completion value", function(){
    assert.deepEqual(false, task1.completed);
  })

});

