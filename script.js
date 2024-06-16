document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('researchChart').getContext('2d');
    var researchChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Temperature Anomaly',
                data: [0.2, 0.3, 0.5, 0.7, 0.4, 0.6, 0.9],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
