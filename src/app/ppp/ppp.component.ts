import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { getMinutesMoved } from 'angular-calendar/modules/common/util';


@Component({
  selector: 'app-ppp',
  templateUrl: './ppp.component.html',
  styleUrls: ['./ppp.component.css']
})
export class PppComponent implements OnInit {
str:any
  // msg: string;
  // record = [];

  curr = new Date();
  name;
  open=[];
  status=[];
  lists=[]

  ngOnInit(): void {
    // this.str=localStorage.getItem("todo")
    // this.list=JSON.parse(this.str)
    // if(!this.list){
    //   this.list=[]
    // }
  }

  todoList= new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl(''),
    Status: new FormControl('')
  })

  onSubmit() {
    this.open.push(false);
    this.status.push(0);
    // this.record.push(this.todoList.value);
    console.log(this.todoList.value);
    // localStorage.setItem('user',JSON.stringify(this.todoList.value))
   this.lists.push(this.todoList.value);
    // this.str =JSON.stringify(this.list);


    localStorage.setItem("todo",this.str);
this.todoList.reset()
  }


  // title= 'Angular TO DO List';
  // lists = [{
  //   title:'',
  //   description:'',
  //   date:'',


  // }
  // ];

//   deleteTask(j) {
//     this.lists.splice(j, 1);
//    console.log(j)
// }
// clickEvent(){
//   this.msg='complete';
//   return this.msg;
// }

onClick(e,ind){
  //  var target = event.target || event.srcElement || event.currentTarget;
  this.open[ind]=this.open[ind]^1;
}
changestatus(ind){
  this.status[ind]+=1;
}
compare(f){
  let dates=f.split("-");

  if(parseInt(dates[0])<this.curr.getFullYear())
  return 1;
  else if(parseInt(dates[0])>this.curr.getFullYear())
  return 0;
  else if(parseInt(dates[1])<1+this.curr.getMonth())
  return 1;
  else if(parseInt(dates[1])>1+this.curr.getMonth())
  return 0;
  else if(parseInt(dates[2])<this.curr.getDate())
  return 1;

  return 0;
}

}
