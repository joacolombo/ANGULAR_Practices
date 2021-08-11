import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponentLondon } from "./components/London/header/header.component";
import { FooterComponentLondon } from "./components/London/footer/footer.component";
import { SectionComponentLondon } from "./components/London/section/section.component";
import { SidebarComponentLondon } from "./components/London/sidebar/sidebar.component";
import { LondonIndexComponent } from "./components/London/LondonIndex/londonIndex.component";
import { HeaderComponentTokio } from "./components/Tokio/header/header.component";
import { FooterComponentTokio } from "./components/Tokio/footer/footer.component";
import { SectionComponentTokio } from "./components/Tokio/section/section.component";
import { SidebarComponentTokio } from "./components/Tokio/sidebar/sidebar.component";
import { TokioIndexComponent } from "./components/Tokio/TokioIndex/tokioIndex.component";
import { HeaderComponentParis } from "./components/Paris/header/header.component";
import { FooterComponentParis } from "./components/Paris/footer/footer.component";
import { SectionComponentParis } from "./components/Paris/section/section.component";
import { SidebarComponentParis } from "./components/Paris/sidebar/sidebar.component";
import { ParisIndexComponent } from "./components/Paris/ParisIndex/parisIndex.component";
import { appRouting } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentLondon,
    FooterComponentLondon,
    SectionComponentLondon,
    SidebarComponentLondon,
    LondonIndexComponent,
    HeaderComponentTokio,
    FooterComponentTokio,
    SectionComponentTokio,
    SidebarComponentTokio,
    TokioIndexComponent,
    HeaderComponentParis,
    FooterComponentParis,
    SectionComponentParis,
    SidebarComponentParis,
    ParisIndexComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
