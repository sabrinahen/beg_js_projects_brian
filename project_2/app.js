let data = [
    {
        name: "Sabrina",
        age: "25",
    },
    {
        name: "Lizzie",
        age: "25",
    },
    {
        name: "Nya",
        age: "30",
    },
    {
        name: "Freddy",
        age: "28",
    },
    {
        name: "Chineme",
        age: "23",
    },
    {
        name: "Luis",
        age: "26",
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
}); 

info.innerHTML = details.join("\n");