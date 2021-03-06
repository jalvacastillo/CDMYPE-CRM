<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Auth;

class ClienteProyectoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
        // return Auth::check() ? true : false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            
            'asesor_id' => 'required|numeric',
            'cliente_id' => 'required|numeric',
            'nombre' => 'required',
            'fecha_fin' => 'required',
            'impacto' => 'required'

        ];
    }
}
