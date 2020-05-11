<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block >
      <div class="d-title-cuenta">
          <p class="title-cuenta">Reportes</p>
      </div>
        <f7-row>
          <f7-col width="80" style="text-align: center;">
            <f7-list-input style="list-style: none; text-align: center;"
              type="datepicker"
              placeholder="Seleccionar rango"
              readonly
              :calendar-params="{ dateFormat: 'dd-mm-yyyy ', rangePicker: true }"
            ></f7-list-input>
          </f7-col>
          <f7-col width="20" class="form-group text-center">
              <f7-button class="btn-search" @click="buscar()" style="margin-top:1rem" role="button"><img src="static/icon-search-white.svg" alt=""></f7-button>
          </f7-col>
        </f7-row>

        <div class="card data-table">
          <table>
            <thead>
              <tr>
                <th class="label-cell">Fecha de venta</th>
                <th class="numeric-cell">Nombre de cliente</th>
                <th class="numeric-cell">Estatus</th>
                <th class="numeric-cell">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="label-cell">14-06-2020</td>
                <td class="numeric-cell">Gabriel Reyes</td>
                <td class="numeric-cell"><i style="color: green;" class="far fa-check-circle"></i></td>
                <td class="numeric-cell">$1200</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">12-06-2020</td>
                <td class="numeric-cell">Carmen Gonzalez</td>
                <td class="numeric-cell"><i style="color: red;" class="far fa-times-circle"></i></td>
                <td class="numeric-cell">$600</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">10-05-2020</td>
                <td class="numeric-cell">Mario Torres</td>
                <td class="numeric-cell"><i style="color: green;" class="far fa-check-circle"></i></td>
                <td class="numeric-cell">$890</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">09-05-2020</td>
                <td class="numeric-cell">Maria Perez</td>
                <td class="numeric-cell"><i style="color: green;" class="far fa-check-circle"></i></td>
                <td class="numeric-cell">$2500</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">05-05-2020</td>
                <td class="numeric-cell">Juan Herrera</td>
                <td class="numeric-cell"><i style="color: green;" class="far fa-check-circle"></i></td>
                <td class="numeric-cell">$1800</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">29-04-2020</td>
                <td class="numeric-cell">Carlos Alberto</td>
                <td class="numeric-cell"><i style="color: red;" class="far fa-times-circle"></i></td>
                <td class="numeric-cell">$300</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td class="label-cell">20-04-2020</td>
                <td class="numeric-cell">Maria Hernandez</td>
                <td class="numeric-cell"><i style="color: red;" class="far fa-times-circle"></i></td>
                <td class="numeric-cell">$3200</td>
              </tr>
            </tbody>
          </table>
        </div>
          
    </f7-block>

    <toolbar seleccion="1"></toolbar>

          <f7-fab style="margin-bottom: 70px; font-family: Poppins;" position="center-bottom" slot="fixed" text="Reporte">
            <i class="fas fa-file-download"></i>
          </f7-fab>

            <f7-fab position="right-bottom" slot="fixed" style="margin-bottom: 65px; font-family: Poppins;">
              <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
              <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></f7-icon>
            </f7-fab>
          
  </f7-page>
</template>
<script>
  import topmenu from "./menu-bar";
  import toolbar from "./toolbar";
  import seccionbusqueda from "./seccion-busqueda";
  import seccionlineas from "./seccion-lineas";
  export default {
    components: {
      topmenu,
      toolbar,
      seccionbusqueda,
      seccionlineas,
    },
    data() {
      return {
        populares:[]
      };
    },
    created() {
      const self = this;
      const app = self.$f7;
      var calendarRange = app.calendar.create({
        inputEl: '#demo-calendar-range',
        rangePicker: true
      });
      var url = localStorage.getItem("url_server");
      app.request.get(
        url + "productos-populares.php",
        {},
        function result(data) {
          var json_data = JSON.parse(data);
          console.log(json_data);
          self.populares = json_data;
        },
        function error(xhr, status) {
          
        }
      );
    },
    methods: {
      navegar(categoria){
        const self = this;
        const app = self.$f7;
        self.$store.state.catInicial = categoria;
        app.views.main.router.navigate('/buscar_filtrar'); 
      },
      verProds(){
        const self = this;
        const app = self.$f7;
        app.views.main.router.navigate('/productos/'); 
      },
      verProd(id){
        const self = this;
        const app = self.$f7;
        console.log(id);
        self.$store.state.prod_id = id;
        app.views.main.router.navigate('/productoIndividual/');
      },
    },
  };
  
</script>