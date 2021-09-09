import { Injectable } from '@angular/core';
import { Game } from '../interfaces/game';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class GameDbService {

  // private gameRef: AngularFirestoreDocument<Game>;

  constructor(private db: AngularFirestore) { }
}
