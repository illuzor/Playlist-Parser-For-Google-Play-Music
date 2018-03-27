var playlists = document.getElementById("playlists-container").getElementsByClassName("playlist-drawer-item");
var string = "";
var totalPlaylists = playlists.length;
var currentPlaylist = 0;
var totalTracks = 0;

preParse();

function preParse() {
    string += playlists[currentPlaylist].childNodes[2].text + ":\n";
    playlists[currentPlaylist].click();
    setTimeout(parse, 1000);
}

function parse() {
    var tracklist = document.getElementsByClassName("songlist-container")[0].getElementsByClassName("song-row")
    for (var j = 0; j < tracklist.length; j++) {
        string += " " + tracklist[j].childNodes[0].getElementsByClassName("column-content")[0].innerText; // number
        string += ": " + tracklist[j].childNodes[3].getElementsByClassName("column-content")[0].innerText; // title
        string += " - " + tracklist[j].childNodes[1].getElementsByClassName("column-content")[0].innerText; // artist
        string += "  ( " + tracklist[j].childNodes[4].getElementsByClassName("column-content")[0].innerText + " )"; // album
        string += "\n";
        totalTracks++;
    }
    string += "\n";
    currentPlaylist++;

    console.log(currentPlaylist + "/" + totalPlaylists);
    if (currentPlaylist < totalPlaylists) {
        preParse();
    } else {
        string += " ---------- \n"
        string += "Total playlists: " + totalPlaylists + "\n";
        string += "Total tracks: " + totalTracks;

        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }

        document.body.innerText = string;
    }
}
