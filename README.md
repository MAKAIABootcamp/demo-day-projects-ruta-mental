# Ruta Mental

## Description

This is a web application that's designed using ReactJs (JavaScript library) and Redux, the latter is a library for dealing with global states. Some features of the application are:

- Login using Email and password authentication (using Firebase)
- Login using Google and Facebook authentication (using Firebase)
- A form in which the user selects age, their psychological problematic situation, drug use and suicidal ideation.
- A filter of information such as phone lines and places to go to, according to the user's location. It was implemented with redux store and Google API.
- Filter of information according to the situation the user picks in the initial form.

## Firebase implementation
- Authentication providers (Email and Password, Google and Facebook).
- Firestore cloud database. Used for storing phone lines and places to go to of every city.

## Pre-requisites
- Node js v16.14.2 or later installed. [Download](https://nodejs.org/es/download/)
- Firebase tools installed globally in your computer. Use the command `npm install -g firebase-tools`
- Clone this repository and execute from a terminal the command `npm install` in the root folder `/demo-day-projects-ruta-mental` to install all the dependencies.

## Run in local environment
Once reached the pre-requisites, you should go to the root folder of the project `/demo-day-projects-ruta-mental` from a terminal and execute the command `npm start`.

## Deploy
1. Make sure you have installed the firebase-tools (Second dot of the Pre-requisites)
2. Execute the command `firebase login` (This will open up the browser to authenticate to firebase using your account, set your username and password if needed)
3. Execute the command `firebase init`
4. With the keyboard (space bar) select the hosting (hosting without set up github actions)
5. Select the project you have configured in firebase and that refer to this project and press space bar and enter
6. Write build so the process create and configure that folder (this will be removed later)
7. Once generated the firebase configuration files, remove the build folder and execute the command `npm run build`
8. Execute the command `firebase deploy` and wait until the process return the deployed url

## Deployment URL
- https://ruta-mental.web.app/
