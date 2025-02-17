import { createElement } from "react";

function custumRender(reactElement, container){
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=createElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}
const reactElement= {
    type: 'a',
    props:{
        href:"https://www.google.com/",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root');
costumRender(reactElement,mainContainer)