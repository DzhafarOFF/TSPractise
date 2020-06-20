import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    constructor(public team: string){}

    run(matches: MatchData[]): string{
        let wins = 0;

        for (const match of matches) {
            if (match[1] === this.team && match[5] === MatchResult.HomeWin){
                wins += 1;
            }
            if (match[2] === this.team && match[5] === MatchResult.AwayWin){
                wins += 1;
            }
        }
        console.log('----------------------------------------')
        return `Team ${this.team} wins ${wins} games`;
    }
}