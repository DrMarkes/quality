"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Sqlite = require("nativescript-sqlite");
var QualityService = (function () {
    function QualityService() {
        var _this = this;
        (new Sqlite("quality.db")).then(function (db) {
            db.execSQL("CREATE TABLE IF NOT EXISTS quality (id INTEGER PRIMARY KEY AUTOINCREMENT, character TEXT, timestamp NUMERIC)")
                .then(function (id) {
                _this.database = db;
            }),
                function (error) {
                    console.log("CREATE TABLE ERROR", error);
                };
        }, function (error) {
            console.log("OPEN DB ERROR", error);
        });
    }
    QualityService.prototype.insert = function (character) {
        var timestamp = Date.now();
        this.database.execSQL("INSERT INTO quality (character, timestamp) VALUES (?, ?)", [character, timestamp]).then(function (id) {
            console.log("INSERT RESULT", id);
        }, function (error) {
            console.log("INSERT ERROR", error);
        });
    };
    QualityService.prototype.getQualities = function () {
        var quality = [];
        this.database.all("SELECT * FROM quality")
            .then(function (rows) {
            for (var row in rows) {
                quality.push({
                    "character": rows[row][1],
                    "timestamp": rows[row][2]
                });
            }
        }, function (error) {
            console.log('error');
        });
        return quality;
    };
    QualityService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], QualityService);
    return QualityService;
}());
exports.QualityService = QualityService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVhbGl0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicXVhbGl0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRzVDO0lBR0k7UUFBQSxpQkFhQztRQVhHLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxFQUFFO1lBQzlCLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEdBQThHLENBQUM7aUJBQ3pILElBQUksQ0FBQyxVQUFBLEVBQUU7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDdkIsQ0FBQyxDQUFDO2dCQUNGLFVBQUEsS0FBSztvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxDQUFDLENBQUE7UUFDTCxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQU0sR0FBTixVQUFPLFNBQWlCO1FBQ3BCLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQywwREFBMEQsRUFBRSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7WUFDN0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFDQUFZLEdBQVo7UUFDSSxJQUFJLE9BQU8sR0FBYyxFQUFFLENBQUM7UUFFNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUM7YUFDekMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNOLEdBQUcsQ0FBQSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUM7b0JBQ1QsV0FBVyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7WUFDUCxDQUFDO1FBQ0wsQ0FBQyxFQUFFLFVBQUEsS0FBSztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUE1Q1EsY0FBYztRQUQxQixpQkFBVSxFQUFFOztPQUNBLGNBQWMsQ0E2QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBRdWFsaXR5IH0gZnJvbSBcIi4uL21vZGVscy9xdWFsaXR5Lm1vZGVsXCI7XHJcbnZhciBTcWxpdGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXNxbGl0ZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFF1YWxpdHlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgKG5ldyBTcWxpdGUoXCJxdWFsaXR5LmRiXCIpKS50aGVuKGRiID0+IHtcclxuICAgICAgICAgICAgZGIuZXhlY1NRTChcIkNSRUFURSBUQUJMRSBJRiBOT1QgRVhJU1RTIHF1YWxpdHkgKGlkIElOVEVHRVIgUFJJTUFSWSBLRVkgQVVUT0lOQ1JFTUVOVCwgY2hhcmFjdGVyIFRFWFQsIHRpbWVzdGFtcCBOVU1FUklDKVwiKVxyXG4gICAgICAgICAgICAudGhlbihpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlID0gZGI7XHJcbiAgICAgICAgICAgIH0pLCBcclxuICAgICAgICAgICAgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEUgVEFCTEUgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9QRU4gREIgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydChjaGFyYWN0ZXI6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuZXhlY1NRTChcIklOU0VSVCBJTlRPIHF1YWxpdHkgKGNoYXJhY3RlciwgdGltZXN0YW1wKSBWQUxVRVMgKD8sID8pXCIsIFtjaGFyYWN0ZXIsIHRpbWVzdGFtcF0pLnRoZW4oaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIklOU0VSVCBSRVNVTFRcIiwgaWQpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTlNFUlQgRVJST1JcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFF1YWxpdGllcygpOiBRdWFsaXR5W10ge1xyXG4gICAgICAgIGxldCBxdWFsaXR5OiBRdWFsaXR5W10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmRhdGFiYXNlLmFsbChcIlNFTEVDVCAqIEZST00gcXVhbGl0eVwiKVxyXG4gICAgICAgIC50aGVuKHJvd3MgPT4ge1xyXG4gICAgICAgICAgICBmb3IobGV0IHJvdyBpbiByb3dzKSB7XHJcbiAgICAgICAgICAgICAgICBxdWFsaXR5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIFwiY2hhcmFjdGVyXCI6IHJvd3Nbcm93XVsxXSxcclxuICAgICAgICAgICAgICAgICAgICBcInRpbWVzdGFtcFwiOiByb3dzW3Jvd11bMl1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHF1YWxpdHk7XHJcbiAgICB9XHJcbn0iXX0=