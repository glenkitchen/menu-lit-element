var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { LitElement, html, customElement, property } from 'lit-element';
let MenuLitElement = class MenuLitElement extends LitElement {
    constructor() {
        super();
        this.rootMenu = [
            {
                text: 'File', menu: [
                    { text: 'New File', shortCutText: 'Ctrl+Shift+N' },
                    { text: 'Open File', shortCutText: 'Ctrl+O' },
                    { text: 'Save File', shortCutText: 'Ctrl+S' },
                    { text: '-' },
                    { text: 'Auto Save', checked: true, disabled: true }
                ]
            },
            {
                text: 'Edit', menu: [
                    { text: 'Undo', shortCutText: 'Ctrl+X', disabled: true, action: () => alert('Undo') },
                    { text: 'Redo', shortCutText: 'Ctrl+Y', disabled: true, action: () => alert('Redo') },
                    { text: '-' },
                    { text: 'Cut', shortCutText: 'Ctrl+X', action: () => alert('Cut') },
                    { text: 'Copy', shortCutText: 'Ctrl+C', action: () => alert('Copy') },
                    { text: 'Paste', shortCutText: 'Ctrl+V', action: () => alert('Paste') },
                    { text: '-' },
                    {
                        text: 'Align', menu: [
                            { text: 'Left Align' },
                            { text: 'Center' },
                            { text: 'Right Align' },
                            { text: '-' },
                            { text: 'Top Align' },
                            { text: 'Middle' },
                            { text: 'Bottom Align' },
                        ]
                    },
                    {
                        text: 'Distribute', menu: [
                            { text: 'Horizontal' },
                            { text: 'Vertical' },
                        ]
                    },
                    { text: '-' },
                    {
                        text: 'Navigation', menu: [
                            { text: 'Expand', shortCutText: 'Ctrl+End' },
                            { text: 'Collapse', shortCutText: 'Ctrl+Home' },
                        ]
                    },
                    { text: '-' },
                    { text: 'Find', shortCutText: 'Ctrl+F' },
                    { text: 'Replace', shortCutText: 'Ctrl+H' }
                ]
            },
            {
                text: 'Help', menu: [
                    { text: 'Welcome' },
                    { text: 'Help' },
                    { text: 'About' }
                ]
            }
        ];
    }
    render() {
        return html `
        <style>
        :host {
          font-family: Arial;
          font-size: 10pt;
        }

        .container {
          position: relative;
        }

        .rootMenu {
          position: absolute;
        }

        .rootMenuItem {
          padding: 6px;
          color: #000000;
          text-decoration: none;
        }

        .rootMenuItem:hover {
          background: #eeeeee;
        }

        .menu, .subMenu {
          padding: 4px;
          border: 1px solid #d5d5d5;
          box-shadow: 2px 2px 2px #d5d5d5;
          position: absolute;
        }   

        .menuItemSubMenu {
          background-image: url("data:image/gif;base64,R0lGODlhCQAJAIAAAP///zMzMyH5BAEAAAAALAAAAAAJAAkAAAIPhI8WebHsHopSOVgb26AAADs=");
          background-position: 75% 50%;
          background-repeat: no-repeat;
        }
        
        .text, .shortCutText {
          padding: 4px 20px;
        }

        .menuItem[disabled] {
          opacity: 0.3;
        }

        .text[checked] {
          background-image: url("data:image/gif;base64,R0lGODlhFQAVAMQfAGxsbHx8fIqKioaGhvb29nJycvr6+sDAwJqamltbW5OTk+np6YGBgeTk5Ly8vJiYmP39/fLy8qWlpa6ursjIyOLi4vj4+N/f3+3t7fT09LCwsHZ2dubm5r6+vmZmZv///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEY4NTZERTQ5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY4NTZERTU5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjg1NkRFMjlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjg1NkRFMzlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAB8ALAAAAAAVABUAAAVI4CeOZGmeaKqubKtylktSgCOLRyLd3+QJEJnh4VHcMoOfYQXQLBcBD4PA6ngGlIInEHEhPOANRkaIFhq8SuHCE1Hb8Lh8LgsBADs=");
          background-position: -4px 50%;
          background-repeat: no-repeat;
        }

        .shortCutText {
          color: gray;
          text-align: right;
        }
        
      </style >

      <div class="container">        
        
        <ul class="rootMenu">
          ${this.rootMenu.map((item) => this.rootMenuItem(item))}
        </ul>

        ${this.menu
            ? html ` 
          <table class="menu">
            <tbody>${this.menu.map((item) => this.menuItem(item))}</tbody>
          </table>`
            : html ``}

        ${this.subMenu
            ? html ` 
          <table class="subMenu">
            <tbody>${this.subMenu.map((item) => this.menuItem(item))}</tbody>
          </table>`
            : html ``}
      </div>
    `;
    }
    rootMenuItem(item) {
        return html `
    <a class="rootMenuItem" href="javascript:void(0);" @mousedown=${this.rootMenuItemMouseDown} @mousemove=${this.rootMenuItemMouseMove}>
      ${item.text}
    </a>`;
    }
    menuItem(item) {
        if (item.text === '-') {
            return this.separator();
        }
        else if (item.menu && Array.isArray(item.menu)) {
            return this.subMenuItem(item);
        }
        else if (item.text && typeof item.text === 'string') {
            return this.textItem(item);
        }
    }
    ;
    separator() {
        return html `
    <tr>
      <td colspan="2">
        <hr>
      </td>
      <td></td>
    </tr>`;
    }
    subMenuItem(item) {
        return html `
    <tr class="menuItem" ?disabled=${item.disabled} @mousemove=${this.subMenuItemMouseMove}>
      ${this.text(item)}
      <td class="menuItemSubMenu"> </td>
    </tr>`;
    }
    textItem(item) {
        return html `
    <tr class="menuItem" ?disabled=${item.disabled} @mousedown=${this.menuItemMouseDown} @mousemove=${this.menuItemMouseMove}>
      ${this.text(item)}
      <td class="shortCutText">${item.shortCutText}</td>
    </tr>`;
    }
    text(menuItem) {
        return html `
    <td class="text" ?checked=${menuItem.checked}>
      ${menuItem.text}
    </td>`;
    }
    rootMenuItemMouseDown(event) {
        this.showMenu(event);
    }
    rootMenuItemMouseMove(event) {
        if (this.currentRootMenuItem && this.currentRootMenuItem !== event.currentTarget) {
            this.showMenu(event);
        }
    }
    menuItemMouseDown(event) {
        this.currentMenuItem = event.currentTarget;
        if (!this.currentMenuItem.disabled) {
            alert(this.currentMenuItem.textContent.trim());
            this.closeMenu();
        }
    }
    menuItemMouseMove(event) {
        if (!this.inSubMenu(event.currentTarget)) {
            this.closeSubMenu();
        }
    }
    subMenuItemMouseMove(event) {
        this.showSubMenu(event);
    }
    showMenu(event) {
        return __awaiter(this, void 0, void 0, function* () {
            this.closeMenu();
            this.currentRootMenuItem = event.currentTarget;
            const text = this.currentRootMenuItem.text.trim();
            const menuItem = this.rootMenu.find((menuItem) => menuItem.text === text);
            if (menuItem) {
                this.menu = menuItem.menu;
            }
            if (this.menu) {
                yield this.requestUpdate();
                this.positionMenu(this.shadowRoot.querySelector('.menu'), this.menuOrigin(this.currentRootMenuItem));
            }
        });
    }
    showSubMenu(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentSubMenuItem !== event.currentTarget) {
                this.closeSubMenu();
                this.currentSubMenuItem = event.currentTarget;
                if (this.currentSubMenuItem) {
                    const text = this.currentSubMenuItem.firstElementChild.textContent.trim();
                    const subMenuItem = this.menu.find((item) => item.text === text);
                    if (subMenuItem) {
                        this.subMenu = subMenuItem.menu;
                    }
                    if (this.subMenu) {
                        yield this.requestUpdate();
                        this.positionMenu(this.shadowRoot.querySelector('.subMenu'), this.subMenuOrigin(this.currentRootMenuItem, this.currentSubMenuItem));
                    }
                }
            }
        });
    }
    inSubMenu(menuItem) {
        return menuItem.parentElement.parentElement.classList.contains("subMenu");
    }
    menuOrigin(rootMenuItem) {
        let { left: x, top: y } = rootMenuItem.getBoundingClientRect();
        x -= 8;
        y += rootMenuItem.offsetHeight - 8;
        return { x, y };
    }
    subMenuOrigin(menuItem, subMenuItem) {
        if (!menuItem || !subMenuItem) {
            throw Error('No menuItem or subMenuItem');
        }
        return {
            x: menuItem.offsetLeft + subMenuItem.offsetWidth + 10,
            y: subMenuItem.offsetTop + 24
        };
    }
    positionMenu(menuContainer, origin) {
        menuContainer.style.left = `${origin.x}px`;
        menuContainer.style.top = `${origin.y}px`;
    }
    closeMenu() {
        this.menu = null;
        this.subMenu = null;
        this.currentRootMenuItem = undefined;
        this.currentMenuItem = undefined;
        this.currentSubMenuItem = undefined;
    }
    closeSubMenu() {
        this.subMenu = null;
        this.currentSubMenuItem = undefined;
    }
};
__decorate([
    property({ type: Array })
], MenuLitElement.prototype, "menu", void 0);
__decorate([
    property({ type: Array })
], MenuLitElement.prototype, "subMenu", void 0);
MenuLitElement = __decorate([
    customElement('menu-lit-element')
], MenuLitElement);
export { MenuLitElement };
