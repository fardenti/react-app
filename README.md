# React app from scratch

## Choice of Technologies

1. Task runners: Run scripts / servers locally to enable fast development
    - Yarn

2. Linting: Maintain consist & clean code style throughout your project

ESlint for:
    - css linting
    - JS linting
    - React linting

3. Transpiling : Transform your code into valid code for older browsers
    - Babel

4. Bundling: Run the transpiled code in a browser, even if not all code-features are supported
    - Webpack

5. Styling: be able to import and apply styles to the page
    - CSS-modules

6. Hosting/deployment: have a simple app deployed somewhere and publicly available. 
    - Github Pages

## How to run:
```yarn build``` to build code

```yarn start``` to start environment on http://localhost:9000/


## stylelint
To run
```yarn test:lint:css```

To fix all 
```yarn test:lint:css:fix```

## Deploy to github pages
```yarn run deploy```

[visit site](https://fardenti.github.io/react-app)