let url2 = 'https://poetrydb.org/authors'

const button = document.getElementById('button');
const poemZone = document.getElementById('poem');
let poemHolder = [];
let authorHolder = [];



async function requestPoem(author) {
    
    //REQUEST POEMS FROM API
    const response = await fetch(`https://poetrydb.org/author/${author}`);
    const data = await response.json();
    console.log(data);
    
    
    poemHolder = data;


    poemLister(data);


}

async function requestAuthors(url) {
    
    //REQUEST AUTHORS FROM API
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.authors);
authorHolder = data.authors;

authorLister(data.authors);


}


requestAuthors(url2)



function selectPoem(data, index) {

    const poem = data[index]["lines"].join(' <br> ');
    poemZone.innerHTML = poem;
    console.log(index);
}


//LIST ALL THE POEMS
function poemLister(data) {
const listOfTitles = data.map((poem, index) => {

    const node = document.createElement("option");
    node.innerHTML = `${poem.title}`;
   node.value = index;

document.getElementById('poem-picker').appendChild(node);

})


}

function authorLister(data) {
    const listOfAuthors = data.map((author, index) => {
        const node = document.createElement("option");
        node.innerHTML = `${author}`;
       node.value = `${author}`;
    document.getElementById('author-picker').appendChild(node);
    
    })
    document.getElementById('author-count').innerText=`${listOfAuthors.length} authors available`
    }