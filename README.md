# Personalized Learning Navigator

This project is a personalized learning navigator built using React with Vite as the bundler and Tailwind CSS for styling. It guides users through a series of steps and displays personalized learning path for users.

# Features

***Multi-Steps***: Guides users through a sequence of steps.

***Conditional Rendering*** : Displays different components based on json data.

***Progress Tracking*** : Shows a line indicating progress and allows users to navigate back.

***Loader Animation*** : Displays a loader after step 5 before fetching final data.

***Responsive Design*** : Utilizes Tailwind CSS for responsive and mobile-first design.

# Components

  1. Options Component: Renders multiple options with a continue button.
  2. ImgBanner Component: Displays an image with description and a continue button.
  3. Comfort Component: Similar to Options, displays comfort-related questions.
  4. Loader Component: Displays a loader animation after step 5 before fetching final data.
  5. LearningPaths Component: Displays personalized learning path for users.

# Structure

The project structure includes the following key files and directories:

- src/
    - Components/: Contains all React components.
    - data.json: JSON file containing data used in different steps.
    - App.jsx: Main application component where logic is implemented.
    - main.jsx: Entry point of the application.

# Dependencies

  - React : JavaScript library for building user interfaces.
  - Vite : Frontend build tool that includes fast hot module replacement (HMR).
  - Tailwind CSS : Utility-first CSS framework used for styling.

