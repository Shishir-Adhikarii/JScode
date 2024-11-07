//the first thing that we are going to do is to make sure all our HTML has been rendered
document.addEventListener('DOMContentLoaded', (loaded) =>{
    // Test if JS is connected
    console.log('our Js is connected');

    // Declare and calculate variables
    let a = 200;
    let b = 180;
    let c = a + b;

    // Declare constants and calculate total
    const value1 = 500;
    const value2 = 600;
    let total = value1 + value2;

    // Insert HTML content for variables example
    document.getElementById("ex1").innerHTML = "<h4>Javascript Variables</h4>" + "<p>Let: The value of C is " + c +"</p>" +"<p>Const: The Total is : " + total + "</p>";

    // Style the variables example
    document.getElementById("ex1").style.color = "#f8f8f8";
    document.getElementById("ex1").style.padding = "0% 10%";

    // Create and insert global header HTML
    document.getElementById("lesson-global-header").innerHTML = "<div id ='logo-container'>" + "<a href='index.html'>" +"<img id='logo' src='./img/logo.png' alt='header logo'>" +"</a>" +"</div>" +
    "<nav><menu>" +
    "<li><a href='#'> Item 1</a></li>" +
    "<li><a href='#'> Item 2</a></li>" +
    "<li><a href='#'> Item 3</a></li>" +
    "</menu></nav>";

    // Style the global header
    document.getElementById("lesson-global-header").style.cssText = "display: flex; height:125px; background-color: #f8f8f8; align-items: center;";
    document.getElementById("logo-container").style.cssText = "flex-grow: 1; height:110px; width: auto;";
    document.getElementById("logo").style.cssText = "width: auto; height:100%;";

    // New content starts here

    // Send welcome message to console
    console.log('Welcome to our exciting JavaScript adventure!');

    // Add new content row to main element
    document.querySelector('main').innerHTML += "<div id='new-content-row'>" +
        "<h2>Exploring JavaScript Dynamics</h2>" +
        "<p>This content showcases the power of JavaScript in manipulating the DOM. We're creating engaging web experiences on the fly!</p>" +
        "<img src='./img/logo.png' alt='logo' id='logo'>" +
    "</div>";

    // Style the new content row
    document.getElementById("new-content-row").style.backgroundColor = "#e9e9e9";
    document.getElementById("new-content-row").style.padding = "20px";
    document.getElementById("new-content-row").style.marginTop = "20px";

    // Style the new heading
    document.querySelector("#new-content-row h2").style.color = "#333";
    document.querySelector("#new-content-row h2").style.borderBottom = "2px solid #333";
    document.querySelector("#new-content-row h2").style.paddingBottom = "10px";

    // Style the new paragraph
    document.querySelector("#new-content-row p").style.color = "#555";

    // Style the new logo
    document.getElementById("js-logo").style.maxWidth = "150px";
    document.getElementById("js-logo").style.height = "auto";
    document.getElementById("js-logo").style.display = "block";
    document.getElementById("js-logo").style.marginTop = "15px";
});