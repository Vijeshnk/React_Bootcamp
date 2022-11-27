# Theoretical assignment -session 3

## 1. What is JSX?
##### > It is a syntax extension to JavaScript. 
##### > It allows us to directly write HTML in React
##### > JSX can easily convert HTML tags to react elements.
##### > It is faster than regular JavaScript.
##### > JSX allows us to put HTML elements in DOM without using appendChild() or createElement() method.

## 2. Superpowers of JSX?
##### > The readability is improved. If there are too many nested elements. The management of the code via React.createElement  will then be very challenging. The same can be accomplished with JSX in a more readable and simple manner.
##### > JSX guards against injection attacks. Before rendering any embedded values from JSX, ReactDOM by default escapes them. As a result, it makes sure that nothing can be explicitly injected that has not been written by the developer. Prior to rendering, everything is converted to a string. This helps avoid XSS.

## 3. Role of type attribute in script tag? What options can use there?
##### > The Type attribute specifies the script's media type. The type of the script is specified. It identifies the information contained in the <script> and <script/> tags.
##### Other options  are
##### application/javascript
##### application/ecmascript
##### module

## 4.{TitleComponent} VS {<TitleComponent/>} VS {<TitleComponent></TitleComponent>} in JSX.
##### {TitleComponent} -> will have run time warning. Warning: Functions are not valid as react child. This may happen if you return a component instead of from render. Or may be you meant to call the function rather than returning it.

##### {<TitleComponent/>} -> short syntax of {<TitleComponent></TitleComponent}. It will render the TitleComponent.

##### {<TitleComponent></TitleComponent} -> extended syntax of {<TitleComponent></TitleComponent}. -> this will also render the Title control

