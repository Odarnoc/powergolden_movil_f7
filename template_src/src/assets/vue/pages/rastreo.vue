<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block>
      <div class="d-title-cuenta">
        <p class="title-cuenta">Rastreo de pedidos.</p>
        <br />
      </div>

        <f7-row style="margin-bottom: 20px" v-if="bandera">
          <f7-col width="100">
            <label>Numero de pedido:</label>
            <input type="text" v-model="id">
          </f7-col>

          <f7-col width="100">
            <f7-button fill large class="mt-30" style="background-color: #49B7F3;" @click="datoEnvio()">Rastrear</f7-button>
          </f7-col>
        </f7-row>

        <f7-row style="margin-bottom: 20px" v-if="banderaDetalles">
          <f7-col>
            <h5>Detalles del pedido.</h5>
            <h6 style="margin-top:10px">Pedido numero: <b style="color:#49B7F3">{{id}}</b></h6>
            <p style="margin-top: 10px">Fecha de creacion: <b>{{creacion}}</b></p>
              <div style="text-align:center; margin-top: 30px">
                <h6><b>{{status}}.</b></h6>
                <i v-bind:class="icono" style="color: #49B7F3; margin-top: 15px; font-size: 35px"></i>
              </div>
            <f7-col width="100" style="margin-top: 80px">
              <f7-button fill large class="mt-30" style="background-color: #49B7F3;" @click="nuevoEnvio()">Rastrear otro pedido.</f7-button>
            </f7-col>
          </f7-col>

        </f7-row>
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
    seccionlineas
  },
  data() {
    return {
      id:"",
      status:"",
      creacion:"",
      banderaDetalles:false,
      bandera:true,
      icono:""
    };
  },
  created() {
    const self = this;
    const app = self.$f7;

  },
  methods: {
      datoEnvio(){
        const self = this;
        const app = self.$f7;

        var url = localStorage.getItem("url_server");
        
        if(self.id != ""){ 
        app.request.post(
          url + "rastreo-envio-movil.php",
          {
            venta_id: self.id
          },
          function result(data) {
            var json_data = JSON.parse(data);
            console.log(json_data);

            if(json_data['status'] == 'Recolección pendiente'){
              app.dialog.alert(json_data['status']+'. <i class="fas fa-dolly-flatbed" style="color: #49B7F3; font-size: 25px;"></i>','Estado del pedido.');
              self.status = json_data['status'];
              self.creacion = json_data['created'];
              self.bandera = false;
              self.banderaDetalles = true;
              self.icono = 'fas fa-dolly-flatbed';
            }

            if(json_data['status'] == 'Preparando envio'){
              app.dialog.alert(json_data['status']+'. <i class="fas fa-boxes" style="color: #49B7F3; font-size: 25px;"></i>','Estado del pedido.');
              self.status = json_data['status'];
              self.creacion = json_data['created'];
              self.bandera = false;
              self.banderaDetalles = true;
              self.icono = 'fas fa-boxes';
            }

            if(json_data['status'] == 'En tránsito'){
              app.dialog.alert(json_data['status']+'. <i class="fas fa-shipping-fast"></i>','Estado del pedido.');
              self.status = json_data['status'];
              self.creacion = json_data['created'];
              self.bandera = false;
              self.banderaDetalles = true;
              self.icono = 'fas fa-shipping-fast';
            }

            if(json_data['status'] == 'Entregado'){
              app.dialog.alert(json_data['status']+'. <i class="fas fa-box-open"></i>','Estado del pedido.');
              self.status = json_data['status'];
              self.creacion = json_data['created'];
              self.bandera = false;
              self.banderaDetalles = true;
              self.icono = 'fas fa-box-open';
            }

            if(json_data == 'error'){
              app.dialog.alert('Ingresa un numero de rastreo correcto.','Error');
            }

          },
        );
      }else{
        app.dialog.alert('Ingresa un numero de rastreo.','Error');
      }
      },
      nuevoEnvio(){
        const self = this;
        const app = self.$f7;

        self.banderaDetalles = false;
        self.bandera = true;
      }
  }
};
</script>