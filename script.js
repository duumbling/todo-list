const addBtn = document.querySelector('.add-btn'),
  input = document.querySelector('input'),
  todoList = document.querySelector('ul'),
  calendar = document.querySelector('.date-inp'),
  removeAllBtn = document.querySelector('.removeAll'),
  d = new Date

let id = 1,
  activeTodos,
  todoItems

// document.addEventListener('load', () => {
//   activeTodos = document.querySelectorAll('.list-item-date')
//   for (item of activeTodos) {
//     if (item.innerText.slice(3) == d.toLocaleDateString().split('.').reverse().join('-')) {
//       console.log(item, ' Время вышло')
//     }
//   }
// })

const draw = () => {

  if (localStorage.length != 0) {
    id = localStorage.length
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage[i], i)
      console.log('id ', id)
      console.log('length ', localStorage.length)
      let newTodo = document.createElement('li')
      newTodo.classList.add('list-item')


      let checkbox = document.createElement('div')
      checkbox.classList.add('list-item-check')
      checkbox.addEventListener('click', checkTodo)

      let todoText = document.createElement('p')
      todoText.innerText = localStorage[i].split(',')[0]
      todoText.classList.add('list-item-text')

      let todoDate = document.createElement('p')
      todoDate.innerText = localStorage[i].split(',')[1]
      todoDate.classList.add('list-item-date')

      let removeBtn = document.createElement('button')
      removeBtn.classList.add('list-item-remove')
      removeBtn.id = i
      removeBtn.addEventListener('click', removeTodo)

      let editBtn = document.createElement('button')
      editBtn.classList.add('list-item-edit')
      editBtn.id = i
      editBtn.addEventListener('click', editTodo)

      newTodo.appendChild(checkbox)
      newTodo.appendChild(todoText)
      newTodo.appendChild(todoDate)
      newTodo.appendChild(editBtn)
      newTodo.appendChild(removeBtn)
      newTodo.id = i

      todoList.appendChild(newTodo)

      activeTodos = document.querySelectorAll('.list-item-date')
      for (item of activeTodos) {
        // console.log(+d.toLocaleDateString().split('.').reverse().join('') + 1)
        // console.log(+item.innerText.slice(3).split('-').join('') + 1)
        if (item.innerText.slice(3) == d.toLocaleDateString().split('.').reverse().join('-')) {
          item.style.color = 'rgb(246, 94, 94)'
        } else if (+d.toLocaleDateString().split('.').reverse().join('') + 1 == +item.innerText.slice(3).split('-').join('')) {
          item.style.color = 'rgb(238, 200, 75)'
        }
      }

    }
  }
}



removeAllBtn.addEventListener('click', () => {
  for (todos of document.querySelectorAll('.list-item')) {
    todos.remove()
  }
  id = 1
  localStorage.clear()
})

const removeTodo = (event) => {//todo here
  let thisId = event.target.closest('button').id
  for (let i = 1; i <= localStorage.length; i++) {
    // console.log(localStorage[i])
  }
  console.log(localStorage[thisId])

  if (event.target.closest('li').id == thisId) {
    event.target.closest('li').remove()
  }
  localStorage.removeItem(thisId)


  todoItems = document.querySelectorAll('.list-item')
  for (let i = 0; i < todoItems.length; i++) {
    todoItems[i].querySelector('.list-item-edit').id = i + 1
    todoItems[i].querySelector('.list-item-remove').id = i + 1
    todoItems[i].id = i + 1
    // console.log(i)
    // console.log(todoItems[i])
    // console.log(todoItems)
  }


  id = id - 1
}//todo here^


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
  let date = calendar.value != '' ? `до ${calendar.value}` : ''

  if (input.value != '') {
    let newTodo = document.createElement('li')
    newTodo.classList.add('list-item')


    let checkbox = document.createElement('div')
    checkbox.classList.add('list-item-check')
    checkbox.addEventListener('click', checkTodo)

    let todoText = document.createElement('p')
    todoText.innerText = input.value
    todoText.classList.add('list-item-text')

    let todoDate = document.createElement('p')
    todoDate.innerText = date
    todoDate.classList.add('list-item-date')

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
    newTodo.appendChild(todoDate)
    newTodo.appendChild(editBtn)
    newTodo.appendChild(removeBtn)
    newTodo.id = id

    todoList.appendChild(newTodo)
    localStorage.setItem(id, [input.value, date])


    input.value = ''
    id += 1
    input.focus()
    calendar.value = ''

    activeTodos = document.querySelectorAll('.list-item-date')
    for (item of activeTodos) {
      // console.log(+d.toLocaleDateString().split('.').reverse().join('') + 1)
      // console.log(+item.innerText.slice(3).split('-').join('') + 1)
      if (item.innerText.slice(3) == d.toLocaleDateString().split('.').reverse().join('-')) {
        item.style.color = 'rgb(246, 94, 94)'
      } else if (+d.toLocaleDateString().split('.').reverse().join('') + 1 == +item.innerText.slice(3).split('-').join('')) {
        item.style.color = 'rgb(238, 200, 75)'
      }
    }
  }
  // console.log(id)
  // console.log('length ', localStorage.length)
})

// draw()

/*
todo: edit todo +
todo: clear all +
todo: calendar and date +
todo: red date +
todo: folders ?
todo: local storage +-
todo: rewrite id if remove!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

*/


console.log(calendar.value)