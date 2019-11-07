import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { LoginComponent } from "./page/login/login.component";
import { ClaimPageComponent } from "./page/claim-page/claim-page.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import { SectionComponent } from "./components/section/section.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", component: ClaimPageComponent, canActivate: [AuthGuardService] },
  { path: "claim", component: SectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
