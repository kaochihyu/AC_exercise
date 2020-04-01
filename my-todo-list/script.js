// init

let list = document.querySelector('#my-todo')
const todos = ['Hit the gym', 'Read a book', 'Buy eggs', 'Organize office', 'Pay bills']
for (let todo of todos) {
  addItem(todo)
}

let all = document.querySelector('.m-5')
let done = document.querySelector('#done')



function addItem (text) {
  let newItem = document.createElement('li')
  newItem.innerHTML = `
    <label for="todo">${text}</label>
    <i class="delete fa fa-trash"></i>
  `
  list.appendChild(newItem)
}

// write your code here

const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', function () {
  console.log(this)
  console.log(event.target)
  let inputValue = document.querySelector('#newTodo').value
  addItem(inputValue)
})

list.addEventListener('click', function (event) {
  console.log(this)
  console.log(event.target)
  if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  } else if (event.target.tagName === 'LABEL') {
    event.target.classList.add('checked')
    let li = event.target.parentElement
    li.remove()
    done.appendChild(li)
    console.log(done)
  }
})

done.addEventListener('click', function (event) {
  if (event.target.tagName === 'LABEL') {
    let li = event.target.parentElement
    li.remove()
    event.target.classList.remove('checked')
    list.append(li)
  } else if (event.target.classList.contains('delete')) {
    let li = event.target.parentElement
    li.remove()
  }
  
})





const input = document.querySelector('#newTodo')
input.addEventListener('keypress', function (event) {
  if (event.keyCode == 13) {
    let inputValue = document.querySelector('#newTodo').value
    addItem(inputValue)
  }
})