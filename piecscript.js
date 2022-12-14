const ctx = document.getElementById('piec').getContext('2d');
const piec = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March'],
        datasets: [{
            label: '# of revenue',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 159,  64, 1)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 255, 255, 255)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 255, 255, 255)'
            ],
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
