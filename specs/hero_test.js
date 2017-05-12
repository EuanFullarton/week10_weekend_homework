var Hero = require('../hero.js');
var Food = require('../food.js');
var Task = require('../task.js');
var Rat = require('../rat.js');



var assert = require('assert');

var hero1 = new Hero("Percy", 100, "Steak", []);
var hero2 = new Hero("Fred", 85, "Apple", []);
var food1 = new Food("Apple", 10, false);
var task1 = new Task("Hard", "High", 1000, false);
var task2 = new Task("Easy", "Low", 150, false);
var task3 = new Task("Medium", "Medium", 400, true);
var rat = new Rat();


describe('Hero', function() {

  it("has a name", function(){
    assert.deepEqual("Percy", hero1.name);
  })

  it("has a health value", function(){
    assert.deepEqual(100, hero1.health);
  })

  it("has a favourite food", function(){
    assert.deepEqual("Steak", hero1.fav_food);
  })

  it("has a task list", function(){
    assert.deepEqual([], hero1.tasks);
  })

  it("can talk", function(){
    assert.deepEqual("My name is: Percy", hero1.talk());
  })

  it("can eat food", function(){
    hero1.eat(food1);
    assert.deepEqual(110, hero1.health);
  })

  it("gets a health bonus when eating favourite food", function(){
    hero2.eat(food1);
    assert.deepEqual(100, hero2.health);
  })

  it("can add task to list", function(){
    hero1.addTask(task1);
    hero1.addTask(task2);
    assert.deepEqual(2, hero1.tasks.length);
  })

  it("can sort tasks by difficulty (Easy -> Hard)", function(){
    assert.deepEqual([task2, task1], hero1.sort_tasks_by_difficulty());
  })

  it("can sort tasks by urgency (High -> Low)", function(){
    assert.deepEqual([task1, task2], hero1.sort_tasks_by_urgency());
  })

  it("can sort tasks by reward (High -> Low)", function(){
    assert.deepEqual([task1, task2], hero1.sort_tasks_by_reward());
  })

  it("can view completed tasks", function(){
    hero1.addTask(task3);
    assert.deepEqual([task3], hero1.view_completed_tasks());
  })

  it("can view pending tasks", function(){
    assert.deepEqual([task1, task2], hero1.view_pending_tasks());
  })

  it("loses health if eats poisoned food", function(){
    rat.touch_food(food1);
    hero1.eat(food1);
    assert.deepEqual(100, hero1.health);
  })

});

