let pre = document.getElementById("img_pre");
let next= document.getElementById("img_next");

function NextImg(){
  pre.style.display="none";
  next.style.display="block";
}

function PreImg(){
  pre.style.display="block";
  next.style.display="none";
}
