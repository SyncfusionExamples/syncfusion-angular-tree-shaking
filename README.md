# Tree Shaking in Angular

Tree shaking in Angular eliminates unused modules from the final bundle file, reducing download size and improving performance. The Angular CLI uses Webpack, which supports tree shaking from version 2. Understanding tree shaking helps optimize application performance.

## Using Syncfusion Angular component with Tree Shaking

By default, Syncfusion Angular components supports Tree Shaking and it dose not require any special changes in application level.

## Implementing Tree Shaking in an Angular Application

Here are the steps for enabling Tree Shaking in an Angular application,

1. Create an Angular application with Syncfusion EJ2 Angular components as described in the [Getting Started](../getting-started/angular-cli/) documentation using the [Angular CLI](https://cli.angular.io/).

2. Run the `ng build --prod` or `ng serve --prod` command to build or serve the application with Tree Shaking enabled.

A sample code snippet that shows how to enable Tree Shaking in the `angular.json` configuration file,

    ```json

    "configurations": {
        "production": {
            "optimization": true,
            "sourceMap": false,
            "namedChunks": false,
            "aot": true,
            "extractLicenses": true,
            "vendorChunk": false,
            "buildOptimizer": true
        }
    },

    ```

You can enhance the user experience and boost performance in your Angular application by following the steps above and implementing tree shaking.