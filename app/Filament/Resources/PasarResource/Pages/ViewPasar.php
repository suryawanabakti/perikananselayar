<?php

namespace App\Filament\Resources\PasarResource\Pages;

use App\Filament\Resources\PasarResource;
use Filament\Actions;
use Filament\Resources\Pages\ViewRecord;

class ViewPasar extends ViewRecord
{
    protected static string $resource = PasarResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\EditAction::make(),
        ];
    }
}
