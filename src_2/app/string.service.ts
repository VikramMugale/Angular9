import { UpperCasePipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  public name = "MarvEllOuS"
  public j = 0;
  public b = 0;
  public c = "";
  public CountCapital()
  {
    for(this.j=0; this.j<this.name.length; this.j++)
    {
      this.c = this.name[this.j];
      if(this.c  == this.c.toUpperCase())
      {
        this.b++;
      }
    }
    return this.b;
  }

}
