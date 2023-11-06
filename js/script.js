const team = [
    {
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

let myString = "";

for (let i = 0; i < team.length; i++) {
    for (const key in team[i]) {
        console.log(`${key}: ${team[i][key]}`);
        if (key === "photo") {
            myString += `<img src="img/${team[i][key]}"`
        }else {
            myString += `
        <li>
            ${key}: ${team[i][key]}
        </li>`
        }
        
        
    }
    console.log("*******************************************");
}

document.querySelector("ul").innerHTML = myString;