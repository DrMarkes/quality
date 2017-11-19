"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_service_1 = require("../services/quality.service");
var nativescript_angular_1 = require("nativescript-angular");
var HomeComponent = (function () {
    function HomeComponent(qualityService, routerExtensions) {
        this.qualityService = qualityService;
        this.routerExtensions = routerExtensions;
    }
    HomeComponent.prototype.clickButton = function (character) {
        this.insert(character);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQywrREFBNkQ7QUFFN0QsNkRBQXNEO0FBUXREO0lBRUksdUJBQW9CLGNBQThCLEVBQzlCLGdCQUFrQztRQURsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7SUFFMUQsbUNBQVcsR0FBWCxVQUFZLFNBQWlCO1FBRXpCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVPLDhCQUFNLEdBQWQsVUFBZSxTQUFpQjtRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsK0JBQU8sR0FBUCxVQUFRLElBQTJCO1FBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3pDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsV0FBVztvQkFDakIsS0FBSyxFQUFFLFFBQVE7aUJBQ2xCO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUF2QlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzt5Q0FHc0MsZ0NBQWM7WUFDWix1Q0FBZ0I7T0FIN0MsYUFBYSxDQXdCekI7SUFBRCxvQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgUXVhbGl0eVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcXVhbGl0eS5zZXJ2aWNlXCI7XG5pbXBvcnQge1N3aXBlR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcbmltcG9ydCB7Um91dGVyRXh0ZW5zaW9uc30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1ob21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBxdWFsaXR5U2VydmljZTogUXVhbGl0eVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7fVxuXG4gICAgY2xpY2tCdXR0b24oY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgXG4gICAgICAgIHRoaXMuaW5zZXJ0KGNoYXJhY3Rlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnNlcnQoY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VydmljZS5pbnNlcnQoY2hhcmFjdGVyKTtcbiAgICB9XG5cbiAgICBvblN3aXBlKGFyZ3M6IFN3aXBlR2VzdHVyZUV2ZW50RGF0YSkge1xuICAgICAgICBpZihhcmdzLmRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnL3Jlc3VsdHMnXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgY3VydmU6IFwibGluZWFyXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==