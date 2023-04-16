import { Component, OnInit } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit
{
   public Addition = 0;
   public Substraction = 0;
   constructor(public aobj : ArithematicService)
   {}
   ngOnInit()
   {
      this.Addition = this.aobj.Add();
      this.Substraction = this.aobj.Sub();
   }
}
