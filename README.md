# Social Media Dashboard

This is a tiny project using React where user, as an admin, can do the following:
* View list of users
* View list of posts of each user
* View list of albums of each user
* View the detail of each post and its comment
* View list of photos from an album
* View the detail of photo
* Can add, edit and delete post
* Can add, edit and delete comment

## Libraries/Framkeworks used

* React for view library
* Create React App for boilerplate
* Styled Components for CSS
* Axios for HTTP requests

## Additional Comments and Assumptions
* When doing POST requests (adding a new post or comment), the JSON Placeholder API will always return an object with id '101' and React will warn that there's duplicated key on the list since I'm using post/comment id for the list key.
