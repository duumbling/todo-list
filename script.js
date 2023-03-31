const addBtn = document.querySelector('.add-btn'),
  input = document.querySelector('input'),
  todoList = document.querySelector('ul')

let id = 1;



const removeTodo = (event) => {
  let thisId = event.target.closest('button').id
  if (event.target.closest('li').id == thisId) {
    event.target.closest('li').remove()
  }
}
const checkTodo = (event) => {
  event.target.classList.toggle('checked')
}

addBtn.addEventListener('click', () => {
  if (input.value != '') {
    let newTodo = document.createElement('li')
    newTodo.classList.add('list-item')

    let checkbox = document.createElement('div')
    checkbox.classList.add('list-item-check')
    checkbox.addEventListener('click', checkTodo)

    let todoText = document.createElement('p')
    todoText.innerText = input.value
    todoText.classList.add('list-item-text')

    let removeBtn = document.createElement('button')
    removeBtn.classList.add('list-item-btn')
    let removeBtnImg = document.createElement('img')
    removeBtnImg.src = './img/trash-can-svgrepo-com.svg'
    removeBtn.appendChild(removeBtnImg)
    removeBtn.id = id
    removeBtn.addEventListener('click', removeTodo)

    newTodo.appendChild(checkbox)
    newTodo.appendChild(todoText)
    newTodo.appendChild(removeBtn)
    newTodo.id = id

    todoList.appendChild(newTodo)

    input.value = ''
    id += 1
    input.focus()
  }
})
