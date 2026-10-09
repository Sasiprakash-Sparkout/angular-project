import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FarmService {
    http=inject(HttpClient)
    //get data
    getFarms():Observable<any>{
       return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    }
    //get data by id
    getFarmId(Id:any):Observable<any>{
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
    }
     getDelete(id:any):Observable<any>{
      return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
     }
}
