# Syncfusion Angular Tree Shaking

This project demonstrates tree shaking with Syncfusion Angular components. For further details, refer to the [Syncfusion Angular Tree Shaking](https://ej2.syncfusion.com/angular/documentation/frameworks-and-feature/tree-shaking) documentation.

## Run the sample project

* Clone the repository of the Syncfusion Angular Tree Shaking project by using the git clone command.

```bash
git clone https://github.com/SyncfusionExamples/syncfusion-angular-tree-shaking.git
```

* Use NPM to install the required dependencies by running the `npm install` command.

* Run `npm run build:map` to build the project and generate [source maps](https://angular.io/cli/build#options) for analyzing the bundle size. The build artifacts will be stored in the `dist/` directory. Source maps slightly increase the bundle size and are not recommended for production. Here, we use source maps to analyze the bundle size of the application.

* Run `npm run analyze` to analyze the bundle size of the application. The Analyzer tool will be launched in the browser with the bundle size details.