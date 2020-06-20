import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

console.log('-------------------------------------------------')
const csvFR = new CsvFileReader('data.csv');
const matchReader = new MatchReader(csvFR);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);