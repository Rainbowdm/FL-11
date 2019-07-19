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
    getHealth() {
        return this.health;
    }
    getAgility() {
        return this.agility;
    }

    attack(defender) {
        let maxAttack = 100;
        let attackSuccess = maxAttack - defender.getAgility();
        let possibleSuccess = Math.floor(Math.random() * maxAttack);
        if (possibleSuccess <= attackSuccess) {
            defender.dealDamage(this.getDamage());
            console.log(this.name + ' make ' + this.damage + ' damage to ' + defender.name);
        } else {
            console.log(this.name + ' attack missed ');
        }
    }

    logCombatHistory() {
        console.log('Name: ' + this.name + ',' + ' Wins: ' + this.win + ',' + ' Losses: ' + this.lose);
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

const myFighter = new Fighter({ name: 'John', damage: 20, agility: 25, hp: 100 });
const myFighter2 = new Fighter({ name: 'Sam', damage: 10, agility: 40, hp: 120 });

let firstName = myFighter.getName();
console.log(firstName);

let secondName = myFighter2.getName();
console.log(secondName);

myFighter.attack(myFighter2);
myFighter2.attack(myFighter);

myFighter.logCombatHistory();