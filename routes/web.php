<?php

use App\Exports\PenjualanProdukExport;
use App\Models\Kategori;
use App\Models\Pasar;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

Route::get('/', function () {
    $pasars = Pasar::all();
    return Inertia::render('welcome', ["pasars" => $pasars]);
})->name('home');

Route::redirect('/admin/login', '/login');
Route::redirect('/admin/register', '/register');

Route::get('/daftar-pasar', function () {
    $pasars = Pasar::all();
    return Inertia::render('daftar-pasar', ["pasars" => $pasars]);
});

Route::get('/penjualan-product/export', function () {
    return Excel::download(new PenjualanProdukExport, 'penjualan-produk.xlsx');
});

Route::get('/pasar/{pasar}', function (Pasar $pasar) {
    return Inertia::render('detail-pasar', ["pasar" => $pasar->load('products')]);
});


Route::get('/daftar-produk', function () {
    $produks = Product::all()->map(function ($data) {
        return [
            "id" => $data->id,
            "nama" => $data->nama,
            "kategori" => $data->kategori->nama,
            "pasar" => $data->pasar,
            "harga" => (int) $data->harga,
            "rating" => 5,
            "satuan" => $data->satuan,
            "berat" => $data->berat,
            "created_at" => $data->created_at,
            "updated_at" => $data->updated_at,
            "gambar" => url('storage/' . $data->gambar),
        ];
    });

    $kategori = Kategori::all()->map(function ($data) {
        return $data->nama;
    });

    return Inertia::render('daftar-produk', ["produk" => $produks, "kategori" => $kategori]);
});

Route::get('/produk/{produk}', function (Product $produk) {
    return Inertia::render('detail-produk', ["produk" => $produk->load('pasar', 'user', 'kategori')]);
});

Route::get('/tentang', function () {
    return Inertia::render('tentang-aplikasi');
});

Route::redirect('/home', '/admin');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::location("/admin");
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
