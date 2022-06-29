import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have filter drilldown populations options 'Nation'`, () => {
    const options = app.filterPopulationOptions;
    expect(options.drilldowns).toEqual('Nation');
  });

  it(`should have filter measures populations options 'Population'`, () => {
    const options = app.filterPopulationOptions;
    expect(options.measures).toEqual('Population');
  });

  it(`should have margin equal '24px 48px'`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const element = fixture.debugElement.query(By.css('.chart-container')).nativeElement as HTMLDivElement;
    expect((getComputedStyle(element)).margin).toEqual('24px 48px');
  });
});
