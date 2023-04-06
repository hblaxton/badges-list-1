import { LitElement, html, css } from 'lit';
import "./badges-list.js";
import "./search-bar.js";

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
        this.getSearchResults().then((results) => {
            this.types = results;
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
    async getSearchResults(value = '') {
        const address = `./api/type?search=${value}`;
        const results = await fetch(address).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return [];
    })
        .then((data) => {
            return data;
        });
        return results;

    }
    async _onSearchEvent(e) {
        const term = e.detail;
        console.log(term);
       this.types = await this.getSearchResults(term);
        
    }
    render() {
        return html`
        <search-bar @value-changed="${this._onSearchEvent}"></search-bar>
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
        