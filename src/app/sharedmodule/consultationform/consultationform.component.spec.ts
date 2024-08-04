import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationformComponent } from './consultationform.component';

describe('ConsultationformComponent', () => {
  let component: ConsultationformComponent;
  let fixture: ComponentFixture<ConsultationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultationformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
