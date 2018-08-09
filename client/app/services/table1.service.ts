// DEPENDENCIES
import { Observable } from 'rxjs/Rx';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

// SECURITY
import { AuthenticationService } from '../security/authentication.service';

// CONFIG
import { config } from "../../config/properties";

// MODEL
import { Table1BaseService } from "./base/table1.base.service";
import { Table1 } from '../domain/my-contacts_db/table1';

/**
 * YOU CAN OVERRIDE HERE Table1BaseService
 */

@Injectable()
export class Table1Service extends Table1BaseService {
    
    // CONSTRUCTOR
    constructor(http: Http, authenticationService: AuthenticationService) {
            super(http, authenticationService);
    }
    
}