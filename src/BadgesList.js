import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class BadgesList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      div {
  margin: 20px;
  font-size: 16px;
}
input {
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-bottom: 1px solid black;
  transition: all .3s ease-in-out;
}
input:focus {
  border-bottom: 2px solid blue;
  outline: 1px solid grey;
  outline-offset: 4px;
}
input:hover:not(:focus) {
  border-bottom: 2px solid grey; 
}

/** accessibility enhancement to not animate the changes possibly
for users that have motion activated disabilities **/
@media (prefers-reduced-motion) {
  input {
    transition: none;
  }
}
.tblock {
  color: black;
  padding: 12px 20px 15px 20px;
  background-color: grey;
  margin: 25px;
}       
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <h1 id = "heading" >Explore</h1>  
      <div class="tblock">
      <h3 id = "heading" >Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics</h3>
      <input type="text" id="getme" placeholder="Search Content & Topics" />
      </div>
    `;
  }
}
