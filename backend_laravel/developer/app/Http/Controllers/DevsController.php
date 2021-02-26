<?php

namespace App\Http\Controllers;

use App\Models\Developer;
use Exception;
use Illuminate\Http\Request;

use function PHPSTORM_META\type;
use function PHPUnit\Framework\isNull;

class DevsController extends Controller
{
    public $developer;


    public function __construct(Developer $developer)
    {
        $this->developer = $developer;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $page = (int) request('page');


        if (!empty($page)) {
            $devs = $this->developer->offset(($page - 1) * 5)->limit(5)->get();
            return response()->json($devs);
        }

        return response()->json($this->developer->all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $data = $this->developer->create($request->all());
            return response()->json($data, 201);
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!$data = $this->developer->find($id)) {
            return response()->json(['error' => 'Nada foi encontrado!!!'], 404);
        }
        return response()->json($data);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (!$data = $this->developer->find($id)) {
            return response()->json(['error' => 'Nada foi encontrado!!!'], 404);
        }
        $dataForm = $request->all();
        $data->update($dataForm);

        return response()->json($dataForm);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if ($data = $this->developer->find($id)) {
            $data->delete();
            return response()->json('success', 204);
        }
        return response()->json('error', 400);
    }
}
