![screencapture-localhost-1234-2022-11-27-15_07_03](https://user-images.githubusercontent.com/48064217/204128518-ac471029-6578-4458-aa62-d68226ff69cb.png)


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

## 4.{TitleComponent} vs {< TitleComponent />} vs { < TitleComponent > < / TitleComponent } in JSX
##### {TitleComponent} -> will have run time warning.  when try to use {TitleComponent}
##### console warning be like:
##### index.js:1 Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. at div at HeadingComponent

##### { < TitleComponent / > } -> short syntax of { < TitleComponent > < / TitleComponent }. It will render the TitleComponent.

##### { < TitleComponent > < / TitleComponent } -> extended syntax of { < TitleComponent/>}. -> this will also render the Title component,usualy used for custom buttom component when it wants to written some text between it.Eg: <CustomButton> Click here </CustomButton>

