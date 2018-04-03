// Approach 1
let message: string = "#";

let count: number = 1;
while(count <= 7){
    console.log(message);

    message += "#";
    count++;
}

// Approach 2
let output: string = "#";

for (let i: number = 1; i < 8; i++){
    console.log(output);
    output += "#";
}

