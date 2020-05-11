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
                    <div class="">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="d-title-cuenta">
                                    <p class="title-cuenta">Carrito</p>
                                    <p class="small-text-cuenta">Productos en tu carrito de compras <b id="cantProds">({{carrito.length}})</b></p>
                                </div>
                            </div>

                        </div>

                        <div class="row row-form-perfil footer-movil">

                            <div class="col-lg-8 col-md-8 offset-lg-2 offset-md-2">

                                <div id="lista-productos" style="margin-bottom:4rem;">

                                    <div class="d-item-carrito" v-bind:key="(item, index)" v-for="(item, index) in carrito">
                                        <f7-row class="row">
                                            <f7-col width="30">
                                                <div class="d-img-carrito">
                                                    <img :src="'https://powergolden.com.mx/productos_img/'+item.imagen">
                                                </div>
                                            </f7-col>
                                            <f7-col width="70">
                                                <div class="d-info-carrito">
                                                    <p class="t1 one-line">{{item.nombre}}</p>
                                                    <p class="t2 one-line">{{item.descripcion}}</p>
                                                    <p class="t3">${{item.precio}}</p>
                                                    <f7-row>
                                                        <f7-col width="20">
                                                            <f7-button @click="decrementar(index)" fill style="margin:1rem 0;background-color: rgba(0,0,0,0.1);color: black;"><strong>-</strong></f7-button>
                                                        </f7-col>
                                                        <f7-col width="40">
                                                            <input disabled type="number" style="text-align: center" class="form-control cant-number" v-model="item.cant" placeholder="">
                                                        </f7-col>
                                                        <f7-col width="20">
                                                            <f7-button @click="incrementar(index)" fill style="margin:1rem 0;background-color: rgba(0,0,0,0.1);color: black;"><strong>+</strong></f7-button>
                                                        </f7-col>
                                                        <f7-col width="20">
                                                        </f7-col>
                                                    </f7-row>
                                                    <a class="btn btn-link-carrito" @click="eliminar(index)" role="button">Eliminar producto</a>
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
                    <f7-button large style="background-color: #49B7F3;color:#fff;" @click="confirmar()">Continuar</f7-button>
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
      seccionlineas,
    },
    data() {
      return {
          carrito:[],
          total:0,
      };
    },
    created() {
        const self = this;
        const app = self.$f7;
        self.carrito = JSON.parse(localStorage.getItem('carrito'));
        self.generarTotal();
    },
    methods: {
        generarTotal(){
            const self = this;
            const app = self.$f7;
            self.total=0;
            self.carrito.forEach(function(item, index) {
                var totalTemp = parseFloat(item.precio) * parseInt(item.cant);
                self.total += totalTemp;
            });
        },
        eliminar(index){
            const self = this;
            const app = self.$f7;
            console.log(index);
            self.carrito.splice(parseInt(index), 1);
            localStorage.setItem('carrito', JSON.stringify(self.carrito));
            self.generarTotal();
        },
        incrementar(index){
            const self = this;
            const app = self.$f7;
            self.carrito[index].cant = parseInt(self.carrito[index].cant);
            self.carrito[index].cant++;
            localStorage.setItem('carrito', JSON.stringify(self.carrito));
            self.generarTotal();
        },
        decrementar(index){
            const self = this;
            const app = self.$f7;
            self.carrito[index].cant = parseInt(self.carrito[index].cant);
            if(self.carrito[index].cant == 1){
                return;
            }
            self.carrito[index].cant--;
            localStorage.setItem('carrito', JSON.stringify(self.carrito));
            self.generarTotal();
        },
        confirmar(){
            const self = this;
            const app = self.$f7;
            app.preloader.show();
            var url = localStorage.getItem("url_server");
            app.request.post(
                url + "realizarCompra.php",
                { carrito: self.carrito, total: self.total },
                function result(data) {
                    app.preloader.hide();
                    var json_mensaje = JSON.parse(data);
                    if (json_mensaje.error != undefined) {
                        app.dialog.alert(json_mensaje.mensaje,'Error');
                    } else {
                        app.dialog.alert(json_mensaje.mensaje,'Éxito');
                        self.carrito = [];
                        localStorage.setItem('carrito', JSON.stringify(self.carrito));
                        self.generarTotal();
                    }
                },
                function error(xhr, status) {
                    app.preloader.hide();
                }
            );
        },
    },
  };
</script>