// Custom Elements
const template = document.createElement("div");
template.innerHTML = `
  <style>
  .texto {
    color: red;
    font-size: 20px;
   }

    p {
      color: blue;
    }
  </style>
  <p class="texto">Hola Jose Manuel</p>
  <p>Eres el mejor manu no pares de aprender!</p>
`;

class myELement extends HTMLElement {
  constructor() {
    super();

    this.p = document.createElement('p');
  }

  connectedCallback() {
    this.p.textContent = "Holaa manu";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define('my-element', myELement);