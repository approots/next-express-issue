`getInitialProps` is called multiple times. To reproduce:

1.  run `npm run dev` and check the terminal console for multiple outputs of the console.log statement in the `getInitialProps` function of `pages/index.js` ("getInitialProps index").
2.  Or click the link to `post #2`, refresh the page, then load the index page again (localhost:3000/), and check the terminal and see multiple console.logs of "getInitialProps index". This also happens in production.
