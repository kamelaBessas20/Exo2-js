const arme1 = createWeapon('Excalibur', 'épée', 0, 40, 500);
const arme2 = createWeapon('L\'abattoir', 'gourdin', 0, 30, 600);
const arme3 = createWeapon('Balisarde', 'épée', 0, 50, 400);


const bouclier1 = createShield('bouclier1', 200, 0);
const bouclier2 = createShield('bouclier2', 210, 10);
const bouclier3 = createShield('bouclier3', 400, 20);

const food1 = createFood('pomme', 50, 10);
const food2 = createFood('raisin', 60, 15);

let weapons = [arme1, arme2, arme3];
let foods = [food1, food2];
let shields = [bouclier1, bouclier2, bouclier3];

function main(){
    let team =[];
    let satchel = [];
    satchel.push(getRandom(weapons));
    satchel.push(getRandom(foods));
    satchel.push(getRandom(shields));
    const hero = createPerson('j1', satchel, 30, 100, 'héro', satchel[0], satchel[1], satchel[2]);
    hero.describe(hero);
    const monstre = createPerson('j2', satchel, 25, 42, 'monstre', satchel[0], satchel[1], satchel[2]);
    monstre.describe(monstre);
    team = [hero, monstre];
    console.log("Game overt : ");
    console.log("Votre jeu se déroule entre : " + hero.name + " et " + monstre.name);
    let attacker = getRandom(team);
    const enemy = team.find(element => element !== attacker);
    doAction(attacker, enemy, 'attack');
    doAction(attacker, enemy, 'defend');
    doAction(attacker, enemy, 'eat');
    /*
    doAction(enemy, attacker, 'attack');
    doAction(enemy, attacker, 'eat');
    doAction(attacker, enemy, 'eat');
    doAction(enemy, attacker, 'eat');
    doAction(enemy, attacker, 'attack');
    doAction(attacker, enemy, 'defend');
    doAction(enemy, attacker, 'attack');
    doAction(attacker, enemy, 'eat');*/

}






