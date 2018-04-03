var size = 8;
var row = "";
for (var i = 1; i <= size; i++) {
    if (i % 2 == 0) {
        row += "#";
    }
    else {
        row += " ";
    }
}
for (var j = 1; j <= size; j++) {
    if (j % 2 == 0) {
        console.log(row.substr(1));
    }
    else {
        console.log(row);
    }
}
