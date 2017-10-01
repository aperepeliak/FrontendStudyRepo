import { Park } from './../TownElements/Park';

export class ParkAnalyzer {
    constructor(...parks) {
        this.parks = parks;
    }

    calculateAverageAge() {
        const ageSum = this.parks.reduce((sum, curr) => {
            return sum + (new Date().getFullYear() - curr.buildYear);
        }, 0);

        return ageSum / this.parks.length;
    }

    withMoreThan1000Trees() {
        const result = [];

        this.parks.forEach(p => {
            if (p.numberOfTrees > 1000) {
                result += result.push(p);
            }
        })

        return result;
    }

    summary() {
        const header = '---------- PARKS REPORT ----------';
        const body = 
`
Our ${this.parks.length} parks have an average age of ${this.calculateAverageAge()} years.
`;
        let parksInfos = '';
        this.parks.forEach(p => parksInfos += p.info());

        let moreThan1000 = '';
        if(this.withMoreThan1000Trees() > 0) {
            moreThan1000 = this.withMoreThan1000Trees() + 'have(-s) more than 100 trees.\n';
        }
        return header + body + parksInfos + moreThan1000 + '\n';
    }
}