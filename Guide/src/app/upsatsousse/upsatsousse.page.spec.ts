import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsatsoussePage } from './upsatsousse.page';

describe('UpsatsoussePage', () => {
  let component: UpsatsoussePage;
  let fixture: ComponentFixture<UpsatsoussePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsatsoussePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsatsoussePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
