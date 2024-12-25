var $ = function( id ) { return document.getElementById( id ); };

function toggleArtist() {
  if ($(event.target.id).style.opacity == '1') {
    $(event.target.id).style.opacity = '0.5';
    selectedArtists.splice(selectedArtists.indexOf(event.target.id),1);
  }
  else {
    $(event.target.id).style.opacity = '1';
    selectedArtists.push(event.target.id);
  }
  update();
}