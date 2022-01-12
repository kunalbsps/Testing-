import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { decrement, dynamic } from 'src/app/Actions/header.actions';
import { AppState } from 'src/app/Reducers/app.state';
import { Http, Headers } from '@angular/http';
import { secondstate } from '../../States/secondscreen.state';
import { Apiservice } from 'src/app/service/api.service';


@Component({
  selector: 'app-secondscreen',
  templateUrl: './secondscreen.component.html',
  styleUrls: ['./secondscreen.component.scss']
})
export class SecondscreenComponent implements OnInit {

  name: string = "pinky";
  storestate!: secondstate;
  images: any;

  constructor(private store: Store<AppState>, private router: Router, private http: Http, private api: Apiservice) { }

  ngOnInit(): void {
    this.fetchdetail()
  }

  decrement() {

    this.store.dispatch(dynamic({ hey: this.name }));
  }

  navigatelandingscreen() {
    this.router.navigate(['/header/landingpage'])
  }

 
  fetchdetail() {
    this.api.Fetchimages().subscribe(res => {
      let response = res.json();
      this.images = response
    }, err => {

      console.log(err.status)
    })
  }

}
