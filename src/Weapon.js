//créer la class weapon
class Weapon {
    constructor(name, damage = 10){
        this.name = name;
        this.damage = damage;
    };
};

module.exports = Weapon;