import { inject, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService = null;
  let backend: MockBackend =  null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        DashboardService
      ];
    })
    .compileComponents();
  });

  beforeEach(inject([DashboardService, MockBackend],(dashboardService: DashboardService, mockBackend: MockBackend) => {
    service = dashboardService;
    backend = mockBackend;
  }));

  it('DashboardService search button should call endpoint and return its result', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true });
      });
      connection.mockRespond(new Response(options));
    });

    service
      .getMovies('sanam')
      .subscribe((response) => {
        expect(response).toEqual({ success: true });
        done();
      });
  });

  it('DashboardService method Type', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toEqual(RequestMethod.0);
    });
  });

  it('DashboardService URL', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.url).toEqual('https://api.themoviedb.org/3/search/movie?api_key=0058d43a094e9d8f63318cf2d24d8f15&query=sanam');
    });
  });

  it('DashboardService Request Text', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.text()).toEqual(JSON.stringify('sanam'));
    });
  });

  it('DashboardService Request Header Content Type', () => {
    backend.connections.subscribe((connection: MockConnection) => {
      console.log(connection.request)
      expect(connection.request.headers.get('Content-Type')).toEqual('application/json');
    });
  });
})
