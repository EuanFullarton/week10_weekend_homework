// C. Create a constructor to create Food objects.

// Food should have a name
// Food should have a replenishment value


var Food = function(name, replenishment, poisoned) {
  this.name = name;
  this.replenishment = replenishment;
  this.poisoned = poisoned;
}

module.exports = Food;