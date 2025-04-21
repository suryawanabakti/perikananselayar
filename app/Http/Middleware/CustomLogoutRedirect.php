<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CustomLogoutRedirect
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        // Cek jika user sudah logout dan redirect ke halaman yang diinginkan
        if (!Auth::check()) {
            return redirect('/'); // Ganti dengan URL tujuan logout
        }

        return $response;
    }
}
