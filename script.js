const musicLibrary = [
  {
    songName: "Shape Of You",
    genre: "Western",
    artist: "Ed Shereen"
  },
  {
    songName: "Not Afraid",
    genre: "Hip Hop",
    artist: "Eminem"
  },
  {
    songName: "Rock The Party",
    genre: "Rock",
    artist: "Bombay Rockers"
  },
  {
    songName: "Smack That",
    genre: "Hip Hop",
    artist: "Akon"
  },
];

let lightTheme = true;

var currentGenre = "all";

const songsList = document.getElementById("songs-list");

const themeButton = document.querySelector("#theme-toggle");

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
    li.setAttribute("onClick", "displaySongDetails(event)")
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
      li.setAttribute("onClick", "displaySongDetails(event)")
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
        li.setAttribute("onClick", "displaySongDetails(event)")
        songsList.append(li);
    });
  }
}

function displaySongDetails(obj){
    const data = musicLibrary.filter(s => s.songName.toLowerCase() === obj.target.innerHTML.toLowerCase());
    const {songName, artist} = data[0];
    const song = document.getElementById("song");
    const songArtist = document.getElementById("artist");
    song.innerHTML = songName;
    songArtist.innerHTML = artist;
}