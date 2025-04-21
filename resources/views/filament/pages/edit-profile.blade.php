<x-filament::page>
    <form wire:submit.prevent="save" class="space-y-4">
        <x-filament::card>
            {{ $this->form }}
            <x-filament::button class="mt-3" type="submit">Simpan</x-filament::button>
        </x-filament::card>
    </form>
</x-filament::page>
