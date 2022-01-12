import { Injectable, OnInit } from "@angular/core";
import { Http, Headers, Response } from '@angular/http';
import { NgxSpinnerService } from "ngx-spinner";
import { map } from 'rxjs/operators';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class Apiservice implements OnInit {


    constructor(private http: Http, private spinner: NgxSpinnerService) {

    }

    ngOnInit(): void {

    }

commonapirequire(){
    this.spinner.show();
        let headers = new Headers();
        let token= sessionStorage.getItem("token");
        headers.append("Token",token!)
        return headers
}

    Fetchimages() {
        this.spinner.show();
        return this.http.get('https://jsonplaceholder.typicode.com/photos').pipe(map((res: any) => {
            this.spinner.hide();
            return res;
        }))
    }

    validation(form:any) {
      let headers=this.commonapirequire();
        
        return this.http.post(`${environment.apiurl}login/`, form, { headers}).pipe(map((res: any) => {
            this.spinner.hide();
            return res;
        }))
    }



}