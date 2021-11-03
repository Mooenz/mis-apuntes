// Shadow DOM
class myELement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
        <section>
          <h2>Hola manu de nuevo</h2>
          <div>
            <p>Soy mas texto de ejemplo</p>
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