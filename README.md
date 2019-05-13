# menu-lit-element

 MenuLitComponent is an application menu web component. 
 
 It is implemented as a [LitElement](https://lit-element.polymer-project.org/) and is configuration-driven and state-driven.

* [Overview](#overview)
* [Using MenuLitComponent](#using-menulitcomponent)
* [Setup MenuLitComponent](#setup-menulitcomponent)
* [Known Issues and Limitations](#known-issues-and-limitations)
* [Acknowledgements](#acknowledgements)

## Overview

TODO Gif 

TODO features 
* configuration-driven
* state-driven
* submenus
* toggle items
* shortcut text

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

TOO Angular
TODO es5 and es6

## Setup MenuLitComponent

TODO
* properties
* events 

## Known Issues and Limitations

* Submenus in submenus are not supported. This is by design as we don't consider nested submenus to be good UX.   

## Acknowledgements

* MenuLitElement is based on the application menu in [mxGraph](https://github.com/jgraph/mxgraph) and the accompanying [Graph Editor](https://jgraph.github.io/mxgraph/javascript/examples/grapheditor/www/index.html) example application.
* The project structure is based on the [start-lit-element](https://github.com/PolymerLabs/start-lit-element) sample LitElement project.
* This project is built with version 3.0 of the [Polymer CLI](https://polymer-library.polymer-project.org/3.0/docs/tools/polymer-cli).     