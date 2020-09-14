import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  url = 'http://localhost:3000/awesomes';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
  // tslint:disable-next-line:typedef
  getId(id): Observable<any>{
    return this.http.get(this.url + '/' + id);
  }

  // tslint:disable-next-line:typedef
  edit(id, awesome): Observable<any>{
    return this.http.put(this.url  + '/' + id, awesome);
  }
  delete(id): Observable<any>{
    return  this.http.delete(this.url + '/' + id);
  }
}
