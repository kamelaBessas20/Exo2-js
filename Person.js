function Person () {
    this.name = '';
    this.satchel = [];
    this.healthPoints = 0;
    this.endurance = 0;
    this.type = 'héro';
    this.weapon = {};
    this.food = {};
    this.shield = {};
    this.getName = function () {
        return this.name
    }
    this.getSatchel = function () {
       let names =[];
        let objectName = '';
       for(let i = 0 ; i < this.satchel.length; i++ ) {
           objectName = this.satchel[i]['name'];
           names.push(objectName);
       }

       return names;
   }
    this.getHealthPoints = function () {
        return this.healthPoints
    }
    this.getEndurance = function () {
        return this.endurance
    }
    this.getType = function () {
        return this.type
    }
    this.getWeapon = function () {
        return this.weapon.name
    }
    this.getShield = function () {
        return this.shield.name
    }
    this.getFood = function () {
        return this.food
    }
    this.setName = function (value) {
        this.name = value
    }
    this.setHealthPoints = function (value){
        this.healthPoints = value
    }
    this.setEndurance = function (value) {
        this.endurance = value
    }
    this.setType = function (value) {
        this.type = value
    }
    this.setWeapon = function (value) {
        this.weapon = value
    }
    this.setShield = function (value) {
        this.shield = value
    }
    this.setFood = function (value) {
        this.food = value
    }
    this.setSatchel = function (value) {
        this.satchel = value;
    }
    this.describe = function (obj) {
        console.log("Nom de personnage : " + obj.getName());
        console.log("Appartient à l'équipe : " + obj.getType());
        console.log("IL a une endurance  de : " + obj.getEndurance());
        console.log("Nombre de points de vie : " + obj.getHealthPoints());
        console.log("Dans sa sacoche possède : " + obj.getSatchel());
        console.log("Il bat avec : " +  obj.getWeapon());
        console.log("Il se défend par : " +  obj.getShield());

    }
    this.attack = function (cible) {
        let endurance = 0;
        if(this.getHealthPoints() < 0 ){
            console.log(this.name + " n'a plus de points de vie il rejoint le cimetière (ne fait plus partie de l'équipe) " + cible.name + " a gagné la partie");
        }
        if (this.getEndurance() > 0) {
            let healthPoints = cible.healthPoints - 10;
            endurance = this.getEndurance() - ((this.satchel[0]['weight'] * this.satchel[0]['length'])/10000);

            return  { endurance: endurance, healthPoints: healthPoints };
        }else{
            console.log("L'endurance de " + this.name + " atteint zéro il ne pourra pas attacker il pourra que manger ");
        }

    }
    this.defend = function () {
        let endurance = 0;
        if (this.getShield() != null) {
            let healthPoints = this.healthPoints + 5;
            endurance = this.getEndurance() - (this.satchel[0]['weight']/1000);

            return { endurance: endurance, healthPoints: healthPoints }

        }else{
            console.log("Malheureusement " + this.name + " ne possède pas de bouclier ne pourra pas déffendre");
        }
    }
    this.eat = function () {
        let endurance = 0;
        if (this.satchel[1]['name'] != null){
            console.log(this.name + " mange une/des :" + this.satchel[1]['name']);
            endurance = this.getEndurance() + this.satchel[1]['recovery'];
            return endurance
        }else{
            console.log(this.name + " n'a plus de nourriture il ne pourra pas manger" );
        }
    }


}

function createPerson (name, satchel, healthPoints, endurance, type, weapon, food, shield) {
    const person = new Person();
    person.setName(name);
    person.setSatchel(satchel);
    person.setHealthPoints(healthPoints);
    person.setEndurance(endurance);
    person.setType(type);
    person.setWeapon(weapon);
    person.setFood(food);
    person.setShield(shield);

    return person;
}


doAction = function (attacker, cible,  action) {
    switch (action){

        case "attack":
            let attackerEndurance = attacker.attack(cible)['endurance'];
            console.log(attacker.name + " attaque " + cible.name);
            attacker.setEndurance(attackerEndurance);
            console.log("L'endurance de " + attacker.name + " devient " + attackerEndurance);
            let cibleHealthPoints = attacker.attack(cible)['healthPoints'];
            cible.setHealthPoints(cibleHealthPoints);
            console.log("Les Pvs de " + cible.name + " devient " + cibleHealthPoints + " Pvs");
            break;

        case "defend":
            let cibleEndurance = cible.defend()['endurance'];
            console.log(cible.name + " se défend contre " + attacker.name);
            console.log("L'endurance de " + cible.name + " devient " + cibleEndurance);
            let cibleDefendHealthPoints = cible.defend()['healthPoints'];
            cible.setHealthPoints(cibleDefendHealthPoints);
            console.log("Les Pvs de " + cible.name + " deviennent " + cibleDefendHealthPoints + " Pvs");
            break;

        case "eat":
           let attackerEnduranceAfterEat = attacker.eat(attacker.endurance);
            console.log("Son Endurance devient " + attackerEnduranceAfterEat);
            break;
        default:
            console.log("Le personnage n'a plus de Pvs il rejoint le cémitière");
    }

}
