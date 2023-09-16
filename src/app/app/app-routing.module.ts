import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/cms/overview'},
    {path: 'cms', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)},
    {path: 'software', loadChildren: () => import('../software-research/software-research.module').then(m => m.SoftwareResearchModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        enableTracing: false,
    })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
