const musicLibrary = [
  {
    songName: "Shape Of You",
    genre: "Western",
    artist: "Ed Shereen",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
    songFilePath:
      "./audioFiles/Shape-of-You---Ed-Sheeran(musicdownload.cc).mp3",
  },
  {
    songName: "Not Afraid",
    genre: "Hip Hop",
    artist: "Eminem",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Eminem_-_Not_Afraid.jpg/220px-Eminem_-_Not_Afraid.jpg",
    songFilePath: "./audioFiles/Eminem-Not-Afraid-Official-Video.mp3",
  },
  {
    songName: "Rock The Party",
    genre: "Rock",
    artist: "Bombay Rockers",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Rock_Tha_Party.jpg",
  },
  {
    songName: "Smack That",
    genre: "Hip Hop",
    artist: "Akon",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/6/63/Akon_ft._eminem_smack_that.jpg",
  },
];

let playlists = [];

let lightTheme = true;

var currentGenre = "all";

var currentSongIndex = 0;

var currentPlaylistName = "";

const songsList = document.getElementById("songs-list");

const themeButton = document.querySelector("#theme-toggle");

const image = document.getElementById("song-image");

const songControls = document.getElementById("song-play-controls");

const previous = document.getElementById("previous");

const next = document.getElementById("next");

const addToPlaylistBtn = document.getElementById("add");

const playlistInput = document.getElementById("playlist-name");

const createPlaylistBtn = document.getElementById("create-playlist");

const currentPlaylist = document.getElementById("current-playlist");

const allPlaylists = document.getElementById("all-playlists");

const { songName, artist, songImage, songFilePath } = musicLibrary[0];

image.setAttribute("src", songImage);
const song = document.getElementById("song");
song.innerHTML = songName;
const songArtist = document.getElementById("artist");
songArtist.innerHTML = artist;
const audio = document.createElement("audio");
audio.setAttribute("src", songFilePath);
audio.setAttribute("controls", "true");
previous.setAttribute("disabled", "true");
songControls.append(audio);

themeButton.addEventListener("click", () => {
  lightTheme = !lightTheme;
  if (!lightTheme) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "rgb(163, 222, 212)";
  }
});

createPlaylistBtn.addEventListener("click", createPlaylist);

next.addEventListener("click", displayNextSong);
previous.addEventListener("click", displayPreviousSong);

musicLibrary.forEach((song) => {
  const li = document.createElement("li");
  li.setAttribute("class", "song-name");
  li.innerHTML = song.songName;
  li.setAttribute("onClick", "displaySongDetails(event)");
  songsList.append(li);
});

function displaySongsForSelectedGenre() {
  const select = document.getElementById("genre");

  const selectedGenre = select.options[select.selectedIndex].text.toLowerCase();

  if (selectedGenre === "all") {
    songsList.innerHTML = "";
    musicLibrary.forEach((song) => {
      const li = document.createElement("li");
      li.setAttribute("class", "song-name");
      li.innerHTML = song.songName;
      li.setAttribute("onClick", "displaySongDetails(event)");
      songsList.append(li);
    });
  } else {
    songsList.innerHTML = "";
    const filtered = musicLibrary.filter(
      (s) => s.genre.toLowerCase() === selectedGenre
    );

    filtered.forEach((s) => {
      const li = document.createElement("li");
      li.setAttribute("class", "song-name");
      li.innerHTML = s.songName;
      li.setAttribute("onClick", "displaySongDetails(event)");
      songsList.append(li);
    });
  }
}

function displaySongDetails(obj) {
  image.removeAttribute("src");
  const data = musicLibrary.filter(
    (s) => s.songName.toLowerCase() === obj.target.innerHTML.toLowerCase()
  );
  const songIndex = musicLibrary.indexOf(data[0]);
  currentSongIndex = songIndex;
  if (currentSongIndex === 0) {
    previous.setAttribute("disabled", "true");
    next.removeAttribute("disabled");
  } else if (currentSongIndex === musicLibrary.length - 1) {
    next.setAttribute("disabled", true);
    previous.removeAttribute("disabled");
  } else {
    next.removeAttribute("disabled");
    previous.removeAttribute("disabled");
  }

  const { songName, artist, songImage, songFilePath } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
  songControls.innerHTML = ""; // to remove song control of previous selected song.
  const newAudio = document.createElement("audio");
  newAudio.setAttribute("src", songFilePath);
  newAudio.setAttribute("controls", "true");
  songControls.append(newAudio);
}

function displayNextSong() {
  currentSongIndex += 1;
  previous.removeAttribute("disabled");
  next.removeAttribute("disabled");

  //   if (currentSongIndex === musicLibrary.length) {
  //     next.setAttribute("disabled", "true");
  //     return;
  //   }

  if (currentSongIndex === 0) {
    previous.setAttribute("disabled", "true");
    next.removeAttribute("disabled");
  } else if (currentSongIndex === musicLibrary.length - 1) {
    next.setAttribute("disabled", true);
    previous.removeAttribute("disabled");
  } else {
    next.removeAttribute("disabled");
    previous.removeAttribute("disabled");
  }

  const data = musicLibrary.filter((e, index) => index === currentSongIndex);
  const { songName, artist, songImage, songFilePath } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
  songControls.innerHTML = "";
  const anotherNewAudio = document.createElement("audio");
  anotherNewAudio.setAttribute("src", songFilePath);
  anotherNewAudio.setAttribute("controls", "true");
  songControls.append(anotherNewAudio);
}

