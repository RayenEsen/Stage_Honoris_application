import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImsetsoussePage } from './imsetsousse.page';

describe('ImsetsoussePage', () => {
  let component: ImsetsoussePage;
  let fixture: ComponentFixture<ImsetsoussePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsetsoussePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImsetsoussePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
