import { Component } from "@angular/core";

import { QualityService } from "../services/quality.service";

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent {

    constructor(private qualityService: QualityService) {
    }

    clickButton(character: string) {
  
        this.insert(character);
    }

    private insert(character: string) {
        this.qualityService.insert(character);
    }

}
