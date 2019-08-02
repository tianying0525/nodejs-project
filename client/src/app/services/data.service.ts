import {Injectable} from '@angular/core';
import {Problem} from '../models/problem.model';
import {PROBLEMS} from '../mock.problems';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
// import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
// @Injectable()

export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) {}

  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: Problem[]) => {
        this.problemsSource.next(res);
      })
      .catch(this.handleError);

    return this.problemsSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get('api/v1/problems' + '/' + id)
      .toPromise()
      // .then((res: Problem) => res)
      .catch(this.handleError);
  }

  // getProblem(id: number): Promise<Problem> {
  //   return this.http.get('api/v1/problems',{ params: id})
  //     .toPromise()
  //     .catch(this.handleError);
  // }


  addProblem(problem: Problem): Promise<Problem> {
    // let headers = new HttpHeaders({'content-type': 'application/json'});
    // let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post('api/v1/problems', problem, httpOptions)
      .toPromise()
      .then((res: Problem) => {
        this.getProblems();
        return res;
      })
      .catch(this.handleError);

  }

// error handler

  handleError(error: any): Promise<any> {

    console.error('An error occured', error);

    return Promise.reject(error.body || error);
  }
}

