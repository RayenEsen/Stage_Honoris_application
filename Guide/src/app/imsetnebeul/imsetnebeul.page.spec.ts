import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImsetnebeulPage } from './imsetnebeul.page';

describe('ImsetnebeulPage', () => {
  let component: ImsetnebeulPage;
  let fixture: ComponentFixture<ImsetnebeulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsetnebeulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImsetnebeulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
