function Food () {
    this.name = 'pomme';
    this.recovery = 10;
    this.weight = 5;
    this.getName = function () {
        return this.name
    }
    this.getRecovery = function () {
        return this.recovery
    }
    this.getWeight = function () {
        return this.weight
    }
    this.setName = function (value) {
        this.name = value
    }
    this.setRecovery = function (value) {
        this.recovery = value
    }
    this.setWeight = function (value) {
        this.weight = value
    }
}

function createFood(name, weight, recovery) {
    const food =  new Food();
    food.setName(name);
    food.setWeight(weight);
    food.setRecovery(recovery);

    return food;
}
