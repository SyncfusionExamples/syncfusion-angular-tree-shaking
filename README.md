# Tree Shaking in Angular

The Angular CLI relies on the Webpack bundler to manage and bundle your application's code. Starting from version 2, Webpack introduced full-fledged support for tree shaking. As a result, when you build your Angular application using the Angular CLI, Webpack analyzes your codebase and automatically removes any unreachable or unused code segments.

## Using Syncfusion with Tree Shaking

Syncfusion Angular components seamlessly support Tree Shaking by default, eliminating the need for any special modifications at the application level. Tree Shaking is a powerful technique that reduces the size of your application's bundle by removing unused code modules. This leads to faster load times and better overall performance.

## Implementing Tree Shaking in an Angular Application

Enabling Tree Shaking in your Angular application, especially when utilizing Syncfusion EJ2 Angular components, is a straightforward process that can significantly enhance your application's efficiency.

### Steps to Enable Tree Shaking

Follow these steps to enable Tree Shaking in your Angular application,

1. Create an Angular Application with Syncfusion Components: Begin by setting up your Angular application with Syncfusion EJ2 Angular components. You can find detailed instructions on how to integrate Syncfusion components into your application in the [Getting Started](../getting-started/angular-cli/) documentation using the [Angular CLI](https://cli.angular.io/).

2. Build or Serve with Tree Shaking: Once your application is configured with Syncfusion components, you can enable Tree Shaking by building or serving the application with production settings. Run the `ng build --configuration=production` or `ng serve --configuration=production` command to build or serve the application with Tree Shaking enabled.

By adhering to these steps and integrating tree shaking into your Angular application, you can significantly enhance performance and elevate the user experience.