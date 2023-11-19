import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsPageComponent } from './jobs-page/jobs-page.component';

const routes: Routes = [
    // { path: 'job', loadChildren: () => import('./jobs-page/jobs-page.module').then(m => m.JobPageModule) },
    { path: 'jobs', component: JobsPageComponent,}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
