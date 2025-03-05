function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

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
                <h2 class="coming-soon-subtitle">Coming Soon</h2>
            </body>
            </html>
        `);
        newWindow.document.close();
    }, 500); // Delay for better execution
}
