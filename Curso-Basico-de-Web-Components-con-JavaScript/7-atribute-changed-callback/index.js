// Attribute Changed Callback
class myELement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  // Dar de alta a las variables del obsevador
  static get observedAttributes() {
    return ['titulo', 'parrafo', 'img'];
  }
  // recibe 3 parametros, 1. valor actual, 2. valor viejo 3. nuevo valor
  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === 'titulo') {
      this.titulo = newVal;
    }

    if (attr === 'parrafo') {
      this.parrafo = newVal;
    }

    if (attr === 'img') {
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
