import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { Player } from '../../interfaces/player'

@Component({
  selector: 'app-game-setup',
  templateUrl: './game-setup.component.html',
  styleUrls: ['./game-setup.component.css']
})
export class GameSetupComponent implements OnInit {

  courseData: any;
  teeBoxData: any;
  playerNameFC = new FormControl('', this.nameValidator());
  startGameFC = new FormControl(this.playerValidator());
  players: Player[] = [];
  playerId = 0;

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
  }

  addPlayer(): void {
    if(this.playerNameFC.value && this.players.length < 4) {
      this.playerId++;
      this.players.push({
        id: this.playerId.toString(),
        name: this.playerNameFC.value,
        scores: []
      });
      this.playerNameFC.setValue('');
      console.log(this.players);
    }

  }

  nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.players && this.players.length) {
          this.players.forEach(player => {
              if (player.name.toLowerCase() === control.value.toLowerCase()) {
                  error = {duplicate: true};
              }
          });
      }
      return error;
    };
  }

  playerValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      let error = null;
      if (this.players.length === 0) {
        error = {noPlayers: true};
      };
      return error;
    }
  }

  startGame(): void {
    if (this.players.length !== 0) {
      this.router.navigate(['./scorecard']);
    } 
  }

}
