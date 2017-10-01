import { TownElementBase } from './TownElementBase';

export class Street extends TownElementBase {

    constructor(name, buildYear, strLength, sizeClassification = 'normal') {
        super(name, buildYear);

        this.strLength = strLength;
        this.sizeClassification = sizeClassification;
    }

    info() {
        let result = super.info();
        result += ` is a ${this.sizeClassification} street.
`;
        return result;
    }
}