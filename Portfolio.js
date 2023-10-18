fetch('/Portfolio.json').then(function (responce) {
    return responce.json()
}).then(function (data) {

const displayTarget = document.querySelector('#target');

let output = '';

console.log(data);

data.projects.forEach(function (project) {
    output += '<div class="projectstyle">'
    output += '<h3>' + "Project Name:" + " " + project.name + '</h3>'
    output += '<img src="'+ project.image + '"/>'
    output += '<p>' + "Project Location:" +" " + project.location + '</p>'
    output += '<p>' + "Project Type:" +" " + project.type + '<p>'
    output += '</div>'
})
 displayTarget.innerHTML = output

})
