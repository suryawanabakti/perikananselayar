<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PasarResource\Pages;
use App\Filament\Resources\PasarResource\RelationManagers;
use App\Models\Pasar;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PasarResource extends Resource
{
    protected static ?string $model = Pasar::class;

    protected static ?string $navigationIcon = 'heroicon-o-building-storefront';
    protected static ?string $pluralModelLabel = 'Pasar';
    // protected static ?string $navigationGroup = 'Master Data';
    public static function canAccess(): bool
    {
        return auth()->check() && auth()->user()->role === 'admin';
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('gambar_utama')->directory('/gambar')->image()->columnSpanFull()->required(),
                TextInput::make('nama')->columnSpanFull()->required(),
                RichEditor::make('deskripsi')->columnSpanFull()->required(),
                Textarea::make('alamat')->columnSpanFull()->required(),
                TextInput::make('latitude')->columnSpan(1)->required(),
                TextInput::make('longitude')->columnSpan(1)->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('nama')->searchable(),
                TextColumn::make('deskripsi')->html()->searchable()->wrap(),
                TextColumn::make('alamat')->html()->searchable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPasars::route('/'),
            'create' => Pages\CreatePasar::route('/create'),
            'view' => Pages\ViewPasar::route('/{record}'),
            'edit' => Pages\EditPasar::route('/{record}/edit'),
        ];
    }
}
