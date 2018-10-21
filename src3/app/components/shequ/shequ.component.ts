import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-shequ',
  templateUrl: './shequ.component.html',
  styleUrls: ['./shequ.component.css']
})
export class ShequComponent implements OnInit {

  constructor(private http:HttpClient, private router:ActivatedRoute,private route:Router) { }
  shequs;
  shequsId:number;
  topics;
  topicsId:number;
  ngOnInit() {
    this.http.get('/api/shequs').subscribe(data=>{
      this.shequs=data;
    })
    this.router.params.subscribe((params)=>{
      this.shequsId = params['shequsId'];
    });
    this.http.get('/api/topics').subscribe(data=>{
      this.topics=data;
    })
    this.router.params.subscribe((params)=>{
      this.topicsId = params['topicsId'];
    });
    console.log(this.router.snapshot.queryParams['id'])
  }

}
