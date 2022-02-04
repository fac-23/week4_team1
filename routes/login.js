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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Poppins:wght@200&display=swap"
        rel="stylesheet"
      />
    <link rel="stylesheet" type="text/css" href="/styles.css">
    </head>
    <body>
      <section class="column">
      <img src="../images/logo.png" alt="dog and frog logo" id="logo">
        <h1>Dogs and Frogs</h1>
        <h2>Login</h2>
        <form action="/login" method="POST" class="column">
          <label for="email">Email<span aria-hidden="true">*</span></label>
          <input type="email" name="email" required />
          <label for="password">Password<span aria-hidden="true">*</span></label>
          <input id='password' type="password" name="password" aria-describedby= 'passwordRequired' required pattern='.*\\d.*' minlength='8'/>
          <button class="link" id="log-in" type="submit">Log in!</button>
        </form>
        <p>Haven't signed up yet? It only takes 10 seconds!</p>
        <a href="/signup" id="sign-up" class="button link">Sign up</a>
      </section>
    </body>
  </html>
    `;

  response.send(html);
}

function post(request, response) {
  const { email, password } = request.body;
  // const sid = request.signedCookied.sid;
  auth
    .verifyUser(email, password)
    .then(auth.saveUserSession)
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/newsfeed");
    })
    .catch((error) => {
      console.error(error);
      response.send(`
      <h1>User does not exist, please sign-up</h1>
      <a href="/newsfeed" id="return" class="button"> Back to home</a>
      `);
    });
}

module.exports = { get, post };
