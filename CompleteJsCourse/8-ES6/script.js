class TownElementBase {
    name;
    buildYear;

    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElementBase {
    numberOfTrees;
    area;

    constructor(name, buildYear, numberOfTrees, area) {
        super(name, buildYear);

        this.numberOfTrees = numberOfTrees;
        this.area = area;
    }

    get treeDensity() {
        return this.numberOfTrees / this.area;
    }
}

class Street extends TownElementBase {
    strLength;
    sizeClassification;

    constructor(name, buildYear, strLength, sizeClassification = 'normal') {
        super(name, buildYear);

        this.strLength = strLength;
        this.sizeClassification = sizeClassification;
    }
}

class Report {
    elementAnalyzers;

    constructor(...elementAnalyzers) {
        this.elementAnalyzers = elementAnalyzers;    
    }

    printReport() {
        
    }
}