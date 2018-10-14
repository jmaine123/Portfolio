sections = document.getElementsByTagName('section');
jumbotron = document.getElementsByClassName('jumbotron');
console.log(jumbotron);



window.addEventListener('scroll', function(){
  var height = window.scrollY;

  console.log(height);

  // for (i = 0; i < sections.length; i++){
  //   sections[i].style.display = "hide";
  // }

  if (height === 10 || height === 50){
    // jumbotron[0].classList.add("fadeIn");
    // sections[0].classList.add("slideInRight");


    // sections[0].style.display = "block";
    // jumbotron[0].style.display = "block";

  }
  else if (height >= 90) {
    // jumbotron[0].style.display = "none";
    // sections[0].style.display = "none"
    // sections[1].style.display = "block";
    // console.log(height);
  }
  else {

  }
});
