import { ParkAnalyzer } from './../ElementAnalyzers/ParkAnalyzer';
import { StreetAnalyzer } from './../ElementAnalyzers/StreetAnalyzer';

export class Report {
    constructor(...elementAnalyzers) {
        this.elementAnalyzers = elementAnalyzers;    
    }

    printReport() {
        this.elementAnalyzers.forEach(ea => {
            console.log(ea.summary());
        })
    }
}