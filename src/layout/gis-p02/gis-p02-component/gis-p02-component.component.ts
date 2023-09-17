import { Component } from '@angular/core';

@Component({
  selector: 'app-gis-p02-component',
  templateUrl: './gis-p02-component.component.html',
  styleUrls: ['./gis-p02-component.component.css']
})
export class GisP02ComponentComponent {
  openFilter(){
    document.querySelector('.filteration')?.classList.remove('d-none');

    document.querySelector('.filteration')?.classList.add('d-block');
  }
  
  closeFilter(){
    document.querySelector('.filteration')?.classList.remove('d-block')

    document.querySelector('.filteration')?.classList.add('d-none')

  }
}
