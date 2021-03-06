<?php

namespace App\Http\Controllers\Consultores;

use App\Http\Controllers\Controller;
use App\Http\Requests\Consultores\ConsultorRequest;
use App\Models\Consultores\Consultor;

class ConsultoresController extends Controller
{
    

    public function index() {
       
        $consultores = Consultor::orderBy('id','dsc')->paginate(7);

        return Response()->json($consultores, 200);

    }

    public function all() {
       
        $consultores = Consultor::orderBy('id','dsc')->get();

        return Response()->json($consultores, 200);

    }


    public function read($id) {

        $consultor = Consultor::where('id', $id)
                                ->with('especialidades', 'usuario', 'ats', 'caps')->first();

        return Response()->json($consultor, 200);

    }


    public function store(ConsultorRequest $request)
    {
        if($request->id){
            $consultor = Consultor::findOrFail($request->id);
        }
        else{
            $consultor = new Consultor;
        }
        
        $consultor->fill($request->all());
        $consultor->save();

        return Response()->json($consultor, 200);

    }

    public function delete($id)
    {
        $consultor = Consultor::findOrFail($id);
        $consultor->delete();

        return Response()->json($consultor, 201);

    }

    public function search($txt) {

        $consultores = Consultor::where('nombre', 'like' ,'%' . $txt . '%')->paginate(7);
        return Response()->json($consultores, 200);

    }

    public function filter($columna, $valor) {
        // return $columna;
        $consultores = Consultor::with('especialidades')
                                    ->whereHas('especialidades', function($query) use ($valor) {
                                        $query->where('especialidad_id', $valor);
                                    })->get();
        foreach ($consultores as $consultor) {
            $consultor->enviar = true;
        }
        return Response()->json($consultores, 200);

    }

    public function compras($id) {

        $consultor = Consultor::where('id', $id)->with(array('compras' => function($query) {
                                                $query->orderBy('id', 'DESC');
                                            }))->first();
        return Response()->json($consultor, 200);

    }


}
