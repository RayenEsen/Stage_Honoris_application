import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImsetunisPage } from './imsetunis.page';

describe('ImsetunisPage', () => {
  let component: ImsetunisPage;
  let fixture: ComponentFixture<ImsetunisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsetunisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImsetunisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
