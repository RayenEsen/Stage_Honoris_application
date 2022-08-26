import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EspritunisPage } from './espritunis.page';

describe('EspritunisPage', () => {
  let component: EspritunisPage;
  let fixture: ComponentFixture<EspritunisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspritunisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EspritunisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
