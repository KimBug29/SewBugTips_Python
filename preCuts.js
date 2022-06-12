const preCuts="preCuts.json"
let preCutItems=document.getElementById("preCutItems")
fetch(preCuts)
.then((Response) => Response.json())
.then((data)=> {
    console.log(data.preCuts)
    const fabric=data.preCuts
   
    .map((fabricPreCuts) => {
        return `
        <div class="flexbox-item">   
        <img src="${fabricPreCuts.image}" alt="${fabricPreCuts.alt}" />
        <h4>${fabricPreCuts.name}</h4>
        <span>${fabricPreCuts.description}</span>
        </div>
        `
    })
.join("")
console.log(fabric)
preCutItems.insertAdjacentHTML("beforeend",fabric)
})
             