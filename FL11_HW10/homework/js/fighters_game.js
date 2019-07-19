//1) Create a Fighter:
class Fighter {
    constructor({ name, damage, agility, health }) {
        this.name = name;
        this.damage = damage;
        this.agility = agility;
        this.health = health;
        this.win = 0;
        this.lose = 0;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.health;
    }
    attack(defender) {
        let maxAttack = 100;
        let attackSuccess = maxAttack - defender.getAgility();
        let possibleAttackSuccess = Math.floor(Math.random() * maxAttack);
        if (possibleAttackSuccess <= attackSuccess) {
            defender.dealDamage(this.getDamage());
            console.log(this.name + ' make ' + this.damage + ' damage to ' + defender.name);
        } else {
            console.log(this.name + ' attack missed ');
        }
    }
    logCombatHistory() {
        console.log('Name: ' + this.name + ' Wins: ' + this.win + ',' + ' Losses: ' + this.lose);
    }
    heal(healthLevel) {
        let maxHealth = 100;
        this.health = this.health + healthLevel;
        if (this.health > maxHealth) {
            this.health = maxHealth;
        }
    }
    dealDamage(damage) {
        this.health = this.health - damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    addWin() {
        return this.win++;
    }

    addLose() {
        return this.lose++;
    }
}

function battle(warriorOne, warriorTwo) {
    while (warriorOne.health > 0 && warriorTwo.health > 0) {
        if (warriorOne.health > 0 || warriorTwo.health > 0) {
            warriorOne.attack(warriorTwo);
        }
        if (warriorOne.health > 0 || warriorTwo.health > 0) {
            warriorTwo.attack(warriorOne);
        }
        if (warriorOne.health === 0) {
            console.log(`${warriorOne.name} is dead and can't fight!`);
        }
        if (warriorTwo.health === 0) {
            console.log(`${warriorTwo.name} is dead and can't fight!`);
        }
    }
    if (warriorOne.health > 0) {
        warriorOne.addWin();
        warriorOne.addLose();
    }
    if (warriorTwo.health > 0) {
        warriorTwo.addWin();
        warriorTwo.addLose();
    }
}

const myFighter = new Fighter({ name: 'John', damage: 20, agility: 25, health: 100 });
const myFighter2 = new Fighter({ name: 'Sam', damage: 10, agility: 40, health: 120 });

let firstName = myFighter.getName();
console.log(myFighter.getName());

let secondName = myFighter2.getName();
console.log(secondName);

myFighter.attack(myFighter2);
myFighter2.attack(myFighter);


console.log('Health fighter ' + myFighter.getName() + ': ' + myFighter.getHealth());
console.log('Health fighter ' + myFighter2.getName() + ': ' + myFighter2.getHealth());

battle(myFighter, myFighter2);

myFighter.logCombatHistory();
myFighter2.logCombatHistory();