window.addEventListener("load", function () {

  const aryContent = ["about", "apps", "qualification", "tech", "lifestyle", "walking", "twitter", "youtube" ];
  const activeFrame = document.getElementById("active");
  const charactorsBox = document.querySelector(".charactors");
  const charactors = document.querySelectorAll(".charactor");

  charactors.forEach(function(charactor) {
    charactor.addEventListener("click", function(){
      let topPosition = this.getBoundingClientRect().top - charactorsBox.getBoundingClientRect().top;
      let leftPosition = this.getBoundingClientRect().left - charactorsBox.getBoundingClientRect().left;
      topPosition = Math.round(topPosition * 100 / document.documentElement.clientWidth)
      leftPosition = Math.round(leftPosition * 100 / document.documentElement.clientWidth)
      activeFrame.style.top =  topPosition + "vw";
      activeFrame.style.left = leftPosition + "vw";
      console.log( parseInt(topPosition * 100 / document.documentElement.clientWidth) )
    });
  });


})