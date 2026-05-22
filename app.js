const bookmarkForm = document.getElementById("bookmark-form")
const linkInput = document.getElementById("link-input")
const textInput = document.getElementById("text-input")
const bookmarkList = document.getElementById("bookmark-list")

bookmarkForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const linkValue = linkInput.value;     
    const textValue = textInput.value;
    
    const bookmark = document.createElement("div");
    bookmark.classList.add(".bookmark")
    bookmark.innerHTML = `
        <span>${textValue}</span>
        <a href = "${linkValue}"> <button>Open Link</button> </a>
    `
    bookmarkList.appendChild(bookmark);
    bookmarkForm.reset();
})

bookmarkForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const linkValue = linkInput.value;
    const textValue = textInput.value;

    const bookmark = document.createElement("div")
    bookmark.classList.add(".bookmark")
    bookmark.innerHTML = `
        <p>${textValue}</p>
        <h1>${linkValue}</h1>

    `

    bookmarkList.appendChild(bookmark);
    bookmarkForm.reset ();
})


