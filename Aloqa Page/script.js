function navigationEduExp() {
    const leftItems = document.querySelectorAll(".contact-right .left");
    const rightItems = document.querySelectorAll(".contact-right .right");
    leftItems.forEach((i, o) => i.onclick = function () {
        rightItems[o].classList.toggle("opening")
        
    })
}
navigationEduExp()