import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImsetnextPage } from './imsetnext.page';

describe('ImsetnextPage', () => {
  let component: ImsetnextPage;
  let fixture: ComponentFixture<ImsetnextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsetnextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImsetnextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
