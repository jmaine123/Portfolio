sections = document.getElementsByTagName('section');
jumbotron = document.getElementsByClassName('jumbotron');

window.addEventListener("hashchange", function() { scrollBy(0, -55) });



window.addEventListener('scroll', function(){
  var height = window.scrollY;
  console.log(height);

  // for (i = 0; i < sections.length; i++){
  //   sections[i].style.display = "hide";
  // }

  if (height === 0 || height <= 200){
    console.log('Header')
    jumbotron[0].classList.remove("fadeOut");
    jumbotron[0].classList.add("fadeIn");
    sections[0].classList.add("fadeOut");
    sections[0].classList.remove("slideInRight");


    // sections[0].style.display = "block";
    // jumbotron[0].style.display = "block";

  }
  else if (height > 200 && height < 900) {
    console.log("part 1");
    jumbotron[0].classList.remove("fadeIn");
    jumbotron[0].classList.add("fadeOut");
    sections[0].classList.remove("fadeOut");
    sections[0].classList.add("slideInRight");
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");

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
  else if(height >= 1600  && height < 2300){
    console.log("part 3");
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");
    sections[2].classList.remove("fadeOut");
    sections[2].classList.add("slideInRight");
    sections[3].classList.add("fadeOut");
    sections[3].classList.remove("slideInLeft");
  }
  else if(height >= 2300  && height < 3000){
    console.log("part 4");
    sections[2].classList.add("fadeOut");
    sections[2].classList.remove("slideInLeft");
    sections[3].classList.remove("fadeOut");
    sections[3].classList.add("slideInLeft");
  }
  else if(height >= 3000){
    console.log("part 5");
    sections[3].classList.add("fadeOut");
    sections[3].classList.remove("slideInLeft");
  }

});
