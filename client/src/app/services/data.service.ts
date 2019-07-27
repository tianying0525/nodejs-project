import {Injectable} from '@angular/core';
import {Problem} from '../models/problem.model';
import {PROBLEMS} from '../mock.problems';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()

export class DataService {

  private problemsSource = new BehaviorSubject<Problem[]>([]);

  constructor(private http: HttpClient) {}

  getProblems(): Observable<Problem[]> {
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: Response) => {
        this.problemsSource.next(res.json());
      })
      .catch(this.handleError);

    return this.problemsSource.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    return this.http.get('api/v1/problems/${id}')
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }


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
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);

  }

// error handler

  handleError(error: any): Promise<any> {

    console.error('An error occured', error);

    return Promise.reject(error.body || error);
  }
}
