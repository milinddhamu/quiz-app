![Banner](https://user-images.githubusercontent.com/68379239/270399546-6d0bbf22-435c-4be4-be86-777e0c28e64f.png)

###Live Link(https://quiz-app-delta-six.vercel.app/)

This documentation provides an overview of the Quiz web app project developed using Next.js, React, and styled-components. The app allows users to take a quiz, answer questions, view their score, and restart the quiz. The app uses the quiz questions and related data from the "https://quizapi.io/" API using a provided API key.

## Table of Contents

1. [Introduction](#introduction)
2. [Screens](#screens)
    - [Home](#home)
    - [Question](#question)
    - [Report](#report)
    - [Scoring](#scoring)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
5. [Code Structure](#code-structure)
6. [API Integration](#api-integration)
7. [Additional Features](#additional-features)
8. [Conclusion](#conclusion)

## Introduction

The Quiz web app is designed to allow users to participate in a quiz, answer questions, and receive a score at the end. It follows the guidelines provided in the assignment to create a Single Page Application (SPA) using Next.js, React, and styled-components. The app fetches quiz questions from the "https://quizapi.io/" API using a unique API key and guides the user through the quiz-taking process.

## Screens

### Home

- Users click on the "Start" button to initiate the quiz.
- An API request is sent to start a new quiz and fetch questions.
- Users are then directed to the Question screen.

### Question

- This screen displays questions to the user one after the other.
- Questions may include optional images to accompany the text.
- Users must select at least one option before proceeding to the next question.
- Selected choices are submitted to the API, along with the time taken for the question.
- After the user submits the response for the last question, an API request is made to finish the test and retrieve the score report.
- Users are then directed to the Report screen.

### Report

- The Report screen displays the total score, number of correct and incorrect answers.
- A Timer for time calculation of each question.
- Users have the option to start the quiz again from the beginning using the "Start Again" button.

### Scoring

- The scoring logic is implemented to calculate the user's score based on the selected choices and other criteria.

## Technologies Used

- Next.js: A React framework for building server-rendered React applications.
- React: A JavaScript library for building user interfaces.
- styled-components: A CSS-in-JS library for styling React components.

## Getting Started

### Installation

1. Clone the GitHub repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd quiz-app
   ```

3. Install project dependencies:
   ```
   npm install
   ```

### Running the App

1. Start the development server:
   ```
   npm run dev
   ```

2. Open your web browser and go to `http://localhost:3000` to access the Quiz app.

## Code Structure

The project structure is organized as follows:

- `pages`: Contains the Next.js page components for different screens.
- `components`: Contains reusable React components.
- `styles`: Contains styled-components for styling components.
- `utils`: Contains utility functions and API integration logic.

## API Integration

The app integrates with the "https://quizapi.io/" API using the provided API key. API requests are made to start a quiz, retrieve questions, submit user responses, and finish the quiz. The API integration logic is implemented in the `index` file in the pages router. (environment variables were having some issue so api key is used as plain text)

## Conclusion

The Quiz web app provides an interactive platform for users to take quizzes, view their scores, and restart the quiz. It follows the provided design guidelines and integrates with the "https://quizapi.io/" API to fetch questions and manage user responses. The project demonstrates the use of Next.js, React, and styled-components to create a single-page application that delivers a seamless quiz-taking experience.
