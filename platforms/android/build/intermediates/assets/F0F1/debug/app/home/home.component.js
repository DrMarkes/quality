"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_service_1 = require("../services/quality.service");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_snackbar_1 = require("nativescript-snackbar");
var HomeComponent = (function () {
    function HomeComponent(qualityService, routerExtensions) {
        this.qualityService = qualityService;
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.clickButton = function (character) {
        this.insert(character);
        this.showSimple();
    };
    HomeComponent.prototype.insert = function (character) {
        this.qualityService.insert(character);
    };
    HomeComponent.prototype.onSwipe = function (args) {
        if (args.direction === 2) {
            this.routerExtensions.navigate(['/results'], {
                transition: {
                    name: "slideLeft",
                    curve: "linear"
                }
            });
        }
    };
    HomeComponent.prototype.showSimple = function () {
        var snackbar = new nativescript_snackbar_1.SnackBar();
        snackbar.simple('СПАСИБО ЗА ВАШУ ОЦЕНКУ!', 'white', 'black');
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [quality_service_1.QualityService,
            nativescript_angular_1.RouterExtensions])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQywrREFBNkQ7QUFFN0QsNkRBQXNEO0FBQ3RELCtEQUErQztBQVEvQztJQUVJLHVCQUFvQixjQUE4QixFQUM5QixnQkFBa0M7UUFEbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTFELG1DQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUV6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRU8sOEJBQU0sR0FBZCxVQUFlLFNBQWlCO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCwrQkFBTyxHQUFQLFVBQVEsSUFBMkI7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekMsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxXQUFXO29CQUNqQixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsSUFBSSxnQ0FBUSxFQUFFLENBQUM7UUFFOUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQTlCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUdzQyxnQ0FBYztZQUNaLHVDQUFnQjtPQUg3QyxhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBRdWFsaXR5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9xdWFsaXR5LnNlcnZpY2VcIjtcbmltcG9ydCB7U3dpcGVHZXN0dXJlRXZlbnREYXRhfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9nZXN0dXJlc1wiO1xuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcbmltcG9ydCB7U25hY2tCYXJ9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHF1YWxpdHlTZXJ2aWNlOiBRdWFsaXR5U2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHt9XG5cbiAgICBjbGlja0J1dHRvbihjaGFyYWN0ZXI6IHN0cmluZykge1xuICBcbiAgICAgICAgdGhpcy5pbnNlcnQoY2hhcmFjdGVyKTtcbiAgICAgICAgdGhpcy5zaG93U2ltcGxlKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnNlcnQoY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VydmljZS5pbnNlcnQoY2hhcmFjdGVyKTtcbiAgICB9XG5cbiAgICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICBpZihhcmdzLmRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBzaG93U2ltcGxlKCkge1xuICAgICAgICBsZXQgc25hY2tiYXIgPSBuZXcgU25hY2tCYXIoKTtcblxuICAgICAgICBzbmFja2Jhci5zaW1wbGUoJ9Ch0J/QkNCh0JjQkdCeINCX0JAg0JLQkNCo0KMg0J7QptCV0J3QmtCjIScsICd3aGl0ZScsICdibGFjaycpXG4gICAgfVxufVxuIl19