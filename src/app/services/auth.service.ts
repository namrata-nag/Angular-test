import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem("userData");
    // true or false
    return !!(token && token.length > 0);
  }
}
