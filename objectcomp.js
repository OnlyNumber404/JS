//object composition



class Character{
    constructor(name,health,position){
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove(){
        console.log(`${this.name} move to ${this.position}`);
    }
}

function canAttack(character){
    return {
        attack: () => {
            console.log(`${character} attacks with a weapon!`);
        }
    }
}

function canDefend(character){
    return {
        defend: () => {
            console.log(`${character} defends with a shield!`);
        }
    }
}

function canCastSpell(character){
    return{
        castSpell: () =>{
            console.log(`${character} cast a spell!`);
        }
    }
}


function createMonster(name){
    const character = new Character(name,100,0);
    return Object.assign(character,canAttack(name));
}

function createGuardian(name){
    const character = new Character(name,100,0);
    return Object.assign(character,canDefend(name));
}

function createWizard(name){
    const character = new Character(name,100,0);
    return Object.assign(character,canCastSpell(name));
}

function createWarrior(name){
    const character = new Character(name,100,0);
    return Object.assign(character,canAttack(name),canDefend(name));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();

const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();

const warior =createWarrior('Warior');
warior.canMove();
warior.attack();
warior.defend();