import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(valor:boolean ):string{
        
        /* las dos formas son validas  */

       /*  if (vuelaPipe  ){
            return 'vuela';
        }else {
            'no vuela';
        } */

        return ( valor )
            ? 'vuela'
            : 'no vuela';
    }
   
}