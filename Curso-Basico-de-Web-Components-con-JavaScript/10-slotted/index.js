// :Slotted
class myElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
  }

  getTemplate() {
    const template = document.createElement('template');

    template.innerHTML = `
    <section>
      <h1><slot name="titulo"></slot></h1>
      <p><slot name="parrafo"></slot></p>
      <slot></slot>
    </section>

    ${this.getStyle()}
    `;

    return template;
  }

  getStyle() {
    return `
      <style>
        ::slotted(span) {
          font-size: 30px;
          color: red;
        }

        ::slotted(.texto) {
          color: blue;
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

customElements.define('my-element', myElement);
