var playlist = {};
playlist['John Lennon'] = "Imagine";

function updatePlaylist(thePlaylist, theArtist, theSong) {
  thePlaylist.theArtist = theSong; // returns the added value
  return thePlalist;
}

function removeFromPlaylist(thePlaylist, theArtist) {
  delete thePlaylist.theArtist; // 
}