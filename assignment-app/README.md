# AssignmentApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Overview

AssignmentApp is an Angular-based application designed for managing assignments. It allows users to view, add, edit, and delete assignments. The application includes user authentication with different roles (admin and user), and provides different functionalities based on the user's role.

## Features

- **Authentication System**: Users can log in with a username and password. The application supports two roles: admin and user.
  - The default admin user is `admin` with the password `admin`.
  - The default user is `user` with the password `user`.
  - The application also supports a guest mode, where users can view the list of assignments without logging in.
- **Role-Based Access Control**:
  - **Admin users** can add, edit, and delete assignments.
  - **Regular users** can view the details of assignments and add new assignments.
  - Non-logged-in users can only view the list of assignments.
- **Assignment Management**:
  - View a list of assignments with details such as name, due date, and status.
  - Add new assignments (admin and user only).
  - Edit existing assignments (admin only).
  - Delete assignments (admin only).
- **Responsive Design**: The application is designed to be responsive and works on various devices and screen sizes, ensuring a seamless user experience across all platforms.

## Bonus Features

- **Dynamic Navigation Links**: Navigation links dynamically adjust based on the user's role, enhancing the application's security and usability by preventing unauthorized access to certain functionalities.
- **User Registration**: New users can register and create their account, enabling them to log in as regular users.
- **Dark Mode for Mobile Sidebar**: A toggleable Dark Mode feature is exclusively available in the mobile sidebar, allowing users to switch between light and dark themes according to their preference.
- **Role-Based UI Customizations**: The UI adapts to the user's role, offering a personalized experience by displaying role-specific functionalities and hiding irrelevant options.
- **Secure Authentication Flow**: Incorporates a secure login/logout flow, ensuring that authentication status properly controls access to features and sensitive information.
- **Sorting**: Users can sort assignments in the list based on name, due date, and status.


## Technical Highlights

- **Angular Material**: Utilizes Angular Material for UI components to ensure an intuitive and modern user interface.
- **Reactive Forms**: Implements Angular Reactive Forms for dynamic form handling, providing robust validation and a seamless user experience.
- **Role-Based Navigation**: Integrates Angular Router for role-based navigation, ensuring users access only the functionalities pertinent to their roles.
- **Authentication Guard**: Implements Angular Route Guards to restrict access to certain routes based on the user's role and authentication status.
- **State Management**: Utilizes Angular Services and Observables for state management, ensuring efficient data flow and separation of concerns.
- **Error Handling**: Implements robust error handling and user feedback mechanisms to provide a seamless user experience even in the presence of errors.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
