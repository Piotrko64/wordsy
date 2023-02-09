export const chartOptions = {
   responsive: true,
   maintainAspectRatio: false,
   plugins: {
      datalabels: {
         color: 'green',
         borderRadius: 4,
         labels: {
            title: {
               align: 'top',
               backgroundColor: 'white',
               padding: { top: 1, bottom: 1, left: 4, right: 4 },
               textAlign: 'center',
               font: {
                  weight: 'bold',
                  size: 18,
                  family: 'Signika',
               },
            },
         },
      },
   },
};
