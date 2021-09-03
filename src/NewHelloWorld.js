import { html, css, LitElement } from 'lit';

export class NewHelloWorld extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--new-hello-world-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Why doesnt this change';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
    this.buttonColor(this.counter);
  }

  __decrement() {
    if (this.counter > 0){
      this.counter -= 1;
    }
    this.buttonColor(this.counter);
  }

  colors = ["#FFA07A ","#EE82EE","#800080","#00FF00","#800080","#FFA07A","#FF0000","	#008080","#800000","#808000","#C0C0C0"];


  buttonColor(counter){
    document.body.style.backgroundColor = this.colors[counter];
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment} id="inc">increment</button>
      <button @click=${this.__decrement} id="dec">decrement</button>
    `;
  }
}
