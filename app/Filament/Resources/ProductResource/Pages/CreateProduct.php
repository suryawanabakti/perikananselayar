<?php

namespace App\Filament\Resources\ProductResource\Pages;

use App\Filament\Resources\ProductResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateProduct extends CreateRecord
{
    protected static string $resource = ProductResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (auth()->user()->role === 'penjual') {
            $data['user_id'] = auth()->id();
        }

        $data['pasar_id'] = auth()->user()->pasar_id ?? 1;
        return $data;
    }
}
