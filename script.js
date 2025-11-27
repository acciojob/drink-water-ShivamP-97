//your JS code here. If required.
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const remained = document.getElementById("remained");
const percentage = document.getElementById("percentage");

smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
    if (smallCups[idx].classList.contains("full") &&
        !smallCups[idx].nextElementSibling?.classList.contains("full")) {
        idx--;
    }

    smallCups.forEach((cup, i) => {
        if (i <= idx) cup.classList.add("full");
        else cup.classList.remove("full");
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll(".cup-small.full").length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.height = "0";
        percentage.innerText = "0%";
        percentage.style.visibility = "hidden";  
    } else {
        let percent = (fullCups / totalCups) * 100;
        percentage.style.height = percent + "%";
        percentage.innerText = `${percent}%`;
        percentage.style.visibility = "visible"; 
    }

    const remaining = 2 - (fullCups * 0.25);
    liters.innerText = remaining.toFixed(2) + "L";

    remained.style.height = ((remaining / 2) * 100) + "%";
}

