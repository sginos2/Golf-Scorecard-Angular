import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Game } from '../interfaces/game';

@Injectable({
  providedIn: 'root'
})
export class GameDbService {

  private game: AngularFirestoreDocument<any>

  constructor(
    private db: AngularFirestore,
    private http: HttpClient,
    ) { 
      this.game = this.db.doc('game');
    }

  createNewGame(data: any) {
    return new Promise<any>((resolve, reject) => {
      this.db
      .collection('games')
      .add(data)
      .then(res => {}, err => reject(err));
    });
  }

  // getGameObservable(): Observable<Game[]>{
    // return this.game.snapshotChanges()
    // .pipe(
    //   map((items: DocumentChangeAction<Game>[]): Game[] => {
    //     return items.map((item: DocumentChangeAction<Game>): Game => {
    //       return {
    //         courseId: item.payload.doc.data().courseId,
    //         playerList: item.payload.doc.data().playerList,
    //         teeBox: item.payload.doc.data().teeBox
    //       }
    //     })
    //   })
    // )
  // }

}
