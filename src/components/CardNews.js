class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadown = this.attachShadow({mode: "open"});
        shadown.appendChild(this.build());
        shadown.appendChild(this.styles());
        
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");


        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || " Anonymous");



        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
        


        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content") 

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");
        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/foto-default.jpg";
        newsImage.alt = "Foto da Noticia";
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);


        return componentRoot;

    }

    styles(){
        const style = document.createElement("style");
        style.textContent = `
        
.card{
    width: 80%;
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

.card_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card_left > h1 {
    margin-top: 15px;
    font-size: 25px;
}

.card_left > p {
    color: rgb(70, 70, 70);
}

.card_left > span {
    font-weight: 400;
}
        
        
        `
        
        return style;
    }

}

customElements.define("card-news", CardNews);