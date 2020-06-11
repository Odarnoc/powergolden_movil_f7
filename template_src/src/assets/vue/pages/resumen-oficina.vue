<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block style="margin-top: 0;">
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-6 bg-gray lista-productos-movil">
            <div class>
              <div class="row">
                <div class="col-lg-12 col-md-12">
                  <div class="d-title-cuenta">
                    <p class="title-cuenta">Resumen de compras.</p>
                  </div>
                </div>
              </div>

              <div class="row row-form-perfil footer-movil">
                <div class="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                  <div id="lista-productos" style="margin-bottom:4rem;">
                    <div class="d-item-carrito">
                      <f7-row class="row">
                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Datos de envio.</label>
                            <p
                              class="small-text-cuenta"
                            >{{direccion}}, {{colonia}}, {{ciudad}}, {{estado}}, C.P.{{codigo}}, {{pais}}.</p>
                          </div>
                        </f7-col>
                      </f7-row>

                      <f7-row style="margin-top: 20px;" class="row">
                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Kit seleccionado.</label>
                            <div class="d-item-carrito">
                              <f7-row class="row">
                                <f7-col width="30">
                                  <div class="d-img-carrito">
                                    <img
                                      :src="$store.state.url_server+'images/paquetes/'+imagenPaquete"
                                    />
                                  </div>
                                </f7-col>
                                <f7-col width="70">
                                  <div class="d-info-carrito">
                                    <p class="t1 one-line">{{nombrePaquete}}</p>
                                    <p class="t4 one-line">{{descripcionPaquete}}</p>
                                  </div>
                                </f7-col>
                              </f7-row>
                            </div>
                          </div>
                        </f7-col>
                      </f7-row>

                      <f7-row style="margin-top: 20px;" class="row">
                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Productos seleccionados.</label>
                            <div
                              class="d-item-carrito"
                              v-bind:key="(item, index)"
                              v-for="(item, index) in carrito"
                            >
                              <f7-row class="row">
                                <f7-col width="30">
                                  <div class="d-img-carrito">
                                    <img
                                      :src="$store.state.url_server+'productos_img/'+item.imagen"
                                    />
                                  </div>
                                </f7-col>
                                <f7-col width="70">
                                  <div class="d-info-carrito">
                                    <p class="t1 one-line">{{item.nombre}}</p>
                                    <p class="t4 one-line">Total de productos: {{item.cant}}</p>
                                  </div>
                                </f7-col>
                              </f7-row>
                            </div>
                          </div>
                        </f7-col>
                      </f7-row>

                      <f7-row class="row">
                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Gastos del pedido..</label>
                            <p class="small-text-cuenta">
                              Subtotal: $
                              <b>{{precioPaquete-precioPaquete*16/100}}</b>
                            </p>
                            <p class="small-text-cuenta">
                              IVA: $
                              <b>{{precioPaquete*16/100}}</b>
                            </p>
                            <p class="small-text-cuenta">
                              Descuento: $
                              <b>{{descuento}}</b>
                            </p>
                            <p class="small-text-cuenta">
                              Envio: $
                              <b>{{envio}}</b>
                            </p>
                          </div>
                        </f7-col>
                      </f7-row>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </f7-block>

    <div class="navbar-bottom" style="bottom: 55px;">
      <div class="d-btn-carrito" style="margin-top: 0px;">
        <f7-row>
          <f7-col width="50">
            <p class="t1">TOTAL:</p>
            <p class="t2" id="total2">${{total}}</p>
          </f7-col>
          <f7-col width="50">
            <f7-button
              large
              style="background-color: #49B7F3;color:#fff;"
              @click="confirmar()"
            >Continuar</f7-button>
          </f7-col>
        </f7-row>
      </div>
    </div>

    <toolbar seleccion="2"></toolbar>
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
      carrito: [],
      direccion: "",
      ciudad: "",
      colonia: "",
      estado: "",
      codigo: "",
      pais: "",
      total: 0,
      nombrePaquete: "",
      precioPaquete: 0,
      imagenPaquete: "",
      descripcionPaquete: "",
      descuento: 0,
      envio: 300
    };
  },
  created() {
    const self = this;
    const app = self.$f7;

    self.paqueteSeleccionado();

    self.carrito = JSON.parse(localStorage.getItem("carrito-oficina"));
    self.direccion = localStorage.getItem("direccion");
    self.ciudad = localStorage.getItem("ciudad");
    self.colonia = localStorage.getItem("colonia");
    self.estado = localStorage.getItem("estado");
    self.codigo = localStorage.getItem("codigop");
    self.pais = localStorage.getItem("pais");
  },
  methods: {
    confirmar() {
      const self = this;
      const app = self.$f7;

      self.$store.state.tipoVenta=true;
      app.views.main.router.navigate("/metodosPago/");
    },
    paqueteSeleccionado() {
      const self = this;
      const app = self.$f7;

      var url = localStorage.getItem("url_server");
      app.request.post(
        url + "paquetes-oficina-movil.php",
        { id: self.$store.state.paquete_id },
        function result(data) {
          var json_mensaje = JSON.parse(data);
          self.nombrePaquete = json_mensaje[0]["nombre"];
          self.precioPaquete = json_mensaje[0]["precio"];
          self.imagenPaquete = json_mensaje[0]["imagen"];
          self.descripcionPaquete = json_mensaje[0]["descripcion"];

          self.total =  parseInt(self.precioPaquete) + parseInt(self.envio);
          self.descuento = localStorage.getItem("descuento");

          localStorage.setItem('total',self.total);

          console.log(self.nombrePaquete);

          console.log(json_mensaje);
        }
      );
    }
  }
};
</script>