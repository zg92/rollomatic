# Roll-o-Matic: A film photographer's mobile companion

## Introduction

Roll-o-Matic is a mobile-first open source web app tool for film photographers. Most film photographers note the settings they used for a roll of film through keeping notes on paper or on their phones. These notes can be easily lost or corrupted, creating the risk of losing vital information. Roll-o-Matic solves for this potential headache by enabling photographers to track their shot settings on a roll of film as they shoot, save rolls, and access past rolls.

## How to set up

Roll-o-Matic is powered by React and Sass and utilizes Firebase for data storage and user authorization. Aside from the source code and packages used to build Roll-o-Matic, the only additional step to run it is to set up (Firebase credentials)[https://firebase.google.com/]. Once credentials have been created, create a new `.js` file in the `src\utilities\` file called `admin-firebase.js` and create an exportable variable with your Firebase information:

```javascript
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
```

Once you have set up the Firebase credential file, use `npm start` to start your local server and use the application.

## Features

Roll-o-Matic currently offers the following functionality:

### Shot Data Management:

1. Create new film rolls of flexible or set length
2. Record film-stock and ISO data
3. Record shot level shutterspeed and aperture
4. Protect data against accidental manipulation through data-locking functionality
5. Add or remove new shots on the film roll
6. Save roll data with unique name
7. Open historical saved roll data
8. Modify and update existing rolls
9. Delete past rolls' data

### Account Management:

1. Account creation
2. Login capabilities
3. Logout capabilities
