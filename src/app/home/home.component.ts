﻿import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    userFromApi: User;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
        //     this.userFromApi = user;
        // });
      }
    }
