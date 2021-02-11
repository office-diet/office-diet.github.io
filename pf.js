window.addEventListener("load", function () {

  const characters = document.querySelectorAll(".character");
  const modalBack = document.getElementById("modal-back");
  const modalSponsor = document.getElementById("modal-sponsor");
  const modalWhatIs = document.getElementById("modal-what-is");
  const closeButtons = document.querySelectorAll(".close");
  let strNowActive = "about";
  const aryContent = ["about", "apps", "qualification", "tech", "lifestyle", "walking", "twitter", "youtube" ];

  function hideActiveFrame(){
    aryContent.forEach(function (strContentName) {
      document.getElementById("active-" + strContentName).classList.add("hidden");
    });
  }

  function clickModalShow(strContentName) {
    strNowActive = strContentName;
    const modalContent = document.getElementById("modal-" + strContentName);
    const activeFrame = document.getElementById("active-" + strContentName);
    hideActiveFrame();
    activeFrame.classList.remove("hidden")
    modalBack.classList.remove("hidden");      
    modalContent.classList.remove("hidden");
  }

  characters.forEach(function(character) {
    character.addEventListener("click", function(){
      clickModalShow(character.id);
    });
    document.getElementById("active-" + character.id).addEventListener("click", function(){
      clickModalShow(character.id);
    });
  });

  [modalBack, ...closeButtons].forEach(function(closeButton){
    closeButton.addEventListener("click", function(){
      aryContent.forEach(function(strContentName){
        document.getElementById("modal-" + strContentName).classList.add("hidden");
        if (strContentName != strNowActive) {
          document.getElementById("active-" + strContentName).classList.add("hidden");
        }
      });
      modalBack.classList.add("hidden");
      modalSponsor.classList.add("hidden");
      modalWhatIs.classList.add("hidden");
    });
  });



  const sponsor = document.getElementById("sponsor");
  sponsor.addEventListener("click", function(){
    modalBack.classList.remove("hidden");
    modalSponsor.classList.remove("hidden");
  })
  const whatIs = document.getElementById("what-is");
  whatIs.addEventListener("click", function(){
    modalBack.classList.remove("hidden");
    modalWhatIs.classList.remove("hidden");
  })
})