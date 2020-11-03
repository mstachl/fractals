import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FractalViewComponent } from './components/fractal-view/fractal-view.component';
import { MandelbrotComponent } from './components/mandelbrot/mandelbrot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FractalControllerComponent } from './components/fractal-controller/fractal-controller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationWrapperComponent } from './components/navigation-wrapper/navigation-wrapper.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FractalExamplesComponent } from './components/fractal-examples/fractal-examples.component';
import { ContactComponent } from './components/contact/contact.component';
import { MailService } from './services/mail.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FractalViewComponent,
    MandelbrotComponent,
    FractalControllerComponent,
    NavigationWrapperComponent,
    AboutUsComponent,
    FractalExamplesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule, 
    MatButtonToggleModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: FractalControllerComponent},
      {path: 'about-us', component: AboutUsComponent}, 
      {path: 'examples', component: FractalExamplesComponent}, 
      {path: 'contact', component: ContactComponent}, 
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ])
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
