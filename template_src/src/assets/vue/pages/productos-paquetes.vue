<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block style="margin-top: 0;">
      <div class="row">
        <div class="col-lg-12 col-md-12">
          <p class="title-sec mb-20">Seleccionar productos.</p>
          <p class="t4 two-lines">
            Total de productos:
            <b>{{ $store.state.paquete_cantidad }}</b>
          </p>
          <p class="t4 two-lines">
            Productos seleccionados:
            <b>{{ cantidadProducosSeleccionados }}</b>
          </p>
        </div>
      </div>

      <f7-row class="row" id="lista-productos">
        <f7-col
          v-bind:key="(item, index)"
          v-for="(item, index) in resultadoproducto"
          width="50"
          class="d-all-item-pro"
        >
          <div class="d-item-pro h-100" style="padding-bottom: 1rem;">
            <f7-row class="row">
              <f7-col>
                <div class="d-img-pro" style="padding: 0">
                  <img
                    style="width: 50%"
                    :src="
                      $store.state.url_server + 'productos_img/' + item.imagen
                    "
                    alt
                  />
                </div>
              </f7-col>
            </f7-row>
            <f7-row>
              <f7-col>
                <div class="d-info-pro" style="text-align: center">
                  <p class="t2">{{ item.nombre }}</p>
                  <p class="t1" :style="'color:' + item.color">Línea {{ item.linea }}</p>
                </div>
              </f7-col>
            </f7-row>
            <f7-row style="margin: 0 1rem">
              <f7-col>
                <f7-button
                  @click="decrementar(index)"
                  fill
                  style="margin:1rem 0;background-color: rgba(0,0,0,0.1);color: black;"
                >
                  <strong>-</strong>
                </f7-button>
              </f7-col>
              <f7-col>
                <p style="margin-top:1.5rem; text-align:center">{{ item.cant }}</p>
              </f7-col>
              <f7-col>
                <f7-button
                  @click="incrementar(index)"
                  fill
                  style="margin:1rem 0;background-color: rgba(0,0,0,0.1);color: black;"
                >
                  <strong>+</strong>
                </f7-button>
              </f7-col>
            </f7-row>
            <f7-row style="justify-content: center">
              <a
                class="btn-blue"
                style="background-color:#49B7F3; margin-top: 5px; width: 50%; text-align: center"
                role="button"
                @click="seleccionarProducto(index)"
                v-if="!item.selected"
              >
                <i style="color:white;" class="fas fa-check"></i>
              </a>
              <a
                v-else
                class="btn-blue"
                style="background-color:red; margin-top: 5px; width: 50%; text-align: center"
                role="button"
                @click="seleccionarProducto(index)"
              >
                <i style="color:white;" class="fas fa-times"></i>
              </a>
            </f7-row>
          </div>
        </f7-col>
      </f7-row>
    </f7-block>

    <div class="navbar-bottom" style="bottom: 55px;">
      <div class="d-btn-carrito" style="margin-top: 0px;">
        <f7-row>
          <f7-col>
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
      resultadoproducto: [],
      carrito: [],
      cantidadProducosSeleccionados: 0
    };
  },
  created() {
    const self = this;
    const app = self.$f7;

    self.productos();
  },
  methods: {
    productos() {
      const self = this;
      const app = self.$f7;

      var datos = {
        busqueda: ""
      };
      var url = localStorage.getItem("url_server");
      app.request.get(url + "lista-productos.php", datos, function result(
        data
      ) {
        var json_mensaje = JSON.parse(data);
        console.log(json_mensaje);
        json_mensaje.forEach(function(prod, index) {
          prod.cant = 1;
          prod.selected = false;
          //borrar esta linea
          prod.precio = prod.mxn;
          self.resultadoproducto.push(prod);
        });
      });
    },
    incrementar(index) {
      const self = this;
      const app = self.$f7;

      self.resultadoproducto[index].cant = parseInt(
        self.resultadoproducto[index].cant
      );
      self.resultadoproducto[index].cant++;
      self.generarCarrito();
    },
    decrementar(index) {
      const self = this;
      const app = self.$f7;
      self.resultadoproducto[index].cant = parseInt(
        self.resultadoproducto[index].cant
      );
      if (self.resultadoproducto[index].cant == 1) {
        return;
      }
      self.resultadoproducto[index].cant--;
      self.generarCarrito();
    },
    seleccionarProducto(index) {
      const self = this;
      const app = self.$f7;

      self.resultadoproducto[index].selected = !self.resultadoproducto[index]
        .selected;
      self.generarCarrito();
    },
    confirmar() {
      const self = this;
      const app = self.$f7;

      let compra = {
        carrito: [],
        paquetes: []
      };

      var url = localStorage.getItem("url_server");
      app.request.get(
        url + "promocionDisponibleEI.php",
        {
          user_id: self.$store.state.user_id,
          pack_id: self.$store.state.paquete_id
        },
        function result(data) {
          var json_mensaje = JSON.parse(data);
          var extras = 0;
          if (json_mensaje.promocion) {
            extras =
              parseInt(json_mensaje.gratis) +
              self.$store.state.paquete_cantidad;
            if (self.cantidadProducosSeleccionados == extras) {
              localStorage.setItem(
                "carrito-oficina",
                JSON.stringify(self.carrito)
              );
              app.views.main.router.navigate('/direccionOficina/'); 
              //location.href = "nuevo-envio-oficina.php";
            } else {
              app.dialog.alert(
                "Debes seleccionar " +
                  self.$store.state.paquete_cantidad +
                  " productos más " +
                  json_mensaje.gratis +
                  " gratis",
                "Error"
              );
            }
          } else {
            if (
              self.cantidadProducosSeleccionados ==
              self.$store.state.paquete_cantidad
            ) {
              localStorage.setItem(
                "carrito-oficina",
                JSON.stringify(self.carrito)
              );
              app.views.main.router.navigate('/direccionOficina/'); 
              //location.href = "nuevo-envio-oficina.php";
            } else {
              app.dialog.alert(
                "Debes seleccionar " +
                  self.$store.state.paquete_cantidad +
                  " productos",
                "Error"
              );
            }
          }
        }
      );
    },
    generarCarrito() {
      const self = this;
      const app = self.$f7;

      self.carrito = [];
      self.cantidadProducosSeleccionados = 0;
      self.resultadoproducto.forEach(producto => {
        if (producto.selected) {
          self.carrito.push(producto);
          self.cantidadProducosSeleccionados += producto.cant;
        }
      });
    }
  }
};
</script>
