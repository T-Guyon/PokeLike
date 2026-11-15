/**
 * Représente un Pokémon qui participe à un combat :
 * il a un nom, des points de vie et une liste d'attaques.
 */
export class Pokemon {

    /**
     * Crée un Pokémon avec tous ses PV et ses Attaques
     * @param {string} nom Le nom du pokémon
     * @param {float} pvMax Les points de vie maximum du Pokémon
     * @param {Attaque[]} attaques Les attaques que le pokémon connait
     */
    constructor(nom, pvMax, attaques){
        this.nom = nom;
        this.pvMax = pvMax;
        this.pvActuels = this.pvMax;
        this.attaques = attaques;
    }
}