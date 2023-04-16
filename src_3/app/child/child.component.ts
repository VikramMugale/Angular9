import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit
{
   public Str = "";
   public count = 0;
   constructor(public nobj : NumberService, public sobj : StringService)
   {}
   ngOnInit()
   {
      this.Str = this.nobj.ChkPrime();
      this.count = this.sobj.CountCapital(); 
   }
}
