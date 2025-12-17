// Auto-calculate total fee
let subjects = document.querySelectorAll(".subject");
let totalBox = document.getElementById("total");


subjects.forEach(item => {
    item.addEventListener("change", () => {
        let total = 0;

        subjects.forEach(sub => {
            if (sub.checked) {
                total += parseInt(sub.value);
            }
        });

        totalBox.innerText = "₹" + total;
    });
});

// Optional: form submit
// Optional: form submit
document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let selectedSubjects = [];
    let totalFee = 0;
    let cnt = 0;

    // Get the result div (where we will show output)
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // clear previous result

    subjects.forEach(sub => {
        if (sub.checked) {
            cnt++;
            // Get subject name from the label text
            let subjectName = sub.parentElement.innerText.trim();
            selectedSubjects.push(cnt + ". " + subjectName);

            totalFee += parseInt(sub.value);
        }
    });

    if (selectedSubjects.length === 0) {
        resultDiv.innerHTML = "<strong>Please select at least one subject.</strong>";
        return;
    }

    let studentName = document.getElementById("name").value.trim();

    // Build HTML output
    let html = `<strong>Student Name:</strong> ${studentName}<br><br>`;
    html += `<strong>Selected Subjects:</strong><br>`;
    selectedSubjects.forEach(sub => {
        html += sub + "<br>";
    });
    html += `<br><strong>Total Fee:</strong> ₹${totalFee}`;

    // Show result below the button
    resultDiv.innerHTML = html;
});
