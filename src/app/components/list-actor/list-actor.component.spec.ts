import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActorComponent } from './list-actor.component';

describe('ListActorComponent', () => {
  let component: ListActorComponent;
  let fixture: ComponentFixture<ListActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
