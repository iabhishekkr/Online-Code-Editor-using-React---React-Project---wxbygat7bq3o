# Online Code Editor
 This project is clone of codepen online editor
 ### Site : [Online Code Editor](https://638c3e0ecdadd24b454a88ed--phenomenal-haupia-a2121c.netlify.app/)
## Tech Used
 1. HTML
 2. CSS
 3. JavaScript
 4. React
## Dependencies Used
  "@fortawesome/fontawesome-svg-core": "^1.2.31" <br />
  "@fortawesome/free-brands-svg-icons": "^5.15.0" <br />
  "@fortawesome/free-solid-svg-icons": "^5.15.0" <br />
  "@fortawesome/react-fontawesome": "^0.1.11" <br />
  "@testing-library/jest-dom": "^4.2.4" <br />
  "@testing-library/react": "^9.5.0" <br />
  "@testing-library/user-event": "^7.2.1" <br />
  "codemirror": "^5.58.1" <br />
  "react": "^16.13.1" <br />
  "react-codemirror2": "^7.2.1" <br />
  "react-dom": "^16.13.1" <br />
  "react-scripts": "3.4.3" <br />
  
  *(Do not use latest version of react and react-dom as it may conflit with react-codemirror2)
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## About
 1. There are two panes in this code editor- One where the code is run (upper half of the app that contains the three code containers) and the other where the output is displayed (lower half ‘result’ code window)
 2. To render a web page within another web page an iframe element is used
 3. It is recommended to use the codemirror package for this component so that you can have controlled usage for the code editor which will then help in controlling your input/output values and event handlers. So, import the code-editor (Controlled) component from the react-codemirror2 package
 4. A cutom hook "useLocalStorage" is used to keep the data stored in local storage
 5. Site is deployed using Netlify
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
