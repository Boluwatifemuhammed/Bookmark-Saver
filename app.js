const bookmarkForm  = document.getElementById("bookmark-form")
const textInput  = document.getElementById("text-input")
const linkInput  = document.getElementById("link-input") 
const bookmarkList  = document.getElementById("bookmark-list") 


bookmarkForm.addEventListener("submit", function(e){
    e.preventDefault();

    const textValue = textInput.value;
    const linkValue = linkInput.value;

    console.log(textValue, linkValue);

    const bookmark = document.createElement("div");
    bookmark.classList.add("bookmark-item")

    bookmark.innerHTML = `
        <span class = "text-value">${textValue}</span>
            <a href="${linkValue}">
             <button class = "link-value">Open Link</button>
            </a>
    `

    bookmarkList.appendChild(bookmark);


    bookmarkForm.reset();

})

