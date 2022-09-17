const imagearray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
const txtarray = ["first image", "second image", "third image", "fourth image"];
const image = document.getElementById("img");
const btnprev = document.getElementById("btnprev");
const btnnext = document.getElementById("btnnext");
const txt = document.getElementById("txt");
btnprev.disabled = true;
txt.innerHTML = txtarray[0];

function first_image() {
  image.src = imagearray[0];
  btnnext.disabled = false;
  txt.innerHTML = txtarray[0];
  btnprev.disabled = true;
}

function last_image() {
  image.src = imagearray[3];
  txt.innerHTML = txtarray[3];
  btnprev.disabled = false;
  btnnext.disabled = true;
}

function next_image() {
  btnprev.disabled = false;
  for (let i = 0; i <= imagearray.length - 1; ++i) {
    if ($("img").attr("src") == imagearray[i]) {
      ++i;
      image.src = imagearray[i];
      txt.innerHTML = txtarray[i];
      if ($("img").attr("src") == imagearray[3]) {
        btnnext.disabled = true;
      }
    }
  }
}

function prev_image() {
  btnnext.disabled = false;
  for (let i = imagearray.length - 1; i >= 0; i--) {
    if ($("img").attr("src") == imagearray[i]) {
      --i;
      image.src = imagearray[i];
      txt.innerHTML = txtarray[i];
      if ($("img").attr("src") == imagearray[0]) {
        btnprev.disabled = true;
      }
    }
  }
}

function grow_image() {
  $("img").animate({ width: "14rem", height: "12rem" }, 1500);
}

function shrink_image() {
  $("img").animate({ width: "8rem", height: "7rem" }, 1500);
}

// $('button').click(function (){
// $('button').prop('disabled',true); // prop method bakar detn bo disable  krd in jquery})
