import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "@env/environment";
import {of} from 'rxjs' 

export class ApiClass {
    public url = environment.uri;
    public isproduction = environment.production;

    constructor(protected http:HttpClient){}

    error(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent){
            errorMessage = err.error.message;
        }else{
            errorMessage = `Error code: ${err.status}\nMessage:_${err.message}`;
        }
        return of({error: true, msg: errorMessage, data: null});
    }
}