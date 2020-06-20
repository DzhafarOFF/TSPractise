import { OutputTarget } from "../Summary";
import { MatchData } from "../MatchData";
import { fstat } from "fs";
import fs from 'fs';
export class HtmlReport implements OutputTarget{
    print(report: string): void{
        const html = `
            <div>
                <h1>Analysis result</h1>
                <div>${report}</div>
            </div>
        `;
        fs.writeFileSync('report.html', html);
    }
}