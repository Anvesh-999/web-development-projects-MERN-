let btn=document.querySelector("button");

btn.addEventListener("click", async ()=>{
    let fact= await getFacts();
    console.log(fact);
    let p=document.querySelector("#result");
    p.innerText=fact;
});

let url="https://catFact.ninja/fact";

async function getFacts() {
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log(e);
        return "No fact found.";
    }
}