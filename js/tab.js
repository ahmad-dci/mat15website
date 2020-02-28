function aboutClick(){
    document.querySelector("#homeContent").classList.add("hidden");
    document.querySelector("#contactContent").classList.add("hidden");
    document.querySelector("#aboutContent").classList.remove("hidden");
}
function contactClick(){
    document.querySelector("#homeContent").classList.add("hidden");
    document.querySelector("#contactContent").classList.remove("hidden");
    document.querySelector("#aboutContent").classList.add("hidden");
}
function homeClick(){
    document.querySelector("#homeContent").classList.remove("hidden");
    document.querySelector("#contactContent").classList.add("hidden");
    document.querySelector("#aboutContent").classList.add("hidden");
}
