if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/04/sw.js')
      .then(reg => console.log('service worker registered'))
      .catch(err => console.log('service worker not registered', err));
  }