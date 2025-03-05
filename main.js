// Function to scroll to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Function to open a new page with the coming soon message
function openNewPage() {
    let newWindow = window.open("", "_blank");

    if (!newWindow) {
        alert("Popup blocked! Please allow popups for this site.");
        return;
    }

    setTimeout(() => {
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Coming Soon</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                        font-family: Arial, sans-serif;
                    }
                    body {
                        background-color: #0D1117;
                        color: #E6EDF3;
                        text-align: center;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }
                    .coming-soon-title {
                        font-size: 80px;
                        font-weight: bold;
                        color: white;
                        text-shadow: 3px 3px 0px #000, 6px 6px 10px rgba(0, 0, 0, 0.5);
                    }
                    .dots {
                        font-size: 80px;
                        font-weight: bold;
                        display: inline-block;
                        animation: blink 1.5s infinite;
                    }
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0.2; }
                    }
                    .coming-soon-subtitle {
                        font-size: 40px;
                        color: #58A6FF;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <h1 class="coming-soon-title">
                    <span>W</span><span>o</span><span>r</span><span>k</span><span>i</span><span>n</span><span>g</span> 
                    <span>o</span><span>n</span> <span>i</span><span>t</span> <span class="dots">...</span>
                </h1>
                <h2 class="coming-soon-subtitle">Completed..</h2>
            </body>
            </html>
        `);
        newWindow.document.close();
    }, 500);
}

// Typed.js animation
var typed = new Typed(".text", {
    strings: ["Cloud Engineer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".text").style.fontSize = "40px"; // Change size dynamically
});


// Toggle navbar menu
function toggleMenu() {
    document.querySelector('.navbar').classList.toggle('active');
}

// Resume download functionality
document.querySelector(".btn-box").addEventListener("click", function(event) {
    event.preventDefault(); 

    const resumeLink = "https://drive.google.com/file/d/1PJmOVVq7Tfh2tIim8lsmwtrgkcXAogME/view?usp=sharing";  

    const a = document.createElement("a");
    a.href = resumeLink;
    a.download = "My_CV.pdf"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});



// Read more toggle
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtns = document.querySelectorAll(".read");

    readMoreBtns.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            
            const moreContent = this.previousElementSibling; // Selects .more-content div before the button
            
            if (moreContent.classList.contains("show")) {
                moreContent.classList.remove("show");
                this.textContent = "Learn more"; 
            } else {
                moreContent.classList.add("show");
                this.textContent = "Show less"; 
            }
        });
    });
});


document.getElementById("linkedin").href = "https://www.linkedin.com/in/ajay-mall-a9b4a2259/";
document.getElementById("facebook").href = "https://www.facebook.com/your-profile";
document.getElementById("github").href = "https://github.com/ajay-mall13";
document.getElementById("whatsapp").href = "https://wa.me/8429510751";
document.getElementById("instagram").href = "https://www.instagram.com/";

// Link to CV file (Replace 'your-cv.pdf' with actual CV file path)
document.getElementById("downloadCV").href = "your-cv.pdf";


document.addEventListener("DOMContentLoaded", function() {
    // Fix bubbling issue on social icons
    document.querySelectorAll('.contact-icons a').forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevents bubbling to parent elements
        });
    });

    // Prevent bubbling when submitting the form
    document.querySelector('.contact-form form').addEventListener('submit', function(event) {
        event.stopPropagation(); // Prevents unwanted parent events
    });

    console.log("Event listeners initialized successfully!");
});


 

  document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = {
      facebook: "https://www.facebook.com/YourProfile/",
      linkedin: "https://www.linkedin.com/in/ajay-mall-a9b4a2259/overlay/about-this-profile/",
      instagram: "https://www.instagram.com/itsajaymall?igsh=bW12dW9jbDl2bTE2"
    };

    document.querySelector(".bx.bxl-facebook").parentElement.addEventListener("click", function () {
      window.open(socialLinks.facebook, "_blank");
    });

    document.querySelector(".bx.bxl-linkedin-square").parentElement.addEventListener("click", function () {
      window.open(socialLinks.linkedin, "_blank");
    });

    document.querySelector(".bx.bxl-instagram").parentElement.addEventListener("click", function () {
      window.open(socialLinks.instagram, "_blank");
    });
  });


  // Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
  })();
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        name: name,
        email: email,
        message: message,
        to_email: "ajaymallupgkp90@gmail.com"
      })
      .then(function () {
        alert("Message sent successfully!");
      }, function (error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
      });
    } else {
      alert("Please fill all the fields.");
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.createElement("div");
    menuIcon.classList.add("menu-icon");
    menuIcon.innerHTML = "&#9776;"; // Hamburger menu icon
    document.querySelector(".header").appendChild(menuIcon);

    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });

            if (window.innerWidth <= 768) {
                navbar.classList.remove("active");
            }
        });
    });
});
