// // Custom Elements
// const template = document.createElement("div");
// template.innerHTML = `
//   <style>
//   .texto {
//     color: red;
//     font-size: 20px;
//    }

//     p {
//       color: blue;
//     }
//   </style>
//   <p class="texto">Hola Jose Manuel</p>
//   <p>Eres el mejor manu no pares de aprender!</p>
// `;

// class myELement extends HTMLElement {
//   constructor() {
//     super();

//     this.p = document.createElement('p');
//   }

//   connectedCallback() {
//     this.p.textContent = "Holaa manu";
//     this.appendChild(this.p);
//     this.appendChild(template);
//   }
// }

// customElements.define('my-element', myELement);

// Template

class myELement extends HTMLElement {
  constructor() {
    super();
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hola manu de nuevo</h2>
        <div>
          <p>Soy mas texto de ejemplo</p>
        </div>
      </secetion>
      ${this.getStyles}
    `;
    return template;
  }

  getStyles() {
    return `    
      <style>
        h2 {
          color: red;
        }
      </style>
    `;
  }

  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);