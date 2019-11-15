import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  logIn(x) {
    localStorage.setItem("userData", x.value.userName || "");
    this.router.navigate([""]);
  }
  constructor(
    private fb: FormBuilder,
    public router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    if (this.auth.isAuthenticated()) return this.router.navigate([""]);
    this.loginForm = this.fb.group({
      userName: "",
      password: ""
    });
  }
}
