import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class BadgesList extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      body: { type: String },
      icon: { type: String },
      author: { type: String },

    };
  }

  static get styles() {
    return css`
      :host {
        color: black;
  
        
      }
      .website{
        padding-left: 10px;
         /* background-color: lightgrey; */
      }
  
    input {
      font-size: 20px;
      font-weight: bold;
      border: none;
      border-bottom: 1px solid black;
      transition: all .3s ease-in-out;
    }

    simple-icon{
      width: 100px;
      height: 100px;
    }

    input:focus {
      border-bottom: 2px solid blue;
      outline: 1px solid grey;
      outline-offset: 4px;
    }
    input:hover:not(:focus) {
      border-bottom: 2px solid grey; 
    }


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
    /* .tblock {
      color: black;
      padding: 12px 20px 15px 20px;
      background-color: white;
      margin: 25px;
    }
    .bblock {
      color: black;
      padding: 12px 20px 15px 20px;
      background-color: white;
      margin: 25px;
    } */

    `;
  }

  constructor() {
    super();
    this.title = 'Technology & information';
    this.body = 'APA Style Citations: Introduction';
    this.icon = 'save';
    this.author = 'Creator: Victoria Raish';
  }

  render() {
    return html`
  <div class="wrapper">

    <div class="badgeTitle"> ${this.title} </div>
    <div class="badgeBody"> ${this.body} </div>
    <div class="img">

      <simple-icon icon="save"> ${this.icon}</simple-icon>
      <div class="author"> ${this.author} </div>
    </div>
  </div>

    `;
  }
}

customElements.define('badges-list', BadgesList);