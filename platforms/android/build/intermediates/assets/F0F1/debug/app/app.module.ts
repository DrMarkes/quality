import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { QualityService } from "./services/quality.service";
import { HomeComponent } from "./home/home.component";
import { ResultsComponent } from "./results/results.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        ResultsComponent
    ],
    providers: [
        QualityService
    ]
})

export class AppModule { }
