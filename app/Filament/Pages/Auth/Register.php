<?php

use Filament\Forms;
use Filament\Pages\Auth\Register as BaseRegister;
use App\Models\User;
use Filament\Forms\Form;

class Register extends BaseRegister
{
    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')
                ->required(),
            Forms\Components\TextInput::make('email')
                ->email()
                ->required(),
            Forms\Components\TextInput::make('nohp') // Tambahan
                ->tel()
                ->required(),
            Forms\Components\TextInput::make('noktp') // Tambahan

                ->required(),
            Forms\Components\TextInput::make('password')
                ->password()
                ->required(),
        ]);
    }

    protected function handleRegistration(array $data): User
    {

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'nohp' => $data['nohp'], // Simpan ke database
            'noktp' => $data['noktp'], // Simpan ke database
            'password' => bcrypt($data['password']),
        ]);

        return $user;
    }
}
