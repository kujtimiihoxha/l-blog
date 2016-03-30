<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class AngularAdminController extends Controller
{
    public function serveApp()
    {
        return view('admin');
    }

    public function unsupported()
    {
        return view('unsupported_browser');
    }
}
