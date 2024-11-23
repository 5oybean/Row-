document.addEventListener("DOMContentLoaded", () => {
    // Maschen-Zähler
    let maschenCount = 0;
    document.getElementById("plusMaschen").addEventListener("click", () => {
        maschenCount++;
        document.getElementById("countMaschen").textContent = maschenCount;
    });
    document.getElementById("minusMaschen").addEventListener("click", () => {
        if (maschenCount > 0) maschenCount--; // Verhindert negative Zahlen
        document.getElementById("countMaschen").textContent = maschenCount;
    });

    // Reihen-Zähler
    let reihenCount = 0;
    document.getElementById("plusReihen").addEventListener("click", () => {
        reihenCount++;
        document.getElementById("countReihen").textContent = reihenCount;
    });
    document.getElementById("minusReihen").addEventListener("click", () => {
        if (reihenCount > 0) reihenCount--; // Verhindert negative Zahlen
        document.getElementById("countReihen").textContent = reihenCount;
    });
}); // 
