import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-coursetail',
  templateUrl: './coursetail.component.html',
  styleUrls: ['./coursetail.component.css']
})
export class CoursetailComponent implements OnInit {

  constructor(private http:HttpClient,private router:ActivatedRoute) { }
  videoId:number;
  video;
  ngOnInit() {
    this.videoId=this.router.snapshot.params['videoId'];
    this.http.get('/api/videos/'+this.videoId).subscribe((data)=>{
      console.log(data);
      this.video = data;
    })
  }

}
