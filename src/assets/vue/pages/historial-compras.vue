<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block >
      <div class="d-title-cuenta">
          <p class="title-cuenta">Mis compras</p>
          <br>
      </div>
          
        <f7-row style="margin-bottom: 20px">
            <f7-col width="20">
                <div  class="d-img-carrito">
                    <img style="width: 100%" src="static/productos/linea-tinta/vr-less.jpg">
                </div>
            </f7-col>
            <f7-col width="80">
                <div class="d-info-carrito" style="text-align: left;">
                    <p class="t1 one-line">VR-LESS</p>
                    <p class="t2 one-line">Extracto herbal de 950 ml. No consumir café, sal, refrescos, carnes rojas, alcohol, irritantes, leche y sus derivados.</p>
                    <p class="t2 one-line">Cantidad: 3</p>
                    <p class="t3">$300</p>
                </div>
            </f7-col>
        </f7-row>
        <f7-row style="margin-bottom: 20px">
            <f7-col width="20">
                <div  class="d-img-carrito">
                    <img style="width: 100%" src="static/productos/linea-tinta/ar.jpg">
                </div>
            </f7-col>
            <f7-col width="80">
                <div class="d-info-carrito" style="text-align: left;">
                    <p class="t1 one-line">A&R</p>
                    <p class="t2 one-line">Extracto herbal de 950 ml. No consumir café, sal, refrescos, carnes rojas, alcohol, irritantes, leche y sus derivados.</p>
                    <p class="t2 one-line">Cantidad: 2</p>
                    <p class="t3">$300</p>
                </div>
            </f7-col>
        </f7-row>
        <f7-row style="margin-bottom: 20px">
            <f7-col width="20">
                <div  class="d-img-carrito">
                    <img style="width: 100%" src="static/productos/linea-yin-yang/vgr.jpg">
                </div>
            </f7-col>
            <f7-col width="80">
                <div class="d-info-carrito" style="text-align: left;">
                    <p class="t1 one-line">VGR</p>
                    <p class="t2 one-line">Frasco con 30 cápsulas. Disminuir el consumo de sal, irritantes, refresco, leche y sus derivados. No fumar.</p>
                    <p class="t2 one-line">Cantidad: 1</p>
                    <p class="t3">$300</p>
                </div>
            </f7-col>
        </f7-row>
        <f7-row style="margin-bottom: 20px">
            <f7-col width="20">
                <div  class="d-img-carrito">
                    <img style="width: 100%" src="static/productos/linea-verde/collagen.png">
                </div>
            </f7-col>
            <f7-col width="80">
                <div class="d-info-carrito" style="text-align: left;">
                    <p class="t1 one-line">Collagen</p>
                    <p class="t2 one-line">Frasco con 60 capletas. No consumir café, sal, refrescos, carnes rojas, alcohol. irritantes, leche y sus derivados. No consumirse durante el embarazo.</p>
                    <p class="t2 one-line">Cantidad: 5</p>
                    <p class="t3">$300</p>
                </div>
            </f7-col>
        </f7-row>
        <br>
    </f7-block>

    <toolbar seleccion="1"></toolbar>
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