import { LitElement, html, css } from 'lit';
import "./badges-list.js";

export class BadgesTypes extends LitElement {
    static get tag(){
        return 'badges-types';
    }

        static get properties(){
        return {
        types: {type: Array},
        title: {type: String},
        body: {type: String},
        icon: {type: String},
        author: {type: String},
    
            
            
        }
    }
    constructor() {
        super();
        this.types=[]; 
        this.updateType();
    }
    async updateType() { 
        const adress = './api/type';
        fetch(adress).then((response) => {
            if (response.ok) {
                return response.json()
            }
            return[];
        })
        .then((data) => {
            this.types = data;
            console.log(data);
        });
        }
        
    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
        `;
    }
    render() {
        return html`
        <div class="wrapper">
        ${this.types.map(type => html`
        <div class="item">
        <badges-list title="${type.title}" body="${type.body}" icon="${type.icon}" author="${type.author}"></badges-list>
        </div>
    `)}
    </div>
        
    `;

        
        }

    }
customElements.define(BadgesTypes.tag, BadgesTypes);
        