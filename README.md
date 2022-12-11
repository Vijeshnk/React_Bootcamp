![screencapture-localhost-1234-2022-12-11-22_15_52](https://user-images.githubusercontent.com/48064217/206916833-7645a470-39bd-4025-8e6c-4017e7dab683.png)

# Theoretical assignment -session 4


## 1. What is pure function ?
#####  A function which always return same output for given set of inputs and doesn’t produce side effects e.g. mutates the global state etc


## 2. Difference between console.log(<HeaderComponent />) and console.log(HeaderComponent())  
##### > If we call a functional component as HeaderComponent() then it will be a function with no state, none of the extra things provided by react for a component.  It will console log the function body.
##### > When we call a functional component as <HeaderComponent/> it will have its own lifecycle, hooks, and state. It is also recognized as a component in the React dev tool. In this case,  a new element is created using React.createElement(). It will console log the object returned by React.createElement method.

## 3. What is React.Fragment?
##### React.Fragment is a component which helps us to render multiple child elements without using extra dom nodes.

## 4. What is  default in "export default CardCompnent"?
##### In default export, there is only a single default export per module. A default export can be a function, a class, an object or anything else. This value is to be considered as the “main” exported value since it will be the simplest to import.
##### The naming of import is completely independent in default export and we can use any name we like.
##### > Export default is passed by “pass by value”
##### > Just export is passed by “pass by reference”
## 5. What is config-driven UI?
##### > It’s a way of writing a frontend application such that we create a skeleton or structure of UI which is not hard coded.
##### > Everything comes from the Backend specifying everything about the element from style to structure and we just put this data into a skeleton
##### > For, e.g., there could be a Carousal that is showing some offers which are available to certain locations only so the backend will specify which element to show according to the region

## 6. Advantages of config driven UI
##### > changes can be done from backend without any code change required from UI.
##### > in config driven UI the build size of the UI will be less as UI code will be dynamic.

## 7. What if we have given the same id in the array of data objects?
##### Giving the same id in the array of data objects gives the error “Encountered two children with the same key”. The id should be unique for each element in the array of data objects as it helps in identifying each unique element.


## 8. Index is not a good way to be passed as key. Why?
##### When we use a map to loop over data such as an array of objects, we need to assign a key for each individual object which helps in identifying the object uniquely. Generally setting the index as key is not a good practice because whenever our data changes i.e we add/remove more elements in our array, the index value changes accordingly. Hence the index value of any element can differ once the array is altered. Therefore, setting index as key is not a good practice to follow.




