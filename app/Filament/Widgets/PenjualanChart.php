<?php

namespace App\Filament\Widgets;

use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class PenjualanChart extends ChartWidget
{
    protected static ?string $heading = 'Penjualan Bulanan';
    protected int | string | array $columnSpan = 'full';

    protected function getData(): array
    {
        $data = DB::table('penjualan_produks')
            ->join('users', 'penjualan_produks.user_id', '=', 'users.id')
            ->join('pasar', 'users.pasar_id', '=', 'pasar.id')
            ->selectRaw('pasar.nama as pasar, bulan, tahun, SUM(jumlah) as total')
            ->groupBy('pasar.nama', 'bulan', 'tahun')
            ->orderBy('tahun')
            ->orderBy('bulan')
            ->get();

        return [
            'labels' => $data->map(fn($row) => $row->pasar . ' - ' . $row->bulan . '-' . $row->tahun)->toArray(),
            'datasets' => [
                [
                    'label' => 'Jumlah Penjualan',
                    'data' => $data->map(fn($row) => $row->total)->toArray(),
                    'backgroundColor' => 'rgba(54, 162, 235, 0.5)',
                    'borderColor' => 'rgba(54, 162, 235, 1)',
                    'borderWidth' => 1,
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'bar';
    }
}
