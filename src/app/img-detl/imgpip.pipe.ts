import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgpip'
})
export class ImgpipPipe implements PipeTransform {

  transform( items: any, criteria: string): any {
    
	if(criteria ==='all')
	{	
		return items
	} 
	else
	{
	return items.filter(items => 
		{
			return items.category === criteria;
	});
  }
  }

}
