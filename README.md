# Social Media Dashboard

## Deployed Site
now: [https://react-dashboard-i4blzmpu4.now.sh/](https://react-dashboard-i4blzmpu4.now.sh/)

Heroku: [https://evening-savannah-47143.herokuapp.com/](https://evening-savannah-47143.herokuapp.com/)

I deployed on now and Heroku. Please note Heroku might be asleep, so opening the site for the first time might take some time.

## How to run locally

Make sure you have node installed. You can download it [here](https://nodejs.org/en/download/)


Then you can clone this repo, install dependendencies, and start using the following command:

```bash
$ git clone https://github.com/arvindeva/react-dashboard.git
$ npm install
$ npm start
```

## About this app

This is a tiny project using React to interact with [JSON Placeholder API](https://jsonplaceholder.typicode.com/) where user, as an admin, can do the following:
* View list of users
* View list of posts of each user
* View list of albums of each user
* View the detail of each post and its comment
* View list of photos from an album
* View the detail of photo
* Can add, edit and delete post (Edit not yet completed)
* Can add, edit and delete comment (Edit not yet completed)

## Libraries/Frameworks used

* React for view library
* Create React App for boilerplate
* React Router for routing
* Semantic-UI for CSS framework
* Styled Components for CSS-in-JS
* React Markdown for markdown rendering
* Axios for HTTP requests
* Redux for state management
* React-Redux for Redux's React bindings
* Jest and Enzyme for testing __(NOT IMPLEMENTED YET)__

## Additional Comments and Assumptions
* When doing POST requests (adding a new post or comment), the JSON Placeholder API will always return an object with id '101' and React will warn that there's duplicated key on the list since I'm using post/comment id for the list key.
* I planned to use Jest and Enzyme for testing but I didn't have enough time before the due date.
* I didn't finish loading state feature because I didn't have enough time.
* I first made the app without any state management, and then quickly realized that I needed it because there's too many prop drilling and lifting state up/down and had to rewrite lots of the code and I haven't finished refactored the old code into using redux completely for state management