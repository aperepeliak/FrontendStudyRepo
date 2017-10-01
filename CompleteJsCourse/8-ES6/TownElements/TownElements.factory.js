import { Park } from './Park';
import { Street } from './Street';

export class TownElementsFactory {
    createExistingPark(...params) {
        let [name, buildYear, numberOfTrees, area] = params;
        return new Park(name, buildYear, numberOfTrees, area);
    }

    createNewPark(name, area) {
        return new Park(name, new Date().getFullYear(), 0, area);
    }

    createExistingStreet(...params) {
        let [name, buildYear, strLength, sizeClassification] = params;
        return new Street(name, buildYear, strLength, sizeClassification);
    }

    createNewStreet(name, strLength, sizeClassification) {
        return new Street(name, new Date().getFullYear(), strLength, sizeClassification);
    }
}