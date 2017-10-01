import { TownElementsFactory } from './TownElements/TownElements.factory';
import { Report } from './Reporting/Report';
import { ParkAnalyzer } from './ElementAnalyzers/ParkAnalyzer';
import { StreetAnalyzer } from './ElementAnalyzers/StreetAnalyzer';

const townElementsFactory = new TownElementsFactory();

// PARKS
const sheva = townElementsFactory.createExistingPark('Sheva', 1999, 200, 5.4);
const fomin = townElementsFactory.createExistingPark('Fomin', 1960, 1500, 17.3);
const grishko = townElementsFactory.createExistingPark('Grishko', 1978, 7000, 25.1);

// STREETS
const soborna = townElementsFactory.createExistingStreet('Soborna', 2011, 20, 'small');
const lenina = townElementsFactory.createNewStreet('Lenina', 32);
const komarova = townElementsFactory.createExistingStreet('Komarova', 1988, 15, 'big');
const kiltseva = townElementsFactory.createNewStreet('Kiltseva', 70, 'huge');

// ANALYZERS
const parkAnalyzer = new ParkAnalyzer(sheva, fomin, grishko);
const streetAnalyzer = new StreetAnalyzer(soborna, lenina, komarova, kiltseva);

const finalReport = new Report(parkAnalyzer, streetAnalyzer);

finalReport.printReport();