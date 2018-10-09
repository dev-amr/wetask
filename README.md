# Wetask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.
This is a task manager application (to do list), with some extra added features like filtering through tasks, however the main focus in designing this application was to research PWA, emplementing this comcept through the three main features:
1- App Shell Architect. that insures the minimal meaningfull assets, to achieve high loading speed.
2- Web App Manifest. that allow smart phones to display the App with the look and feel of a native web app, also the ability to install it on home screen, with an icon.
3- Service Worker. to achieve assets loading even if there's no internet signal (from cached), also controle outgoing requests.
This app achieved 100% PWA using Lighthouse, which is an open source automated tool for improving the quality of PWA.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
