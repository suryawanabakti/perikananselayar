<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Models\Pasar;
use App\Models\User;
use Faker\Provider\ar_EG\Text;
use Filament\Actions\ActionGroup;
use Filament\Forms;
use Filament\Forms\Components\Radio;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\ActionGroup as ActionsActionGroup;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';
    protected static ?string $pluralModelLabel = 'Penjual';
    // protected static ?string $navigationGroup = 'Master Data';
    protected static ?string $modelLabel = 'Penjual';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Select::make('pasar_id')->options(Pasar::all()->pluck('nama', 'id'))->required(),
                TextInput::make('name')->required(),
                TextInput::make('noktp')->required(),
                TextInput::make('nohp')->required(),
                TextInput::make('email')->email()->required(),
                Radio::make('is_active')->options([
                    0 => "Tidak",
                    1 => "iya"
                ])->inline()->required()
            ]);
    }

    public static function canAccess(): bool
    {
        return auth()->check() && auth()->user()->role === 'admin';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->query(User::whereNot('role', 'admin')->orderByDesc('created_at'))
            ->columns([
                TextColumn::make('pasar.nama')->searchable()->wrap(),
                TextColumn::make('name')->searchable(),
                TextColumn::make('email')->searchable(),
                TextColumn::make('nohp')->searchable(),
                TextColumn::make('is_active')
                    ->label('Status')
                    ->formatStateUsing(fn($state) => $state ? 'Active' : 'Non Active')
                    ->color(fn($state) => $state ? 'success' : 'danger')
                    ->badge()
                    ->searchable(),
            ])
            ->filters([
                SelectFilter::make('is_active')->options([
                    1 => "Active",
                    0 => "Not Active"
                ])
            ])
            ->actions([
                ActionsActionGroup::make([
                    Tables\Actions\Action::make('approve')
                        ->icon('heroicon-o-check-circle')
                        ->color('success')
                        ->modalHeading('Konfirmasi Persetujuan')
                        ->modalDescription('Apakah Anda yakin ingin menyetujui ini?')
                        ->modalSubmitActionLabel('Terima')
                        ->modalCancelActionLabel('Batal')
                        ->action(function ($record) {
                            $record->update(['is_active' => 1]);
                            Notification::make()
                                ->title('Status diterima berhasil')
                                ->success()
                                ->send();
                        }),
                    Tables\Actions\ViewAction::make(),
                    Tables\Actions\EditAction::make(),
                ])
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
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
