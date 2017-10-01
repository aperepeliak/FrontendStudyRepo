import { TownElementBase } from './TownElementBase';

export class Park extends TownElementBase {

    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);

        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    get NumberOfTrees() {
        return this.numberOfTrees;
    }

    set NumberOfTrees(value) {
        if (value < 0) {
            throw new Error('The number of trees cannot be negative');
        } else {
            this.numberOfTrees = value;
        }
    }

    get treeDensity() {
        return this.numberOfTrees / this.area;
    }

    info() {
        let result = super.info();
        result += ` has a tree density of ${this.treeDensity} trees per square km.
`;
        return result;
    }
}