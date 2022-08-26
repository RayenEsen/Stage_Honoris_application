import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AacnextPage } from './aacnext.page';

describe('AacnextPage', () => {
  let component: AacnextPage;
  let fixture: ComponentFixture<AacnextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacnextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AacnextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
