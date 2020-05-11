<template>
  <f7-page class="sec-gray">
    <!--ingresa tu html aqui -->
    <f7-navbar>
      <topmenu></topmenu>
    </f7-navbar>

    <f7-block style="margin-bottom:3rem;margin-top:0">
      <div class="d-title-cuenta">
          <p class="title-cuenta">Perfil</p>
          <p class="small-text-cuenta">Deberás ingresar algunos datos para completar tu registro en la plataforma.</p>
      </div>

      <form class="form-perfil">
        <br>
        <p class="sub-title-cuenta">Datos personales</p>
        <div class="floating-label-group">
            <label>Nombre </label>
            <input v-model="name" type="text" id="nombre" class="">
        </div>
        <div class="floating-label-group">
            <label>Apellidos</label>
            <input v-model="last_name" type="text" id="apellido" class="form-control input-form-underline">
        </div>
        <div class="floating-label-group">
            <label>Correo electrónico</label>
            <input v-model="email" type="text" id="correo" class="form-control input-form-underline">
        </div>
        <div class="floating-label-group">
            <label>Teléfono</label>
            <input v-model="phone" type="text" id="telefono" class="form-control input-form-underline">
        </div>
        <div class="floating-label-group">
            <label>Fecha de nacimiento</label>
            <input v-model="bdate" type="date" id="nacimiento" class="form-control input-form-underline" required="">
        </div>
        <br>
        <p class="sub-title-cuenta">Dirección</p>
        <div class="floating-label-group">
            <label>Dirección</label>
            <input v-model="dir" type="text" id="direccion" class="form-control input-form-underline" required="">
        </div>
        <div class="floating-label-group">
            <label>Estado</label>
            <input v-model="estado" type="text" id="estado" class="form-control input-form-underline" required="">
        </div>
        <div class="floating-label-group">
            <label>Ciudad</label>
            <input v-model="ciudad" type="text" id="ciudad" class="form-control input-form-underline" required="">
        </div>
        <div class="floating-label-group">
            <label>Código postal</label>
            <input v-model="cp" type="text" id="cp" class="form-control input-form-underline" required="">
        </div>
        <div class="form-group">
            <f7-button fill large class="mt-30" style="background-color: #49B7F3;" @click="guardar()">Guardar</f7-button>
        </div>
      </form>

    </f7-block>
    
    
    <toolbar seleccion="3"></toolbar>
    
  </f7-page>
</template>
<script>
  import topmenu from "./menu-bar";
  import toolbar from "./toolbar";
  export default {
    components: {
      topmenu,
      toolbar,
    },
    data() {
      return {
        name:'',
        last_name:'',
        email:'',
        phone:'',
        bdate:'',
        dir:'',
        estado:'',
        ciudad:'',
        cp:'',
      };
    },
    created() {
      const self = this;
      const app = self.$f7;
      var url = localStorage.getItem("url_server");
      app.request.get(
        url + "obtener-info-perfil.php",
        {user_id:self.$store.state.user_id},
        function result(data) {
          var json_data = JSON.parse(data);
          console.log(json_data);
          self.name = json_data.nombre;
          self.last_name = json_data.apellidos;
          self.email = json_data.correo;
          self.phone = json_data.telefono;
          self.bdate = json_data.nacimiento;
          self.dir = json_data.direccion;
          self.estado = json_data.estado;
          self.ciudad = json_data.ciudad;
          self.cp = json_data.codigop;
        },
        function error(xhr, status) {
          
        }
      );
    },
    methods: {
      guardar(){
        const self = this;
        const app = self.$f7;
        let datos = {
            user_id:self.$store.state.user_id,
            name: self.name,
            last_name: self.last_name,
            phone: self.phone,
            email: self.email,
            address: self.dir,
            state: self.estado,
            city: self.ciudad,
            date: self.bdate,
            cp: self.cp
        };
        var url = localStorage.getItem("url_server");
        app.request.post(
          url + "perfil.php",
          datos,
          function result(data) {
            app.preloader.hide();
            var json_mensaje = JSON.parse(data);
            console.log(json_mensaje);
            if (json_mensaje.error != undefined) {
              app.dialog.alert(json_mensaje.mensaje,'Error');
            } else {
              app.dialog.alert(json_mensaje.mensaje,'Éxito');
            }
            console.log(data);
          },
          function error(xhr, status) {
            
          }
        );

      },
    },
  };
</script>