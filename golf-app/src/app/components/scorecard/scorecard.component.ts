import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})

export class ScorecardComponent implements OnInit {

  retrievedGame: any;
  currentGame: any;
  currentCourseId: any;
  currentCourseName: any;
  currentTeeBox: any;
  currentPlayers: any;
  totalYards = 0;
  totalPar = 0;
  holesInfo: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.retrievedGame = localStorage.getItem('game');
    this.currentGame = JSON.parse(this.retrievedGame);
    this.currentCourseId = this.currentGame.courseId;
    this.currentTeeBox = this.currentGame.teeBox;
    this.currentPlayers = this.currentGame.playerList;
    this.http.get(`https://golf-courses-api.herokuapp.com/courses/${this.currentCourseId}`)
    .subscribe(data => {
      Object.entries(data).map(entry => {
        this.currentCourseName = entry[1].name;
        for (let i = 0; i < 9; i++) {
          this.holesInfo.push(entry[1].holes[i]);
        }
        this.getTeeboxInfo(this.currentTeeBox)
      })
    })
  }

  getTeeboxInfo(teeBox: any) {
    this.holesInfo.forEach((hole: any) => {
      Object.entries(hole.teeBoxes).map((tBoxInfo: any) => {
        if (tBoxInfo[1].teeType === teeBox) {
          this.totalYards += tBoxInfo[1].yards;
          this.totalPar += tBoxInfo[1].par;
        }
      })
    })
  }

}
