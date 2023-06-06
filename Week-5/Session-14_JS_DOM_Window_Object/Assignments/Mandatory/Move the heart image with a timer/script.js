function displayWindowProperties(){
    console.log("userAgent: "+window.navigator.userAgent)
    console.log("screen width & Height: "+screen.width+" and "+screen.height);
    console.log("location: "+location.href+" and "+location.pathname);
    console.log("sessionStorage: "+sessionStorage);
    console.log("localStorage: "+localStorage);
}

displayWindowProperties()