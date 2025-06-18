sections = document.getElementsByTagName('section');
jumbotron = document.getElementsByClassName('jumbotron');

window.addEventListener("hashchange", function() { scrollBy(0, -55) });



window.addEventListener('scroll', function(){
  let height = window.scrollY;
  console.log('Scroll Height')
  console.log(height);

  const jumbotronHeight = jumbotron.offsetHeight;
  const BioSection = sections[0];
  const BioSectionTop = BioSection.offsetTop;
  const ProjectSection = sections[1];
  const ProjectSectionTop = ProjectSection.offsetTop;
  const GamesSection = sections[2];
  const GamesSectionTop = GamesSection.offsetTop
  const CasesSection = sections[3];
  const CasesSectionTop = CasesSection.offsetTop



  let buffer = 200

  console.log('First Section');
  console.log(BioSectionTop);


  if (height === 0 || height === 456){
    // console.log('Header')
    jumbotron[0].classList.remove("fadeOut");
    jumbotron[0].classList.add("fadeIn");
    sections[0].classList.add("fadeOut");
    sections[0].classList.remove("slideInRight");


    // sections[0].style.display = "block";
    // jumbotron[0].style.display = "block";

  }
  else if (height >= BioSectionTop - buffer && height < ProjectSectionTop - buffer) {
    console.log("part 1");
    jumbotron[0].classList.remove("fadeIn");
    jumbotron[0].classList.add("fadeOut");
    sections[0].classList.remove("fadeOut");
    sections[0].classList.add("slideInRight");
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");

  }
  else if (height >= ProjectSectionTop - buffer && height < GamesSectionTop - buffer) {
    console.log("part 2");
    sections[0].classList.add("fadeOut");
    sections[0].classList.remove("slideInRight");
    sections[1].classList.remove("fadeOut");
    sections[1].classList.add("slideInLeft");
    sections[2].classList.add("fadeOut");
    sections[2].classList.remove("slideInRight");
  }
  else if(height >= GamesSectionTop - buffer  && height < CasesSectionTop - buffer){
    console.log("part 3");
    sections[1].classList.add("fadeOut");
    sections[1].classList.remove("slideInLeft");
    sections[2].classList.remove("fadeOut");
    sections[2].classList.add("slideInRight");
    sections[3].classList.add("fadeOut");
    sections[3].classList.remove("slideInLeft");
  }
  else if(height >= CasesSectionTop - buffer && height < 5800){
    console.log("part 4");
    sections[2].classList.add("fadeOut");
    sections[2].classList.remove("slideInRight");
    sections[3].classList.remove("fadeOut");
    sections[3].classList.add("slideInLeft");
  }
  else if(height >= 5900){
    // console.log("part 5");
    sections[3].classList.add("fadeOut");
    sections[3].classList.remove("slideInLeft");
  }

});
