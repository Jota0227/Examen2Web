@extends("layouts.master")

@section("contenido")
  <div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <span>Registrar Lectura</span>
        </div>
        <div class="card-body">
            <div class="mb-3">
                <label for="fecha-txt" class="form-label">Fecha</label>
                <input type="date" id="fecha-txt" class="form-control">
            </div>
          <div class="mb-3">
            <label for="hora-txt" class="form-label">Hora</label>
            <input type="text" id="hora-txt" class="form-control">
          </div>
          <div class="mb-3">
            <label for="medidor-select" class="form-label">Medidor</label>
              <select class="form-select" id="medidor-select">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
              </select>
          </div>
          <div class="mb-3">
            <label for="direccion-txt" class="form-label">Direccion</label>
            <input type="text" class="form-control" id="direccion-txt">
          </div>
          <div class="mb-3">
            <label for="valor-txt" class="form-label">Valor</label>
            <input type="number" class="form-control" id="valor-txt">
          </div>
          <div class="mb-3">
            <label for="tipo-select" class="form-label">Tipo de medida</label>
              <select class="form-select" id="tipo-select">
                <option value="kilowatts">Kilowatts</option>
                <option value="atts">Watts</option>
                <option value="temperatura">Temperatura</option>
              </select>
          </div>
        </div>
        <div class="card-footer d-grid gap-1">
          <button id="registrar-btn" class="btn btn-primary">Registrar</button>
        </div>
      </div>
    </div>
  </div>
@endsection
<!--Esto define el contenido de la seccion javascript del master-->
@section('javascript')
  <script src="{{asset('js/servicios/medicionesService.js')}}"></script>
  <script src="{{asset('js/registrar_lectura.js')}}"></script> 
@endsection