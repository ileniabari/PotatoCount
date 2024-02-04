export default class Bag {
    name: string;
    potatoes: { [key: string]: number };

    constructor(name: string) {
        this.name = name;
        this.potatoes = {};
    }

    addPotato(potatoName: string, quantity: number): number {
        let potatoQty = this.potatoes[potatoName];

        if (potatoQty == undefined) {
            this.potatoes[potatoName] = 0;
        }

        this.potatoes[potatoName] += quantity;

        return potatoQty;
    }

    getPotatoQuantity(potatoName: string): number {
        return this.potatoes[potatoName] || 0;
    }
}