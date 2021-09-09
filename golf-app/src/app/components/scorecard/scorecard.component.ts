import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameSetupComponent } from '../../components/game-setup/game-setup.component';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})

export class ScorecardComponent implements OnInit {

  courseData: any = [];

  constructor(
    private http: HttpClient,
    private game: GameSetupComponent
  ) { }

  ngOnInit(): void {
    this.http.get("https://golf-courses-api.herokuapp.com/courses")
    .subscribe(data => {
      this.courseData.push(data);
    })
  }

}
