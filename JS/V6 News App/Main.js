let main = document.querySelector("main");
let inpt = document.querySelector("input");

function displayData(data)
{
    main.innerHTML = "";

    for(let i of data)
    {
       main.innerHTML += `
        <div class="Card">
            <img src="${i.urlToImage}" alt="${i.title}">
            <h2>${i.title}</h2>
            <p>${i.description}</p>
            <a href="${i.url}">Read More</a>
        </div>
       `
    }
}

async function getData(topic)
{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${topic}&apiKey=7c76485379904ef6b42e9b38b7a58044`);
    res = await res.json();
    displayData(res.articles);
}

getData("india");


function Search()
{
    let topic = inpt.value
    getData(topic);
}

