import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Reducers/app.state';
import { increment, decrement, reset } from '../../Actions/header.actions';
import {secondstate} from '../../States/secondscreen.state';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.scss']
})
export class LandingpageComponent implements OnInit {
  sec!:secondstate

  constructor(private store: Store<AppState>,private router:Router) { }

  ngOnInit(): void {
    console.log(this.sec)
  }
 increment() {
    this.store.dispatch(increment());
  }

  navigatesecondscreen(){
    this.router.navigate(['/header/secondscreen'])
  }
}
