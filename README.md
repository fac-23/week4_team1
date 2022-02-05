# week4_team1
Oli, Adam, Miah and Juliette

A place for to post about dogs and frogs!

[*Deployed version here!*]()✨

## How to install
Git clone https://github.com/fac-23/week4_team1
Run command `npm install` in terminal

## Local Database Setup
* run `./scripts/create_db <name of your local database>`
* run `./scripts/populate_db`
* run `psql`
* run `\connect <name of your local database>`
* run `\dt` to check the tables are there. There should be only one table named "reviews"
* To start sever run command `npm run dev`
* For cypress testing run command `npm run test`

Access locally on[localhost:3000](http://localhost:3000/)

## Core User stories
- [x] When I'm logged in, I want to see a newsfeed of dogs and frogs.
- [x] I want an app that uploads an image to a site.
- [x] As a user, I want my information to be secure and safe.
- [x] I want to be able to see my own profile and upload images
- [x] I want to be able to delete my own posts
- [x] I want to be able to log in
- [x] I want to be able filter for dogs and frogs
- [ ] I want to be able to comment on other people's profiles 
- [ ] I want to be able to log in via Github (stretch)

## Acceptance Criteria
- [x] Forms for users to sign up and log in
- [x] A form for users to submit data only accessible to logged in users
- [x] A page showing all the data
- [x] A way for logged in users to delete their own data
- [x] Semantic form elements with correctly associated labels
- [x] A Postgres database hosted on Heroku
- [x] Hidden environment variables (i.e. not on GitHub)
- [x] Express server
- [x] Well-organised modular codebase
- [x] Postgres database
- [ ] Hosted on Heroku
- [x] One of the spike topics
- [ ] Validate user-submitted data on the server (some more to be done..)
- [x] Handle errors and inform the user
- [x] Styled appropriately

## Stretch Criteria
- [ ] I want to be able to comment on other people's profiles 
- [ ] GitHub Actions CI setup to run your tests when you push
- [ ] I want to be able to log in via Github

## Roles:
- DevOps: 
- QA:
- UX Design: Miah
- Scrum Facilitator: Juliette

## Database:
- Databased named: petdb

## Routes:
- Homepage - with log in and sign up buttons
- Log in - for existing users, redirects to newsfeed
- Sign up - for new users, redirects to newsfeed
- Newsfeed - collection of upoaded images
- Profile - individual user's profile and form to upload images
- Sign out - takes you back to homepage
- Delete post - for users to delete their posts
- 404 - error page

## File architecture:
Cypress
- testing files

Public folder 
-  CSS
-  Images 

Scripts
- create_DB
- populate_DB

Database
- Init sql file
- model.js
- connection.js

Root folder
- auth.js
- server.js
- .env
- .gitignore
- Procfile

Routes folder
- files listed above

## Posts will include: 
 - name of user 
 - image
 - description
 - kind (frog/dog)





