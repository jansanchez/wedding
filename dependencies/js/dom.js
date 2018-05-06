
var mainEnvelope = document.getElementById('mainEnvelope');
var divEnvelope = document.getElementById('envelope');
var divInvitation = document.getElementById('invitation');

setTimeout( function() {
  divEnvelope.style.opacity = 0;
}, 4500);

setTimeout( function() {
  divEnvelope.style.display = 'none';
  mainEnvelope.style.display = 'none';
}, 6500);

setTimeout( function() {
  divInvitation.style.opacity = 1;
}, 6600);

