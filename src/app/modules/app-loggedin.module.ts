import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginLayoutComponent} from '../layout/login/login-layout.component';
// import { AuthGuard } from '../auth/auth.guard';
import {AppLoggedinHeaderComponent} from '../layout/login/header/header.component';
import {AppLoggedinFooterComponent} from '../layout/login/footer/footer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
        path: 'users',
        loadChildren: './user/user.module#UserModule'
    }, {
        path: 'boards',
        loadChildren: './boards/boards.module#BoardsModule'
    }]
  }
];

@NgModule({
    declarations: [
        LoginLayoutComponent,
        AppLoggedinHeaderComponent,
        AppLoggedinFooterComponent
    ],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoggedInAppModule { }
