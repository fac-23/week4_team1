const db = require("../database/connection");
const model = require("../database/model");

async function get(request, response) {
  //db query to get all posts
  const allposts = await model.getAllposts().then((result) => {
    return result;
  });

  const allListElems = allposts
    .map((post) => {
      //add hidden input in delete post form
      return `<li class="post"><div class="space-between"><h3>${
        post["animal_name"]
      }</h3><p id="animal-type">${post.type}</p></div>${
        post.image
          ? `<div class="column"><img id="img-post" src="/posts/${post.id}/image" alt="A ${post.type} called ${post["animal_name"]}"></div>`
          : ""
      } <p>${post.description}</p></li>`;
    })
    .reverse()
    .join("");

  //model.getAllposts()
  //map over all items and insert into ul as li

  // const allposts = "allposts";
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dog or Frog</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
    <script src="https://kit.fontawesome.com/288a4a188a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="/styles.css" />
  </head>
  <body>
  <section>
    <form action="/signout" method="POST" id="log-out">
      <button class="link" type="submit" id="log-out" >Log Out</button>
      <a class="link" href="/profile" id="profile">Profile</a>
    </form>
    </section>
    <section class="column">
    <img src="../images/logo.png" alt="dog and frog logo" id="logo">
      <h1>Dogs and Frogs</h1>
   
      <h2>Newsfeed</h2>
      <form action="/newsfeed" id="filter_animals" method="POST">
      <label for="frogs">Frogs</label>
      <input type="radio" class='choice' id="frogs" name="type" value='frog' />
      <label for="dogs">Dogs</label>
      <input type="radio" class='choice' id="dogs" name='type' value='dog' checked/>
      <label for="all_animals">All animals</label>
      <input type="radio" class='choice' id="all_animals" name='type' value='all_animals' checked/>
      </form>
      <p>Share your posts with us!</p>  
     

      <form enctype="multipart/form-data" action="/addposts" method="POST" id="addPosts" class="column">

      <label for="type">Dog or Frog?</label>
      <select name="type" id="type">
        <optgroup label="animal">
          <option value="dog">dog</option>
          <option value="frog">frog</option>
        </optgroup>
      </select>


<label for="animal_name">Animal name</label>
<input type="text" name="animal_name" id="description" required />

<label for="description">Description</label>
<input type="text" name="description" id="description" required />

<label for="image">Add image</label>
<input id="image" type="file" name="image" />


      <button class="link add-post">Add post!<span class="fas fa-plus"></span></button>
    </form>
      <section id="post">
      <ul class="column" id="post-ul">${allListElems}</ul>
    </section>
    <script src="filter.js"></script>
  </body>
  
</html>
  
  `;

  response.send(html);
}

module.exports = { get };
