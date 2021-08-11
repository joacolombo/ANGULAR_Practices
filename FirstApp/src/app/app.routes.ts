import { Route, RouterModule } from "@angular/router";
import { LondonIndexComponent } from "./components/London/LondonIndex/londonIndex.component";
import { TokioIndexComponent } from "./components/Tokio/TokioIndex/tokioIndex.component";
import { ParisIndexComponent } from "./components/Paris/ParisIndex/parisIndex.component";

const routes: Route[]=[
    {
        path:'london',
        component: LondonIndexComponent,
    },
    {
        path:'tokio',
        component: TokioIndexComponent,
    },
    {
        path:'paris',
        component: ParisIndexComponent,
    },
    {
        path:'**',
        redirectTo:'london',
        pathMatch:'full'
    }
];

export const appRouting = RouterModule.forRoot(routes);