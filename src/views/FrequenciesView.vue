<script setup>
import pdfPath1 from '@/assets/actyalnoe_PO_Evo_09_Conax.pdf';
import pdfPath2 from '@/assets/actyalnoe_PO_EVO_09_HD_R2_Conax.pdf';
import pdfPath3 from '@/assets/actyalnoe_PO_EVO_09_IR.pdf';

const telekartaFrequencies = [
  { freq: '10981', pol: 'V', sr: '45000', fec: '2/3', standard: 'DVB-S/MPEG-2' },
  { freq: '11044', pol: 'V', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11106', pol: 'H', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11106', pol: 'V', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11481', pol: 'H', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11481', pol: 'V', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11544', pol: 'H', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11544', pol: 'V', sr: '45000', fec: '4/5', standard: 'DVB-S/MPEG-2' },
  { freq: '11606', pol: 'H', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },
  { freq: '11606', pol: 'V', sr: '45000', fec: '4/5', standard: 'DVB-S2/MPEG-4' },

  { freq: '11169', pol: 'V', sr: '35010', fec: '3/4', standard: 'DVB-S2/MPEG-4' },
  { freq: '12535', pol: 'H', sr: '30000', fec: '2/3', standard: 'DVB-S2/MPEG-4' },
  { freq: '12591', pol: 'H', sr: '30000', fec: '2/3', standard: 'DVB-S2/MPEG-4' },
];
</script>

<template>
    <section>
        <div class="cont">
            <div class="map">
                <h1>Частоты Телекарта ТВ</h1>
                <img src="@/assets/Map_all.jpg" alt="Frequencies Telekarta TV" />
            </div>
            <div class="frequencies">
                <table>
                    <thead>
                        <tr>
                            <th>Частота (МГц)</th>
                            <th>Пол.</th>
                            <th>Скор. (ksps)</th>
                            <th>FEC</th>
                            <th>Стандарт</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in telekartaFrequencies" :key="index">
                            <td>{{ item.freq }}</td>
                            <td>{{ item.pol }}</td>
                            <td>{{ item.sr }}</td>
                            <td>{{ item.fec }}</td>
                            <td>{{ item.standard }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="instructions">
                <a :href="pdfPath1" target="_blank" rel="noopener noreferrer">
                    <p>📄 Инструкция по обновлению ПО для цифрового спутникового приемника Телекарта EVO 09 HD (Conax)</p>
                </a>
                <a :href="pdfPath2" target="_blank" rel="noopener noreferrer">
                    <p>📄 Инструкция по обновлению ПО для цифрового спутникового приемника Телекарта EVO 09 HD R2 (Conax)</p>
                </a>
                <a :href="pdfPath3" target="_blank" rel="noopener noreferrer">
                    <p>📄 Инструкция по обновлению ПО для цифрового спутникового приемника Телекарта EVO 09 HD (Irdeto)</p>
                </a>
            </div>
        </div>
    </section>
</template>
<style scoped>
    section{
        display: flex;
        justify-content: center;
    }
    .cont {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 85%;
        max-width: 1200px; /* Ограничиваем максимальную ширину */
        flex-wrap: wrap;
        margin-top: 50px;
    }
    
    /* УДАЛЯЕМ: ul li{ list-style-type: decimal; margin-top: 20px;} */
    
    .frequencies {
        display: flex;
        flex-basis: 100%;
        flex-direction: column; /* Для заголовка и таблицы */
        align-items: center;
        margin-top: 50px;
    }

    /* Добавляем контейнер для горизонтальной прокрутки на мобильных */
    .table-container { 
        overflow-x: auto;
        width: 100%;
    }

    /* Стили для таблицы */
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }
    th, td {
        border: 1px solid #ccc;
        padding: 10px 15px;
        text-align: center;
    }
    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tbody tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    .map {
        display: flex;
        flex-basis: 100%;
        flex-direction: column;
        align-items: center;
    }
    .map img {
        max-width: 100%;
        height: auto;
    }
    .satellite-info {
        margin-top: 10px;
        font-style: italic;
        color: #555;
    }
    .instructions {
        display: flex;
        flex-basis: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }
    .instructions a {
        margin: 5px 0;
        text-decoration: none;
        color: #007bff;
        padding: 5px;
        border-bottom: 1px dashed #007bff;
    }
    .instructions a p {
        margin: 0;
    }
</style>