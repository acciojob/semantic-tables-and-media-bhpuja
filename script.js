//your code here
// Table data
const tableData = [
    { rollNumber: 1, name: "John Doe" },
    { rollNumber: 2, name: "Jane Smith" },
    { rollNumber: 3, name: "Emily Johnson" }
];

// Dynamically populate table rows
function populateTable() {
    const tableBody = document.getElementById("table-body");
    tableData.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.rollNumber}</td>
            <td>${row.name}</td>
        `;
        tableBody.appendChild(tr);
    });
}

// Call the function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateTable);
