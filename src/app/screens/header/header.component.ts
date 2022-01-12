import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getChannelName } from '../../selectors/header.selector';
import { AppState } from '../../Reducers/app.state'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name$: Observable<string> | undefined;
  drawerstatus: boolean = false;
  // @ViewChild('drawerid') drawerid!: ElementRef

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    // this.name$ = this.store.select(getChannelName);
  }

  ngAfterViewInit() {
    // this.drawerid.nativeElement.style.width = "none";
  }

  toggledrawer() {
    if (this.drawerstatus == false) {
      this.drawerstatus = true;
      // this.drawerid.nativeElement.style.display = "block";
    }
    else {
      this.drawerstatus = false;
      // this.drawerid.nativeElement.style.display = "none";
    }
  }
}
