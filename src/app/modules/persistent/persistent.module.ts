import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// -------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatFormFieldControl
} from '@angular/material';

// -------------------------------- components --------------------------------
import { PersistentComponent } from './components/persistent.component';

// -------------------------------- components --------------------------------
import { CalculatePersistentNumbersService } from './services/calculate-persistent-numbers.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  declarations: [
    PersistentComponent
  ],
  providers: [CalculatePersistentNumbersService]
})
export class PersistentModule { }
