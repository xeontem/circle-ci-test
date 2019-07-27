import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CalculatePersistentNumbersService } from '../services/calculate-persistent-numbers.service';

@Component({
  selector: 'app-persistent',
  templateUrl: './persistent.component.html',
  styleUrls: ['./persistent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersistentComponent implements OnInit {
  start = 1;
  end = 2;
  zerosCount = 1;
  number = 277777788888899;
  data: Object[] = [];

  constructor(
    private persistantService: CalculatePersistentNumbersService,
    private cd:                ChangeDetectorRef,
    private sanitizer:         DomSanitizer
  ) {}

  ngOnInit() {
  }

  getPersistentNumbers(e) {
    e.preventDefault();
    this.persistantService.calculate(this.start, this.end, this.zerosCount)
      .subscribe((data: Object[]) => {
        this.data = data;
        this.cd.markForCheck();
      });
  }

  getPersistentNumber(e) {
    e.preventDefault();
    this.persistantService.calculate(this.number)
      .subscribe((data: Object[]) => {
        this.data = data;
        this.cd.markForCheck();
      });
  }

  calcClass(iterations) {
    switch (iterations.length) {
      case 0: return 'number-wrapper--gray';
      case 1: return 'number-wrapper--red';
      case 2: return 'number-wrapper--orange';
      case 3: return 'number-wrapper--yellow';
      case 4: return 'number-wrapper--green';
      case 5: return 'number-wrapper--cyan';
      case 6: return 'number-wrapper--blue';
      case 7: return 'number-wrapper--purple';
      default: return 'number-wrapper--super';
    }
  }

}
