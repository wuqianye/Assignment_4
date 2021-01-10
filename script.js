//Q1, two buttoms arguing
document.getElementById("btn1").addEventListener("click", () => {
    document.getElementById("ansButtons").innerText = "I'm right";
});

document.getElementById("btn2").addEventListener("click", () => {
    document.getElementById("ansButtons").innerText = "No, I'm Right!";
});

//Q2, alert with hover
document.getElementById("dontHover").addEventListener("mouseenter", () => {
    alert("Hey, I told you not to hover over me!");
});

//Q3 & Q4, check password
document.getElementById("submit").addEventListener("click", (e) => {
    if (document.getElementById("password").value == 12345678) {
        document.getElementById("ansPassword").innerText = "Correct password";
    } else {
        alert("Wrong password");
    }
    e.preventDefault();
});

//Q6, calculate volume of sphere
document.getElementById("calculate").addEventListener("click", (e) => {
    const radius = document.getElementById("radius").value;
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    document.getElementById("ansCalculate").innerText = "Volume of the sphere is " + volume;
    e.preventDefault();
});
