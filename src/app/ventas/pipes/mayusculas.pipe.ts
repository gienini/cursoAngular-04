import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
    transform(value: string, bParam :boolean = true) : string {
        if (value != null && value != ''){
            if (!bParam){
                return value.toLowerCase();
            }
            return value.toUpperCase();
        }
        return value;
    }

}