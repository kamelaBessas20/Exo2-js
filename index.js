
function buildPersonage(){
    return new Personnages(checkNameInput(), checkHealthPointsInput(), createWeapon(), checkTeamInput());
}

function buildTeam () {
    let teams =[];
    for( let i = 1; i<= 2; i++){
        teams.push(buildPersonage());
    }
    return teams;
}

function receive(defender) {
    let dammage = 0;
    for(let i=0; i< defender.length; i++){
        console.log(defender[i]+' défend');
        dammage = defender[i].healthPoints - 5;
        console.log(defender[i].name + ' a perdu 5 points son nombre de Pvs est : ' + dammage);
    }
    return dammage;
}

function getRandom(array){
    return  array[Math.floor(Math.random() * array.length)];

}

function attack(attacker) {
    if(attacker.healthPoints > 0) {
        console.log(attacker.name + ' attaque');
    } else {
        console.log(attacker.name + " n'a plus de Pvs il rejoint la cimetière");
    }
}

function main() {
    let team = buildTeam();
    console.log(team);
    let hero = team.filter(team => team.type === 'Héro');
    console.log(hero);
    let monster = team.filter(team => team.type === 'Monstre');
    console.log(monster);
    random = getRandom(team);
    let response = prompt('Voulez vous jouer un tour Oui/Non');
        if (response === 'Oui') {
            attack(random);
            switch (random.type) {
                case 'monstre':
                    pvsHeros = receive(hero);
                    break;
                case 'hero':
                    pvsHeros = receive(monster);
                    break;
                default:
                    console.log("Désolé cette équipe n'existe pas");
            }
        } else {
            console.log('Pas grave la prochaine fois');
        }

}
main();
















