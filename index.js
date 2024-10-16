function addButton() {
    document.getElementById("categoryNamcategoryInpute").style.display = "inline";
    document.getElementById("categoryButton").style.display = "inline";
}

function makeButton() {
    var name = document.getElementById("categoryName").value;
    var button = document.getElementById("categoryButton");

    if (name === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(section);
        document.getElementById("categoryInput").style.display = 'none';
        document.getElementById("categoryAddBtn").style.display = 'none';
    }
}