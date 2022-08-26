import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpsatsfaxPage } from './upsatsfax.page';

describe('UpsatsfaxPage', () => {
  let component: UpsatsfaxPage;
  let fixture: ComponentFixture<UpsatsfaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpsatsfaxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpsatsfaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
