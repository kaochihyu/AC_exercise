// DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

// WRITE YOUR CODE ////////////////////////

//取得歌詞
let tracklist = ''
for (let i = 0; i < album.tracks.length; i++) {
  let track = album.tracks[i]
  const li = document.createElement('li')
  li.innerHTML = track
  console.log(li)
  songList.appendChild(li)
  
  li.classList.add('nav-item')
  li.addEventListener('click', function () {
    axios.get('https://api.lyrics.ovh/v1/adele/'+ li.innerHTML).then(function(response){
    console.log(response.data)
    const lyricsHtml = `
         <h4>${li.innerHTML}</h4>
         <pre>${response.data.lyrics}</pre>
     `
    
    lyricsPanel.innerHTML = lyricsHtml
  }).catch(function(error){
    console.log(error)
  })
    
  })
}