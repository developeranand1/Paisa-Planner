import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurToolsComponent } from './our-tools.component';

describe('OurToolsComponent', () => {
  let component: OurToolsComponent;
  let fixture: ComponentFixture<OurToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
