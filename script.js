const Share = () => {
    let shareBtn = document.getElementById('shareButton');
    let shareActive = document.getElementById('shareActive')
    shareBtn.addEventListener("click", () => {
        if (shareActive.style.visibility === "visible") {
            shareActive.style.visibility = "hidden";
        } else {
            shareActive.style.visibility = "visible";
        }
        
    })

}