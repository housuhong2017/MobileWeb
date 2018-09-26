import { Component, OnInit, Input,Output } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
@NgModule({
  
  imports: [
    BrowserModule, 
    FormsModule  //import the FormsModule before binding with [(ngModel)]
  ],
  
})
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public todo:any='';
  public todoList = [];
  public doneList = [];
  constructor(private storage:TodoService) { }

  ngOnInit() {
  }
  addTodo(e) {
    let todoObj = {
      todo: this.todo,
      done: false
    }

    if (e.keyCode == 13) {  //表示回车按钮
      this.todoList.push(todoObj);
      this.todo = '';       //清空输入框
    }
  }
  deleteTodo(index, done) {
    if (done) {
      this.todoList.splice(index, 1);
    } else {
      this.doneList.splice(index, 1);
    }
  }
  
  changeTodo(index, done) {
    if (done) {
      var tempTodo = this.todoList[index]
      this.doneList.push(tempTodo);
      this.todoList.splice(index, 1);
    } else {
      var tempDone = this.doneList[index]
      this.todoList.push(tempDone);
      this.doneList.splice(index, 1);
    }
  }
}
