// this component(Module) is used as outsourced component which handles only routiing

import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";

// Route should have a specific structure
const appRoutes: Routes = [
    // these top level routes are accessed through <router-outlet></router-outlet> in root component of app
    // child to these root routes are loaded as children to the <router-outlet></router-outlet> in component itself
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "users",
      component: UsersComponent,
      children: [
        {
          path: ":id/:name",
          component: UserComponent
        }
      ]
    },
    {
      path: "servers",
    //   canActivate: [AuthGuard],  // applying guards having logic that returns true or redirection link
      component: ServersComponent,
      canActivateChild: [AuthGuard],    // for adding guard to children of the current guard
      children: [
        // appending children to current route
        {
          path: ":id",
          component: ServerComponent
        },
        {
          path: ":id/edit",
          component: EditServerComponent,
          canDeactivate: [CanDeactivateGuard]
        }
      ]
    },
    {
      path: 'not-found',
      component: PageNotFoundComponent
    },
    {
      path: '**',
      redirectTo: '/not-found'
    }
  ]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)], // Registering the routes defined above
    exports: [RouterModule] // exporting the module to use in another module
})
export class AppRoutingModule {

}