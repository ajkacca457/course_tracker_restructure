# Course-Tracker-Fullstack

This app was a part of microverse final capstone project. This app has been fixed and updated with MERN stack.The course tracker app provides a way to track details about courses a student is pursuing. New users must create an account in order to log in. Once authenticated, users can create new courses, can update their course progress, can see detail report of the courses he or she created. The api uses jwt authentication token to make user authentication. The app provides accumulated report of all the added courses so that students can measure their study progression. This app has an elegant, simple and user-friendly UI. It can be useful for the students who wants to track progression of different courses they are pursuing or pursued.

## Project Display

![screenshot](./images/image1.jpg)
\
\
![screenshot](./images/image2.jpg)
\
\
![screenshot](./images/image3.jpg)
\
\
![screenshot](./images/image4.jpg)
\
\
![screenshot](./images/image5.jpg)
\
\
![screenshot](./images/image6.jpg)

## Live Demo

[Course_Tracker]()

## Built With

- VsCode
- React
- redux toolkit
- express
- MongoDB
- NodeJs
- Bootstrap

# Getting Started

To get a local copy of the repository please run the following commands on your terminal:

```bash

$ git clone `https://github.com/ajkacca457/course_tracker_restructure.git`
$ cd course_tracker_restructure
$ Run `npm install` to install the necessary modules for server and api.
$ create config.env file in env folder
$ Add the following variables in config.env file:
    - PORT (preferablly 5000 for backend server)
    - MONGO_URI (own connection string that for mongodb)
    - JWT_SECRET (it could be anything but it is preferable to use encryption key generator to get a good key)
    - JWT_EXPIRE (any range from 1h to 1y)
$ cd client
$ Run `npm install` to install node modules for front end.
$ Run `npm run dev` to start server.
$ Run `npm run start` to start client server.

```

# Limitations

- Right now the app doenst have a live link.

# Testing Project

To run test in your terminal:

```
$ No tests available for the backend codebase.
$ Run `react-scripts test` to run basic tests for front-end

```

# Future development pipeline

To run test in your terminal:

- Adding category and timeline based filtering to courses
- Adding advanced query options
- Pagination
- Adding option for user to generate pdf report/sharable link.
- deploy to live domain

# Authors

👤 **Avijit Karmaker**

- Github: [@Avijit](https://github.com/ajkacca457)
- Linkedin: [@Avijit](https://www.linkedin.com/in/avijit-karmaker-8738a54)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!

## Copyright

This is a project developed by Avijit.
