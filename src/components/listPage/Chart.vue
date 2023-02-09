<script setup lang="ts">
import { useWordsStore } from '../../stores/WordsStore';
import { chartOptions } from '../../data/chart/chartOptions';
import {
   Chart as ChartJS,
   Title,
   Tooltip,
   Legend,
   BarElement,
   CategoryScale,
   LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';
import { getChartData } from '../../helpers/chart/getChartData';
import { ref, watch, reactive } from 'vue';
import { storeToRefs } from 'pinia';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
   ChartDataLabels,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend
);

const store = useWordsStore();
const { getOwnWords, getStartWords, getFavWords } = storeToRefs(store);

const onlyDataForChart = reactive({
   favWords: getFavWords,
   ownWords: getOwnWords,
   startWords: getStartWords,
});

const dataBarChat = ref(getChartData(onlyDataForChart));

watch(onlyDataForChart, () => {
   dataBarChat.value = getChartData(onlyDataForChart);
});
</script>

<template>
   <div class="chart">
      <Bar :data="dataBarChat" :options="chartOptions" />
   </div>
</template>

<style scoped lang="scss">
.chart {
   height: 330px;
   margin-top: 40px;
   margin-bottom: 40px;
}
@media (min-width: 720px) {
   .chart {
      height: 400px;
      margin-bottom: 30px;
   }
}
</style>
