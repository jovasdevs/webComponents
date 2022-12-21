class TituloDinamico extends HTMLElement{
    constructor() {
    super();
    
    const shadown = this.attachShadow({mode:"open"});

    //base do component
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");    

    //estilizar o compoment
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: red;
        }
    `;
    
    //enviar para a shadown
    shadown.appendChild(componentRoot);
    shadown.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);