setTimeout(() => {
  self.registration.showNotification('Hello, world!');
}, 15000);

// const customRoute = new workbox.routing.NavigationRoute(({event}) => {
// });
// workbox.routing.registerRoute(customRoute);
