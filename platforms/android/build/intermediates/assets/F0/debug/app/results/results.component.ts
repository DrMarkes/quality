import { Component, OnInit } from "@angular/core";
import { QualityService } from "../services/quality.service";
import {Quality} from "../models/quality.model";
import {Page} from "tns-core-modules/ui/page";
import {TextField} from "tns-core-modules/ui/text-field";
import {Observable} from "rxjs/Observable";
import {SwipeGestureEventData} from "tns-core-modules/ui/gestures";
import {RouterExtensions} from "nativescript-angular";

@Component({
    moduleId: module.id,
    templateUrl: "./results.component.html",
    styleUrls: ["./results.component.css"]
})
export class ResultsComponent implements OnInit {

    firstDate: number;
    lastDate: number;
    qualities: Observable<Quality[]>;

    good: number;
    normal: number;
    bad: number;

    constructor(private page: Page,
                private qualityService: QualityService,
                private routerExtensions: RouterExtensions) {}

    ngOnInit() {
        this.firstDate = Date.now();
        this.lastDate = Date.now();
        this.qualities = this.qualityService.getQualities();
        this.qualityService.allQualities();
        this.getCharacter();
    }


    showResult() {
        this.submitFirstDate();
        this.submitLastDate();
        this.getQualitiesByPeriod();

    }

    getQualitiesByPeriod() {
        this.qualityService.getQualitiesByPeriod(this.firstDate, this.lastDate);
    }

    submitFirstDate() {
        let textFieldFirstDate = <TextField> this.page.getViewById("textFieldFirstDate");
        let date = ResultsComponent.formatDate(textFieldFirstDate.text);

        this.firstDate = Date.parse(date);
    }

    submitLastDate() {
        let textFieldLastDate = <TextField> this.page.getViewById("textFieldLastDate");
        let date = ResultsComponent.formatDate(textFieldLastDate.text);

        this.lastDate = Date.parse(date);
    }

    private static formatDate(date: string): string {
        let newDate = date.split('/');

        return newDate[1] + "/" + newDate[0] + "/" + newDate[2];
    }

    countQualityByCharacter(character: string, qualities: Quality[]): number {
        return qualities.filter(quality => {
            return quality.character === character;
        }).length;
    }

    private getCharacter() {
        this.qualities.subscribe(qualities => {
            this.good = this.countQualityByCharacter('отлично', qualities);
            this.normal = this.countQualityByCharacter('нормально', qualities);
            this.bad = this.countQualityByCharacter('плохо', qualities);
        });
    }

    onSwipe(args: SwipeGestureEventData) {
        if(args.direction === 1) {
            this.routerExtensions.navigate(['/'], {
                transition: {
                    name: "slideRight",
                    curve: "linear"
                }
            });
        }
    }
}