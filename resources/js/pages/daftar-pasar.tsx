'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Clock, Filter, Fish, MapPin, Star } from 'lucide-react';
import { useState } from 'react';

interface Pasar {
    id: number;
    nama: string;
    alamat: string;
    deskripsi: string;
    gambar_utama: string;
    jam_buka: string;
    jam_tutup: string;
    rating: number;
    jenis: string[];
    jarak?: number;
}

export default function DaftarPasar({ pasars }: { pasars: Pasar[] }) {
    const { auth } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [filterJenis, setFilterJenis] = useState<string>('semua');
    const [filterJarak, setFilterJarak] = useState<number[]>([50]);
    const [sortBy, setSortBy] = useState('rating');

    // Filter and sort markets
    const filteredPasars = pasars
        .filter(
            (pasar) => pasar.nama.toLowerCase().includes(searchTerm.toLowerCase()) || pasar.alamat.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        .filter((pasar) => filterJenis === 'semua' || pasar.jenis.includes(filterJenis))
        .filter((pasar) => !pasar.jarak || pasar.jarak <= filterJarak[0])
        .sort((a, b) => {
            if (sortBy === 'rating') return b.rating - a.rating;
            if (sortBy === 'jarak') return (a.jarak || 100) - (b.jarak || 100);
            if (sortBy === 'nama') return a.nama.localeCompare(b.nama);
            return 0;
        });

    // Handle direct navigation to selected market
    const handleMarketSelect = (marketName: string) => {
        const selectedMarket = pasars.find((pasar) => pasar.nama === marketName);
        if (selectedMarket) {
            window.location.href = `/pasar/${selectedMarket.id}`;
        } else {
            setSearchTerm(marketName);
        }
    };

    return (
        <>
            <Head title="Daftar Pasar Ikan" />
            <Navbar auth={auth} />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="from-primary/10 bg-gradient-to-b to-white py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Pasar Ikan di Selayar</h1>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Temukan pasar ikan terbaik di Selayar dengan informasi lengkap tentang lokasi, jam operasional, dan jenis ikan yang
                                tersedia.
                            </p>

                            <div className="mx-auto max-w-2xl">
                                <Select value={searchTerm} onValueChange={handleMarketSelect}>
                                    <SelectTrigger className="h-auto rounded-full py-6 pr-4 pl-10 text-base shadow-md">
                                        <SelectValue placeholder="Pilih pasar ikan..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {pasars.map((pasar) => (
                                            <SelectItem key={pasar.id} value={pasar.nama}>
                                                {pasar.nama}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter and Results */}
                <section className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
                            {/* Filters Sidebar */}
                            <div className="space-y-6">
                                <div className="rounded-lg bg-white p-6 shadow-md">
                                    <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                                        <Filter className="text-primary h-5 w-5" />
                                        Filter Pasar
                                    </h3>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Jenis Pasar</label>
                                            <Select value={filterJenis} onValueChange={setFilterJenis}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih jenis pasar" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="semua">Semua Jenis</SelectItem>
                                                    <SelectItem value="tradisional">Pasar Tradisional</SelectItem>
                                                    <SelectItem value="modern">Pasar Modern</SelectItem>
                                                    <SelectItem value="pelelangan">Tempat Pelelangan Ikan</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Jarak Maksimum (km)</label>
                                            <div className="px-2 pt-4">
                                                <Slider value={filterJarak} max={100} step={5} onValueChange={setFilterJarak} />
                                                <div className="text-muted-foreground mt-2 flex justify-between text-sm">
                                                    <span>0 km</span>
                                                    <span>{filterJarak[0]} km</span>
                                                    <span>100 km</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Urutkan Berdasarkan</label>
                                            <Select value={sortBy} onValueChange={setSortBy}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Urutkan berdasarkan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                                                    <SelectItem value="jarak">Jarak Terdekat</SelectItem>
                                                    <SelectItem value="nama">Nama (A-Z)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Button
                                            className="w-full"
                                            variant="outline"
                                            onClick={() => {
                                                setSearchTerm('');
                                                setFilterJenis('semua');
                                                setFilterJarak([50]);
                                                setSortBy('rating');
                                            }}
                                        >
                                            Reset Filter
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-primary/10 rounded-lg p-6">
                                    <h3 className="mb-3 text-lg font-bold">Butuh Bantuan?</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        Hubungi kami jika Anda membutuhkan bantuan dalam menemukan pasar ikan.
                                    </p>
                                    <Button variant="outline" className="w-full">
                                        Hubungi Kami
                                    </Button>
                                </div>
                            </div>

                            {/* Results */}
                            <div className="space-y-6">
                                <Tabs defaultValue="grid" className="w-full">
                                    <div className="flex flex-col justify-between gap-4 rounded-lg bg-white p-4 shadow-sm sm:flex-row sm:items-center">
                                        <p className="text-muted-foreground">
                                            Menampilkan <span className="text-foreground font-medium">{filteredPasars.length}</span> dari{' '}
                                            <span className="text-foreground font-medium">{pasars.length}</span> pasar
                                        </p>
                                        <TabsList className="grid w-[200px] grid-cols-2">
                                            <TabsTrigger value="grid">Grid</TabsTrigger>
                                            <TabsTrigger value="list">List</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <TabsContent value="grid" className="mt-4">
                                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                            {filteredPasars.map((pasar) => (
                                                <Link key={pasar.id} href={`/pasar/${pasar.id}`}>
                                                    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                                                        <div className="relative aspect-[4/3]">
                                                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                            <img
                                                                src={`/storage/${pasar.gambar_utama}`}
                                                                alt={pasar.nama}
                                                                className="h-full w-full object-cover"
                                                            />
                                                            <div className="absolute top-3 left-3 z-20">
                                                                <Badge variant="secondary" className="bg-white/90 hover:bg-white/90">
                                                                    {pasar.jenis && pasar.jenis.length > 0 ? pasar.jenis[0] : 'Tradisional'}
                                                                </Badge>
                                                            </div>
                                                            <div className="absolute right-3 bottom-3 z-20 flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-sm">
                                                                <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                                <span className="font-medium">{pasar.rating || 3}</span>
                                                            </div>
                                                        </div>

                                                        <CardContent className="p-5">
                                                            <h3 className="mb-2 text-xl font-bold">{pasar.nama}</h3>
                                                            <div className="space-y-2 text-sm">
                                                                <div className="text-muted-foreground flex items-center">
                                                                    <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                                                                    <span>{pasar.alamat}</span>
                                                                </div>
                                                                <div className="text-muted-foreground flex items-center">
                                                                    <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                                                                    <span>
                                                                        {pasar.jam_buka || '08:00'} - {pasar.jam_tutup || '18:00'} WITA
                                                                    </span>
                                                                </div>
                                                                {pasar.jarak && (
                                                                    <div className="text-primary flex items-center font-medium">
                                                                        <span>{pasar.jarak} km dari lokasi Anda</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="list" className="mt-4">
                                        <div className="space-y-4">
                                            {filteredPasars.map((pasar) => (
                                                <Link key={pasar.id} href={`/pasar/${pasar.id}`}>
                                                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                                                        <div className="flex flex-col md:flex-row">
                                                            <div className="relative md:w-1/3">
                                                                <img
                                                                    src={`/storage/${pasar.gambar_utama}`}
                                                                    alt={pasar.nama}
                                                                    className="aspect-video h-full w-full object-cover md:aspect-square"
                                                                />
                                                                <div className="absolute top-3 left-3">
                                                                    <Badge variant="secondary" className="bg-white/90 hover:bg-white/90">
                                                                        {pasar.jenis && pasar.jenis.length > 0 ? pasar.jenis[0] : 'Tradisional'}
                                                                    </Badge>
                                                                </div>
                                                            </div>

                                                            <CardContent className="flex flex-col justify-between p-5 md:w-2/3">
                                                                <div>
                                                                    <div className="mb-2 flex items-start justify-between">
                                                                        <h3 className="text-xl font-bold">{pasar.nama}</h3>
                                                                        <div className="bg-primary/10 flex items-center gap-1 rounded-md px-2 py-1 text-sm">
                                                                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                                                            <span className="font-medium">{pasar.rating || 3}</span>
                                                                        </div>
                                                                    </div>

                                                                    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
                                                                        {pasar.deskripsi}
                                                                    </p>

                                                                    <div className="space-y-2 text-sm">
                                                                        <div className="text-muted-foreground flex items-center">
                                                                            <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                                                                            <span>{pasar.alamat}</span>
                                                                        </div>
                                                                        <div className="text-muted-foreground flex items-center">
                                                                            <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                                                                            <span>
                                                                                {pasar.jam_buka || '08:00'} - {pasar.jam_tutup || '18:00'} WITA
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-4 flex items-center justify-between">
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {pasar.jenis &&
                                                                            pasar.jenis.map((jenis, index) => (
                                                                                <Badge key={index} variant="outline" className="bg-primary/5">
                                                                                    {jenis}
                                                                                </Badge>
                                                                            ))}
                                                                    </div>

                                                                    {pasar.jarak && (
                                                                        <div className="text-primary text-sm font-medium">
                                                                            {pasar.jarak} km dari lokasi Anda
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </CardContent>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {filteredPasars.length === 0 && (
                                    <div className="py-12 text-center">
                                        <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                                            <Fish className="text-primary h-8 w-8" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">Tidak Ada Pasar Ditemukan</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Tidak ada pasar yang sesuai dengan filter yang Anda pilih. Coba ubah filter atau cari dengan kata kunci
                                            lain.
                                        </p>
                                        <Button
                                            onClick={() => {
                                                setSearchTerm('');
                                                setFilterJenis('semua');
                                                setFilterJarak([50]);
                                                setSortBy('rating');
                                            }}
                                        >
                                            Reset Pencarian
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
