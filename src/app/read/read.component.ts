import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { OnInit } from '@angular/core';
import * as TutorialActions from './../actions/tutorial.actions';

export class ReadComponent implements OnInit {

  // Section 1
  tutorials: Observable<Tutorial[]>;

  // Section 2
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index) )
  }

  ngOnInit() {}

}