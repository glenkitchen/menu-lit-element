import { LitElement, html } from 'lit-element';

export class MenuLitElement extends LitElement {
  static get properties() {
    return {
      displayMenus: { type: Array }
    };
  }

  constructor() {
    super();
    //TODO value and text
    //TODO pass/communicate in rootMenu 
    //     with action, checked, disabled references
    //TODO fire event/communicate close menu
    //TODO memory profile    
    this.rootMenu = [
      {
        text: 'File', menu: [
          { text: 'New File', shortCutText: 'Ctrl+Shift+N' },
          { text: 'Open File', shortCutText: 'Ctrl+O' },
          { text: 'Save File', shortCutText: 'Ctrl+S' },
          { text: '-' },
          { text: 'Auto Save', checked: true, disabled: true }]
      },
      {
        text: 'Edit', menu: [
          { text: 'Undo', shortCutText: 'Ctrl+X', disabled: true },
          { text: 'Redo', shortCutText: 'Ctrl+Y', disabled: true },
          { text: '-' },
          { text: 'Cut', shortCutText: 'Ctrl+X' },
          { text: 'Copy', shortCutText: 'Ctrl+C' },
          { text: 'Paste', shortCutText: 'Ctrl+V' },
          { text: '-' },
          { text: 'Find', shortCutText: 'Ctrl+F' },
          { text: 'Replace', shortCutText: 'Ctrl+H' },
          { text: '-' },
          {
            text: 'Align', menu:
              [
                { text: 'Left Align' },
                { text: 'Center' },
                {
                  text: 'Right Align', menu:
                    [
                      { text: 'Right Align 1' },
                      { text: 'Right Align 2' },
                      { text: 'Right Align 3' },
                    ]
                }
              ]
          }
        ]
      },
      {
        text: 'Help', menu: [
          { text: 'Welcome' },
          { text: 'Help' },
          { text: 'About' }]
      }
    ];
  }

  render() {
    //TODO1 setDataMenuPath > Build From DisplayMenus
    const menuLink = (text) =>
      html`
      <a class="rootMenuItem" href="javascript:void(0);" @click=${this.rootMenuItemClick} @mousemove=${this.rootMenuItemMouseMove}>
        ${text}
      </a>`;

    const menuTable = (menu) =>
      html`
      <table class="menuTable">
        <tbody>${menu.menu.map((item) => menuItem(item))}</tbody>
      </table>`;

    const menuItem = (item) => {
      if (item.text === '-') {
        return separator();
      }
      else if (item.menu) {
        return subMenuItem(item);
      }
      else if (item.text && typeof item.text === 'string') {
        return textMenuItem(item);
      }
    };

    const separator = () =>
      html`
      <tr>
        <td colspan="2">
          <hr>
        </td>
        <td></td>
      </tr>`;

    const subMenuItem = (menuItem) =>
      html`
      <tr class="menuItem" ?disabled=${menuItem.disabled} @mousedown=${this.subMenuItemMouseDown} @mousemove=${this.subMenuItemMouseMove}>
        ${menuText(menuItem)}
        <td class="menuItemSubMenu"> </td>
      </tr>`;

    const textMenuItem = (menuItem) =>
      html`
      <tr class="menuItem" ?disabled=${menuItem.disabled} @mousedown=${this.menuItemMouseDown} @mouseup=${this.menuItemMouseUp}>
        ${menuText(menuItem)}
        <td class="menuItemShortCutText">${menuItem.shortCutText}</td>
      </tr>`;

    const menuText = (menuItem) =>
      html`
      <td class="menuItemText" ?checked=${menuItem.checked}>
        ${menuItem.text}
      </td>`;

    return html`
        <style>
        :host {
          font-family: Arial;
          font-size: 10pt;
        }

        .menuContainer {
          position: relative;
        }

        .menuBar {
          position: absolute;
        }

        .menuTable {
          padding: 4px;
          border: 1px solid #d5d5d5;
          box-shadow: 2px 2px 2px #d5d5d5;
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

        .menuItemText, .menuItemShortCutText {
          padding: 4px 20px;
        }

        .menuItem[disabled] {
          opacity: 0.3;
        }

        .menuItemText[checked] {
          background-image: url("data:image/gif;base64,R0lGODlhFQAVAMQfAGxsbHx8fIqKioaGhvb29nJycvr6+sDAwJqamltbW5OTk+np6YGBgeTk5Ly8vJiYmP39/fLy8qWlpa6ursjIyOLi4vj4+N/f3+3t7fT09LCwsHZ2dubm5r6+vmZmZv///yH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEY4NTZERTQ5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEY4NTZERTU5QUFBMTFFMUE5MTVDOTM5MUZGMTE3M0QiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Rjg1NkRFMjlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Rjg1NkRFMzlBQUExMUUxQTkxNUM5MzkxRkYxMTczRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAB8ALAAAAAAVABUAAAVI4CeOZGmeaKqubKtylktSgCOLRyLd3+QJEJnh4VHcMoOfYQXQLBcBD4PA6ngGlIInEHEhPOANRkaIFhq8SuHCE1Hb8Lh8LgsBADs=");
          background-position: -4px 50%;
          background-repeat: no-repeat;
        }

        .menuItemShortCutText {
          color: gray;
          text-align: right;
        }

        .menuItemSubMenu {
          background-image: url("data:image/gif;base64,R0lGODlhCQAJAIAAAP///zMzMyH5BAEAAAAALAAAAAAJAAkAAAIPhI8WebHsHopSOVgb26AAADs=");
          background-position: 75% 50%;
          background-repeat: no-repeat;
        }
      </style >

      <div class="menuContainer">
        <ul class="menuBar">
          ${this.rootMenu.map((menu) => menuLink(menu.text))}
        </ul>
        ${this.displayMenus
        ? this.displayMenus.map((menu) => menuTable(menu))
        : html``
      }
      </div>
    `;
  }

