import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsattunisPage } from './upsattunis.page';

describe('UpsattunisPage', () => {
  let component: UpsattunisPage;
  let fixture: ComponentFixture<UpsattunisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsattunisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsattunisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
