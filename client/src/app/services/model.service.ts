import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  getApi : string ='http://localhost:7006/api/models/';
  getByModelId : string ='http://localhost:7006/api/model/modelId';
  getByCategory : string ='http://localhost:7006/api/model/category'
  constructor(private http: HttpClient) {}

  public getModel() : Observable<any>{
   
      return this.http.get<any>(this.getApi); 
    
   }
   public getModelByID(id : string) : Observable<any>{
   
      return this.http.get<any>(this.getByModelId+ '/' + id ); 
    
   }
   public getModelByCategory(category : string) : Observable<any>{
   
      return this.http.get<any>(this.getByCategory+ '/' + category ); 
    
   }

}
