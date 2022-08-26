import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AacnebeulPage } from './aacnebeul.page';

describe('AacnebeulPage', () => {
  let component: AacnebeulPage;
  let fixture: ComponentFixture<AacnebeulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AacnebeulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AacnebeulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
