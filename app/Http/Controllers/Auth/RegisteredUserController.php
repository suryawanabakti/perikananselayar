<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Pasar;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Show the registration page.
     */
    public function create()
    {
        $pasar = Pasar::all()->map(function ($data) {
            return  [
                "id" => (string)$data->id,
                "nama" => $data->nama
            ];
        });

        return Inertia::render('auth/register', ["dataPasar" => $pasar]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'pasar_id' => 'required',
            'noktp' => 'required',
            'no_kios' => 'required',
            'nohp' => 'required',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'noktp' => $request->noktp,
            'nohp' => $request->nohp,
            'pasar_id' => $request->pasar_id,
            'no_kios' => $request->no_kios,
            'password' => Hash::make($request->password),
        ]);

        // event(new Registered($user));

        // Auth::login($user);

        return redirect()->route('login')
            ->with('message', 'Berhasil . Silahkan login');
    }
}
