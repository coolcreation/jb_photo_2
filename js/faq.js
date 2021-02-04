//     Jeff Bohn    1/27/2021   Chapter 6

"use strict";

// the event handler for the click event of each h2 element
 const toggle = evt => {
    const linkElement = evt.currentTarget;                  // added - get the clicked link element
    const h2Element = linkElement.parentNode;                  // get the clicked h2 element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

    //  h2Element.classList.toggle("minus");
    if (h2Element.hasAttribute("class")) {     // add statement
        h2Element.removeAttribute("class");
    } else {
        h2Element.className="minus";
    }

    //divElement.classList.toggle("open");
    if (divElement.hasAttribute("class")) {    // add statement
        divElement.removeAttribute("class");
    } else {
        divElement.className="open";
    }
    

      evt.preventDefault();   // cancel default action of h2 tag's <a> tag

 };
 
    document.querySelector('#change').addEventListener("click", (e)=>{   // color change for "h1", added to code not required
    e.target.classList.add("purple");
    });


document.addEventListener("DOMContentLoaded", () => {
    // get the h2 tags
    const linkElements = faqs.querySelectorAll("#faqs a");        //const h2Elements = faqs.querySelectorAll("#faqs h2");
    
    // attach event handler for each h2 tag	    
    for (let linkElement of linkElements) {
        linkElement.addEventListener("click", toggle);
    }
    // set focus on first h2 tag's <a> tag
    linkElements[0].focus();          // h2Elements[0].firstChild.focus();  
    
   
});

