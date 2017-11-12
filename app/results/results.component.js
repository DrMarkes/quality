"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_service_1 = require("../services/quality.service");
var ResultsComponent = (function () {
    function ResultsComponent(qualityService) {
        this.qualityService = qualityService;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.getQuality();
    };
    ResultsComponent.prototype.getQuality = function () {
        this.qualities = this.qualityService.getQualities();
    };
    ResultsComponent = __decorate([
        core_1.Component({
            selector: 'app-results',
            moduleId: module.id,
            templateUrl: "./results.component.html"
        }),
        __metadata("design:paramtypes", [quality_service_1.QualityService])
    ], ResultsComponent);
    return ResultsComponent;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCwrREFBNkQ7QUFTN0Q7SUFHSSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCxtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hELENBQUM7SUFYUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1NBQzFDLENBQUM7eUNBS3NDLGdDQUFjO09BSHpDLGdCQUFnQixDQVk1QjtJQUFELHVCQUFDO0NBQUEsQUFaRCxJQVlDO0FBWlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFF1YWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcXVhbGl0eS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUXVhbGl0eSB9IGZyb20gJy4uL21vZGVscy9xdWFsaXR5Lm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtcmVzdWx0cycsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9yZXN1bHRzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXN1bHRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHF1YWxpdGllczogUXVhbGl0eVtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHF1YWxpdHlTZXJ2aWNlOiBRdWFsaXR5U2VydmljZSkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7IFxyXG4gICAgICAgIHRoaXMuZ2V0UXVhbGl0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YWxpdHkoKSB7XHJcbiAgICAgICAgdGhpcy5xdWFsaXRpZXMgPSB0aGlzLnF1YWxpdHlTZXJ2aWNlLmdldFF1YWxpdGllcygpO1xyXG4gICAgfVxyXG59Il19