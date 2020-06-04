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
                    <p class="title-cuenta">Datos de envio.</p>
                    <p
                      class="small-text-cuenta"
                    >Proporciona tus datos de dirección para poder generar tu envío.</p>
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
                            <label>Direccion.</label>
                            <input
                              type="text"
                              class="form-control input-form-underline"
                              required
                              v-model="direccion"
                            />
                          </div>
                        </f7-col>

                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Ciudad.</label>
                            <input
                              type="text"
                              class="form-control input-form-underline"
                              required
                              v-model="ciudad"
                            />
                          </div>
                        </f7-col>

                        <f7-col width="100%">
                          <div class="floating-label-group">
                            <label>Colonia.</label>
                            <input
                              type="text"
                              class="form-control input-form-underline"
                              required
                              v-model="colonia"
                            />
                          </div>
                        </f7-col>

                        <f7-col width="50">
                          <div class="floating-label-group">
                            <label>Codigo Postal.</label>
                            <input
                              type="text"
                              class="form-control input-form-underline"
                              required
                              v-model="cp"
                            />
                          </div>
                        </f7-col>

                        <f7-col width="50">
                          <div class="floating-label-group">
                            <label>Pais.</label>
                            <select
                              autocomplete="false"
                              value="'BC'"
                              style="height:60%;"
                              class="form-control"
                              v-model="country"
                              required
                            >
                              <option value="MX">Mexico</option>
                              <option value="USA">Estados Unidos</option>
                            </select>
                          </div>
                        </f7-col>

                        <f7-col width="50" v-if="country == 'MX'">
                          <div class="floating-label-group">
                            <label>Estado.</label>
                            <select
                              autocomplete="false"
                              style="height:60%;"
                              class="form-control"
                              v-model="estadoMexico"
                              required
                            >
                              <option value="AG">Aguascalientes</option>
                              <option value="BC">Baja California Norte</option>
                              <option value="BS">Baja California Sur</option>
                              <option value="CM">Campeche</option>
                              <option value="CS">Chiapas</option>
                              <option value="CH">Chihuahua</option>
                              <option value="DF">Ciudad de Mexico</option>
                              <option value="CO">Coahuila</option>
                              <option value="CL">Colima</option>
                              <option value="DG">Durango</option>
                              <option value="GT">Guanajuato</option>
                              <option value="GR">Guerrero</option>
                              <option value="HG">Hidalgo</option>
                              <option value="JA">Jalisco</option>
                              <option value="MX">Estado de Mexico</option>
                              <option value="MI">Michoacan</option>
                              <option value="MO">Morelos</option>
                              <option value="NA">Nayarit</option>
                              <option value="NL">Nuevo Leon</option>
                              <option value="OA">Oaxaca</option>
                              <option value="PU">Puebla</option>
                              <option value="QT">Queretaro</option>
                              <option value="QR">Quintana Roo</option>
                              <option value="SL">San Luis Potosi</option>
                              <option value="SI">Sinaloa</option>
                              <option value="SO">Sonora</option>
                              <option value="TB">Tabasco</option>
                              <option value="TM">Tamaulipas</option>
                              <option value="TL">Tlaxcala</option>
                              <option value="VE">Veracruz</option>
                              <option value="YU">Yucatan</option>
                              <option value="ZA">Zacatecas</option>
                            </select>
                          </div>
                        </f7-col>

                        <f7-col width="50" v-else>
                          <div class="floating-label-group">
                            <label>Estado.</label>
                            <select
                              autocomplete="false"
                              style="height:60%;"
                              class="form-control"
                              v-model="estadosUnidos"
                              required
                            >
                              <option value="AL">Alabama</option>
                              <option value="AK">Alaska</option>
                              <option value="AZ">Arizona</option>
                              <option value="AR">Arkansas</option>
                              <option value="CA">California</option>
                              <option value="CO">Colorado</option>
                              <option value="CT">Connecticut</option>
                              <option value="DE">Delaware</option>
                              <option value="DC">District Of Columbia</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
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
          <f7-col width="100%">
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
      direccion: "",
      ciudad: "",
      colonia: "",
      estadoMexico: "",
      cp: "",
      country: "",
      estadosUnidos: ""
    };
  },
  created() {
    const self = this;
    const app = self.$f7;
  },
  methods: {
    confirmar() {
      const self = this;
      const app = self.$f7;
      var pais = "";

      if (self.validaciones()) {
        localStorage.setItem("direccion", self.direccion);
        localStorage.setItem("ciudad", self.ciudad);
        localStorage.setItem("colonia", self.colonia);
        localStorage.setItem("pais", self.country);
        if(self.country == 'MX'){
            localStorage.setItem("estado", self.estadoMexico);
        }else{
            localStorage.setItem("estado", self.estadosUnidos);
        }
        localStorage.setItem("codigop", self.cp);

        app.views.main.router.navigate("/resumenOficina/");
      }
    },
    validaciones() {
      const self = this;
      const app = self.$f7;

      if (self.direccion == "") {
        app.dialog.alert("Llenar el campo direccion", "PowerGolden");
        return false;
      }
      if (self.ciudad == "") {
        app.dialog.alert("Llenar el campo ciudad", "PowerGolden");
        return false;
      }
      if (self.colonia == "") {
        app.dialog.alert("Llenar el campo colonia", "PowerGolden");
        return false;
      }
      if (self.cp == "") {
        app.dialog.alert("Llenar el campo codigo postal", "PowerGolden");
        return false;
      }
      if (self.cp.length > 5 || self.cp.length < 5) {
        app.dialog.alert("Introducir un codigo postal valido", "PowerGolden");
        return false;
      }
      if (self.country == "") {
        app.dialog.alert("Seleccionar un pais", "PowerGolden");
        return false;
      }
      if (self.estadoMexico == "" && self.country=='MX') {
        app.dialog.alert("Seleccionar un estado", "PowerGolden");
        return false;
      }
      if (self.estadosUnidos == "" && self.country=='USA') {
        app.dialog.alert("Seleccionar un estado", "PowerGolden");
        return false;
      }
      return true;
    },

  }
};
</script>