function displayPreviousSong() {
  currentSongIndex -= 1;
  next.removeAttribute("disabled");
  previous.removeAttribute("disabled");

  //   if (currentSongIndex < 0) {
  //     previous.setAttribute("disabled", "true");
  //     return;
  //   }

  if (currentSongIndex === 0) {
    previous.setAttribute("disabled", "true");
    next.removeAttribute("disabled");
  } else if (currentSongIndex === musicLibrary.length - 1) {
    next.setAttribute("disabled", true);
    previous.removeAttribute("disabled");
  } else {
    next.removeAttribute("disabled");
    previous.removeAttribute("disabled");
  }

  const data = musicLibrary.filter((e, index) => index === currentSongIndex);
  const { songName, artist, songImage, songFilePath } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
  songControls.innerHTML = "";
  const newAudio = document.createElement("audio");
  newAudio.setAttribute("src", songFilePath);
  newAudio.setAttribute("controls", "true");
  songControls.append(newAudio);
}

function createPlaylist() {
  const playlistName = playlistInput.value;
  if (!playlistName) {
    alert("Playlist Name Cannot Be Empty...!");
    return;
  }
  //   const li = document.createElement("li");
  //   li.setAttribute("class", "playlist-name");
  //   li.setAttribute("onClick", "addSongToSelectedPlaylist()");
  //   li.innerHTML = playlistName;
  //   allPlaylists.append(li);
  //   playlistInput.value = "";
  const newPlaylist = {
    name: playlistName,
    songs: [],
  };
  playlists.push(newPlaylist);
  const li = document.createElement("li");
  li.setAttribute("class", "playlist-name");
  //   li.setAttribute("onClick", "addSongToSelectedPlaylist(event)");
  li.addEventListener("click", addSongToSelectedPlaylist);
  li.innerHTML = newPlaylist.name;
  allPlaylists.append(li);
  playlistInput.value = "";
}

// Faced Difficulty Implementing Below Functionality.

function addSongToSelectedPlaylist(event) {
  const playlistName = event.target.innerHTML;
  currentPlaylistName = playlistName;

  // Clear current playlist section
  currentPlaylist.innerHTML = "";

  const desiredPlaylist = playlists.find((p) => p.name === currentPlaylistName);

  if (desiredPlaylist && desiredPlaylist.songs.length > 0) {
    desiredPlaylist.songs.forEach((s) => {
      const li = document.createElement("li");
      li.setAttribute("class", "song-name-playlist");
      li.innerHTML = s.songName;
      currentPlaylist.append(li);
    });
  } else {
    // Handle case when no songs in the selected playlist
    const li = document.createElement("li");
    li.innerHTML = "No songs in this playlist.";
    currentPlaylist.append(li);
  }

  // Remove all previous event listeners on the "Add To Playlist" button
  addToPlaylistBtn.removeEventListener("click", handleAddToPlaylist);

  // Add a single event listener based on the current playlist
  addToPlaylistBtn.addEventListener("click", handleAddToPlaylist);
}

function handleAddToPlaylist() {
  const song = musicLibrary[currentSongIndex];
  const desiredPlaylist = playlists.find((p) => p.name === currentPlaylistName);

  if (desiredPlaylist) {
    if (desiredPlaylist.songs.indexOf(song) !== -1) {
      alert("Song Already Present In Playlist.");
    } else {
      desiredPlaylist.songs.push(song);
      // Update the current playlist section
      addSongToSelectedPlaylist(event);
    }
  }
}

// function addSongToSelectedPlaylist(event) {
//   const playlistname = event.target.innerHTML;
//   currentPlaylistName = playlistname;
//   const desiredPlaylist = playlists.filter(
//     (p) => p.name === currentPlaylistName
//   );
//   const { songs } = desiredPlaylist[0];
//   if (songs.length === 0) {
//     const li = document.createElement("li");
//     li.innerHTML = "";
//     currentPlaylist.append(li);
//   } else {
//     songs.forEach((s) => {
//       const li = document.createElement("li");
//       li.innerHTML = s.songName;
//       currentPlaylist.append(li);
//     });
//   }
//   //   songs.forEach((s) => {
//   //     const li = document.createElement("li");
//   //     li.innerHTML = s.songName;
//   //     currentPlaylist.append(li);
//   //   });
//   addToPlaylistBtn.addEventListener("click", () => {
//     const song = musicLibrary[currentSongIndex];
//     const { songs } = desiredPlaylist[0];
//     songs.push(song);
//     console.log(songs);
//   });
// }
