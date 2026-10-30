//your code here

document.getElementById("insuranceForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const car = document.getElementById("cars").value;
    const carage = document.getElementById("carage").value;
    const dop = document.getElementById("dop").value;
    const password = document.getElementById("password").value;

    if (!name || !email || !gender || !carage || !dop || !password) {
        alert("Please fill all required fields!");
        return;
    }

    document.getElementById("message").textContent =
        "Registration successful! Thank you, " + name + ".";

    console.log({
        name,
        email,
        gender: gender.value,
        car,
        carage,
        dop
    });

    this.reset();
});
