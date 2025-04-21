<?php

namespace App\Filament\Pages;

use Filament\Forms;
use Filament\Pages\Page;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class EditProfile extends Page
{
    protected static ?string $navigationIcon = 'heroicon-o-user';
    protected static string $view = 'filament.pages.edit-profile';

    public $name;
    public $email;
    public $noktp;
    public $nohp;
    public $password;
    public $no_kios;

    public function mount()
    {
        $user = Auth::user();
        $this->name = $user->name;
        $this->email = $user->email;
        $this->noktp = $user->noktp;
        $this->nohp = $user->nohp;
        $this->no_kios = $user->no_kios;
    }

    public function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('name')
                ->label('Nama')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('noktp')
                ->label('No.KTP')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('nohp')
                ->label('No.Hp')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('no_kios')
                ->label('No.Kios')
                ->required()
                ->maxLength(255),
            Forms\Components\TextInput::make('email')
                ->label('Email')
                ->email()
                ->required()
                ->maxLength(255),

            Forms\Components\TextInput::make('password')
                ->label('Password Baru')
                ->password()
                ->minLength(8)
                ->nullable(),

        ]);
    }

    public function save()
    {
        $user = Auth::user();
        $validatedData = $this->validate([
            'name' => 'required|string|max:255',
            'noktp' => 'required|string|max:255',
            'nohp' => 'required|string|max:255',
            'no_kios' => 'required|string|max:255',
            'email' => 'required|email|max:255|unique:users,email,' . $user->id,
            'password' => 'nullable|string|min:8',
        ]);

        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->noktp = $validatedData['noktp'];
        $user->nohp = $validatedData['nohp'];
        $user->no_kios = $validatedData['no_kios'];

        if (!empty($validatedData['password'])) {
            $user->password = Hash::make($validatedData['password']);
        }
        Notification::make()
            ->title('Saved successfully')
            ->success()
            ->send();
        $user->save();

        session()->flash('success', 'Profil berhasil diperbarui.');
    }
}
