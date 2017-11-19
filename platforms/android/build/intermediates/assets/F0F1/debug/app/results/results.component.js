"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quality_service_1 = require("../services/quality.service");
var page_1 = require("tns-core-modules/ui/page");
var nativescript_angular_1 = require("nativescript-angular");
var ResultsComponent = (function () {
    function ResultsComponent(page, qualityService, routerExtensions) {
        this.page = page;
        this.qualityService = qualityService;
        this.routerExtensions = routerExtensions;
    }
    ResultsComponent_1 = ResultsComponent;
    ResultsComponent.prototype.ngOnInit = function () {
        this.firstDate = Date.now();
        this.lastDate = Date.now();
        this.qualities = this.qualityService.getQualities();
        this.qualityService.allQualities();
        this.getCharacter();
    };
    ResultsComponent.prototype.showResult = function () {
        this.submitFirstDate();
        this.submitLastDate();
        this.getQualitiesByPeriod();
    };
    ResultsComponent.prototype.getQualitiesByPeriod = function () {
        this.qualityService.getQualitiesByPeriod(this.firstDate, this.lastDate);
    };
    ResultsComponent.prototype.submitFirstDate = function () {
        var textFieldFirstDate = this.page.getViewById("textFieldFirstDate");
        var date = ResultsComponent_1.formatDate(textFieldFirstDate.text);
        this.firstDate = Date.parse(date);
    };
    ResultsComponent.prototype.submitLastDate = function () {
        var textFieldLastDate = this.page.getViewById("textFieldLastDate");
        var date = ResultsComponent_1.formatDate(textFieldLastDate.text);
        this.lastDate = Date.parse(date);
    };
    ResultsComponent.formatDate = function (date) {
        var newDate = date.split('/');
        return newDate[1] + "/" + newDate[0] + "/" + newDate[2];
    };
    ResultsComponent.prototype.countQualityByCharacter = function (character, qualities) {
        return qualities.filter(function (quality) {
            return quality.character === character;
        }).length;
    };
    ResultsComponent.prototype.getCharacter = function () {
        var _this = this;
        this.qualities.subscribe(function (qualities) {
            _this.good = _this.countQualityByCharacter('отлично', qualities);
            _this.normal = _this.countQualityByCharacter('нормально', qualities);
            _this.bad = _this.countQualityByCharacter('плохо', qualities);
        });
    };
    ResultsComponent.prototype.onSwipe = function (args) {
        if (args.direction === 1) {
            this.routerExtensions.navigate(['/'], {
                transition: {
                    name: "slideRight",
                    curve: "linear"
                }
            });
        }
    };
    ResultsComponent = ResultsComponent_1 = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "./results.component.html",
            styleUrls: ["./results.component.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page,
            quality_service_1.QualityService,
            nativescript_angular_1.RouterExtensions])
    ], ResultsComponent);
    return ResultsComponent;
    var ResultsComponent_1;
}());
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXN1bHRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwrREFBNkQ7QUFFN0QsaURBQThDO0FBSTlDLDZEQUFzRDtBQU90RDtJQVVJLDBCQUFvQixJQUFVLEVBQ1YsY0FBOEIsRUFDOUIsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFHLENBQUM7eUJBWmpELGdCQUFnQjtJQWN6QixtQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFHRCxxQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBRUQsK0NBQW9CLEdBQXBCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLElBQUksa0JBQWtCLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNqRixJQUFJLElBQUksR0FBRyxrQkFBZ0IsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBYyxHQUFkO1FBQ0ksSUFBSSxpQkFBaUIsR0FBZSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQy9FLElBQUksSUFBSSxHQUFHLGtCQUFnQixDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVjLDJCQUFVLEdBQXpCLFVBQTBCLElBQVk7UUFDbEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsa0RBQXVCLEdBQXZCLFVBQXdCLFNBQWlCLEVBQUUsU0FBb0I7UUFDM0QsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBQSxPQUFPO1lBQzNCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDZCxDQUFDO0lBRU8sdUNBQVksR0FBcEI7UUFBQSxpQkFNQztRQUxHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUEsU0FBUztZQUM5QixLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0QsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ25FLEtBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBMkI7UUFDL0IsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEMsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxZQUFZO29CQUNsQixLQUFLLEVBQUUsUUFBUTtpQkFDbEI7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDO0lBQ0wsQ0FBQztJQTdFUSxnQkFBZ0I7UUFMNUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3pDLENBQUM7eUNBVzRCLFdBQUk7WUFDTSxnQ0FBYztZQUNaLHVDQUFnQjtPQVo3QyxnQkFBZ0IsQ0E4RTVCO0lBQUQsdUJBQUM7O0NBQUEsQUE5RUQsSUE4RUM7QUE5RVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBRdWFsaXR5U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9xdWFsaXR5LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtRdWFsaXR5fSBmcm9tIFwiLi4vbW9kZWxzL3F1YWxpdHkubW9kZWxcIjtcclxuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1N3aXBlR2VzdHVyZUV2ZW50RGF0YX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZ2VzdHVyZXNcIjtcclxuaW1wb3J0IHtSb3V0ZXJFeHRlbnNpb25zfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcmVzdWx0cy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Jlc3VsdHMuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzdWx0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgZmlyc3REYXRlOiBudW1iZXI7XHJcbiAgICBsYXN0RGF0ZTogbnVtYmVyO1xyXG4gICAgcXVhbGl0aWVzOiBPYnNlcnZhYmxlPFF1YWxpdHlbXT47XHJcblxyXG4gICAgZ29vZDogbnVtYmVyO1xyXG4gICAgbm9ybWFsOiBudW1iZXI7XHJcbiAgICBiYWQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHF1YWxpdHlTZXJ2aWNlOiBRdWFsaXR5U2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmZpcnN0RGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5sYXN0RGF0ZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy5xdWFsaXRpZXMgPSB0aGlzLnF1YWxpdHlTZXJ2aWNlLmdldFF1YWxpdGllcygpO1xyXG4gICAgICAgIHRoaXMucXVhbGl0eVNlcnZpY2UuYWxsUXVhbGl0aWVzKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDaGFyYWN0ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc2hvd1Jlc3VsdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdEZpcnN0RGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuc3VibWl0TGFzdERhdGUoKTtcclxuICAgICAgICB0aGlzLmdldFF1YWxpdGllc0J5UGVyaW9kKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YWxpdGllc0J5UGVyaW9kKCkge1xyXG4gICAgICAgIHRoaXMucXVhbGl0eVNlcnZpY2UuZ2V0UXVhbGl0aWVzQnlQZXJpb2QodGhpcy5maXJzdERhdGUsIHRoaXMubGFzdERhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdEZpcnN0RGF0ZSgpIHtcclxuICAgICAgICBsZXQgdGV4dEZpZWxkRmlyc3REYXRlID0gPFRleHRGaWVsZD4gdGhpcy5wYWdlLmdldFZpZXdCeUlkKFwidGV4dEZpZWxkRmlyc3REYXRlXCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gUmVzdWx0c0NvbXBvbmVudC5mb3JtYXREYXRlKHRleHRGaWVsZEZpcnN0RGF0ZS50ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5maXJzdERhdGUgPSBEYXRlLnBhcnNlKGRhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdExhc3REYXRlKCkge1xyXG4gICAgICAgIGxldCB0ZXh0RmllbGRMYXN0RGF0ZSA9IDxUZXh0RmllbGQ+IHRoaXMucGFnZS5nZXRWaWV3QnlJZChcInRleHRGaWVsZExhc3REYXRlXCIpO1xyXG4gICAgICAgIGxldCBkYXRlID0gUmVzdWx0c0NvbXBvbmVudC5mb3JtYXREYXRlKHRleHRGaWVsZExhc3REYXRlLnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLmxhc3REYXRlID0gRGF0ZS5wYXJzZShkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBmb3JtYXREYXRlKGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5ld0RhdGUgPSBkYXRlLnNwbGl0KCcvJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdEYXRlWzFdICsgXCIvXCIgKyBuZXdEYXRlWzBdICsgXCIvXCIgKyBuZXdEYXRlWzJdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvdW50UXVhbGl0eUJ5Q2hhcmFjdGVyKGNoYXJhY3Rlcjogc3RyaW5nLCBxdWFsaXRpZXM6IFF1YWxpdHlbXSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHF1YWxpdGllcy5maWx0ZXIocXVhbGl0eSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBxdWFsaXR5LmNoYXJhY3RlciA9PT0gY2hhcmFjdGVyO1xyXG4gICAgICAgIH0pLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldENoYXJhY3RlcigpIHtcclxuICAgICAgICB0aGlzLnF1YWxpdGllcy5zdWJzY3JpYmUocXVhbGl0aWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nb29kID0gdGhpcy5jb3VudFF1YWxpdHlCeUNoYXJhY3Rlcign0L7RgtC70LjRh9C90L4nLCBxdWFsaXRpZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vcm1hbCA9IHRoaXMuY291bnRRdWFsaXR5QnlDaGFyYWN0ZXIoJ9C90L7RgNC80LDQu9GM0L3QvicsIHF1YWxpdGllcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFkID0gdGhpcy5jb3VudFF1YWxpdHlCeUNoYXJhY3Rlcign0L/Qu9C+0YXQvicsIHF1YWxpdGllcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Td2lwZShhcmdzOiBTd2lwZUdlc3R1cmVFdmVudERhdGEpIHtcclxuICAgICAgICBpZihhcmdzLmRpcmVjdGlvbiA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvJ10sIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlUmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJsaW5lYXJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=