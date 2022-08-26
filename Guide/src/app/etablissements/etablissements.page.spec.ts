import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtablissementsPage } from './etablissements.page';

describe('EtablissementsPage', () => {
  let component: EtablissementsPage;
  let fixture: ComponentFixture<EtablissementsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtablissementsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtablissementsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
