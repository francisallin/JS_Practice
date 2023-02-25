"use strict";
// Title of the slideshow
let lightboxTitle = "My Western Vacation";

// Names of the image files shown in the slideshow
let imgFiles = ["photo01.jpg", "photo02.jpg", "photo03.jpg", "photo04.jpg",
                "photo05.jpg", "photo06.jpg", "photo07.jpg", "photo08.jpg",
                "photo09.jpg", "photo10.jpg", "photo11.jpg", "photo12.jpg"]

// Captions associated with each image
let imgCaptions = new Array(12);
imgCaptions[0]="Sky Pond (Rocky Mountain National Park)";
imgCaptions[1]="Buffalo on the Plains (South Dakota)"; 
imgCaptions[2]="Garden of the Gods (Colorado Springs)"; 
imgCaptions[3]="Elephant Head Wild Flower (Rocky Mountain National Park)"; 
imgCaptions[4]="Double Rainbow (Colorado National Monument)";
imgCaptions[5]="Moose in the Wild (Grand Lake, Colorado)";
imgCaptions[6]="Camas Wild Flower (Rocky Mountain National Park)";
imgCaptions[7]="Chasm Lake (Rocky Mountain National Park)";
imgCaptions[8]="Teton Crest Trail (Grand Teton National Park)";
imgCaptions[9]="The Notch Trail (Badlands National Park)";
imgCaptions[10]="Sprague Lake (Rocky Mountain National Park)";
imgCaptions[11]="Longs Peak Trail (Rocky Mountain National Park)";

// Count of images in the slideshow
let imgCount = imgFiles.length; 

window.addEventListener("load", createLightbox);

function createLightbox(){
      let lightBox = document.getElementById("lightbox"); 

      let lbTitle = document.createElement("h1");
      let lbCounter = document.createElement("div");
      let lbPrev = document.createElement("div");
      let lbNext = document.createElement("div");
      let lbPlay = document.createElement("div");
      let lbImages = document.createElement("div");

      lightBox.appendChild(lbTitle); // lightbox title
      lbTitle.id = "lbTitle";
      lbTitle.textContent = lightboxTitle;
      
      lightBox.appendChild(lbCounter); // lightbox counter
      lbCounter.id = "lbCounter";
      let currentImg = 1;
      lbCounter.textContent = currentImg + "/" + imgCount;

      lightBox.appendChild(lbPrev); // previous button
      lbPrev.id = "lbPrev";
      lbPrev.innerHTML = "&#9664";
      lbPrev.onclick = showPrev;

      lightBox.appendChild(lbNext); // next button
      lbNext.id = "lbNext";
      lbNext.innerHTML = "&#9654";
      lbNext.onclick = showNext;

      lightBox.appendChild(lbPlay);
      lbPlay.id = "lbPlay";
      lbPlay.innerHTML = "&#9199";
      let timeID;
      lbPlay.onclick=function() {
            if(timeID){
                  window.clearInterval(timeID);
                  timeID = undefined;
            }
            else {
                  showNext();
                  timeID = window.setInterval(showNext, 1500);
            }
      }
      
      lightBox.appendChild(lbImages); //Img container
      lbImages.id = "lbImages";

      for (let i = 0; i<imgCount; i++){ //img array --> containter
            let image = document.createElement("img");
            image.src = imgFiles[i];
            image.alt = imgCaptions[i];
            image.onclick = createWindow;
            lbImages.appendChild(image);
      }

      function showNext(){ //take first child and put in last (append)
            lbImages.appendChild(lbImages.firstChild);//model answer: firstElementChild
            (currentImg<imgCount)? currentImg++: currentImg = 1; 
            lbCounter.textContent = currentImg + "/" + imgCount;
      }

      function showPrev(){ //take last child and put before first
            lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
            (currentImg>1)? currentImg--: currentImg = imgCount; 
            lbCounter.textContent = currentImg + "/" + imgCount;
      }
}
let favouritesImages = document.getElementById("favImg")
let toFav = document.createElement("button");
let favImgList = favouritesImages.children;
for (let i = 0; i<favImgList.length; i++){ // apply event listener (on click) on all favourite photos to remove them when clicked
      favImgList[i].addEventListener("click", removeFav);
}
function createWindow(){
      let popup = window.open("", "Selected Photo", "width=900, height=700, top=40, left=40")
      let popupPic = document.createElement("div");
      popupPic.id = "popupPic";

      let figureBox = document.createElement("figure");
      popupPic.appendChild(figureBox);

      let popupPicImage=this.cloneNode("true"); //copying the clicked photo to the popup window
      figureBox.appendChild(popupPicImage);

      let popupPicCaption = document.createElement("figcaption"); //copying the caption of clicked photo to the popup window
      popupPicCaption.textContent = this.alt;
      figureBox.appendChild(popupPicCaption);

      toFav.id="toFav";
      toFav.innerHTML = "Add to Favourite";
      toFav.onclick = function(e){
            if (favImgList.length<5){ //restrict the number of favourite images to 5 only
                  favouritesImages.appendChild(popupPicImage);
            }       
            else {
                  e.preventDefault();
                  window.alert("Maximum number of favourite image is 5.");
            }           
      }
      popupPic.appendChild(toFav);
      popup.document.body.appendChild(popupPic);
}
function removeFav(){ // remove the photo when clicked
      favImgList[0].parentElement.removeChild(favImgList[0]);
}