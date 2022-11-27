// import the module here
import {getSampleGalleries} from "/gallery.js";
let data = getSampleGalleries();


document.addEventListener("DOMContentLoaded", function() {



   // you'll be adding code to this <ul> list
   const list = document.querySelector("#galleryList");
    
   // now loop through the sample gallery data calling render and list.appendChild
   for(let GalleryItem of data){
      list.appendChild(GalleryItem.render());
   }
    

}); 