export class TownElementBase {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }

    info() {
        return `${this.name} (${this.buildYear})`;
    }
}