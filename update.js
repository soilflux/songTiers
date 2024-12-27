function update() {
  $('aTier').innerHTML = 'A<br>';
  $('abTier').innerHTML = 'AB<br>';
  $('bTier').innerHTML = 'B<br>';
  $('bcTier').innerHTML = 'BC<br>';
  $('cTier').innerHTML = 'C<br>';
  rollableSongs = [];
  for (var i = 0; i<selectedArtists.length; i++) {
    for (const [key, value] of Object.entries(songs[selectedArtists[i]])) {
      if (value.startsWith('AB')) {
        if (value.slice(3) != '') {$('abTier').innerHTML += '<a href = "' + value.slice(3) + '">' + key + '</a><br>';}
        else {$('abTier').innerHTML += '<a>' + key + '</a><br>';}
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
      }
      else if (value.startsWith('BC')) {
        if (value.slice(3) != '') {$('bcTier').innerHTML += '<a href = "' + value.slice(3) + '">' + key + '</a><br>';}
        else {$('bcTier').innerHTML += '<a>' + key + '</a><br>';}
        rollableSongs.push(selectedArtists[i] + '/' + key);
      }
      else if (value.startsWith('A')) {
        if (value.slice(2) != '') {$('aTier').innerHTML += '<a href = "' + value.slice(2) + '">' + key + '</a><br>';}
        else {$('aTier').innerHTML += '<a>' + key + '</a><br>';}
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
      }
      else if (value.startsWith('B')) {
        if (value.slice(2) != '') {$('bTier').innerHTML += '<a href = "' + value.slice(2) + '">' + key + '</a><br>';}
        else {$('bTier').innerHTML += '<a>' + key + '</a><br>';}
        rollableSongs.push(selectedArtists[i] + '/' + key);
        rollableSongs.push(selectedArtists[i] + '/' + key);
      } 
      else if (value.startsWith('C')) {
        if (value.slice(2) != '') {$('cTier').innerHTML += '<a href = "' + value.slice(2) + '">' + key + '</a><br>';}
        else {$('cTier').innerHTML += '<a>' + key + '</a><br>';}
      }
    }
  }
  if (window.location.protocol == 'file:' && havePlayedASong == false) {
    rollAudio();
    havePlayedASong = true;
  }
}

function rollAudio() {
  var rolledSong = rollableSongs[Math.floor(Math.random()*rollableSongs.length)]
  var audio = document.createElement('audio');
  audio.src = 'audio/'+rolledSong+'.m4a';
  audio.addEventListener("ended", rollAudio);
  audio.play();
  console.log(audio)
}