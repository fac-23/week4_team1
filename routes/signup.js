const auth = require("../auth");

function get(request, response) {
  const html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dog or Frog</title>
    <link rel="stylesheet" type="text/css" href="/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@200&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <section class="column">
    <img src="../images/logo.png" alt="dog and frog logo" id="logo">
    <h1>Dogs and Frogs</h1>
    <h2>Sign up</h2>
    <form action="/signup" method="POST" class="column">
      <label for="username">Username<span aria-hidden="true">*</span></label>
      <input type="text" name="username" required />
      <label for="email">Email<span aria-hidden="true">*</span></label>
      <input type="email" name="email" required />
      <label for="password">Password<span aria-hidden="true">*</span></label>
      <input id='password' type="password" name="password" aria-describedby='passwordRequired' pattern='.*\\d.*' required minlength='8'/>
      <button id="sign-up" class="link" type="submit">Sign up!</button>
    </form>
    <p>Signed up already? Log in below with your details...</p>
    <a href="/login" id="log-in" class="link"> Log in</a>
    </section>
  </body>
</html>
  `;

  response.send(html);
}

function post(request, response) {
  const { username, email, password } = request.body;
  //create user calls createUserDB in the model.js file which adds the user to the DB
  auth
    .createUser(username, email, password)
    .then(auth.saveUserSession)
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/newsfeed");
    })
    .catch((error) => {
      console.error(error);
      response.send(`
      <h1> Oh no! Something went wrong!</h1>
      <a href="/" id="return" class="button"> Back to home</a>
      `);
    });
}

module.exports = { get, post };
