let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')

// write your code here

function displayPlayerList (data) {
  let htmlContent = ''
  data.forEach((data) => {
  htmlContent +=
    `
      <tbody id="data-panel">
        <tr>
          <td>${data.name}</td>
          <td><span>${data.pts}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
          <td><span>${data.reb}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
          <td><span>${data.ast}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
          <td><span>${data.stl}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
          <td><span>${data.blk}</span>
            <i class="fa fa-plus-circle up"></i>
            <i class="fa fa-minus-circle down"></i>
          </td>
        </tr>
      </tbody>
` 
  })
  dataPanel.innerHTML = htmlContent
}

displayPlayerList(players)

dataPanel.addEventListener('click', function (event) {
  if (event.target.matches('.fa-plus-circle') || event.target.matches('.fa-minus-circle') ) {
    const scoreBox = event.target.parentElement.children[0]
    let score = Number(scoreBox.innerText)
    if (event.target.matches('.fa-plus-circle')) {
      score += 1
     } else {
      score -= 1   
      if (score < 0) score = 0
     }
    scoreBox.innerText = score
  }
})


// dataPanel.addEventListener('click', function (event) {
//   if (event.target.matches('.fa-plus-circle up')) {
//     console.log(event.target)
//     let point = event.target.parentElement
//     point.innerText = parseFloat(point.innerText) + 1 
//   } 
// })