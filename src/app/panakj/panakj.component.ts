import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver'
@Component({
  selector: 'app-panakj',
  templateUrl: './panakj.component.html',
  styleUrls: ['./panakj.component.css']
})
export class PanakjComponent implements OnInit {
  str: any;
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
  //       this.str=localStorage.getItem("user")
  //       this.record=JSON.parse(this.str)
  //       if(!this.record){
  //         this.record=[]
  // }



  }
  onSubmit() {
    this.open.push(false);
    this.status.push(0);
    this.record.push(this.todoForm.value);
     this.str =JSON.stringify(this.record);

    //  document.write("str:"+JSON.stringify( JSON.parse (this.str)));

    // next page data forword

    //  document.write("description:" +this.todoForm.value.description+"<br>");
    //  document.write("title:" +this.todoForm.value.title+"<br>");
    //  document.write("expriy:" +this.todoForm.value.expiry);


     localStorage.setItem("user",this.str);
    //  json format data download

    //  const blob = new Blob([ this.str], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "save-me.txt");




  }


  onClick(e,ind){

    this.open[ind]=this.open[ind]^1;


  }
  changestatus(e,ind){
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
  // save data in txt formart
//   saveFile(m,n,o) {
//     const blob = new Blob(["Title:-",m,"-------","Description:-",n,"-------","expriry:-",o], {type: "text/plain;charset=utf-8"});
//     saveAs(blob, "save-me.json");
//     }
// }



}




