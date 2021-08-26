import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})

export class ScorecardComponent implements OnInit {

  course: any;
  courses = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get("https://golf-courses-api.herokuapp.com/courses")
    .subscribe(Response => {
      console.log(Response);
      this.course = Response;
      this.courses = this.course.list;
    })
  }

}
