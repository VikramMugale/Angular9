import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithematicService 
{
  public No1 = 10;
  public No2 = 20;
  
  public Add()
  {
     return this.No1+this.No2;
  }
  public Sub()
  {
    return this.No1-this.No2;
  }

}
