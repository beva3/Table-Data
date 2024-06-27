const array = [
    {
        id:"1",
        name:"raphael",
        country:"tana",
        city:"madagascar"
    },
    {
        id:"2",
        name:"michel",
        country:"States",
        city:"france"
    },
    {
        id:"3",
        name:"raphael",
        country:"United",
        city:"madagascar"
    },
    {
        id:"4",
        name:"bienvenu",
        country:"tsrahonenana",
        city:"paris"
    },
    {
        id:"5",
        name:"gaby",
        country:"france",
        city:"Paris"
    },{
        id:"6",
        name:"tari",
        country:"Germany",
        city:"France"
    },
    {
        id:"7",
        name:"mattieu",
        country:"New york",
        city:"Asia"
    }
];

//! show data

function showtable(data){

    // for checking array is empty
    if(data == ""){
        document.getElementById("error").innerHTML = "Error JS";
    }
    else{
        document.getElementById("error").innerHTML = "";

        for(i=0; i<data.length; i++){
            document.getElementById("tbody").innerHTML += `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].country}</td>
                    <td>${data[i].city}</td>
                </tr>
            `;
        }

    }
    // document.getElementById("error").innerHTML = "Error JS";
}

// showtable(array);
let inputUser = document.getElementById("search");
inputUser.addEventListener('keyup',()=>{
    // alert("Please enter query");
    let newtab=[];
    let search = inputUser.value.toLowerCase();
    console.log(search);

    newtab = array.filter((query)=>{
        if(
            query.id.includes(search) ||
            query.name.includes(search) ||
            query.country.includes(search) ||
            query.city.includes(search)
        ){
            let newObj = {
                id:query.id,
                name:query.name,
                country:query.country,
                city:query.city
            }
            return newObj;
        }
    })
    showtable(newtab);
})
