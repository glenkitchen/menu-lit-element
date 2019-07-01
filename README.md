# menu-lit-element

 MenuLitComponent is an application menu component implemented as a [LitElement](https://lit-element.polymer-project.org/).

## Features
* Submenus
* Shortcut text
* Property driven
* Intuitive mouse events 
* Disabled menu items
* Written with TypeScript 

![alt text](https://github.com/glenkitchen/menu-lit-element/blob/master/menu-lit-element.gif "Application menu")

## Quick Start

To experiment with the MenuLitElement component.   

1. Clone this repo.

2. Install the dependencies with npm:
```
npm install 
```

3. Install the Polymer Cli:

```
npm install -g polymer-cli
```

4. Serve the project from the root directory with the Polymer Cli: 
```
polymer serve
```

5. Update the menu items in the constructor of the menu-lit-element.ts file     
```
this.rootMenu = [
      {
        text: 'File', menu: [
          { text: 'New File', shortCutText: 'Ctrl+Shift+N' },
          ...
```

## Using MenuLitComponent 

To use the MenuLitElement component in your code:

1. Install MenuLitElement from Npm 

```
npm install --save menu-lit-element.
```

2. Import MenuLitElement in JavaScript (or TypeScript):

```
import { MenuLitElement} 'menu-lit-element';
```

3. Add the menu-lit-element tag in html:

```
<menu-lit-element></menu-lit-element>
```
## Limitations
* The intent of this project was to learn [LitElement](https://lit-element.polymer-project.org/) by creating a real world web component. MenuLitElement is not  production complete.     
* Submenus in submenus are not supported. 

## Acknowledgements

* MenuLitElement is based on the application menu in [mxGraph](https://github.com/jgraph/mxgraph) and the accompanying [Graph Editor](https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html) example application.
* The project structure is based on the PolymerLabs [LitElement starter project](https://github.com/PolymerLabs/start-lit-element)  

https://github.com/glenkitchen/assembly
