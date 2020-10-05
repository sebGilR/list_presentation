# List Presentation

This project shows several lists that are retrieved from https://fetch-hiring.s3.amazonaws.com/hiring.json

## Live Preview

[Visit live preview]

## Screenshot

![screenshot](./screenshot.png)

## Features

- All items are separated into lists by their listId attribute.
- Each list is sorted by their item's names.
- Items with null or empty names have been removed.
- Presentation is flexible and adjusts to medium to large screen sizes (not completely responsive).
- The app will show as many lists as found in the results received, based on the maximum listId.

## Setup

1. Clone this repository and access the project's directory.
2. Update the endpoint BASE url in src/services/endpoint.js with localhost:4000.
3. Run "npm install".
4. Run "npm start" to work on the development server.

## Built With

- JavaScript/ES6
- React
- React Hooks
- AWS Amplify