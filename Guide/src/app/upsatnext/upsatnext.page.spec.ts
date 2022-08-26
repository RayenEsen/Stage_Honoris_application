import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsatnextPage } from './upsatnext.page';

describe('UpsatnextPage', () => {
  let component: UpsatnextPage;
  let fixture: ComponentFixture<UpsatnextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsatnextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsatnextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
