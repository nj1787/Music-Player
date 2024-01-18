const musicLibrary = [
  {
    songName: "Shape Of You",
    genre: "Western",
    artist: "Ed Shereen",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
  },
  {
    songName: "Not Afraid",
    genre: "Hip Hop",
    artist: "Eminem",
    songImage:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Eminem_-_Not_Afraid.jpg/220px-Eminem_-_Not_Afraid.jpg",
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

let lightTheme = true;

var currentGenre = "all";

var currentSongIndex = 0;

const songsList = document.getElementById("songs-list");

const themeButton = document.querySelector("#theme-toggle");

const image = document.getElementById("song-image");

const previous = document.getElementById("previous");

const next = document.getElementById("next");

const addToPlaylistBtn = document.getElementById("add");

const playlistInput = document.getElementById("playlist-name");

const createPlaylistBtn = document.getElementById("create-playlist");

var current = ""; // current selected playlist

const { songName, artist, songImage } = musicLibrary[0];

image.setAttribute("src", songImage);
const song = document.getElementById("song");
song.innerHTML = songName;
const songArtist = document.getElementById("artist");
songArtist.innerHTML = artist;
previous.setAttribute("disabled", "true");

themeButton.addEventListener("click", () => {
  lightTheme = !lightTheme;
  if (!lightTheme) {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "rgb(163, 222, 212)";
  }
});

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
  
  const { songName, artist, songImage } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
}

next.addEventListener("click", displayNextSong);
previous.addEventListener("click", displayPreviousSong);

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
  const { songName, artist, songImage } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
  console.log(currentSongIndex);
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
  const { songName, artist, songImage } = data[0];
  image.setAttribute("src", songImage);
  const song = document.getElementById("song");
  song.innerHTML = songName;
  const songArtist = document.getElementById("artist");
  songArtist.innerHTML = artist;
  console.log(currentSongIndex);
}

createPlaylistBtn.addEventListener("click", createPlaylist);

const currentPlaylist = document.getElementById("current-playlist");

const allPlaylists = document.getElementById("all-playlists");

function createPlaylist() {
  const playlistName = playlistInput.value;
  if (!playlistName) {
    alert("Playlist Name Cannot Be Empty...!");
    return;
  }
  document.createElement("li");
  const li = document.createElement("li");
  li.setAttribute("class", "playlist-name");
  li.innerHTML = playlistName;
  allPlaylists.append(li);
  playlistInput.value = "";
}
