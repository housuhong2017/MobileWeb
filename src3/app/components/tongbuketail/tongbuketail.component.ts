import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {filter,map} from 'rxjs/operators';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-tongbuketail',
  templateUrl: './tongbuketail.component.html',
  styleUrls: ['./tongbuketail.component.css']
})
//显示同步课所有详情
export class TongbuketailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) {
    
   }
  courseId:number;
  course;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
      console.log(data);
      this.course = data;
    })
    // this.courseId=this.router.snapshot.params['courseId'];
    // this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
    //   this.course=data;
    // })

  }

}
// pipe(map(data=>{
//   data.name = 'haha';
//   return data;
// })).pipe(filter(data=>{
//   return data.id = 3;
// })).