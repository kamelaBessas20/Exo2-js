class personage {
    constructor(name, healthPoints, weapon, type, satchel, shield, endurance, foods) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.weapon = weapon;
        this.type = type;
        this.satchel = satchel;
        this.shield = shield;
        this.endurance = endurance;
        this.food = foods;
    }
}

let hero = new personage('Arthur', 30, 'arme3', 'Héro', satchel('arme1', 'arme2', 'arme3' , ['pomme', 'raisin']), null, 100 );
let monstre = new personage('Grum', 25, 'arme1', 'Monstre', satchel('arme1', 'bouclier1', 'bouclier2', ['pomme', 'raisin']), 'bouclier2', 42);


function doAction(){

}

function attack(){

}


function defend(){

}


function eat(){

}