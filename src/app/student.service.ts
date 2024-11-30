import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { ObjStudent } from './Obj/obj-student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl :string = 'http://localhost:8080/api/v1/students/';

  constructor(private http: HttpClient) { }

getData(): Observable<ObjStudent[]> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}