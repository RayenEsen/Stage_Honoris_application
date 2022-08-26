import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UCnextPage } from './ucnext.page';

describe('UCnextPage', () => {
  let component: UCnextPage;
  let fixture: ComponentFixture<UCnextPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UCnextPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UCnextPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
