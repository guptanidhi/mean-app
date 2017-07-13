/*import { DashboardComponent } from './dashboard.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DashboardService} from '../dashboard.service';

describe('Component: Dashboard Component', () => {
  let fixture: ComponentFixture<DashboardComponent>;
  let component: DashboardComponent;
  let de: DebugElement;
  let dashboardService: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declaration: [DashboardComponent],
      providers: [DashboardService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    // component = fixture.componentInstance;
    // de = fixture.debugElement.query(By.css('h2'));
    dashboardService = TestBed.get(DashboardService);
    component = new DashboardComponent(dashboardService);
  })


  it('should have a heading - Search Your Favorite Movie', () => {
    expect(component.heading).toEqual("Search Your Favorite Movie");
  });
})*/
