function Weapon () {
    this.name = '';
    this.type = '';
    this.damagePointsByAttack = 0;
    this.length = 0;
    this.weight = 0;
    this.getName = function () {
        return this.name
    }
    this.getType = function () {
        return this.type
    }
    this.getDamagePointsByAttack = function () {
        return this.damagePointsByAttack
    }
    this.getLength = function () {
        return this.length
    }
    this.getWeight = function () {
        return this.weight
    }
    this.setName = function (value) {
        this.name = value
    }
    this.setType = function (value) {
        this.type = value
    }
    this.setDamagePointsByAttack = function (value) {
        this.damagePointsByAttack = value
    }
    this.setLength = function (value) {
        this.length = value
    }
    this.setWeight = function (value) {
        this.weight = value
    }
}
function createWeapon(name, type, damagePointsByAttack, length, weight) {
    const weapon = new Weapon();
    weapon.setName(name);
    weapon.setType(type);
    weapon.setDamagePointsByAttack(damagePointsByAttack);
    weapon.setLength(length);
    weapon.setWeight(weight);

    return weapon;

}

