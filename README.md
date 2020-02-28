# ProjectMe
## Built using a Node and Express server, Mongoose, and MongoDB along with minimal frontend JavaScript and jQuery.
### ProjectMe is a CRUD Web-App that implements features for the following user stories
* AAU, I want to create an account
* AAU, I want to be able to login
* AAU, I want to be able to create a post based on my current skills and specifify the technologies I want to learn or want to improve.
* AAU, I want to be able to comment and like other Project posts
* AAU, I want to be able to edit and delete my posts
* AAU, I want to be able to edit and delete my comments

---
### For this project, I have outlined the Data Structure I will follow
<br>
Database will follow the following structure

![Database ERD Structure](https://i.imgur.com/7mq8JpX.png)

## Fireframe for landing, login and signup pages

### Landing Page
![Landing Page](https://i.imgur.com/1kTdLzW.png)
### After Login
![Landing Page](https://i.imgur.com/tz1uezl.png)
### Posting Index Page
![Landing Page](https://i.imgur.com/llXDXsr.png)
### Posts Page
![Landing Page](https://i.imgur.com/fNQR7Zk.png)

## Trello: https://trello.com/b/ZpDc0BVY/projectme
### To-Do - Updating as features and/or user stories are added.
*   [x] Create wireframe for landing page
*   [x] Create wireframe for login page
*   [x] Create wireframe for signup page
*   [x] Code and style landing page
    *   [x] Ensure proper post section scaling with size of post
        *   [x] Use CSS grid to ensure no movement of sibling elements
    *   [x] Ensure proper placement of elements on page
        *   [x] Use CSS grid to ensure consistent placement upon varying width
*   [x] Code and style login page
    *   Ensure proper placement of input and label
*   [x] Code and style signup page
    *   Ensure proper placement of input and label
*   Create wirefram for user profile page
*   Creat wireframe for post page
*   Create wireframe for categories page for use in Version 2
*   Configure Node and Express along with OAuth, Express sessions and dotenv
    *   configure Db 
    *   implement user Schmea with Mongoose
        *   Test and secure
*   Configure Authentication tokens and sessions for user login and logout
    *   Ensure posts can only be made from the user when logged in
    *   Ensure anonymous users while not logged in cannot post or comment
    *   Implement User Stories after and only after authentication, signup and login are complete.
*   Test and secure Node and Express
*   Setup on Heroku

