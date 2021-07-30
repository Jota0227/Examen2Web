<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MedicionesController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get("mediciones/get", [MedicionesController::class, "getMediciones"]);

Route::get("mediciones/filtrar", [MedicionesController::class, "filtrarMediciones"]);

Route::post("mediciones/post",[MedicionesController::class,"crearMedicion"]);

Route::post("mediciones/delete",[MedicionesController::class,"eliminarMedicion"]);
