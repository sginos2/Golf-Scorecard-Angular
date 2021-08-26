import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  course: any;
  courses = [];

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get("https://golf-courses-api.herokuapp.com/courses")
    .subscribe(Response => {
      console.log(Response);
      this.course = Response;
      this.courses = this.course;
    })
  }

  startGame(): void {
    this.router.navigate(['./scorecard']);
  }

}
