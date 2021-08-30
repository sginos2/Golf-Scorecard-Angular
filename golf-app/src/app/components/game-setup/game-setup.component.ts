import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  courseData: any;
  teeBoxData: any;
  players = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get("https://golf-courses-api.herokuapp.com/courses")
    .subscribe(data => {
      Object.entries(data).map(entry => {
        this.courseData = entry[1];
      })
    })
    // this.http.get("https://golf-courses-api.herokuapp.com/courses/18300")
    // .subscribe(data => {
    //   Object.entries(data).map(entry => {
    //     this.teeBoxData = entry[1].holes[0].teeBoxes[0].teeType.toUpperCase();
    //     console.log(this.teeBoxData);
    //     console.log(entry);
    //   })
    // })
  }



  startGame(): void {
    this.router.navigate(['./scorecard']);
  }

}
