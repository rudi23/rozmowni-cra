# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Responsive images

Full width
```jsx
<img src="//placehold.it/960x500" 
     className="img-fluid"
     srcSet="//placehold.it/1140x500 1140w, //placehold.it/960x500 960w, //placehold.it/540x500 540w"
     sizes="(min-width: 1200px) 1140px, (min-width: 992px) 960px, (min-width: 768px) 720px, 540px" 
/>
```
Bootstrap sizes: `xl`, `lg`, `md`, `sm/xs`

_ | xl (>=1200px) | lg (>=992px) | md (>=768px) | sm/xs (<768px)
--- | :---: | :---: | :---: | :---:
col-12 | 1110 | 930 | 690 | 510
col-11 | 1005 | 850 | 630 | 465
col-10 | 920  | 770 | 570 | 420
col-9  | 825  | 690 | 510 | 375
col-8  | 730  | 610 | 450 | 330
col-7  | 635  | 530 | 390 | 285
col-6  | 540  | 450 | 330 | 240
col-5  | 445  | 370 | 270 | 195
col-4  | 350  | 290 | 210 | 150
col-3  | 255  | 210 | 150 | 105
col-2  | 160  | 130 | 90  | 60
col-1  | 65   | 50  | 30  | 15

Values include 60px padding and margin of container and
30px padding and margin of row
