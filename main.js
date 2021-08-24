function loadItems(){
    return fetch("data/json.json")
    .then(response => response.json())
    .then(json => json.books);
}

let column = 1;
let row = 1;
function inHtml(books) {
    const ul = document.querySelector("main .items");

    ul.innerHTML = books.map((book) => inSet(book))
}

function inSet(book) {
    
    const html =  `
    <li style="grid-column: ${column}; grid-row: ${row} / ${row + 3};">
                <img src="${book.img}" alt="">        
                <span class="item-text">                   
                    <a href="${book.url}" target="_blank class="title">
                        <strong>
                            <span>${book.title}</span>                        
                        </strong>
                    </a>
                    <a href="">
                        <i class="fas fa-user-edit"></i>
                        <span>${book.writer}</span>
                    </a>
                    <a href="">
                        <i class="fas fa-star"></i>
                        <span>${book.fun}</span>
                    </a>
                    <span class="quote">"${book.quote}"</span>                        
                </span>                
            </li>`;

        if (column === 1) {
            column = 2;
            row++;
        } else if (column === 2) {
            column = 1;
            row += 3;
        }

        return html;
}
loadItems()
.then(books => {
    inHtml(books);
});