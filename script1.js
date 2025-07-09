document.getElementById("ageForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const dobInput = document.getElementById("dob").value;
    
    if (!dobInput) {
        alert("Please select your date of birth!");
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        alert("Date of birth cannot be in the future!");
        return;
    }

    const age = calculateAge(dob, today);

    let message = `🎉 You are <strong>${age.years}</strong> years, <strong>${age.months}</strong> months, and <strong>${age.days}</strong> days old.`;

    
    
    document.getElementById("result").innerHTML = message;
});

function calculateAge(dob, today) {
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    return { years, months, days };
}
