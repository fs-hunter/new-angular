import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-panakj',
  templateUrl: './panakj.component.html',
  styleUrls: ['./panakj.component.css']
})
export class PanakjComponent implements OnInit {

  record = [];

  curr = new Date();
  open=[];
  status=[];
  todoForm = new FormGroup({
    description: new FormControl(),
    title: new FormControl(),
    expiry: new FormControl()
  });
  constructor() {


  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onSubmit() {
    this.open.push(false);
    this.status.push(0);
    this.record.push(this.todoForm.value);
    // console.log(this.todoForm.value);
  }
  onClick(e,ind){
    //  var target = event.target || event.srcElement || event.currentTarget;
    this.open[ind]=this.open[ind]^1;


  }
  changestatus(e,ind){
    this.status[ind]+=1;
    // if(this.status[ind]>=1)
    // {
    //   console.log("yet to start");

    // }
    // if(this.status[ind]>=2)
    // {
    //   console.log("in progress");

    // }
    // if(this.status[ind]>=3)
    // {
    //   console.log("completed");

    // }
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