  rootMenuItemClick(event) {
    this.rootMenuItem = event.currentTarget;
    const { x, y } = this.rootMenuOrigin(this.rootMenuItem);
    this.showMenu(this.rootMenuItem.text.trim(), x, y);
  }

  rootMenuItemMouseMove(event) {
    if (this.rootMenuItem && this.rootMenuItem !== event.currentTarget) {
      this.rootMenuItemClick(event);
    }
  }

  subMenuItemMouseDown(event) {
    //TODO getDataMenuPath
    const subMenuItem = event.currentTarget;
    console.log('subMenuItem', subMenuItem);
    const { x, y } = this.subMenuOrigin(subMenuItem);
    console.log('x', x, 'y', y);   
    this.showMenu(['Edit', 'Align'], x, y, ['Edit, Align'].length);
  }

  subMenuItemMouseMove(event) {

  }

  menuItemMouseDown(event) {
    this.currentMenuItemElement = event.currentTarget;
  }

  menuItemMouseUp(event) {
    const currentTarget = event.currentTarget;
    if (this.currentMenuItemElement && this.currentMenuItemElement === currentTarget) {
      alert(this.currentMenuItemElement.textContent.trim());
    }
    this.closeMenu();
  }

  closeMenu() {
    this.displayMenus = null;
    this.rootMenuItem = null;
    this.currentMenuItemElement = null;
  }

  showMenu(text, x, y, level = 0) {
    const menu = this.setDisplayMenu(
      this.getMenu(text, level),
      level);

    if (menu) {
      this.getMenuTable(level)
        //TODO async await
        .then((menuTable) => {
          this.positionMenuTable(menuTable, x, y);
        });
    }
  }

  getMenu(menuPath) {
    let path;
    if (typeof menuPath === 'string') {
      path = [menuPath];
    }
    else if (Array.isArray(menuPath)) {
      path = menuPath;
    }
    if (path) {
      return path.reduce((acc, current, index, arr) => {
        if (index === 0) {
          return this.rootMenu.filter((menu) => menu.text === current)[0];
        }
        return acc.menu.filter((menu) => menu.text === current)[0];
      }, {});
    }

  }

  setDisplayMenu(menu, level = 0) {
    //TODO Do path, alwaysAdd  
    if (menu) {
      if (level === 0) {
        this.displayMenus = [menu];
      }
      else {
        this.displayMenus.push(menu);
      }
    }
    return menu;
  }

  async getMenuTable(level = 0) {
    await this.requestUpdate();
    return this.shadowRoot.querySelectorAll('.menuTable')[level];
  }

  positionMenuTable(menuTable, x, y) {
    menuTable.style.left = `${x}px`;
    menuTable.style.top = `${y}px`;
  }

  rootMenuOrigin(rootMenuItem) {
    let { left: x, top: y } = rootMenuItem.getBoundingClientRect();
    x -= 8;
    y += rootMenuItem.offsetHeight - 8;
    return { x, y };
  }

  subMenuOrigin(subMenuItem) {
    // menuItem    offsetLeft  offsetTop
    //             +           +
    // subMenuItem offsetWidth offsetTop

    return {
      x: subMenuItem.offsetLeft + subMenuItem.offsetWidth,
      y: subMenuItem.offsetTop + subMenuItem.offsetHeight
    };
  }
}

customElements.define('menu-lit-element', MenuLitElement);