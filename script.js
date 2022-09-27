let namee = document.getElementById("name");

let push = document.getElementById("push");

let box = document.getElementById("box");



let count = 0;

let players = []

push.addEventListener("click" , function() {
    if(namee.value != '')
    {
        count++;
        localStorage.setItem("name" + count , namee.value);
        namee.value = ''
        let h2 = document.createElement("h2");
        let content_h2 = document.createTextNode(localStorage.getItem("name" + count));
        h2.appendChild(content_h2)
        box.appendChild(h2);
        location.reload()
    }
})


for(let i = 0; i < localStorage.length; i++)
{
    count++;
    let h2 = document.createElement("h2");
    let content_h2 = document.createTextNode(localStorage.getItem("name" + count));
    h2.appendChild(content_h2)
    box.appendChild(h2);
    players.push(localStorage.getItem("name" + count))
}

let random = document.getElementById("random");




random.addEventListener("click" , function() {
    let x = Math.floor(players.length * Math.random());
    document.body.innerHTML = `<h1>${players[x]}</h1>`;
    document.body.style.cssText = `display : flex;
    height : 100vh;
    width : 100%;
    flex-flow : column wrap;
    justify-content: center;  
    `
})


let clear = document.getElementById("clear");

clear.addEventListener("click" , function() {
    localStorage.clear()
    location.reload()
})