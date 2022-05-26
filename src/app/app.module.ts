import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BetterHighlightDirective } from './directives/better-highlight/better-highlight.directive';
import { BasicHighlightDirective } from './directives/basic-highlight/basic-highlight.directive';
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BetterHighlightDirective,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    RecipesModule,
    ShoppingListModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
