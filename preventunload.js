var location=window.location.href;
window.addEventListener('beforeunload', function() {
  location.assign(location); 
});
