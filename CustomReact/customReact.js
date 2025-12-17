// 1. THE RENDERER (The Engine)
// This function mimics React's internal 'ReactDOM.render()'
// Its job is to take a "blueprint" (reactElement) and physically build it 
// inside the "construction site" (container).
function customRender(reactElement, container){

    /* A. CREATION PHASE
       We look at the 'type' of the blueprint (e.g., 'a', 'div', 'h1').
       We use standard DOM API (document.createElement) to create an empty shell.
    */
    const domElement = document.createElement(reactElement.type)

    /*
       B. CONTENT INJECTION
       We take the 'children' (the text or inner content) and put it inside the shell.
       Note: In real React, 'children' is often an array of other elements, 
       so this would be recursive. Here, we assume it's just a string.
    */
    domElement.innerHTML = reactElement.children

    /*
       C. PROP INJECTION (The "Smart" Part)
       Instead of manually writing domElement.href = ..., we iterate!
       This makes our function REUSABLE. It doesn't care if the element 
       is an <a>, an <img>, or a <button>. It just blindly applies 
       whatever attributes exist in the 'props' object.
    */
    for(const prop in reactElement.props){
        // 'children' is technically inside props in React, but we handled it above.
        // So we skip it to avoid adding it as an attribute like <div children="text">
        if(prop === 'children') continue;

        // We apply the attribute (e.g., href="google.com", target="_blank")
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    /*
       D. MOUNTING
       Finally, we attach this newly created DOM node to the actual web page 
       so the user can see it.
    */
    container.appendChild(domElement)
}

// 2. THE VIRTUAL DOM (The Blueprint)
// This object represents what we WANT the UI to look like.
// It is lightweight JavaScript. It is NOT an HTML element yet.
// React uses objects like this because comparing two JS objects is fast,
// whereas touching the real DOM is slow.
const reactElement = {
    type: 'a',              // What HTML tag is it?
    props: {                // What attributes does it have?
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google' // What is inside it?
}

// 3. THE CONTAINER (The Entry Point)
// We grab the empty <div id="root"> from our HTML file.
const mainContainer = document.querySelector("#root")

// 4. EXECUTION
// We tell our engine: "Take this blueprint and build it inside this container."
customRender(reactElement, mainContainer)