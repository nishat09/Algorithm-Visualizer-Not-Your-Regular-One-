const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the array of numbers.


// Define a function to draw the bars on the canvas.
function drawBars() {

  function generateArray(){


    const numbers = [];
  
  
    for(let i=0;i<200;i++){
  
      let temp=Math.floor(Math.random() * 101);
      numbers.push(temp);
    }
  
    return numbers;
  
  
  }
  
  const numbers=generateArray()
  // Clear the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate the width of each bar 
  const barWidth = canvas.width / numbers.length;

  // Loop through the numbers and draw a bar for each one.
  for (let i = 0; i < numbers.length; i++) {
    // Calculate the height of the bar based on the canvas height and the number.
    const barHeight = (numbers[i] / Math.max(...numbers)) * canvas.height;

    // Calculate the x and y coordinates of the top-left corner of the bar.
    const x = i * barWidth;
    const y = canvas.height - barHeight;

    // Set the color of the bar.

    // var a = Math.floor(Math.random() * 256);
    // var b = Math.floor(Math.random() * 256);
    // var c = Math.floor(Math.random() * 256);
    // ctx.fillStyle = "rgb(" + a + "," + b + "," + c + ")";

    ctx.fillStyle="#deeaee"

    // Draw the bar on the canvas.
    ctx.fillRect(x, y, barWidth, barHeight);
  }
}



