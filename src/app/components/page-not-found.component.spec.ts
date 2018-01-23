import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PageNotFoundComponent } from './page-not-found.component';
//-------------------------------- material --------------------------------
import {
  MatCardModule,
  MatGridListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatMenuTrigger,
  MatSnackBarModule } from '@angular/material';
describe('PageNotFoundComponentComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ],
      imports: [
         // material
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSnackBarModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
