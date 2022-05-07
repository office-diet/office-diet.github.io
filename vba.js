const vbaCodeDivs = document.querySelectorAll(".vba-code");

vbaCodeDivs.forEach( function(div) {

    div.innerHTML = 
        '<div class="button-container">' + 
            '<div id="copy" class="button">CopyCode</div>' +
            '<div id="open" class="button">Open</div>' +
        '</div>' + 
        div.innerHTML;

    let pre = div.querySelector("pre");
    let btnCopy = div.querySelector("#copy");
    let btnOpen = div.querySelector("#open");

    btnCopy.addEventListener("click", function() {
        navigator.clipboard.writeText(pre.innerText);
    })

    btnOpen.addEventListener("click", function() {
        pre.classList.toggle("open");
        if (btnOpen.innerText == "Open") {
            btnOpen.innerText = "Close"
        } else {
            btnOpen.innerText = "Open"
        }
    })

});
