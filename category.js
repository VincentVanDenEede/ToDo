function addCategory() {
    document.getElementById("categoryInput").style.display = 'inline';
    document.getElementById("categoryAddBtn").style.display = 'inline';
}
function addTopic() {
    document.getElementById("topicInput").style.display = 'inline';
    document.getElementById("topicAddBtn").style.display = 'inline';
    lastCategory = this;
}

function addToDo() {
    document.getElementById("toDoInput").style.display = 'inline';
    document.getElementById("toDoAddBtn").style.display = 'inline';
}

function newCategory() {
    var li = document.createElement("li");
    var ul = document.createElement("ul");
    var section = document.createElement("section");
    var inputValue = document.getElementById("categoryInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    section.appendChild(li);
    section.appendChild(ul);
    section.onclick = function(ev){addTopic(ev)}
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(section);
        document.getElementById("categoryInput").style.display = 'none';
        document.getElementById("categoryAddBtn").style.display = 'none';
    }
    document.getElementById("categoryInput").value = "";
}

function newTopic() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("topicInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    li.onclick = function(ev){addTopic()}
    
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        lastCategory.appendChild(li);
        document.getElementById("topicInput").style.display = 'none';
        document.getElementById("topicAddBtn").style.display = 'none';
    }
    document.getElementById("topicInput").value = "";
}

function addTest() {
    var test = document.getElementById("test");
    var a = document.createElement("a");
    var t = document.createTextNode("test");
    a.appendChild(t);
    a.setAttribute("href", "test.html");
    test.appendChild(a);
}