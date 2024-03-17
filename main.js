const hamburger = document.getElementsByClassName("hamburger")[0]
const main = document.getElementById("main")
const body = document.getElementsByTagName("body")[0]
const colorBar = document.getElementsByClassName("colorBar")[0]
const sideMenu = document.getElementById("sideMenu")
const closeBtn = document.getElementsByClassName("closeBtn")[0]
const video = document.getElementsByClassName("homeVideo")[0]
const content = document.getElementsByClassName("content")[0]

function toggleMenu() {
  if (video) video.classList.toggle("dim")
  if (content) content.classList.toggle("dim")
  if (colorBar) colorBar.classList.toggle("dim")
  if (sideMenu) sideMenu.classList.toggle("showPanel")
}

function toggleCloseBtn() {
  if (video) video.classList.toggle("dim")
  if (sideMenu) sideMenu.classList.toggle("showPanel")
  if (content) content.classList.toggle("dim")
}
