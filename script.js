// Gráfico de Popularidade - Doughnut Chart
const popularidadeCtx = document.getElementById('popularidadeChart').getContext('2d');
const popularidadeChart = new Chart(popularidadeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Premier League', 'La Liga', 'Serie A', 'Bundesliga', 'Brasileirão'],
        datasets: [{
            label: 'Popularidade (em milhões)',
            data: [450, 390, 300, 280, 250],
            backgroundColor: [
                'rgba(0, 123, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(40, 167, 69, 0.6)',
                'rgba(255, 193, 7, 0.6)',
                'rgba(23, 162, 184, 0.6)'
            ],
            borderColor: [
                'rgba(0, 123, 255, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(40, 167, 69, 1)',
                'rgba(255, 193, 7, 1)',
                'rgba(23, 162, 184, 1)'
            ],
            borderWidth: 1
        }]
    }
});

// Gráfico de Média de Gols - Line Chart
const golsCtx = document.getElementById('golsChart').getContext('2d');
const golsChart = new Chart(golsCtx, {
    type: 'line',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Premier League',
            data: [2.8, 2.7, 2.6, 2.9, 2.7, 2.8],
            borderColor: 'rgba(0, 123, 255, 1)',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 2
        }, {
            label: 'La Liga',
            data: [2.5, 2.4, 2.5, 2.7, 2.6, 2.5],
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2
        }, {
            label: 'Serie A',
            data: [2.6, 2.5, 2.7, 2.9, 2.8, 2.6],
            borderColor: 'rgba(40, 167, 69, 1)',
            backgroundColor: 'rgba(40, 167, 69, 0.2)',
            borderWidth: 2
        }, {
            label: 'Bundesliga',
            data: [3.2, 3.1, 3.0, 3.3, 3.1, 3.2],
            borderColor: 'rgba(255, 193, 7, 1)',
            backgroundColor: 'rgba(255, 193, 7, 0.2)',
            borderWidth: 2
        }, {
            label: 'Brasileirão',
            data: [2.3, 2.4, 2.2, 2.5, 2.4, 2.3],
            borderColor: 'rgba(23, 162, 184, 1)',
            backgroundColor: 'rgba(23, 162, 184, 0.2)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
