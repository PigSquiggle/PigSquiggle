let buttons = document.getElementsByClassName("buttons")
let about = document.getElementById("about")
let info = document.getElementById("info")
let rules = document.getElementById("rules")
let html = document.getElementById("html")
about.style.position = "absolute"
let windowWidth = parseInt(window.getComputedStyle(html).getPropertyValue("width"))
let aboutTop = parseInt(window.getComputedStyle(about).getPropertyValue("top"))
about.style.width = windowWidth/2.3 + "px"
about.style.height = windowWidth/2.5 + "px"
info.style.width = windowWidth/2.3 + "px"
info.style.height = windowWidth/2.5 + "px"
info.style.top = aboutTop + "px"
rules.style.width = windowWidth/2.3 + "px"
let rulesWidth = parseInt(window.getComputedStyle(rules).getPropertyValue("width"))
rules.style.left = windowWidth/2-rulesWidth/2-20 + "px"
let i = 0
while (i < buttons.length+1) {
    let width = parseInt(window.getComputedStyle(buttons.item(i)).getPropertyValue("width"))
    let height = parseInt(window.getComputedStyle(buttons.item(i)).getPropertyValue("height"))
    if (height > width) {
        buttons.item(i).style.borderRadius = height/3 + "px"
    }
    else if (height < width) {
        buttons.item(i).style.borderRadius = width/5 + "px"
    }
    i++
}
