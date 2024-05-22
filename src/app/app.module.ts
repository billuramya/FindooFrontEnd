import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './Components/forgot/forgot.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashBordComponent } from './Components/dash-bord/dash-bord.component';
import { CreateNotesComponent } from './Components/create-notes/create-notes.component';
import { IconsComponent } from './Components/icons/icons.component';
import { MatMenuModule } from '@angular/material/menu';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetnotesComponent } from './Components/get-notes/get-notes.component';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { ReviewComponent } from './Components/review/review.component';
import { UpdatenoteComponent } from './Components/updatenote/updatenote.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FilterPipe } from './Pipe/filter.pipe';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SecondReviewComponent } from './Components/second-review/second-review.component';
import { DataSharingComponent } from './data-sharing/data-sharing.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent,
    ForgotComponent,
    DashBordComponent,
    CreateNotesComponent,
    IconsComponent,
    DisplayNotesComponent,
    GetnotesComponent,
    ArchiveComponent,
    TrashComponent,
    ReviewComponent,
    UpdatenoteComponent,
    FilterPipe,
    SecondReviewComponent,
    DataSharingComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
