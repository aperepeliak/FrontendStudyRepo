import {
    Street
} from '../TownElements/Street';

export class StreetAnalyzer {
    constructor(...streets) {
        this.streets = streets;
    }

    totalLength() {
        var total = this.streets.reduce((sum, curr) => {
            return sum + curr.strLength;
        }, 0);

        return total;
    }

    averageLength() {
        return this.streets.reduce((sum, curr) => {
            return sum + curr.strLength;
        }, 0) / this.streets.length;
    }

    summary() {
        const header = '---------- STREETS REPORT ----------';
        const body =
            `
Our ${this.streets.length} streets have a total length of ${this.totalLength()} km, with an average of ${this.averageLength()} km.
`;
        let streetInfos = '';
        this.streets.forEach(s => streetInfos += s.info());
        return header + body + streetInfos + '\n';
    }
}