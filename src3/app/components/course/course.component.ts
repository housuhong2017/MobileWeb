import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  movies;
  moviesId:number;
  courseId:number;
  courses;
  videos;
  videoId:number;
  ngOnInit() {

    this.http.get('/api/movies').subscribe(data=>{
      this.movies=data;
    })
    this.router.params.subscribe((params)=>{
      this.moviesId = params['moviesId'];
    })

    this.http.get('/api/videos').subscribe(data=>{
      this.videos = data;
    })
    this.router.params.subscribe((params)=>{
      this.videoId = params['videoId'];
    })
    
  
  
  }
  go(){
    //js跳转
    this.route.navigate(['/course',600],{queryParams:{id:1000}});
  }

}
