// Approach 1
var message = "#";
var count = 1;
while (count <= 7) {
    console.log(message);
    message += "#";
    count++;
}
// Approach 2
var output = "#";
for (var i = 1; i < 8; i++) {
    console.log(output);
    output += "#";
}
