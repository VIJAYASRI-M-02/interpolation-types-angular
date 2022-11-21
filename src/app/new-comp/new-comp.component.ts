import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {

  var1:String="First";
  var2:String="Second";
  var3:string="Third";

  alertFunction():String{
    return new alert("NEW"); 
  }
  object ={
    variable1:"Top",
    variable2:"Middle",
    variable3:"Bottom" }
  constructor() { }

  ngOnInit(): void {
  }

}
