import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';
import { ContentComponent } from './layouts/content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    ContentComponent
  ],
  exports: [
    HeaderComponent,
    SideBarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
