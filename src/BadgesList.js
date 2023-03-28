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
      /* :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
        background-color: var(--badges-list-background-color);
      } */

    

      .wrapper{
  background-color: lightgray;
  color: white;
  padding: 2px 2px 2px 20px;
  text-align: center;
  width: 400px;
  height: auto;
  border-radius: 5px;
}

.badgeTitle {
  background-color: lightblue;
  color: white;
  padding: 10px 8px;
  text-align: left;
  border-radius: 5px;
  color: black;
} 
.badgeBody{
  background-color: white;
  color: black;
  text-align: left;
  padding: 2px 2px 2px 5px;
  font-size: 20px;
}
.author{
  background-color: white;
  text-align: left;
  color: black;
  padding: 2px 2px 2px 5px;
}
.img{
  text-align: right;
background-color: white;

}
.tblock {
  color: black;
  padding: 12px 20px 15px 20px;
  background-color: grey;
  margin: 25px;
}
.bblock {
  color: black;
  padding: 12px 20px 15px 20px;
  background-color: grey;
  margin: 25px;
}

    `;
  }

  constructor() {
    super();
    this.title = 'Technology & information';
    this.body = 'APA Style Citations: Introduction';
    this.img = 'https://badgesapp.psu.edu/uploads/badge/image/337/APA_Style.png';
    this.author = 'Creator: Victoria Raish';
  }

  render() {
    return html`
<h1 id = "heading" >Explore</h1>  

<div class="tblock">
  <h3 id = "heading" >Explore our content in a self-guided manner. Want us to guide you through learning new skills? Try out Missions. Looking for other people with similar focus? Find them in Groups. Interested in viewing all the options within a certain subject area? You can do that with Topics</h3>
  <input type="text" id="getme" placeholder="Search Content & Topics" />
</div>
<div class = bblock>
  <h3 id = "bheading" > Looking for something brand spankin' new? Here are the most recently added badges! </h3>


<!-- <div> -->
  <div class="wrapper">
  
    <div class="badgeTitle"> ${this.title} </div>
    <div class="badgeBody"> ${this.body} </div>
  <div class="img">
  <img src= ${this.img} width="100" height="100">
  
  <div class="author"> ${this.author} </div>
  </div>
</div>  </div>
</div>

  
    `;
  }
}
