import { Component, OnInit } from '@angular/core';

import { QualityService } from '../services/quality.service';
import { Quality } from '../models/quality.model';

@Component({
    selector: 'app-results',
    moduleId: module.id,
    templateUrl: "./results.component.html"
})

export class ResultsComponent implements OnInit {
    qualities: Quality[];
    
    constructor(private qualityService: QualityService) { }

    ngOnInit() { 
        this.getQuality();
    }

    getQuality() {
        this.qualities = this.qualityService.getQualities();
    }
}