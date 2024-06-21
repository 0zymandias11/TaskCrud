# Task Manager API

This is a simple RESTful API for managing tasks, built with Node.js, Express, and Mongoose. It allows users to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database.

## Features

- Create new tasks
- Retrieve all tasks
- Update existing tasks
- Delete tasks


### Base URL

`http://localhost:3000/api/v1/`

### Endpoints

#### Create and GET  Tasks

- **URL**: `/api/v1/`
- **Method**: `POST/GET`
- **Description**: Retrieves a list of all tasks.
- **Response**:
  ```json
  [
    {
      "name": "Task 1",
      "completed": false,

    },
    ...
  ]


#### UPDATE Tasks
- **URL**: `/api/v1/:id`
- **Method**: `PATCH/DELETE`
- **Description**: Updation and Deletion of tasls.
- **Response**:
  ```json
  [
    {
      "name": "Task 1",
      "completed": false,

    },
    ...
  ]
