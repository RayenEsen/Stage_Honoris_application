import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AactunisPage } from './aactunis.page';

describe('AactunisPage', () => {
  let component: AactunisPage;
  let fixture: ComponentFixture<AactunisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AactunisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AactunisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
