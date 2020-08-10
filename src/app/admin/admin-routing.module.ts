import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { UserisComponent } from './useris/useris.component';
import { EmailBlastComponent } from './email-blast/email-blast.component';


const routes: Routes = [

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: '', component: UserisComponent },
      { path: 'blast', component: EmailBlastComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
