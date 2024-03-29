const vbaCodeDivs = document.querySelectorAll(".vba-code");

vbaCodeDivs.forEach( function(div) {

    div.innerHTML = 
        '<div class="button-container">' + 
            '<div class="copy button" title="くりっぷぼぉどにこぴぃ">CopyCode</div>' +
            '<div class="open button" title="ぜんたいおひょおじ">Open</div>' +
        '</div>' + 
        div.innerHTML;

    let pre = div.querySelector("pre");
    let btnCopy = div.querySelector(".copy");
    let btnOpen = div.querySelector(".open");

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
