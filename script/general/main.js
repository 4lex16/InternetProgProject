// This script manages all general functions needed
function checkScroll() {
    if (document.body.scrollHeight + 260 > window.innerHeight) {
        document.querySelector("footer").classList.add('footer-static');
        document.querySelector("footer").classList.remove('footer-absolute');
    } else {
        document.querySelector("footer").classList.add('footer-absolute');
        document.querySelector("footer").classList.remove('footer-static');
    }
}

function notImplemented() {
    alert("Feature not implemented yet, Please wait until final deliverable");
}

window.addEventListener('resize', checkScroll);
document.addEventListener('DOMContentLoaded', checkScroll);