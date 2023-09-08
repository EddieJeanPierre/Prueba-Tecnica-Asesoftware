import { NgModule } from '@angular/core';
import { NebularModule } from './nebular/nebular.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuSidebarComponent } from './components/menu-sidebar/menu-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuSidebarComponent,
    FooterComponent
  ],
  imports: [
    NebularModule, RouterModule
  ],
  exports: [
    NebularModule, HeaderComponent, MenuSidebarComponent, FooterComponent
  ]
})
export class CoreModule { }
