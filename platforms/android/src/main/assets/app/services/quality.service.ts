import { Injectable } from "@angular/core";
import { Quality } from "../models/quality.model";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

let Sqlite = require("nativescript-sqlite");

@Injectable()
export class QualityService {
    private database: any;

    private qualities = new BehaviorSubject<Quality[]>([]);

    constructor() {

        (new Sqlite("quality.db")).then(db => {
            db.execSQL("CREATE TABLE IF NOT EXISTS quality (id INTEGER PRIMARY KEY AUTOINCREMENT, character TEXT, timestamp NUMERIC)")
            .then(id => {
                this.database = db;
            }), error => {
                console.log("CREATE TABLE ERROR", error);
            }
        }, error => {
            console.log("OPEN DB ERROR", error);
        });

    }

    insert(character: string) {
        const timestamp = Date.now();

        this.database.execSQL("INSERT INTO quality (character, timestamp) VALUES (?, ?)", [character, timestamp])
            .then(id => {}, error => {
            console.log("INSERT ERROR", error);
        });
    }

    allQualities() {
        let quality: Quality[] = [];
        
        this.database.all("SELECT * FROM quality")
        .then(rows => {
            for(let row in rows) {
                quality.push({
                    "character": rows[row][1],
                    "timestamp": rows[row][2]
                });
            }

            this.qualities.next(quality);
        }, error => {
            console.log(error.message);
        });


    }

    getQualitiesByPeriod(firstDate: number, lastDate: number) {
        let quality: Quality[] = [];

        this.database.all("SELECT * FROM quality WHERE timestamp BETWEEN ? AND ?", [firstDate, lastDate])
            .then(rows => {
                for(let row in rows) {
                    quality.push({
                        "character": rows[row][1],
                        "timestamp": rows[row][2]
                    });
                }

                this.qualities.next(quality);
            }, error => {
                console.log(error.message);
            });


    }

    getQualities(): Observable<Quality[]> {
        return this.qualities.asObservable();
    }
}