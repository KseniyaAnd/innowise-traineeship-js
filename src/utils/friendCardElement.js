export class FriendCardElement extends HTMLElement {
    constructor() {
        super();
        this._img = '';
        this._name = '';

        const style = document.createElement('style');
        style.textContent = `
            .friends__item {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: white;
                font-family: "Tabula ITC Std Black", sans-serif;
            }
            
            .friends__avatar-container {
                width: 86px;
                height: 86px;
                overflow: hidden;
                position: relative;
            }
            
            .friends__avatar {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                border-radius: 50%
            }
            
            .friends__name {
                text-align: center;
            }
    `;

        const shadow = this.attachShadow({ mode: 'open' });

        const parent = document.createElement('div');
        parent.classList.add('friends__item');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('friends__avatar-container');

        this.imgElement = document.createElement('img');
        this.imgElement.classList.add('friends__avatar');
        this.imgElement.src = this._img;

        imgContainer.appendChild(this.imgElement);
        parent.appendChild(imgContainer);

        const friendsInfo = document.createElement('div');
        friendsInfo.classList.add('friends__info');

        this.nameElement = document.createElement('p');
        this.nameElement.classList.add('friends__name');
        this.nameElement.textContent = this._name;

        friendsInfo.appendChild(this.nameElement);
        parent.appendChild(friendsInfo);

        shadow.appendChild(style);
        shadow.appendChild(parent);
    }

    static get observedAttributes() {
        return ['img', 'name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === 'img') {
                this._img = newValue;
                this.imgElement.src = this._img;
            } else if (name === 'name') {
                this._name = newValue;
                this.nameElement.textContent = this._name;
            }
        }
    }

    set name(v) {
        this.setAttribute('name', v);
    }

    get name() {
        return this.getAttribute('name');
    }
}

customElements.define('friend-card-element', FriendCardElement);
