import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

const material = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
];
@NgModule({
  declarations: [AppComponent, HeaderComponent, UsuarioFormComponent],
  imports: [BrowserModule, BrowserAnimationsModule, material],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
