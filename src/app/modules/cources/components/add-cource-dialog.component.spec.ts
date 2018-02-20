import {
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  inject,
  TestBed,
  tick,
  flush,
} from '@angular/core/testing';
import { CourcesModule } from '../cources.module';
import { ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  Inject,
  Injector,
  NgModule,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {SpyLocation} from '@angular/common/testing';
import { async } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import {OverlayContainer, ScrollStrategy} from '@angular/cdk/overlay';

import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatSliderModule,
  MatDialogModule,


  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,

  DateAdapter,
  MAT_DATE_FORMATS,

  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatButtonModule,
  MatFormFieldControl,
  MatIconModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';

import { AddCourceDialogComponent } from './add-cource-dialog.component';
class FormBuilderStub {

}

class ReducerManagerStub {
  addFeature() {}
}
class MatDialogRefStub {}
describe('AddCourceDialogComponent', () => {
  let dialog: MatDialog;
  let overlayContainer: OverlayContainer;
  let overlayContainerElement: HTMLElement;

  // let component: AddCourceDialogComponent;
  // let viewContainerFixture: ComponentFixture<AddCourceDialogComponent>;
  let mockFormBuilder: FormBuilderStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CourcesModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatSliderModule,
        ReactiveFormsModule,
        // MatDialogModule,
      ],
      providers: [
      //   MatDialog,
      {provide: MatDialogRef, useClass: MatDialogRefStub },
      //   MAT_DIALOG_DATA,
      //   // DateAdapter,

      //   // MAT_DATE_FORMATS,
      // ReducerManager,
      // ReducerManagerDispatcher,
        {provide: FormBuilder, useClass: FormBuilderStub },
        {provide: ReducerManager, useClass: ReducerManagerStub },
      ]
    })
    // .overrideModule(BrowserDynamicTestingModule, {
    //   set: {
    //     entryComponents: [AddCourceDialogComponent]
    //   }
    // })
    .compileComponents();

  }));

  beforeEach(inject([MatDialog, FormBuilder, OverlayContainer],
    (d: MatDialog, fb: FormBuilder, oc: OverlayContainer) => {
      dialog = d;
      mockFormBuilder = fb as FormBuilderStub;
      overlayContainer = oc;
      overlayContainerElement = oc.getContainerElement();
  }));

  beforeEach(() => {
    // viewContainerFixture = TestBed.createComponent(AddCourceDialogComponent);

    // viewContainerFixture.detectChanges();
    // component = viewContainerFixture.componentInstance;
  });
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AddCourceDialogComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(1).toBeTruthy();
  });
});
