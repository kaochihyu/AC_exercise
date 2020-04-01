//(function(){})() 少了後面的小括弧導致console.log()印不出東西來
// 花了超多時間在找問題出在哪
(function () {
  const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
  const INDEX_URL = BASE_URL + '/api/v1/users/'
  const data = []
  
  //用axios取API
  const dataPanel = document.querySelector('#data-panel')
  axios.get(INDEX_URL).then((response) => {
    data.push(...response.data.results)
    displayUserList(data)
  }).catch((err) => console.log(err))
  
  //設定按鈕執行
  dataPanel.addEventListener('click', function (event) {
    if (event.target.matches('.btn-show-user')) {
      console.log(event.target)
      console.log(event.target.dataset.id)
      showUser(event.target.dataset.id)
    }
  })
  
  function displayUserList(data) {
    let htmlContent = ''
    data.forEach(function(item) {
      htmlContent += `
      <div class="col-lg-3 col-md-4 col-sm-6 col-6">
        <div class="card mb-5" style="height:24rem">
          <img class="card-img-top" src="${item.avatar}" alt="Card image cap">
          <div class="card-body p-4">
            <h5 class="card-title">${item.name} ${item.surname}</h5>
            <h6 class="card-text">Nationality: ${item.region}</h6>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-secondary btn-sm btn-show-user" data-toggle="modal" data-target="#show-user-modal" data-id="${item.id}" > MORE
            </button>
            <!--add botton-->
            <button class="btn btn-info  btn-add-favorite" data-id="${item.id}">+</button>
          </div>
        </div>
      </div>
      `
    })
    dataPanel.innerHTML = htmlContent
  }
  
  //用function把資料帶入modal
  function showUser(id) {
    //get elements
    const modalImage = document.querySelector('#show-user-image')
    const modalName = document.querySelector('#show-user-name')
    const modalUser = document.querySelector('#show-user')
    const modalGender = document.querySelector('#show-user-gender')
    const modalAge = document.querySelector('#show-user-age')
    const modalBirthday = document.querySelector('#show-user-birthday')
    const modalRegion = document.querySelector('#show-user-region')
    const modalEmail = document.querySelector('#show-user-email')
    
    //set request to Url
    const url = INDEX_URL + id
    console.log(url)
    //send request to show API
    axios.get(url)
      .then((response) => {
      const data = response.data
      console.log(data)
      modalImage.innerHTML = `<img src="${data.avatar}">`
      modalName.innerText = `${data.name} ${data.surname}`
      modalUser.innerText = `${data.name} ${data.surname}`
      modalGender.innerText = `Gender: ${data.gender}`
      modalAge.innerText = `Age: ${data.age} years old`
      modalBirthday.innerText = `Birthday: ${data.birthday}`
      modalRegion.innerText = `Nationality: ${data.region}`
      modalEmail.innerText = `Email: ${data.email}`
    })
      .catch((err) => console.log(err))
  } 
  const searchForm = document.getElementById('search')
  const searchInput = document.getElementById('search-input')
  // listen to search form submit event
  searchForm.addEventListener('submit', event => {
  event.preventDefault()
  console.log('click!')
  let input = searchInput.value
  let results = data.filter((user) => user.name.toLowerCase().includes(input) || user.surname.toLowerCase().includes(input))
  displayUserList(results)
  })
})()