function Shield () {
    this.name = 'name';
    this.damagePoints = 10;
    this.weight = 5;
    this.getName = function () {
        return this.name
    }
    this.getDamagePoints = function () {
        return this.damagePoints
    }
    this.getWeight = function () {
        return this.weight
    }
    this.setName = function (value) {
        this.name = value
    }
    this.setDamagePoints = function (value) {
        this.damagePoints = value
    }
    this.setWeight = function (value) {
        this.weight = value
    }
}
function createShield(name, damagePoints, weight) {
    const shield = new Shield();
    shield.setName(name);
    shield.setDamagePoints(damagePoints);
    shield.setWeight(weight);

    return shield;
}
