<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PenjualanProdukResource\Pages;
use App\Filament\Resources\PenjualanProdukResource\RelationManagers;
use App\Models\PenjualanProduk;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PenjualanProdukResource extends Resource
{
    protected static ?string $model = PenjualanProduk::class;
    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationLabel = 'Laporan Penjualan';
    protected static ?string $modelLabel = 'Laporan Penjualan';
    protected static ?string $pluralLabel = 'Laporan Penjualan';
    protected static ?string $pluralModelLabel = 'Laporan Penjualan';


    public static function canCreate(): bool
    {
        return auth()->user()->role === 'penjual';
    }

    public static function canEdit(Model $record): bool
    {
        return auth()->user()->role === 'penjual';
    }

    public static function form(Form $form): Form
    {
        $products = Product::all()->pluck('nama', 'id');

        if (auth()->user()->role == 'penjual') {
            $products = Product::where('user_id', auth()->id())->pluck('nama', 'id');
        }

        return $form
            ->schema([
                Select::make('product_id')->label('Produk')->options($products),
                TextInput::make('jumlah')->numeric(),
                Select::make('bulan')->options([
                    1 => "Januari",
                    2 => "Februari",
                    3 => "Maret",
                    4 => "April",
                    5 => "Mei",
                    6 => "Juni",
                    7 => "July",
                    8 => "Agustus",
                    9 => "September",
                    10 => "Oktober",
                    11 => "November",
                    12 => "Desember",
                ]),
                TextInput::make('tahun')->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        $query = PenjualanProduk::query();

        if (auth()->user()->role === 'penjual') {
            $query->where('user_id', auth()->id());
        }

        return $table
            ->headerActions([
                Action::make('export_excel')->url('/penjualan-product/export'),
            ])
            ->query($query)
            ->columns([
                TextColumn::make('product.user.name')->label('Nama'),
                TextColumn::make('product.user.pasar.nama')->label('Nama Pasar'),
                TextColumn::make('product.nama')->searchable(),
                TextColumn::make('jumlah'),
                TextColumn::make('bulan'),
                TextColumn::make('tahun'),
            ])
            ->filters([])
            ->actions([
                Tables\Actions\EditAction::make(),
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
            'index' => Pages\ListPenjualanProduks::route('/'),
            'create' => Pages\CreatePenjualanProduk::route('/create'),
            'edit' => Pages\EditPenjualanProduk::route('/{record}/edit'),
        ];
    }
}
