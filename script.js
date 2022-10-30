document.querySelector(".navcontainermobile").onclick = () => {
    let menu = document.querySelector(".navcontainerdetailsmobile")
    let mobilenav = document.querySelector(".navcontainerdetailsmobile")
    let triangle = document.querySelector(".trianglemobile")
    if (menu.dataset.active == "false") {
        mobilenav.style.display = "flex"
        triangle.style.display = "block"
        menu.dataset.active = "true"
    } else {
        mobilenav.style.display = "none"
        triangle.style.display = "none"
        menu.dataset.active = "false"
    }
}