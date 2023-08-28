import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogComponent } from './blog/blog.component';
import { PipeComponent } from './pipe/pipe.component';
import { registerLocaleData } from '@angular/common'; 
import localeFr from '@angular/common/locales/fr';
import { ExpoPipe } from './pipe/expo.pipe';
import { DirectiveComponent } from './directive/directive.component';
import { HoverDirective } from './directive/hover.directive';
import { BlogDirective } from './directive/blog.directive';
import { FlagsDirective } from './directive/flags.directive';
import { ParentComponent } from './lifecycle/parent.component';
import { ChildComponent } from './lifecycle/child.component';
import { GchildComponent } from './lifecycle/gchild.component';
import { BlogformComponent } from './blogform/blogform.component';
import { ServdemoComponent } from './servdemo/servdemo.component';
import { ServchildComponent } from './servdemo/servchild.component'; 
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponent } from './reactive/reactive.component';
// the second parameter 'fr' is optional 
registerLocaleData(localeFr, 'fr');
// decorators => meta data about the class

const routes: Routes = [];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BloglistComponent,
    BlogComponent,
    PipeComponent,
    ExpoPipe,
    DirectiveComponent,
    HoverDirective,
    BlogDirective,
    FlagsDirective,
    ParentComponent,
    ChildComponent,
    GchildComponent,
    BlogformComponent,
    ServdemoComponent,
    ServchildComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/**
 * vendor => angular or 3rd party libraries
 * polyfills => across browsers
 * main.js => main entry point and all the bootstrap logic is here
 * runtime.js => provides the runtime env necessary for appn execution
 * like change detection, DI routing etc
 */