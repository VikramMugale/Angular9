import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
   public No1 = 23;
   public i = 0;
   public a = 0;
   public ChkPrime()
   {
     for(this.i = 2; this.i<this.No1; this.i++)
     {
       if(this.No1%this.i==0)
       {
         this.a++;
       }
     }
     if(this.a==0)
     {
         return this.No1+" is Prime Number";
     }
     else
     {
      return this.No1+" is not Prime Number"
     }
   }

}
