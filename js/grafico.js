var options = {
    chart: {
        type: 'donut',
        height: 300,
        background: '#0a0f1e', // Sfondo scuro
        foreColor: '#00d4ff'   // Colore del testo in stile neon
    },
    series: [10, 5, 15, 35, 25, 10], // Dati esemplificativi per LTE, 2G, 3G, 4G, 5G
    labels: ['Antenne LTE', 'Antenne 2G', 'Antenne 3G', 'Antenne 4G', 'Antenne 5G'],
    colors: ['#1b1f38', '#13172b', '#0e1230', '#151a40', '#19204c'], // Palette di colori in tonalità di blu scuro
    stroke: {
        show: true,
        colors: '#00d4ff', // Bordo in stile neon
        width: 2
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#ffffff'], // Colore dei dati
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 'bold'
        }
    },
    plotOptions: {
        pie: {
            expandOnClick: true,
            donut: {
                size: '65%',
                background: 'transparent',
                labels: {
                    show: true,
                    name: {
                        show: true,
                        fontSize: '16px',
                        fontFamily: 'Roboto, sans-serif',
                        color: '#00d4ff',
                        offsetY: -10
                    },
                    value: {
                        show: true,
                        fontSize: '14px',
                        fontFamily: 'Roboto, sans-serif',
                        color: '#ffffff',
                        offsetY: 10,
                        formatter: function (val) {
                            return val + "%";
                        }
                    },
                    total: {
                        show: true,
                        label: 'Totale',
                        color: '#00d4ff',
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + "%";
                        }
                    }
                }
            }
        }
    },
    legend: {
        show: true,
        position: 'bottom',
        labels: {
            colors: '#ffffff'
        }
    },
    tooltip: {
        enabled: true,
        theme: 'dark',
        style: {
            fontSize: '14px',
            fontFamily: 'Roboto, sans-serif'
        },
        y: {
            formatter: function (val) {
                return val + "%";
            }
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
