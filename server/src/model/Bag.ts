import Potato from './Potato';

export default class Bag {
    name: string;
    potatoes: Map<Potato, number>;

    constructor(name: string) {
        this.name = name;
        this.potatoes = new Map();
    }

    addPotato(potato: Potato, quantity: number) {
        const currentQuantity = this.potatoes.get(potato) || 0;
        this.potatoes.set(potato, currentQuantity + quantity);
    }
}