@extends("layouts.master")

@section("contenido")
  <div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card_header bg-primary text white">
            <span>Filtrar</span>
        </div>
        <div class="card-body">
          <select class="form-select" id="filtro-cbx">
            <option value="todos">Todos</option>
            <option value="kilowatts">Kilowatts</option>
            <option value="atts">Watts</option>
            <option value="temperatura">Temperatura</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="bg-primary text-white">
          <tr>
            <td>Fecha</td>
            <td>Hora</td>
            <td>Medidor</td>
            <td>Valor</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody id="tbody-mediciones">

        </tbody>
      </table>
    </div>
  </div>
@endsection

@section('javascript')
  <script src="{{asset('js/servicios/medicionesService.js')}}"></script>
  <script src="{{asset('js/mediciones_existentes.js')}}"></script>
@endsection