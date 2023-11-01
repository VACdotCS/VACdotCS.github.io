let imageList = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg"
]

let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")
let image4 = document.getElementById("image4")

let pager = document.getElementById("pager")

let ind1 = 0
let ind2 = 1
let ind3 = 2
let ind4 = 3

function indexCompute(index, isLeft){
  if (isLeft)
    if (index == 0)
      return imageList.length - 1
    else
      return (index - 1) % imageList.length

  else
    return (index + 1) % imageList.length
}

function swipeGalleryLeft() {
  ind1 = indexCompute(ind1, true)
  ind2 = indexCompute(ind2, true)
  ind3 = indexCompute(ind3, true)
  ind4 = indexCompute(ind4, true)

  image1.src = imageList[ind1]
  image2.src = imageList[ind2]
  image3.src = imageList[ind3]
  image4.src = imageList[ind4]

  if (ind2 == 0 )
    pager.innerText = "8/8"
  else
    pager.innerText = (ind2).toString() + "/8"
}

function swipeGalleryRight() {
  ind1 = indexCompute(ind1, false)
  ind2 = indexCompute(ind2, false)
  ind3 = indexCompute(ind3, false)
  ind4 = indexCompute(ind4, false)

  image1.src = imageList[ind1]
  image2.src = imageList[ind2]
  image3.src = imageList[ind3]
  image4.src = imageList[ind4]

  if (ind2 == 0 )
    pager.innerText = "8/8"
  else
    pager.innerText = (ind2).toString() + "/8"
}


window.addEventListener(
  'DOMContentLoaded',
  function () {
    let b = document.getElementById("buttonLeft");
    b.addEventListener("click", swipeGalleryLeft);
  }
);

window.addEventListener(
  'DOMContentLoaded',
  function () {
    let b = document.getElementById("buttonRight");
    b.addEventListener("click", swipeGalleryRight);
  }
);