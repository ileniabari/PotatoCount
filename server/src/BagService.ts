import Bag from "./model/Bag";

export default class BagService {
  bagMap: Map<string, Bag>;

  constructor() {
    this.bagMap = new Map();
  }

  getBags(): Array<Bag> {
    return Array.from(this.bagMap.values());
  }

  getBag(bagName: string): Bag | null {
    return this.bagMap.get(bagName) || null;
  }

  addBag(bag: Bag) {
    this.bagMap.set(bag.name, bag);
  }
}