<?php

namespace App\Exports;

use App\Models\PenjualanProduk;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class PenjualanProdukExport implements FromCollection, WithHeadings
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $query = PenjualanProduk::with('user');

        if (auth()->user()->role === 'penjual') {
            $query->where('user_id', auth()->id());
        }

        return $query->get()->map(fn($data) => [
            "nama" => $data->user->name,
            "nama_pasar" => $data->user->pasar->nama,
            "produk" => $data->product->nama,
            "jumlah" => $data->jumlah,
            "bulan" => $data->bulan,
            "tahun" => $data->tahun,
        ]);
    }

    /**
     * Define the headings for the exported file.
     *
     * @return array
     */
    public function headings(): array
    {
        return ['NAMA PENJUAL', 'NAMA PASAR',  'NAMA PRODUK', 'JUMLAH', 'BULAN', 'TAHUN'];
    }
}
