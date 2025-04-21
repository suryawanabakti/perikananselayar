<?php

namespace App\Filament\Resources\PenjualanProdukResource\Pages;

use App\Filament\Resources\PenjualanProdukResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreatePenjualanProduk extends CreateRecord
{
    protected static string $resource = PenjualanProdukResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['user_id'] = auth()->id();

        return $data;
    }
}
