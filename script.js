function submitPassword() {
    const passwordInput = document.getElementById("passwordInput");
    const password = passwordInput.value;
    const result = document.getElementById("result");

    // Passcode parts 
    const p5 = "0";
    const p7 = "1";
    const p8 = "2";
    const p9 = "3"; 
    const p3 = "4";
    const p4 = "5";
    const p1 = "6";
    const p2 = "7";
    const p6 = "8";
    const p0 = "9";

    // Assemble the passcode
    const encryptedPasscode = `${p9}${p9}${p5}${p7}`; 

    // Flag parts with randomized variable names
    const dog = "s";
    const house = "d";
    const jellyfish = "G";
    const apple = "P";
    const igloo = "_";
    const dump = "c";
    const giraffe = "r";
    const napkin = "2";
    const water = "c";
    const ostrich = "0";
    const cat = "i";
    const lion = "m";
    const elephant = "w";
    const banana = "a";
    const cherry = "s";
    const monkey = "e";
    const frog = "o";
    const kangaroo = "a";

    // Dynamically assemble the flag
    const flag = `{${dump}${cat}${water}${banana}${house}${kangaroo}}`;


    // Check if the input matches the encrypted passcode
    if (password === encryptedPasscode) {
        result.style.color = "green";
        result.textContent = `Passcode correct! Here is the flag${flag}`;
    } else {
        result.style.color = "red";
        result.textContent = "Incorrect passcode. Try again.";
    }
}