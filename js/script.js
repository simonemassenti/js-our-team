//Object array
const team = [
    {
      //key       value
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },

    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },

    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
]

//The String variable where write the html code
let myString = "";

//The for loop to scroll the array
for (let i = 0; i < team.length; i++) {
    
    myString += `
    <div class="card col-3 mx-2 border-0 rounded-0">
        <img src="img/${team[i].photo}" class="card-img-top p-2">
            <div class="card-body ps-1 text-center">
                <h5 class="card-title">${team[i].name}</h5>
                <h6 class="card-subtitle mt-2">${team[i].role}</h6>
            </div>
    </div>
    `
}

//Innering the html code in the DOM
document.querySelector(".row").innerHTML = myString;