// A. Create a constructor to create a Hero character

// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete

// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
// Heroes that eat poisonous food should lose health.






var Hero = function(name, health, fav_food, tasks) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food;
  this.tasks = tasks;
}

Hero.prototype = {
  talk: function(){
    return "My name is: " + this.name;
  },

  eat: function(food){
    if (food.poisoned === true){
      this.health -= food.replenishment;
    }
    else if (food.name === this.fav_food){
      this.health += (food.replenishment * 1.5);
    }
    else{
      this.health += food.replenishment;
    }
  },

  addTask: function(task){
    this.tasks.push(task);
  },

  sort_tasks_by_difficulty:function(){
    this.tasks.sort(function(task1, task2){
      if (task1.difficulty < task2.difficulty){
        return -1
      }
      else if (task1.difficulty === task2.difficulty){  
        return 0
      }
      else {
        return 1
      }
    })
    return this.tasks;
  },

  sort_tasks_by_urgency: function(){
    this.tasks.sort(function(task1, task2){
      if (task1.urgency < task2.urgency){
        return -1
      }
      else if (task1.urgency === task2.urgency){  
        return 0
      }
      else {
        return 1
      }
    })
    return this.tasks;
  },

  sort_tasks_by_reward: function(){
    this.tasks.sort(function(task1, task2){
      if (task1.reward > task2.reward){
        return -1
      }
      else if (task1.reward === task2.reward){  
        return 0
      }
      else {
        return 1
      }
    });
    return this.tasks;
  },

  view_completed_tasks: function(){
    var completed_tasks = [];
    var completed_tasks = this.tasks.filter(function(task){
      if (task.completed === true){
        completed_tasks.push(task);
        return completed_tasks;
      }
    });
    return completed_tasks;
  },

  view_pending_tasks: function(){
    var pending_tasks = [];
    var pending_tasks = this.tasks.filter(function(task){
      if (task.completed === false){
        pending_tasks.push(task);
        return pending_tasks;
      }
    });
    return pending_tasks;
  }

};

module.exports = Hero;
