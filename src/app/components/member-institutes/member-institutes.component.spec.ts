import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberInstitutesComponent } from './member-institutes.component';

describe('MemberInstitutesComponent', () => {
  let component: MemberInstitutesComponent;
  let fixture: ComponentFixture<MemberInstitutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberInstitutesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
