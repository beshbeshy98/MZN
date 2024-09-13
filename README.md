# MZN Blog

A simple blogging platform built with Express.js, EJS, and vanilla HTML/CSS. This application allows users to create, edit, and delete blog posts. Note that posts are stored in memory and are not persistent across server restarts.

## Features

- **Create** new blog posts
- **Edit** existing blog posts
- **Delete** blog posts
- **Display** a list of blog posts

## Installation

1. **Clone the repository** (replace `<your-repo-url>` with the actual URL):

    ```bash
    git clone <your-repo-url>
    ```

2. **Navigate to the project directory**:

    ```bash
    cd <project-directory>
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Usage

1. **Start the server**:

    ```bash
    npm start
    ```

    The server will start on port 3000. You can access the application at [http://localhost:3000](http://localhost:3000).

2. **Access the application**:

    Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You'll see the homepage where you can view, create, edit, and delete posts.

## Endpoints

- **GET /**: Render the homepage with a list of posts.
- **POST /create**: Create a new post.
- **PUT /edit/:id**: Update an existing post.
- **DELETE /edit/:id**: Delete a post.

## File Structure

- `app.js`: Main server file.
- `views/index.ejs`: EJS template for displaying and interacting with posts.
- `public/styles/style.css`: CSS file for styling the application.

## Dependencies

- **express**: Web framework for Node.js.
- **body-parser**: Middleware for parsing request bodies.
- **method-override**: Middleware for using HTTP verbs such as PUT and DELETE in places where the client doesn't support it.
