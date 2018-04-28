var playlist = {};
playlist['John Lennon'] = "Imagine";

function updatePlaylist(thePlaylist, theArtist, theSong) {
  thePlaylisttheArtist = theSong; // returns the added value
  return thePlaylist;
}

function removeFromPlaylist(thePlaylist, theArtist) {
  delete thePlaylist.theArtist; // returns true if successful
  return thePlaylist;
}