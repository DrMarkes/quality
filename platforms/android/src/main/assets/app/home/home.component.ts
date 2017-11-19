import { Component } from "@angular/core";

import { QualityService } from "../services/quality.service";
import {SwipeGestureEventData} from "tns-core-modules/ui/gestures";
import {RouterExtensions} from "nativescript-angular";
import {SnackBar} from "nativescript-snackbar";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {

    constructor(private qualityService: QualityService,
                private routerExtensions: RouterExtensions) {}

    clickButton(character: string) {
  
        this.insert(character);
        this.showSimple();
    }

    private insert(character: string) {
        this.qualityService.insert(character);
    }

    onSwipe(args: SwipeGestureEventData) {
        if(args.direction === 2) {
            this.routerExtensions.navigate(['/results'], {
                transition: {
                    name: "slideLeft",
                    curve: "linear"
                }
            });
        }
    }

    public showSimple() {
        let snackbar = new SnackBar();

        snackbar.simple('СПАСИБО ЗА ВАШУ ОЦЕНКУ!', 'white', 'black')
    }
}
