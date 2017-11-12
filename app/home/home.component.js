"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_service_1 = require("../services/quality.service");
var HomeComponent = (function () {
    function HomeComponent(qualityService) {
        this.qualityService = qualityService;
    }
    HomeComponent.prototype.clickButton = function (character) {
        this.insert(character);
    };
    HomeComponent.prototype.insert = function (character) {
        this.qualityService.insert(character);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [quality_service_1.QualityService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUUxQywrREFBNkQ7QUFRN0Q7SUFFSSx1QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ2xELENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksU0FBaUI7UUFFekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRU8sOEJBQU0sR0FBZCxVQUFlLFNBQWlCO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFaUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDO3lDQUdzQyxnQ0FBYztPQUZ6QyxhQUFhLENBY3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWRELElBY0M7QUFkWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IFF1YWxpdHlTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3F1YWxpdHkuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJhcHAtaG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcXVhbGl0eVNlcnZpY2U6IFF1YWxpdHlTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgY2xpY2tCdXR0b24oY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgXG4gICAgICAgIHRoaXMuaW5zZXJ0KGNoYXJhY3Rlcik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbnNlcnQoY2hhcmFjdGVyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5xdWFsaXR5U2VydmljZS5pbnNlcnQoY2hhcmFjdGVyKTtcbiAgICB9XG5cbn1cbiJdfQ==