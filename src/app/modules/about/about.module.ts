import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutComponent } from './about.component';
import { InfoComponent } from './components/Info/info.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
];

@NgModule({
  declarations: [AboutComponent, InfoComponent],
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [],
})
export class AboutModule {}
