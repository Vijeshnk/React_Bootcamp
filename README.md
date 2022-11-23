# Theoretical assignment -session 2

## 1. What is NPM ?
##### npm is a package manager for node js,it has a repository of open source software and it can be  used by anyone for free.npm makes writing code  easier  because we can rely on pre-built code that other people have written,we can use their code for  our  own projects.authors will write  the  code for their package and publish it on the npm registry then if we want to use that package  we can install it onto our own computer with the npm  cli or command line interface
## 2.What is Parcel/Webpack? Why do we need it ?	
#####  Parcel or Webpack are module bundlers,that combines many JavaScript code files into a single one that is production-ready loadable in the browser.
## 3.What is .parcel-cache
##### The  .parcel-cache  stores information about our project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

## 4.What is npx?
##### Npx is a tool that use to execute packages.A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.

## 5.What is difference between dependencies and Devdependancies
##### A dependency is a library that a project needs to function effectively,These are the libraries you need when you run your code.And devDependencies are the packages a developer needs during development,These dependencies may be needed at some point during the development process, but not during execution. 
##### (src:https://www.geeksforgeeks.org/difference-between-dependencies-devdependencies-and-peerdependencies/#:~:text=A%20dependency%20is%20a%20library,a%20developer%20needs%20during%20development.)

## 6.what is tree shaking
##### When we import and export modules in JavaScript, most of the time there is unused code floating around. Tree shaking or dead code elimination means  that unused modules will not be included in the bundle during the build process.
##### (src:https://medium.com/@netxm/what-is-tree-shaking-de7c6be5cadd)

## 7.What is Hot Module Replacement ?
##### Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. 
##### (src:https://webpack.js.org/concepts/hot-module-replacement/#:~:text=Hot%20Module%20Replacement%20(HMR)%20exchanges,by%20only%20updating%20what's%20changed)

## 8.Super powers of parcel 
#####  a.Code Splitting
#####  b.Bundle inlining
##### c.Dependency resolution
##### As Parcel builds your source code, it discovers dependencies, which allow code to be broken into separate files and reused in multiple places. Dependencies describe where to find the file containing the code you rely on, as well as metadata about how to build it.
##### d.Scope hoisting
##### In production builds, Parcel concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This  is called “scope hoisting”. This helps make minification more effective, and also improves runtime performance by making references between modules  static rather than dynamic object lookups.
##### e.Targets
##### Parcel can compile your source code in multiple different ways simultaneously. These are called targets. For example, you could have a “modern”  target that targets newer browsers and a “legacy” target for older browsers.

## 9.What is .gitignore ? what should we add and not add into it.
##### The .gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo.
##### files should add in it are
##### >Log files
##### >Files with API keys/secrets, credentials, or sensitive information
##### >Useless system files like .DS_Store on macOS
##### >Generated files like dist folders
##### >Dependencies which can be downloaded from a package manager

## 10.What is the difference between package.json and package-lock.json
##### Packet.json  contains basic information about the project,It is mandatory for every project.Package-lock.json describes the exact tree that was  generated to allow subsequent installs to have the identical tree,It is automatically generated for those operations where npm modifies either node_modules tree or package.json.

## 11.why should not modify package-lock.json?
##### package-lock.json is automatically generated for any operations where npm modifies either package.json or the node_modules tree.If package.json has  been updated with new module or newer version it will overrule the package-lock.json.The new npm ci command (for CI/CD) installs from package-lock file only. If the package.json and package-lock.json are out of sync then it will report an error. 

## 12.what is node_modules?is it a good idea to push that on git ?
##### A node_modules directory contains all the React dependencies packages: react, react-dom, and their transitive dependencies like webpack, babal, rxjs, ESLint, etc., to build and run a React project.No This folder is commonly excluded from a remote repository because it has a large size and  you shouldn’t add code that you didn’t write to the repository.

## 13.what is the dist folder ?
##### The /dist stands for distributable.The /dist folder contains the minimized version of the source code.The code present in the /dist folder is actually the code which is used on production web applications.

## 14.what is browerslists
##### its's a React configuration option to know which browsers the build process should target to

## 15.what is <noscript> tag in the index.html of Create React App ?
##### The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.

## 16.What is the role of manifest.json file in Create React App ?
##### manifest files provide the capability to change how an installed application will look like on the user's desktop or mobile device.

