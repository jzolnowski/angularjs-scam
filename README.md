# AngularJS SCAM Example Application (Typescript)

Branch includes a version of a startup application based on angularJS v1.8.
Demonstrates the advantages of using a Single Component Angular Module concept to avoid importing entire modules with multiple dependencies when we only need a selected one.

The application presents a list of users (left) and a user detail view (right).

Application dependencies:
*  AngularJS 1.8.2
*  latest version of AngularJS Material
*  TypeScript 3.6.3
*  latest version of Axios
*  SystemJS

- - -

###### Prerequisites

This project assumes that you have NodeJS and any relevant development tools (like XCode) already
installed.

We use NPM for dependency management, and SystemJS (built on top of the dynamic ES6 module loader)
to dynamically load our modules. This allows developers to load any module format (ES6, CommonJS,
AMD, and globals).

SystemJS is also used to transpile the Typescript into plain Javascript in the browser rather than
having to download and configure a separate compiler.

###### Getting Started

Clone this repository and execute the following commands in a terminal:

* `npm install`
* `npm start`

###### Files

You will notice a few files/directories within this project:

1. `app/src` - This is where all of your application files are stored.
2. `app/assets` - This folder contains some images and icons which are used by
   the application.
3. `index.html` - The entry point to your application. This uses System.js to load the
   `app/src/app.module.ts` bootstrap file which imports all of your dependencies and declares them
   as AngularJS modules. It also configures the icons and theming for the application.

#### Notes

Below are a few important notes about this project.

* Unlike the ES6 version, we have merged the `app.module.ts` and `app.ts` files into the `app.module.ts` to
  simplify the usage a bit and have only one module.

* Additionally, this version of the project shows how to use the Dialog component to show an alert
  once a sharing icon is clicked. The ES6 version simply logs a message to the console.


#### Troubleshooting

If you have issues getting the application to run or work as expected:

1. Make sure you have installed NPM and run the `npm install` command (and there were no errors).
5. If you don't see an existing issue, please open a new one with the relevant information and the
   details of the problem you are facing.

Note that the `npm run build` command is expected to fail. The project is configured to use
SystemJS to build the TypeScript in the browser. The format required for supporting this in SystemJS
is not compatible with the normal TypeScript compiler (`tsc`).
