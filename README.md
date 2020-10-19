## Live COVID-19 Tracker
  This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.28.
## General info
  The Covid-tracker tracks aggregates information that is publicly accessible from databases of global statistics & can be used to access country wise results. Rich visualisations in a   responsive user interface render the tracker user friendly and interactive.

## Screenshots
<img src="https://user-images.githubusercontent.com/67599320/96492619-8f493780-1261-11eb-8b7e-d456395f1da8.jpg" alt="resize1" width="300"> &emsp;&emsp;&emsp; <img src="https://user-images.githubusercontent.com/67599320/96492643-9708dc00-1261-11eb-9593-dc8b2cded142.jpg" alt="resize2" width="300">


## Technologies
* Angular CLI - version 8.3.28
* Bootstrap - version 4.5.0
* Jquery - version 3.5.1
* chart.js - version 2.9.3
* ng2-chart - version 2.3.2
* ngx-countup - version 7.3.1
* popperjs - version 2.4.4

## Setup
```shell
`npm install --save @angular/cli bootstrap chart.js ng2-charts ngx-countup`
```
```shell
"styles": [
             "src/styles.css",
             "node_modules/bootstrap/dist/css/bootstrap.min.css"
          ]
"scripts": [
              "./node_modules/jquery/dist/jquery.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
           ]
```
## Features
The Covidtracker application is used to display the number of people affected by pandemic worldwide. It uses a third-party API github repo for all requests. API is present over at https://covid19.mathdro.id/api
* Covidtracker uses a responsive design pattern and is very user friendly
* Can retrive the number of people affected by covid-19 world-wide
* Number of people affected can be filtered by country
* Retrived information can be displayed using a bar chart
* Overall statistics of data retrived are shown using line chart

## Status
```shell
Project is: _completed_
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
