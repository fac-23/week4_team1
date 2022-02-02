beforeEach(() => {
  cy.task("resetDb");
});

it("can get homepage", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/",
    },
    []
  ).as("getHome");
});

it("can get signup page", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/signup",
    },
    []
  ).as("getSignUp");
});

it("can get login page", () => {
  cy.intercept(
    {
      method: "GET",
      url: "/login",
    },
    []
  ).as("getLogIn");
});

it("user is redirected to newsfeed page immediately after sign up with new cookie", () => {
  const username = Math.random().toString(36).slice(6);
  const email = Math.random().toString(36).slice(6);
  const password = Math.random().toString(36).slice(6);
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User${username}`);
  cy.get("form").find("input[name='email']").type(`${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`User${password}`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/newsfeed");
  cy.getCookie("sid").should("have.property", "httpOnly", true);
});

it("user can log in after they have made account", () => {
  const username = Math.random().toString(36).slice(6);
  const email = Math.random().toString(36).slice(6);
  const password = Math.random().toString(36).slice(6);
  cy.visit("/");
  cy.get("#sign-up").click();
  cy.url().should("include", "/signup");
  cy.get("form").find("input[name='username']").type(`User${username}`);
  cy.get("form").find("input[name='email']").type(`${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`User${password}`);
  cy.get("form").find("button[type='submit']").click();
  cy.url().should("include", "/newsfeed");

  cy.getCookie("sid").should("have.property", "httpOnly", true);

  //remove cookie and then try to log in
  cy.clearCookies();

  cy.visit("/");
  cy.get("#log-in").click();
  cy.url().should("include", "/login");

  cy.get("form").find("input[name='email']").type(`${email}@gmail.com`);
  cy.get("form").find("input[name='password']").type(`User${password}`);
  cy.get("form").find("button[type='submit']").click();

  cy.url().should("include", "/newsfeed");
  cy.getCookie("sid").should("have.property", "httpOnly", true);
});
