import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./page/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ClaimPageComponent } from './page/claim-page/claim-page.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OverviewComponent } from './page/overview/overview.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
@NgModule({
  declarations: [AppComponent, LoginComponent, ClaimPageComponent, NavBarComponent, OverviewComponent, ToggleButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
