import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ImsetgabesPage } from './imsetgabes.page';

describe('ImsetgabesPage', () => {
  let component: ImsetgabesPage;
  let fixture: ComponentFixture<ImsetgabesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImsetgabesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ImsetgabesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
