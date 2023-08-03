# Automaited - Code Snippet Manager

Automaited home assignment project - A code snippet manager applicatin built with Electron and React. It allows you to store and organize your code snippets for easy access and retrieval. The project aims to simplify the process of managing code snippets and enhance developer productivity.

[Home screen](./src/assets/images/markdown/home.png)

# First Run

- Please use node@14.18.3 to install and start the application.
- Install the package dependencies

```
npm install
```

- Update the caniuse-lite database with browsers

```
npx browserslist@latest --update-db
```

- Run the application

```
npm start
```

if you have any problems while running the application then you should make sure that if you are using node@14.18.3.

# Architecture and Design Decisions

The application is built using Electron as the platform for creating cross-platform desktop applications. The front-end is developed with React to provide a responsive and dynamic user interface. We use Redux for state management, allowing us to efficiently manage and share the application's state.

The code snippet data is stored using the electron-store package, which provides a simple API to save and retrieve data persistently on the user's machine.

The project follows the best practices of the React and Electron ecosystems, ensuring code modularity, maintainability, and performance.

# Features

- Store and manage code snippets in a user-friendly interface.
- Search and filter snippets from both titles and descripotions to quickly find what you need.
- Syntax highlighting for various programming languages to improve readability.
- Cross-platform compatibility (supports macOS, Windows, and Linux) for broader Usage.

## Additional features

### Updated time

Saving Updated Time is One of the planned enhancements for the code snippet manager is to automatically track and display the last updated time for each code snippet. This feature will be a valuable addition, providing users with better visibility into when a snippet was last modified.

[Updated Time](./src/assets/images/markdown/time.png)

#### How it Works

When you edit and save a code snippet, the application will automatically capture the current date and time and associate it with the snippet. The updated time will then be displayed alongside the snippet's title or within the snippet's details view.

## Tags for Code Snippets

I added the Tags feature for organizing and categorizing your code snippets will become effortless and intuitive, empowering you to manage your code collection with greater efficiency.

[Tags](./src/assets/images/markdown/tags.png)

## Showing Gutter

I added the showing gutter feature enhances the code snippet viewing experience in the code snippet manager. The "Gutter" is the vertical column on the left side of the code editor, typically displaying line numbers and other indicators.

[Gutter](./src/assets/images/markdown/tags.png)

# Future Features

As you know my application is not ready for releasing as a perfect product so I would like to write some features should be implemented here to be perfect product

## Feature 1: Adding more languages

In a future update, I am enthusiastic about expanding the code snippet manager's language detection capabilities to include a broader range of programming languages. This enhancement will enable the application to accurately identify and support an extensive variety of programming languages, empowering users with greater flexibility and ease of use.

## Feature 2: Update description TextArea

Currently we can only input texts in the description TextArea.
In a future update, I'd like update that TextArea's functionalities such as adding images, importing tables etc

## Feature 3: Adding Trash store

Adding trash store will offer users a safe and efficient way to manage deleted snippets, ensuring that accidental deletions do not lead to permanent data loss.

# Technologies Used

- Electron: v17.0.0
- React: v17.0.2
- Redux: v4.1.2
- Electron-store: v8.0.1
- @blueprintjs/core: v3.52.0 (used for UI components)
- React-ace: v9.5.0 (for code snippet editor with syntax highlighting)
- uuid: v8.3.2 (for generating unique identifiers for snippets)
