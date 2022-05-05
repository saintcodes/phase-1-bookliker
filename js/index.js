document.addEventListener("DOMContentLoaded", function() {});

const bookList = document.querySelector('#list');
const showPanel = document.querySelector('#show-panel')


fetch('http://localhost:3000/books')
  .then(res => res.json())
  .then(books => addToPage(books))


function addToPage(books) {
  for (const book of books) {
    const li = document.createElement('li')
    bookList.append(li)
    li.innerHTML = book.title
    li.addEventListener('click', () => displayBook(book))
  }
}

function displayBook(book) {
  //needs thumbnail, descript, list of users who liked it
  showPanel.innerHTML = ""
  let bookImage = document.createElement('img')
  let description = document.createElement('p')
  let likedUsers = document.createElement('li')
  let likeButton = document.createElement('button')
  likeButton.innerHTML = "LIKE"
  likeButton.classList = 'btn'
  likeButton.addEventListener('click', () => sendLike())
  description = book.description
  bookImage.src = book.img_url 
  showPanel.append(
      bookImage, 
      document.createElement('br'), 
      description, 
      document.createElement('br'), 
      likeButton,
      document.createElement('br'),
      likedUsers)
}

function sendLike () {
  fetch('http://localhost:3000/users', {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      id: '1', 
      username: "pouros",
    })
  })
}