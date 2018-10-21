import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public http:HttpClient ) { }
  course;
  headers= new HttpHeaders({});
  ngOnInit() {

    this.http.post('/api',{name:'abc',pwd:1234},{headers:this.headers}).subscribe((data)=>{
      console.log(data);
    })
    this.http.get('/api/courses/1').subscribe((data)=>{
      this.course = data;
      
      // console.log(data);
    })//请求调用函数
  }

}
