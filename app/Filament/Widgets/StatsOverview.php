<?php

namespace App\Filament\Widgets;

use App\Models\Pasar;
use App\Models\Product;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected function getStats(): array
    {
        if (auth()->user()->role === 'admin') {
            return [
                Stat::make('Jumlah Pasar', Pasar::count()),
                Stat::make('Jumlah Produk', Product::count()),
                Stat::make('Jumlah Penjual', User::where('role', 'penjual')->count()),
            ];
        } else {
            return [];
        }
    }
}
