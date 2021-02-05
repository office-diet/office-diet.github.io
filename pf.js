window.addEventListener("load", function () {

  const charactors = document.querySelectorAll(".charactor");
  const modalBack = document.getElementById("modal-back");
  const modalSponsor = document.getElementById("modal-sponsor");
  let strNowActive = "";
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

  charactors.forEach(function(charactor) {
    charactor.addEventListener("click", function(){
      clickModalShow(charactor.id);
    });
    document.getElementById("active-" + charactor.id).addEventListener("click", function(){
      clickModalShow(charactor.id);
    });
  });

  modalBack.addEventListener("click", function(){
    aryContent.forEach(function(strContentName){
      document.getElementById("modal-" + strContentName).classList.add("hidden");
      if (strContentName != strNowActive) {
        document.getElementById("active-" + strContentName).classList.add("hidden");
      }
    });
    modalBack.classList.add("hidden");
    modalSponsor.classList.add("hidden");
  });

  const sponsor = document.getElementById("sponsor");
  sponsor.addEventListener("click", function(){
    modalBack.classList.remove("hidden");
    modalSponsor.classList.remove("hidden");
  })
})