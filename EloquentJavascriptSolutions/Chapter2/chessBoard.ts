let size: number = 8;

let row: string = "";
for (let i: number = 1; i <= size; i++){
    if (i % 2 == 0) {
        row += "#";
    }
    else {
        row += " ";
    }
}

for (let j: number = 1; j <= size; j++){
    if (j % 2 == 0) {
        console.log(row.substr(1));
    }
    else {
        console.log(row);
    }
}