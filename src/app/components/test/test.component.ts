import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit{

  user
  constructor(private http:HttpClient){

  }
ngOnInit(){

this.fetchUsers();
//this.user = localStorage.getItem('users')
}

fetchUsers(){
  this.http.get('https://randomuser.me/api/?results='+100).subscribe(mama=>{
    console.log(mama)
   this.user = mama;
  localStorage.setItem('users',this.user)
    })
}



  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/