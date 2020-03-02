# ProjectMe
## Built using a Node and Express server, Mongoose, and MongoDB along with minimal frontend JavaScript and jQuery.
### ProjectMe is a CRUD Web-App that implements features for the following user stories
* [x] AAU, I want to create an account using Google OAuth
* [x] AAU, I want to be able to login
* [x] AAU, I want to be able to create a post based on my current skills and specifify the technologies I want to learn or want to improve.
*  AAU, I want to be able to comment and like other Project posts
* [x] AAU, I want to be able to edit and delete my posts
* [x] AAU, I want to be able to edit and delete my comments

---
### For this project, I have outlined the Data Structure I will follow
<br>
Database will follow the following structure

![Database ERD Structure](https://i.imgur.com/7mq8JpX.png)

## Wireframe for landing, login and signup pages

### Landing Page
![Landing Page](https://i.imgur.com/1kTdLzW.png)
### After Login
![Landing Page](https://i.imgur.com/tz1uezl.png)
### Posting Index Page
![Landing Page](https://i.imgur.com/llXDXsr.png)
### Posts Page
![Landing Page](https://i.imgur.com/fNQR7Zk.png)


--- 
# Updated Images
### Writing a post
![Sometext](https://i.imgur.com/rOzJnvp.png)
### Updating a misspelling
![Sometext](https://i.imgur.com/siOG9jT.png)
### Writing a comment
![Sometext](https://i.imgur.com/TG2KcJc.png)
### Editing a comment
![Sometext](https://i.imgur.com/SJ47ZWL.png)
### Categories
![Sometext](https://i.imgur.com/C5C5Pgp.png)
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
*   [x] Code and style login page - REMOVED- USING OAUTH
  
*   [x] Code and style signup page - REMOVED- USING OAUTH
    
*   [x] Create wireframe for user profile page
*   [x] Creat wireframe for post page
*   [x] Create wireframe for categories page for use in Version 2
*   [x] Configure Node and Express along with OAuth, Express sessions and dotenv
    *   [x] configure Db 
    *   [x] implement user Schmea with Mongoose
        *   [x] Test and secure
*   [x] Configure Authentication tokens and sessions for user login and logout  - REMOVED- USING OAUTH
    *   [x] Ensure posts can only be made from the user when logged in
    *   [x] Ensure anonymous users while not logged in cannot post or comment
    *   [x] Implement User Stories after and only after authentication, signup and login are complete.
*   [x] Test and secure Node and Express
*   [ ] Create like functionality!
*   [ ] Setup on Heroku

