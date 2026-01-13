let Main = document.getElementById("Main");

function displayData(data)
{
    for(let i of data)
    {
        Main.innerHTML += `
            <div>
                <h2>${i.name}</h2>
                <p>${i.email}</p>
                <p>${i.phone}</p>
                <p>${i.website}</p>
                <p>${i.company.name}</p>
            </div>
        `
    }

}

async function getData()
{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log(data);
    displayData(data);
}

getData();
