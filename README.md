# Next.js Modal Demo

This repo shows how to make a modal in Next.js using parallel and intercepting routes. It implements a pattern described [here](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals) in the Next.js docs.

The app consists of a homepage and a login page. If you navigate directly (e.g. via shared link) to `/login` you will see the full login page. If you navigate to the login page using the nav bar on the home page, you will see the login form displayed in a modal component.

This app does _not_ keep track of modal state because it relies on route interception rather than typical client-side interactivity. To implement a modal in a more "traditional" way, you could use parallel routes alone, or even just a simple React component.
