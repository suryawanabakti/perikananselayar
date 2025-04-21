<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\Kategori;
use App\Models\Pasar;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-cube';
    protected static ?string $pluralModelLabel = 'Produk';

    protected static ?int $navigationSort = 3;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('gambar')->directory('gambar')->image()->columnSpanFull(),
                TextInput::make('nama')->required(),
                Select::make('kategori_id')->options(Kategori::all()->pluck('nama', 'id'))->label('Kategori')->required(),
                RichEditor::make('deskripsi')->required()->columnSpanFull(),

                Grid::make(2)->schema([
                    Select::make('satuan')->required()->options([
                        'gram' => 'gram',
                        'pcs' => 'pcs',
                        'kilo' => 'kilo',
                    ]),

                    TextInput::make('berat')->required()->numeric(),
                ]),
                TextInput::make('harga')->required()->numeric(),
                Radio::make('stok')->options([
                    1 => 'Tersedia',
                    0 => 'Tidak tersedia'
                ]),
            ]);
    }

    public static function table(Table $table): Table
    {
        $products = Product::query();
        if (auth()->user()->role === 'penjual') {
            $products->where('user_id', auth()->user()->id);
        }

        return $table
            ->query($products)
            ->columns([
                TextColumn::make('nama')->searchable(),
                TextColumn::make('harga')->searchable(),
                TextColumn::make('stok')->searchable()->formatStateUsing(fn($record) => $record->stok === 0 ? "Tidak Tersedia" : "Tersedia"),
                TextColumn::make('berat')->searchable(),
                TextColumn::make('deskripsi')->limit(30)->html(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
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
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'view' => Pages\ViewProduct::route('/{record}'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }
}
