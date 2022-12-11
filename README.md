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
- Firebase installed globally in your computer. Use the command `npm install firebase`
- Clone this repository and execute from a terminal the command `npm install` in the root folder `/demo-day-projects-ruta-mental` to install all the dependencies.

## Run in local environment
Once reached the pre-requisites, you should go to the root folder of the project `/demo-day-projects-ruta-mental` from a terminal and execute the command `npm start`.
