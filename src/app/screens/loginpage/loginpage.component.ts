import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Apiservice } from 'src/app/service/api.service';
import { secondstate } from 'src/app/States/secondscreen.state';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  username: string = "";
  password?: string = "";


  constructor(private api: Apiservice, private spinner: NgxSpinnerService, private router: Router) { }

  ngOnInit(): void {
  }


  submitform() {
    let form = {
      username: this.username,
      password: this.password,
      device_token: "0",
      device_type: "0"
    }
    if (this.username == "" || this.password == "") {
      alert("Please enter all mandatory fields")
    }

    else {


      this.api.validation(form).subscribe(res => {
        let response = res.json();
        if (response.status == 100) {
          alert(response.message)
        }
        else if (response.status == 200) {
          console.log(response.response);
          sessionStorage.setItem("token",response.response.token);
          this.router.navigate(["/header/secondscreen"])
        }

      }, err => {
        this.spinner.hide();
        console.log(err.status)
      })
    }
  }

}
