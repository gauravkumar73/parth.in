// Page load message
console.log("Corntron website loaded successfully!");

// Navbar active link highlight
let links = document.querySelectorAll("nav a");

links.forEach(link => {
    if(link.href === window.location.href){
        link.style.color = "orange";
    }
});

// Simple alert example
function showMessage(){
    alert("Welcome to Corntron 🚀");
}