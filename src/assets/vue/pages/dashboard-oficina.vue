<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block>
      <f7-row>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">357</p>
              <p class="t2">Rango obtenido</p>
          </div>
        </f7-col>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">15</p>
              <p class="t2">Personas en tu red</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">4</p>
              <p class="t2">Puntos personales</p>
          </div>
        </f7-col>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">401</p>
              <p class="t2">Puntos grupales</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">4</p>
              <p class="t2">Negocio personal</p>
          </div>
        </f7-col>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">591</p>
              <p class="t2">Negocio grupal</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">74,225</p>
              <p class="t2">Bonificaciones</p>
          </div>
        </f7-col>
        <f7-col>
          <div class="clearfix d-item-num-oficina">
              <p class="t1">37%</p>
              <p class="t2">Personas activas</p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Indicadores</p>
              <p class="sub-title-chart-oficina">Periodo 1901 respecto Periodo 1812</p>
              <div class="row">
                  <div class="col-lg-4 col-md-4">
                      <div class="d-item-chart-pie">
                          <div class="d-chart-pie">
                              <div id="pie1" class="chart" data-percent="86">
                                  <span class="percent">86</span>
                              </div>
                          </div>
                          <p class="t1">Actividad calificada</p>
                          <p class="t2">0/713</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                      <div class="d-item-chart-pie">
                          <div class="d-chart-pie">
                              <span id="pie2" class="chart" data-percent="50">
                                  <span class="percent">50</span>
                              </span>
                          </div>
                          <p class="t1">Actividad total</p>
                          <p class="t2">0/713</p>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-4">
                      <div class="d-item-chart-pie">
                          <div class="d-chart-pie">
                              <span id="pie3" class="chart" data-percent="29">
                                  <span class="percent">29</span>
                              </span>
                          </div>
                          <p class="t1">Crecimiento personas</p>
                          <p class="t2">0/713</p>
                      </div>
                  </div>
              </div>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Importe</p>
              <p class="sub-title-chart-oficina mb-4">Estadística de compra</p>
              <canvas height="300" id="chart-importe"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Puntos</p>
              <p class="sub-title-chart-oficina mb-4">Estadística de compra</p>
              <canvas height="300" id="chart-puntos"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Valor negocio</p>
              <p class="sub-title-chart-oficina mb-4">Estadística de compra</p>
              <canvas height="300" id="chart-valor-negocio"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Incorporaciones personales</p>
              <p class="sub-title-chart-oficina mb-4">Estadística</p>
              <canvas height="300" id="chart-incorporaciones"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Bonificaciones</p>
              <p class="sub-title-chart-oficina mb-4">Estadística</p>
              <canvas height="300" id="chart-bonificaciones"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Febrero 2020</p>
              <p class="sub-title-chart-oficina mb-4">Estadística</p>
              <canvas height="300" id="chart-febrero"></canvas>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 20px;">
        <f7-col>
          <div class="d-grafica-oficina h-100">
              <p class="title-chart-oficina">Informativo</p>
              <p class="sub-title-chart-oficina mb-3">Acumulado historico de bonificaciones</p>
              <p class="acumulado">$3,089,655.<sup>00</sup> </p>
          </div>
        </f7-col>
      </f7-row>
      <f7-row style="margin-bottom: 60px;">
        <f7-col>
          <div class="d-grafica-oficina">
              <p class="title-chart-oficina">Informativo</p>
              <p class="sub-title-chart-oficina mb-3">Direcciones importantes</p>  
              <p class="t2">Tu página personal</p>
              <a href="">http://powergolden.club/link/page</a>
              <p class="t2 mt-2">Tu tienda virtual</p>
              <a href="">http://powergolden.club/link/page</a>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>

    
    <toolbar></toolbar>
    
  </f7-page>
</template>
<script>
  import topmenu from "./menu-bar";
  import toolbar from "./toolbar";
  import Dom7 from "dom7/dist/dom7.js";
  import Chart from 'chart.js/dist/Chart.js';
  import EasyPieChart from "easy-pie-chart/dist/easypiechart.js";
  var $$ = Dom7;
  export default {
    components: {
      topmenu,
      toolbar
    },
    data() {
      return {
        planetChartData: {
          type: 'line',
          data: {
              datasets: [{
                  label: 'Importe',
                  data: [2500, 5000, 7500, 10000, 15000, 20000],
                  fill: false,
                  borderColor: 'rgba(54, 162, 235, 0.2)',
                  backgroundColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)'
                  ]
                  
              }],
              labels: ['2015', '2016', '2017', '2018', '2019', '2020']
          },
          options: {

              legend: {
                  display: false
              },
              scales: {
                  yAxes: [{
                      ticks: {
                          suggestedMin: 50,
                          suggestedMax: 100
                      }
                  }]
              }
          }
        }
      };
    },
    mounted () {
      this.createChart('chart-importe', this.planetChartData);
      this.createChart('chart-puntos', this.planetChartData);
      this.createChart('chart-valor-negocio', this.planetChartData);
      this.createChart('chart-incorporaciones', this.planetChartData);
      this.createChart('chart-bonificaciones', this.planetChartData);
      this.createChart('chart-febrero', this.planetChartData);
      var element1 = document.querySelector('#pie1');
      var element2 = document.querySelector('#pie2');
      var element3 = document.querySelector('#pie3');
      const configpie= {
                size: 180,
                barColor: '#49B7F3',
                trackColor: '#F4F4F4',
                lineWidth: 5,
                lineCap: 'circle',
            };
      new EasyPieChart(element1,configpie);
      new EasyPieChart(element2,configpie);
      new EasyPieChart(element3,configpie);
    },
    created() {
      
    },
    methods: {
      createChart(chartId, chartData) {
        const ctx = document.getElementById(chartId);
        const myChart = new Chart(ctx, {
          type: chartData.type,
          data: chartData.data,
          options: chartData.options,
        });
      }
    },
  };
</script>