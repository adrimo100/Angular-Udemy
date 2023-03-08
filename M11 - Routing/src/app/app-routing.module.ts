import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuardService } from "./can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ServerResolverService } from "./server-resolver.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes =  [ //Array con las rutas de nuestra app.
{path: "", component: HomeComponent}, //Cada ruta (objeto) debe contener su path(url) y el componente que carga
{path: "users", component: UsersComponent, children: [
  {path: ":id/:name", component: UserComponent},
]},
{path: "servers", /*canActivate: [AuthGuardService],*/ canActivateChild: [AuthGuardService], component: ServersComponent,
children:[
{path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuardService]},
{path: ":id", component: ServerComponent, resolve: {server: ServerResolverService}}
]},
//{path: "not-found", component: PageNotFoundComponent},
{path: "not-found", component: ErrorPageComponent, data: {message: "Page not found!"}},
{path:"**", redirectTo:"/not-found"}
]

@NgModule({
    imports:[
        //RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule] //exportamos de este módulo RouterModule
})
export class AppRoutingModule {}