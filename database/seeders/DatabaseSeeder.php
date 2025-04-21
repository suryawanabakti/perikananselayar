<?php

namespace Database\Seeders;

use App\Models\Kategori;
use App\Models\Pasar;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('qwerty123'),
            'role' => 'admin'
        ]);

        Pasar::create([
            'gambar_utama' => 'home1.jpg',
            'nama' => 'Pasar Tradisional Buki',
            'deskripsi' => 'Test',
            'alamat' => 'test',
            'latitude' => '-5.971237',
            'longitude' => '120.451683'
        ]);
        Pasar::create([
            'gambar_utama' => 'home1.jpg',
            'nama' => 'Pasar Padang',
            'deskripsi' => 'Test',
            'alamat' => 'test',
            'latitude' => '-6.178910',
            'longitude' => '120.427547'
        ]);
        Pasar::create([
            'gambar_utama' => 'home1.jpg',
            'nama' => 'Pasar Rabu Barugaia',
            'deskripsi' => 'Test',
            'alamat' => 'test',
            'latitude' => '-6.025974',
            'longitude' => '120.450049'
        ]);
        Pasar::create([
            'gambar_utama' => 'home1.jpg',
            'nama' => 'PASAR TRADISIONAL BATANGMATA',
            'deskripsi' => 'Test',
            'alamat' => 'test',
            'latitude' => '-5.936036',
            'longitude' => '120.447890'
        ]);
        Pasar::create([
            'gambar_utama' => 'home1.jpg',
            'nama' => 'Pasar Pariangan',
            'deskripsi' => 'Test',
            'alamat' => 'test',
            'latitude' => '-6.247309',
            'longitude' => '120.469421'
        ]);

        Kategori::create([
            'nama' => 'Ikan Segar',
        ]);
        Kategori::create([
            'nama' => 'Ikan Olahan',
        ]);
        Kategori::create([
            'nama' => 'Seafood',
        ]);
        Kategori::create([
            'nama' => 'Rumput Laut',
        ]);
        Kategori::create([
            'nama' => 'Kerang',
        ]);
    }
}
