function checkNameInput() {
    let name = prompt("Entrer le nom de votre personnage :");
    while (typeof(name) !== 'string') {
        name = prompt("Vous devez entrer un string");
    }
    return name;
}

function checkHealthPointsInput() {
    healthPoints =  parseInt(prompt("Entrer le nombre de points de vie pour votre personnage :"));
    while (isNaN(parseInt(healthPoints))) {
        healthPoints = prompt("vous devez entrer un nombre");
    }
    return healthPoints;
}

function checkTeamInput() {
    team =  prompt("Votre personnage appartient à quelle équipe Héro ou Monstre :");
    while (team !== 'Héro' && team !== 'Monstre') {
        team = prompt("Vous devez entrer Héro ou Monstre");
    }
    return team;
}

function createWeapon() {
    return new Weapon(checkWeaponInput(), prompt("Entrer le nom d'arme de votre personnage:"), checkDamagePointsInput(), 45, 500);
}

function checkWeaponInput() {
    weapon = prompt("Entrer le type d'arme à affecter à votre personnage : Épée/Gourdin :");
    while (weapon !== 'Épée' && weapon !== 'Gourdin') {
        weapon = prompt("Vous devez entrer Épée ou Gourdin");
    }
   return weapon;
}

function checkDamagePointsInput() {
    damagePoints =  parseInt(prompt("Entrer le nombre points de dégâts par attaque de l'arme de votre personnage:"));
    while (isNaN(parseInt(damagePoints))) {
        damagePoints = prompt("vous devez entrer un nombre");
    }
    return damagePoints;
}




