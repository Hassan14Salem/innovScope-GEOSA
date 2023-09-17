import { Component } from '@angular/core';

@Component({
  selector: 'app-man-sec-p01-component',
  templateUrl: './man-sec-p01-component.component.html',
  styleUrls: ['./man-sec-p01-component.component.css']
})
export class ManSecP01ComponentComponent {
  showLoremWay()
  {
    document.querySelector('.loremWay')?.classList.remove("d-none");
    document.querySelector('.loremWay')?.classList.add("d-block");

  }
  closeLoremWay()
  {
    document.querySelector('.loremWay')?.classList.remove("d-block");
    document.querySelector('.loremWay')?.classList.add("d-none");

  }

  openFilter(){
    document.querySelector('.filteration')?.classList.remove('d-none');

    document.querySelector('.filteration')?.classList.add('d-block');
  }
  
  closeFilter(){
    document.querySelector('.filteration')?.classList.remove('d-block')

    document.querySelector('.filteration')?.classList.add('d-none')

  }
addActive()
{
///Sure That loremWayBoxActive & checkedActive Removed .. 
document.querySelectorAll('.loremWayBox').forEach(element => {
  element.classList.remove('loremWayBoxActive')
})


document.querySelectorAll('.checked').forEach(element => {
  element?.classList.remove('d-flex')

})

document.querySelectorAll('.loremWayBox').forEach(element => {
  element.classList.remove('checkedActive')
})

//// ================================ 
///Add loremWayBoxActive & checkedActive  .. 
document.querySelectorAll('.loremWayBox').forEach(element => {
  document.querySelector('#One')?.classList.add('loremWayBoxActive')
})

document.querySelector('#checkedId1')?.classList.add('d-flex')


// document.querySelectorAll('.cheked').forEach(element => {
// })

document.querySelectorAll('.loremWayBox').forEach(element => {
  document.querySelector('#One')?.classList.add('checkedActive')
})


   

}

addActiveII()
{
  ///remove Active 

  document.querySelectorAll('.loremWayBox').forEach(element => {
    element?.classList.remove('loremWayBoxActive')
  })

  document.querySelectorAll('.checked').forEach(element => {
    element?.classList.remove('d-flex')

  })


  document.querySelectorAll('.loremWayBox').forEach(element => {
    element.classList.remove('checkedActive')
  })
  //======================================

  document.querySelectorAll('.loremWayBox').forEach(element => {
    document.querySelector('#Two')?.classList.add('loremWayBoxActive')
  })

  document.querySelector('#checkedId2')?.classList.add('d-flex');

  // document.querySelectorAll('.checked').forEach(element => {
  // })

  document.querySelectorAll('.loremWayBox').forEach(element => {
    document.querySelector('#Two')?.classList.add('checkedActive')
  })


  
}

}
