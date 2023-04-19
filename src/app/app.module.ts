import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent, MenuComponent, Button, EntryDataComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
