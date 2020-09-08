import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FractalViewComponent } from './components/fractal-view/fractal-view.component';
import { MandelbrotComponent } from './components/mandelbrot/mandelbrot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FractalControllerComponent } from './components/fractal-controller/fractal-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ExamplesComponent } from './components/examples/examples.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: MainComponent },
{ path: 'examples', component: ExamplesComponent }]  

@NgModule({
  declarations: [
    AppComponent,
    FractalViewComponent,
    MandelbrotComponent,
    FractalControllerComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    ExamplesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


