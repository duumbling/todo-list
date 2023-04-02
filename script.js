const addBtn = document.querySelector('.add-btn'),
  input = document.querySelector('input'),
  todoList = document.querySelector('ul'),
  removeAllBtn = document.querySelector('.removeAll')

let id = 1;

removeAllBtn.addEventListener('click', () => {
  for (todos of document.querySelectorAll('.list-item')) {
    todos.remove()
  }
})

const removeTodo = (event) => {
  let thisId = event.target.closest('button').id
  if (event.target.closest('li').id == thisId) {
    event.target.closest('li').remove()
  }
}

const checkTodo = (event) => {
  event.target.classList.toggle('checked')
}

const editTodo = (event) => {

  event.target.closest('li').classList.toggle('onEdit')
  let thisId = event.target.closest('button').id

  const addEdit = () => {
    for (todos of document.querySelectorAll('.list-item')) {
      if (todos.id == thisId) {
        todos.querySelector('p').innerText = input.value
        input.value = ""
        event.target.addEventListener('click', editTodo)
        event.target.removeEventListener('click', addEdit)
        event.target.closest('li').classList.toggle('onEdit')
      }
    }

  }
  event.target.removeEventListener('click', editTodo)
  event.target.addEventListener('click', addEdit)
  if (event.target.closest('li').id == thisId) {
    input.value = event.target.closest('li').querySelector('p').innerText
  }

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
    removeBtn.classList.add('list-item-remove')
    removeBtn.id = id
    removeBtn.addEventListener('click', removeTodo)

    let editBtn = document.createElement('button')
    editBtn.classList.add('list-item-edit')
    editBtn.id = id
    editBtn.addEventListener('click', editTodo)

    newTodo.appendChild(checkbox)
    newTodo.appendChild(todoText)
    newTodo.appendChild(editBtn)
    newTodo.appendChild(removeBtn)
    newTodo.id = id

    todoList.appendChild(newTodo)

    input.value = ''
    id += 1
    input.focus()
  }
})

/*
todo: edit todo +
todo: clear all +
todo: folders
todo: local storage

*/