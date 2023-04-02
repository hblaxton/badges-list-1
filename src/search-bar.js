import { LitElement, html, css } from 'lit';

class SearchBar extends LitElement {
  static properties = {
    topic: { type: String },
    inputs: { type: String},
    filteredInputs: { reflect: true, type: Array}
  }
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--badge-list-background-color);
    }
    .search {
      width: 500px;
    }
  `;
  constructor() {
    super();
    this.topic = 'Search Content, Topics, and People';
    this.inputs = "";
    this.filteredInputs = [];
  }

  searchInput(e) {
       
  }
}



 
          

customElements.define('search-bar', SearchBar);