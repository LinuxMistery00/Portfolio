import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { OptionsComponent } from './components/options/options.component';
import { MiniaboutComponent } from './home/components/home/miniabout/miniabout.component';
import { SkillcardComponent } from './home/components/home/skillcard/skillcard.component';
import { SkillsComponent } from './home/components/home/skills/skills.component';
import { AboutComponent } from './home/components/home/about/about.component';
import { ProjectcardComponent } from './home/components/home/projectcard/projectcard.component';
import { ProjectsComponent } from './home/components/home/projects/projects.component';
import { HttpClientModule } from '@angular/common/http';
import { FinalbarComponent } from './home/components/home/finalbar/finalbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    OptionsComponent,
    MiniaboutComponent,
    SkillcardComponent,
    SkillsComponent,
    AboutComponent,
    ProjectcardComponent,
    ProjectsComponent,
    FinalbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
