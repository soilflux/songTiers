function update() {
  $('aTier').innerHTML = 'A<br>';
  $('abTier').innerHTML = 'AB<br>';
  $('bTier').innerHTML = 'B<br>';
  $('bcTier').innerHTML = 'BC<br>';
  $('cTier').innerHTML = 'C<br>';
  for (var i = 0; i<selectedArtists.length; i++) {
    for (const [key, value] of Object.entries(songs[selectedArtists[i]])) {
      if (value == 'A') {
        $('aTier').innerHTML += '<small>' + key + '</small><br>'
      }
      if (value == 'AB') {
        $('abTier').innerHTML += '<small>' + key + '</small><br>'
      }
      if (value == 'B') {
        $('bTier').innerHTML += '<small>' + key + '</small><br>'
      }
      if (value == 'BC') {
        $('bcTier').innerHTML += '<small>' + key + '</small><br>'
      }
      if (value == 'C') {
        $('cTier').innerHTML += '<small>' + key + '</small><br>'
      }
    }
  }
}