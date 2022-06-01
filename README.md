#  FINAL PROJECT: SOCIAL NETWORK FULL STACK MERN PROJECT. 'THE JOKE VAULT' (Part 1: Back end)

<div align=center>
    <a href>
    </a>
    <img alt="Javascript Version" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img alt="Node Version" src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">
    <img alt="Express Version" src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">
    <img alt="Mongo Version" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> 
    <img alt="JWT Version" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"> 
    <img alt="Heroku Version" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> 
    
</div>

------------------------------------------------------


# 'The Joke Vault'. Summary of the final project:

# Project requirements:

The task is to create a social network.

In the final project of Bootcamp Full Stack in the frontend part, the student is expected to
to demonstrate all the knowledge acquired throughout the course. To do this, the student will combine the knowledge acquired in JavaScript (React + Hooks). 

The following is a list of all the functionalities that the user will be able to carry out.

* There will be the following functionalities: 
* The option to register and create an account,
* Log in and log out
* Posting content (or links to funny videos or original jokes)
* Commenting on or reacting to content posted by other users
* See what jokes are trending
* Follow and unfollow other users
* View a list of suggested users to follow
Inspect other people's profiles


---------------------------------------------------



## https://github.com/callumgordon90/Proyecto-Final-Backend-GeeksHubsAcademy

***

The application has the following features:
* Users can log in to the application. They can then use the additional functionality of the website to communicate with each other. 
    * Members of the website:
        * View their profile page which welcomes them to the site and summarises their activity.
        * Post messages on the main forum.
        * Like' comments written by other users, and have the ability to view their profiles and activity on the site.



-------------------
# Summary of the backend:

## Introduction.

- This project for GeeksHubsAcademy is a fully functional backend that will be used to store user data from a social network. The endpoints are divided into two categories: 'threads' and 'users'. The api and database were created with mongodb and mongoose in nodejs. <br>

![Database view](/projectpics/MongoDBdatabase.jpg)
^A view of the database


--------

## Features.

- In this project we have created a complete BackEnd for use in our social network website. It contains the following features
  

- a REST API for EndPoints CRUD management, divided into 'users' and 'threads' 'views'.
  
- MongoDB non-relational database to maintain the data



![User and Post](/projectpics/MongoDBtables.jpg)

^The tables of the database - 'users' and 'posts'.



---------------------------------------
## How to use

this project is deployed on heroku at the following link:(https://the-joke-vault.herokuapp.com/)

The aim of this project is to link to the front-end client of The Joke Vault. The api endpoints are contacted from the front end which is deployed here: (https://git.heroku.com/the-joke-vault.git)




-----------------------------------------------




### 'User' Endpoints :

- Endpoint to register as a user:
  
  ```bash
  router.post("/register", authController.signUp);
  ```
  
- Endpoint to login as a user:

  ```bash
  router.post('/login', authController.signIn);
  ```

- Endpoint to logout as a user:
    ```bash
    router.get('/logout', authController.logout);
    ```
-  Endpoint to display all the users of the database:
    ```bash
    router.get("/", userController.getAllUsers);
    ```
- Endpoint to get a user by ID:
  
    ```bash
    router.get("/:id", userController.userInfo);
    ```

- Endpoint to update a user by ID: 

    ```bash
    router.put("/:id", userController.updateUser);
    ```

- Endpoint to delete a user by ID:

    ```bash
    router.delete("/:id", userController.deleteUser);
    ```

- Endpoint to follow a user by ID: 

    ```bash
   router.patch("/follow/:id", userController.follow);
    ```

- Endpoint to unfollow user by ID: 

    ```bash
    router.patch("/unfollow/:id", userController.unfollow);
    ```

- Endpoint to upload a profile picture to an account: 

    ```bash
    router.post("/upload", upload.single("file"), uploadController.uploadProfile);
    ```

--------------------------------

### 'Post' Endpoints :

- Endpoint to get a post :
  
  ```bash
  router.get('/', postController.readPost);
  ```

- Endpoint to create a post : 
  
  ```bash
  router.post('/', upload.single("file"), postController.createPost);
  ```

- Endpoint to update a post : 
  
  ```bash
  router.put('/:id', postController.updatePost);
  ```

- Endpoint to delete a post : 
  
  ```bash
  router.delete('/:id', postController.deletePost);
  ```

- Endpoint to like a post : 
  
  ```bash
  router.patch('/like-post/:id', postController.likePost);
  ```

- Endpoint to unlike a post : 
  
  ```bash
  router.patch('/unlike-post/:id', postController.unlikePost);
  ```

- Endpoint to comment on the post of another user: 
  
  ```bash
  router.patch('/comment-post/:id', postController.commentPost);
  ```

- Endpoint to edit the comment on a post : 
  
  ```bash
  router.patch('/edit-comment-post/:id', postController.editCommentPost);
  ```

- Endpoint to delete the comment on a post : 
  
  ```bash
  router.patch('/delete-comment-post/:id', postController.deleteCommentPost);
  ```

<br>



by Callum Gordon


---------------------
## Repository of the final project: https://github.com/callumgordon90/Proyecto-Final-Backend-GeeksHubsAcademy


