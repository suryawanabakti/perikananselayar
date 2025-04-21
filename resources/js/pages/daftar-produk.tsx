'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Filter, Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

interface Produk {
    id: number;
    nama: string;
    berat: number;
    harga: number;
    harga_diskon?: number;
    satuan: string;
    gambar: string;
    kategori: string;
    rating: number;
    jumlah_ulasan: number;
    pasar: {
        id: number;
        nama: string;
    };
    stok: number;
    terjual: number;
}

export default function DaftarProduk({ produk, kategori }: { produk: Produk[]; kategori: any }) {
    const { auth } = usePage<SharedData>().props;
    const [searchTerm, setSearchTerm] = useState('');
    const [filterKategori, setFilterKategori] = useState<string>('semua');
    const [filterHarga, setFilterHarga] = useState<number[]>([500000]);
    const [sortBy, setSortBy] = useState('termurah');
    const [filterPasar, setFilterPasar] = useState<string[]>([]);

    // Get unique markets
    const pasarList = Array.from(new Set(produk.map((p) => p.pasar.nama))).map((nama) => {
        const item = produk.find((p) => p.pasar.nama === nama);
        return { id: item?.pasar.id || 0, nama };
    });

    // Filter and sort products
    const filteredProduk = produk
        .filter((item) => item.nama.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((item) => filterKategori === 'semua' || item.kategori === filterKategori)
        .filter((item) => item.harga <= filterHarga[0])
        .filter((item) => filterPasar.length === 0 || filterPasar.includes(item.pasar.nama))
        .sort((a, b) => {
            if (sortBy === 'terlaris') return b.terjual - a.terjual;
            if (sortBy === 'termurah') return a.harga - b.harga;
            if (sortBy === 'termahal') return b.harga - a.harga;
            if (sortBy === 'rating') return b.rating - a.rating;
            return 0;
        });

    const kategoriList = kategori;

    return (
        <>
            <Head title="Daftar Produk Ikan" />
            <Navbar auth={auth} />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="from-primary/10 bg-gradient-to-b to-white py-12 md:py-20">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl text-center">
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Produk Ikan Segar Selayar</h1>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Temukan berbagai produk ikan segar dan olahan dari pasar-pasar di Selayar dengan harga terbaik
                            </p>

                            <div className="relative mx-auto max-w-2xl">
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                                    <Search className="text-muted-foreground h-5 w-5" />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Cari produk ikan..."
                                    className="rounded-full py-6 pr-16 pl-10 text-base shadow-md"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Button className="absolute top-1 right-1 h-10 rounded-full" size="sm">
                                    Cari
                                </Button>
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
                                        Filter Produk
                                    </h3>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Kategori</label>
                                            <Select value={filterKategori} onValueChange={setFilterKategori}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Pilih kategori" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="semua">Semua Kategori</SelectItem>
                                                    {kategoriList.map((kategori) => (
                                                        <SelectItem key={kategori} value={kategori}>
                                                            {kategori}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Rentang Harga</label>
                                            <div className="px-2 pt-4">
                                                <Slider value={filterHarga} max={500000} step={10000} onValueChange={setFilterHarga} />
                                                <div className="text-muted-foreground mt-2 flex justify-between text-sm">
                                                    <span>Rp 0</span>
                                                    <span>Rp {filterHarga[0].toLocaleString('id-ID')}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Pasar</label>
                                            <div className="max-h-40 space-y-2 overflow-y-auto pr-2">
                                                {pasarList.map((pasar) => (
                                                    <div key={pasar.id} className="flex items-center space-x-2">
                                                        <Checkbox
                                                            id={`pasar-${pasar.id}`}
                                                            checked={filterPasar.includes(pasar.nama)}
                                                            onCheckedChange={(checked) => {
                                                                if (checked) {
                                                                    setFilterPasar([...filterPasar, pasar.nama]);
                                                                } else {
                                                                    setFilterPasar(filterPasar.filter((p) => p !== pasar.nama));
                                                                }
                                                            }}
                                                        />
                                                        <label
                                                            htmlFor={`pasar-${pasar.id}`}
                                                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                        >
                                                            {pasar.nama}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-2 block text-sm font-medium">Urutkan Berdasarkan</label>
                                            <Select value={sortBy} onValueChange={setSortBy}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Urutkan berdasarkan" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {/* <SelectItem value="terlaris">Terlaris</SelectItem> */}
                                                    <SelectItem value="termurah">Harga Terendah</SelectItem>
                                                    <SelectItem value="termahal">Harga Tertinggi</SelectItem>
                                                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <Button
                                            className="w-full"
                                            variant="outline"
                                            onClick={() => {
                                                setSearchTerm('');
                                                setFilterKategori('semua');
                                                setFilterHarga([500000]);
                                                setFilterPasar([]);
                                                setSortBy('terlaris');
                                            }}
                                        >
                                            Reset Filter
                                        </Button>
                                    </div>
                                </div>

                                <div className="bg-primary/10 hidden rounded-lg p-6">
                                    <h3 className="mb-3 text-lg font-bold">Butuh Bantuan?</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        Hubungi kami jika Anda membutuhkan bantuan dalam menemukan produk ikan.
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
                                            Menampilkan <span className="text-foreground font-medium">{filteredProduk.length}</span> dari{' '}
                                            <span className="text-foreground font-medium">{produk.length}</span> produk
                                        </p>
                                        <TabsList className="grid w-[200px] grid-cols-2">
                                            <TabsTrigger value="grid">Grid</TabsTrigger>
                                            <TabsTrigger value="list">List</TabsTrigger>
                                        </TabsList>
                                    </div>

                                    <TabsContent value="grid" className="mt-4">
                                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                            {filteredProduk.map((item) => (
                                                <Link key={item.id} href={`/produk/${item.id}`}>
                                                    <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
                                                        <div className="relative aspect-square">
                                                            <img
                                                                src={item.gambar || `/images/produk/produk-${item.id}.jpg`}
                                                                alt={item.nama}
                                                                className="h-full w-full object-cover"
                                                            />
                                                            {item.harga_diskon && (
                                                                <Badge className="absolute top-2 left-2 bg-red-500">
                                                                    {Math.round((1 - item.harga_diskon / item.harga) * 100)}% OFF
                                                                </Badge>
                                                            )}
                                                            {item.stok < 10 && (
                                                                <Badge className="absolute top-2 right-2 bg-yellow-500">Stok Terbatas</Badge>
                                                            )}
                                                        </div>

                                                        <CardContent className="p-4">
                                                            <div className="text-muted-foreground mb-1 text-xs">{item.kategori}</div>
                                                            <h3 className="line-clamp-2 h-10 font-medium">{item.nama}</h3>

                                                            <div className="mt-2">
                                                                {item.harga_diskon ? (
                                                                    <div className="space-y-1">
                                                                        <p className="text-primary font-bold">
                                                                            Rp {item.harga_diskon.toLocaleString('id-ID')}
                                                                        </p>
                                                                        <p className="text-muted-foreground text-xs line-through">
                                                                            Rp {item.harga.toLocaleString('id-ID')}
                                                                        </p>
                                                                    </div>
                                                                ) : (
                                                                    <p className="text-primary font-bold">Rp {item.harga.toLocaleString('id-ID')}</p>
                                                                )}
                                                                <p className="text-muted-foreground text-xs">
                                                                    per {item.berat} {item.satuan}
                                                                </p>
                                                            </div>

                                                            <div className="mt-3 flex items-center justify-between"></div>

                                                            <div className="border-border mt-3 flex items-center justify-between border-t pt-3">
                                                                <span className="text-xs">{item.pasar.nama}</span>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </TabsContent>

                                    <TabsContent value="list" className="mt-4">
                                        <div className="space-y-4">
                                            {filteredProduk.map((item) => (
                                                <Link key={item.id} href={`/produk/${item.id}`}>
                                                    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
                                                        <div className="flex flex-col md:flex-row">
                                                            <div className="relative md:w-1/4">
                                                                <img
                                                                    src={item.gambar || `/images/produk/produk-${item.id}.jpg`}
                                                                    alt={item.nama}
                                                                    className="aspect-square h-full w-full object-cover"
                                                                />
                                                                {item.harga_diskon && (
                                                                    <Badge className="absolute top-2 left-2 bg-red-500">
                                                                        {Math.round((1 - item.harga_diskon / item.harga) * 100)}% OFF
                                                                    </Badge>
                                                                )}
                                                            </div>

                                                            <CardContent className="flex flex-col justify-between p-5 md:w-3/4">
                                                                <div>
                                                                    <div className="flex items-start justify-between">
                                                                        <div>
                                                                            <div className="text-muted-foreground mb-1 text-sm">{item.kategori}</div>
                                                                            <h3 className="text-xl font-bold">{item.nama}</h3>
                                                                        </div>
                                                                        <div className="bg-primary/10 flex items-center gap-1 rounded-md px-2 py-1 text-sm">
                                                                            {/* <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> */}
                                                                            {/* <span className="font-medium">{item.rating.toFixed(1)}</span> */}
                                                                            {/* <span className="text-xs">({item.jumlah_ulasan})</span> */}
                                                                        </div>
                                                                    </div>

                                                                    <div className="mt-2 flex items-center gap-4">
                                                                        {item.harga_diskon ? (
                                                                            <div className="space-y-1">
                                                                                <p className="text-primary text-xl font-bold">
                                                                                    Rp {item.harga_diskon.toLocaleString('id-ID')}
                                                                                </p>
                                                                                <p className="text-muted-foreground text-sm line-through">
                                                                                    Rp {item.harga.toLocaleString('id-ID')}
                                                                                </p>
                                                                            </div>
                                                                        ) : (
                                                                            <p className="text-primary text-xl font-bold">
                                                                                Rp {item.harga.toLocaleString('id-ID')}
                                                                            </p>
                                                                        )}
                                                                        <p className="text-muted-foreground text-sm">per {item.satuan}</p>

                                                                        {item.stok < 10 && (
                                                                            <Badge className="bg-yellow-500">Stok Terbatas: {item.stok}</Badge>
                                                                        )}
                                                                    </div>
                                                                </div>

                                                                <div className="border-border mt-4 flex items-center justify-between border-t pt-4">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-sm">Dijual di</span>
                                                                        <Badge variant="outline" className="bg-primary/5">
                                                                            {item.pasar.nama}
                                                                        </Badge>
                                                                        <span className="text-muted-foreground text-sm">{item.terjual} terjual</span>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </div>
                                                    </Card>
                                                </Link>
                                            ))}
                                        </div>
                                    </TabsContent>
                                </Tabs>

                                {filteredProduk.length === 0 && (
                                    <div className="py-12 text-center">
                                        <div className="bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
                                            <ShoppingCart className="text-primary h-8 w-8" />
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold">Tidak Ada Produk Ditemukan</h3>
                                        <p className="text-muted-foreground mb-6">
                                            Tidak ada produk yang sesuai dengan filter yang Anda pilih. Coba ubah filter atau cari dengan kata kunci
                                            lain.
                                        </p>
                                        <Button
                                            onClick={() => {
                                                setSearchTerm('');
                                                setFilterKategori('semua');
                                                setFilterHarga([500000]);
                                                setFilterPasar([]);
                                                setSortBy('terlaris');
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

                {/* Popular Categories */}
                <section className="bg-muted/30 hidden py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-8 text-center text-2xl font-bold">Kategori Populer</h2>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                            {kategoriList.map((kategori, index) => (
                                <Card key={index} className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg">
                                    <div className="relative aspect-square">
                                        <img
                                            src={`https://images.unsplash.com/photo-1603590179985-5f531578a7d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                                            alt={kategori}
                                            className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent">
                                            <div className="w-full p-4">
                                                <h3 className="text-center font-bold text-white">{kategori}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
