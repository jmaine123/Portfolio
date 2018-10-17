sections = document.getElementsByTagName('section');
jumbotron = document.getElementsByClassName('jumbotron');
console.log(jumbotron);



window.addEventListener('scroll', function(){
  var height = window.scrollY;
  console.log(height);

  // for (i = 0; i < sections.length; i++){
  //   sections[i].style.display = "hide";
  // }

  if (height === 0 || height <= 200){
    jumbotron[0].classList.remove("fadeOut");
    jumbotron[0].classList.add("fadeIn");
    sections[0].classList.add("fadeOut");
    sections[0].classList.remove("slideInRight");


    // sections[0].style.display = "block";
    // jumbotron[0].style.display = "block";

  }
  else if (height > 200 && height < 900) {
    jumbotron[0].classList.remove("fadeIn");
    jumbotron[0].classList.add("fadeOut");
    sections[0].classList.remove("fadeOut");
    sections[0].classList.add("slideInRight");
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");
    console.log("part 1");

  }
  else if (height >= 900 && height < 1600) {
    console.log("part 2");
    sections[0].classList.add("fadeOut");
    sections[0].classList.remove("slideInRight");
    sections[1].classList.remove("fadeOut");
    sections[1].classList.add("slideInLeft");
    sections[2].classList.add("fadeOut");
    sections[2].classList.remove("slideInRight");
  }
  else if(height >= 1600){
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");
    sections[2].classList.remove("fadeOut");
    sections[2].classList.add("slideInRight");
  }
});
