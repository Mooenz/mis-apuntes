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
// class myELement extends HTMLElement {
//   constructor() {
//     super();
//   }

//   getTemplate() {
//     const template = document.createElement('template');
//     template.innerHTML = `
//       <section>
//         <h2>Hola manu de nuevo</h2>
//         <div>
//           <p>Soy mas texto de ejemplo</p>
//         </div>
//       </section>
//       ${this.getStyles()}
//     `;
//     return template;
//   }

//   getStyles() {
//     return `
//       <style>
//         h2 {
//           color: red;
//         }
//       </style>
//     `;
//   }

//   render() {
//     this.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

// customElements.define('my-element', myELement);

//shadow DOM
// class myELement extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//   }

//   getTemplate() {
//     const template = document.createElement('template');
//     template.innerHTML = `
//         <section>
//           <h2>Hola manu de nuevo</h2>
//           <div>
//             <p>Soy mas texto de ejemplo</p>
//           </div>
//         </section>
//         ${this.getStyles()}
//       `;
//     return template;
//   }

//   getStyles() {
//     return `
//         <style>
//           h2 {
//             color: red;
//           }
//         </style>
//       `;
//   }

//   render() {
//     this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

// customElements.define('my-element', myELement);

//Content Slot
// class myELement extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//   }

//   getTemplate() {
//     const template = document.createElement('template');
//     template.innerHTML = `
//         <section>
//           <h2>
//           <slot></slot>
//           </h2>
//         </section>
//         ${this.getStyles()}
//       `;
//     return template;
//   }

//   getStyles() {
//     return `
//         <style>
//           h2 {
//             color: red;
//           }
//         </style>
//       `;
//   }

//   render() {
//     this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

// customElements.define('my-element', myELement);

//Multi Content Slot
// class myELement extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });
//   }

//   getTemplate() {
//     const template = document.createElement('template');
//     template.innerHTML = `
//         <section>
//           <h2>
//           <slot name="titulo"></slot>
//           </h2>
//           <div>
//           <p>
//           <slot name="parrafo">
//           </slot>
//           </p>
//           </div>
//         </section>
//         ${this.getStyles()}
//       `;
//     return template;
//   }

//   getStyles() {
//     return `
//         <style>
//           h2 {
//             color: red;
//           }
//         </style>
//       `;
//   }

//   render() {
//     this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

// customElements.define('my-element', myELement);

//Atributos
// class myELement extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: 'open' });

//     this.titulo = this.getAttribute('titulo');
//     this.parrafo = this.getAttribute('parrafo');
//     this.img = this.getAttribute('img');
//   }

//   getTemplate() {
//     const template = document.createElement('template');
//     template.innerHTML = `
//         <section>
//           <h2>${this.titulo}</h2>
//           <div>
//           <p>${this.parrafo}</p>
//           <img src=${this.img} alt="Una imagen"/>
//           </div>
//         </section>
//         ${this.getStyles()}
//       `;
//     return template;
//   }

//   getStyles() {
//     return `    
//         <style>
//           h2 {
//             color: red;
//           }
//         </style>
//       `;
//   }

//   render() {
//     this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
//   }

//   connectedCallback() {
//     this.render();
//   }
// }

// customElements.define('my-element', myELement);

//attributeChangedCallback
class myELement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return['titulo', 'parrafo', 'img'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "titulo") {
      this.titulo = newVal;
    }

    if(attr === "parrafo") {
      this.parrafo = newVal;
    }

    if(attr === "img") {
      this.img = newVal;
    }
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>${this.titulo}</h2>
          <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} alt="Una imagen"/>
          </div>
        </section>
        ${this.getStyles()}
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
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myELement);