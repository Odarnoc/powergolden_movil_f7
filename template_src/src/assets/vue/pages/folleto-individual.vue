<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block>
      <div class="d-title-cuenta">
        <p class="title-cuenta">Folletos electronicos.</p>
        <br />
      </div>

        <f7-row style="margin-bottom: 20px">
          <f7-col width="100">
            <div class="d-img-carrito">
              <img style="width: 60%;" :src="$store.state.url_server+'images/folletos/'+imagen" alt="">
            </div>
          </f7-col>

          <f7-col width="100">
            <div class="d-info-carrito" style="text-align: left;">
              <p class="t1 one-line">{{nombre}}</p>
              <p style="margin-top: 10px;" class="t2 one-line" >{{descripcion}}</p>
            </div>
          </f7-col>
          </f7-row>

          <f7-row style="margin-top: 15px">
            <a class="btn btn-blue" @click=" dervargaImagen()" role="button"><i class="fas fa-arrow-circle-down"></i>Ver imagen de folleto.</a>
          </f7-row>
          <f7-row style="margin-top: 15px">
            <a class="btn btn-blue" @click="decargaFolleto()" role="button"><i class="fas fa-arrow-circle-down"></i>Descargar PDF de folleto.</a>
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
      nombre: "",
      descripcion: "",
      imagen: "",
      pdf: "",
    };
  },
  created() {
    const self = this;
    const app = self.$f7;

    self.verFolleto();
  },
  methods: {
      verFolleto(){
        const self = this;
        const app = self.$f7;

        var url = localStorage.getItem("url_server");
        app.request.post(
          url + "folleto-individual-movil.php",
          {
            folleto_id:self.$store.state.folleto_id
          },
          function result(data) {
            var json_data = JSON.parse(data);
              self.nombre = json_data[0]['nombre'];
              self.descripcion = json_data[0]['descripcion'];
              self.imagen = json_data[0]['imagen'];
              self.pdf = json_data[0]['pdf'];
          },
          function error(xhr, status) {
          }
        );
      },
      decargaFolleto(){
        const self = this;
        const app = self.$f7;

      var url = self.$store.state.url_server;
      var urlfolleto = url+"/images/folletos/documentos/"+self.pdf;
      window.open(encodeURI(urlfolleto), '_system');
      },
      dervargaImagen(){
        const self = this;
        const app = self.$f7;

      var url = self.$store.state.url_server;
      var urlfolleto = url+"/images/folletos/"+self.imagen;
      window.open(encodeURI(urlfolleto), '_system');

      /*var fileTransfer = new FileTransfer();
      var url = self.$store.state.url_server;
      var urlfolleto = url+"/images/folletos/documentos/"+self.pdf;
        // !! Asume filePath es una ruta válida en el dispositivo var fileTransfer = new FileTransfer();
        var uri = encodeURI (url+"/images/folletos/"+self.imagen);
        var fileURL = cordova.file.dataDirectory + self.imagen;

        fileTransfer.download(
            uri,
            fileURL,
            function(entry) {
                console.log("download complete: " + entry.toURL());
            },
            function(error) {
                console.log("download error source " + error.source);
                console.log("download error target " + error.target);
                console.log("download error code" + error.code);
            },
            false,
            {
            }
        );*/
      }
  }
};
</script>