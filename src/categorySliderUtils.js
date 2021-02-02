import displayMovieDetails from './displayMovieDetails.js';
import displayActorDetails from './displayActorDetails.js';
const categorySliderUtils = async (cond) => {

    // const nextElement = document.querySelector('.next-icon-element');
    // nextElement.addEventListener('click', () => {
    //     nextElement.style.display="none";
    //     const item = document.querySelector('.item');
    //     const width = item.offsetWidth;
    
    //     let compStyles = window.getComputedStyle(item);
    //     let margin = parseInt(compStyles.getPropertyValue('margin-left'));
    
    //     if(margin>-(15*width))
    //     item.style.marginLeft =`${margin-(5*width)}px`;

    //     setTimeout(function(){
    //         nextElement.style.display="unset";
    //         }, 500);
        
    // })

    // const prevElement = document.querySelector('.prev-icon-element');
    // prevElement.addEventListener('click', () => {

    //     prevElement.style.display="none";
    //     const item = document.querySelector('.item');
    //     const width = item.offsetWidth;
    //     let compStyles = window.getComputedStyle(item);
    //     let margin = parseInt(compStyles.getPropertyValue('margin-left'));
        
    //     if(margin<0)
    //     item.style.marginLeft =`${margin+(5*width)}px`;

    //         setTimeout(function(){
    //         prevElement.style.display="unset";
    //         }, 500);

    // });

    const nextt = document.querySelector(`.${cond} .next-icon-element`);
    nextt.addEventListener('click',()=>{
    console.log('klik');
    const wrapper = document.querySelector((`.${cond} .slider-section-wrapper`));
    const width = wrapper.offsetWidth;
    
    wrapper.scrollLeft += width/2;
})
  const prevv = document.querySelector(`.${cond} .prev-icon-element`);
    prevv.addEventListener('click',()=>{
    console.log('klik');
    const wrapper = document.querySelector((`.${cond} .slider-section-wrapper`));
    const width = wrapper.offsetWidth;
 
    wrapper.scrollLeft -= width/2;
})


  const items = [...document.querySelectorAll(`.item.${cond},.item-2.${cond}`)];
 
    items.map(item=>{
        item.addEventListener('click',()=>{
        if(document.querySelector('.details-wrapper')){
            document.querySelector('.details-wrapper').remove();
        }
   let newDiv = document.createElement("div");
   newDiv.classList.add('details-wrapper');
   const parent = document.querySelector(`.${cond}`);
  parent.insertBefore(newDiv, parent.firstChild);
 
  const id = item.getAttribute('data-id');
  console.log(cond);
  if(cond==='actors')displayActorDetails(id,newDiv);
  else displayMovieDetails(id,newDiv);
    
})
    })



}
export default categorySliderUtils;