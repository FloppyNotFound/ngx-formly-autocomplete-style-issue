import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AutocompleteTypeComponent } from './autocomplete-type/autocomplete-type.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AutocompleteTypeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'autocomplete',
          component: AutocompleteTypeComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    MatInputModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
