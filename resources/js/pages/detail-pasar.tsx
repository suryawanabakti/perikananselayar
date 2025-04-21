import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Calendar, ChevronRight, Clock, Fish, Heart, Info, MapIcon, MapPin, Phone, Share2, Star } from 'lucide-react';
import { useState } from 'react';

interface Produk {
    id: number;
    nama: string;
    harga: number;
    satuan: string;
    gambar: string;
    stok: number;
}

interface Ulasan {
    id: number;
    nama_pengguna: string;
    foto_pengguna: string;
    rating: number;
    tanggal: string;
    komentar: string;
}

interface Pasar {
    id: number;
    nama: string;
    alamat: string;
    deskripsi: string;
    gambar_utama: string;
    gambar_galeri: string[];
    jam_buka: string;
    jam_tutup: string;
    hari_operasional: string[];
    telepon: string;
    rating: number;
    jumlah_ulasan: number;
    jenis: string[];
    fasilitas: string[];
    latitude: number;
    longitude: number;
    products: Produk[];
    ulasan: Ulasan[];
}

export default function DetailPasar({ pasar }: { pasar: Pasar }) {
    const { auth } = usePage<SharedData>().props;
    const [activeTab, setActiveTab] = useState('informasi');
    const [isFavorite, setIsFavorite] = useState(false);

    return (
        <>
            <Head title={pasar.nama} />
            <Navbar auth={auth} />

            <main className="pt-24">
                {/* Breadcrumb */}
                <div className="bg-muted/30">
                    <div className="container mx-auto px-4 py-3">
                        <div className="text-muted-foreground flex items-center text-sm">
                            <Link href="/" className="hover:text-primary">
                                Beranda
                            </Link>
                            <ChevronRight className="mx-1 h-4 w-4" />
                            <Link href="/daftar-pasar" className="hover:text-primary">
                                Daftar Pasar
                            </Link>
                            <ChevronRight className="mx-1 h-4 w-4" />
                            <span className="text-foreground font-medium">{pasar.nama}</span>
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <section className="py-6">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                                <img src={`/storage/${pasar.gambar_utama}`} alt={pasar.nama} className="h-full w-full object-cover" />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {/* {pasar.gambar_galeri.slice(0, 4).map((gambar, index) => (
                                    <div key={index} className="relative aspect-square overflow-hidden rounded-xl">
                                        <img
                                            src={gambar || `/images/pasar/pasar-${pasar.id}-${index + 1}.jpg`}
                                            alt={`${pasar.nama} ${index + 1}`}
                                            className="h-full w-full object-cover"
                                        />
                                        {index === 3 && pasar.gambar_galeri.length > 4 && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                                <span className="text-lg font-medium text-white">+{pasar.gambar_galeri.length - 4}</span>
                                            </div>
                                        )}
                                    </div>
                                ))} */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Info */}
                <section className="py-6">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
                            <div>
                                <div className="mb-4 flex items-start justify-between">
                                    <div>
                                        <div className="mb-2 flex items-center gap-2">
                                            {/* {pasar.jenis.map((jenis, i) => (
                                                <Badge key={i} variant="outline" className="bg-primary/5">
                                                    {jenis}
                                                </Badge>
                                            ))} */}
                                        </div>
                                        <h1 className="text-3xl font-bold">{pasar.nama}</h1>
                                        <div className="text-muted-foreground mt-2 flex items-center gap-4">
                                            <div className="flex items-center">
                                                <MapPin className="mr-1 h-4 w-4" />
                                                <span className="text-sm">{pasar.alamat}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                                            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                                        </Button>
                                        <Button variant="outline" size="icon">
                                            <Share2 className="h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>

                                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                    <TabsList className="grid w-full grid-cols-2">
                                        <TabsTrigger value="informasi">Informasi</TabsTrigger>
                                        <TabsTrigger value="produk">Produk</TabsTrigger>
                                        {/* <TabsTrigger value="ulasan" hidden>
                                            Ulasan
                                        </TabsTrigger> */}
                                    </TabsList>

                                    <TabsContent value="informasi" className="mt-6">
                                        <Card>
                                            <CardContent className="p-6">
                                                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                                                    <Info className="text-primary h-5 w-5" />
                                                    Tentang Pasar
                                                </h3>
                                                <p className="text-muted-foreground mb-6">{pasar.deskripsi}</p>

                                                <div className="grid gap-6 md:grid-cols-2">
                                                    <div>
                                                        <h4 className="mb-3 font-medium">Informasi Kontak</h4>
                                                        <ul className="space-y-3">
                                                            <li className="flex items-center gap-3 text-sm">
                                                                <div className="bg-primary/10 rounded-full p-2">
                                                                    <Clock className="text-primary h-4 w-4" />
                                                                </div>
                                                                <span>
                                                                    {pasar.jam_buka || '08:00'} - {pasar.jam_tutup || '18:00'} WITA
                                                                </span>
                                                            </li>
                                                            <li className="flex items-center gap-3 text-sm">
                                                                <div className="bg-primary/10 rounded-full p-2">
                                                                    <Calendar className="text-primary h-4 w-4" />
                                                                </div>
                                                                <span>Setiap Hari</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="mb-3 font-medium">Fasilitas</h4>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {/* {pasar.fasilitas.map((fasilitas, i) => (
                                                                <div key={i} className="flex items-center gap-2 text-sm">
                                                                    <div className="bg-primary h-2 w-2 rounded-full"></div>
                                                                    <span>{fasilitas}</span>
                                                                </div>
                                                            ))} */}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8">
                                                    <h4 className="mb-3 font-medium">Lokasi</h4>
                                                    <div className="bg-muted relative aspect-[16/9] overflow-hidden rounded-lg">
                                                        <iframe
                                                            width="100%"
                                                            height="450"
                                                            // style="border:0;"
                                                            loading="lazy"
                                                            allowFullScreen
                                                            referrerPolicy="no-referrer-when-downgrade"
                                                            src={`https://www.google.com/maps?q=${pasar.latitude},${pasar.longitude}&hl=en&z=14&output=embed`}
                                                        ></iframe>

                                                        <div className="absolute right-4 bottom-4">
                                                            <Button size="sm" className="gap-2" asChild>
                                                                <a
                                                                    href={`https://www.google.com/maps?q=${pasar.latitude},${pasar.longitude}&hl=en&z=14`}
                                                                    target="_blank"
                                                                >
                                                                    <MapIcon className="h-4 w-4" />
                                                                    Buka di Maps
                                                                </a>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="produk" className="mt-6">
                                        <Card>
                                            <CardContent className="p-6">
                                                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                                                    <Fish className="text-primary h-5 w-5" />
                                                    Produk Tersedia
                                                </h3>

                                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                                    {pasar.products.map((produk) => (
                                                        <Card key={produk.id} className="overflow-hidden transition-shadow hover:shadow-md">
                                                            <div className="relative aspect-square">
                                                                <img
                                                                    src={`/storage/${produk.gambar}`}
                                                                    alt={produk.nama}
                                                                    className="h-full w-full object-cover"
                                                                />
                                                                {produk.stok < 10 && (
                                                                    <Badge className="absolute top-2 right-2 bg-yellow-500">Stok Terbatas</Badge>
                                                                )}
                                                            </div>
                                                            <CardContent className="p-4">
                                                                <h4 className="font-bold">{produk.nama}</h4>
                                                                <div className="mt-2 flex items-center justify-between">
                                                                    <div>
                                                                        <p className="text-primary font-bold">
                                                                            Rp {produk.harga.toLocaleString('id-ID')}
                                                                        </p>
                                                                        <p className="text-muted-foreground text-xs">per {produk.satuan}</p>
                                                                    </div>
                                                                </div>
                                                            </CardContent>
                                                        </Card>
                                                    ))}
                                                </div>

                                                <div className="mt-6 text-center" hidden>
                                                    <Link href={`/daftar-produk?pasar=${pasar.id}`}>
                                                        <Button variant="outline">Lihat Semua Produk</Button>
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>

                                    <TabsContent value="ulasan" className="mt-6">
                                        <Card>
                                            <CardContent className="p-6">
                                                <div className="mb-6 flex items-center justify-between">
                                                    <h3 className="flex items-center gap-2 text-xl font-bold">
                                                        <Star className="text-primary h-5 w-5" />
                                                        Ulasan Pengunjung
                                                    </h3>
                                                    <div className="bg-primary/10 flex items-center gap-2 rounded-full px-3 py-1">
                                                        <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                                                        <span className="font-bold">5</span>
                                                        <span className="text-muted-foreground text-sm">({pasar.jumlah_ulasan})</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-6">
                                                    {/* {pasar.ulasan.map((ulasan) => (
                                                        <div key={ulasan.id} className="border-border border-b pb-6 last:border-0 last:pb-0">
                                                            <div className="flex items-start gap-4">
                                                                <div className="h-10 w-10 overflow-hidden rounded-full">
                                                                    <img
                                                                        src={ulasan.foto_pengguna || `/images/users/user-${ulasan.id}.jpg`}
                                                                        alt={ulasan.nama_pengguna}
                                                                        className="h-full w-full object-cover"
                                                                    />
                                                                </div>
                                                                <div className="flex-1">
                                                                    <div className="flex items-start justify-between">
                                                                        <div>
                                                                            <h4 className="font-medium">{ulasan.nama_pengguna}</h4>
                                                                            <div className="mt-1 flex items-center gap-2">
                                                                                <div className="flex">
                                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                                        <Star
                                                                                            key={star}
                                                                                            className={`h-4 w-4 ${star <= ulasan.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                                                                                        />
                                                                                    ))}
                                                                                </div>
                                                                                <span className="text-muted-foreground text-xs">
                                                                                    {ulasan.tanggal}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p className="text-muted-foreground mt-2">{ulasan.komentar}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))} */}
                                                </div>

                                                <div className="mt-6 text-center">
                                                    <Button>Tulis Ulasan</Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                </Tabs>
                            </div>

                            <div className="space-y-6" hidden>
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="mb-4 text-lg font-bold">Jam Operasional</h3>
                                        {/* <div className="space-y-2">
                                            {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map((hari) => {
                                                const isOpen = pasar.hari_operasional.includes(hari);
                                                return (
                                                    <div key={hari} className="flex items-center justify-between py-1">
                                                        <span className="font-medium">{hari}</span>
                                                        {isOpen ? (
                                                            <span className="text-sm">
                                                                {pasar.jam_buka} - {pasar.jam_tutup}
                                                            </span>
                                                        ) : (
                                                            <span className="text-muted-foreground text-sm">Tutup</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div> */}
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="mb-4 text-lg font-bold">Pasar Terdekat</h3>
                                        <div className="space-y-4">
                                            {[1, 2, 3].map((id) => (
                                                <Link key={id} href={`/pasar/${id}`} className="group flex gap-3">
                                                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md">
                                                        <img
                                                            src={`/images/pasar/pasar-${id}.jpg`}
                                                            alt={`Pasar Terdekat ${id}`}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="group-hover:text-primary font-medium transition-colors">Pasar Ikan {id}</h4>
                                                        <p className="text-muted-foreground mb-1 text-sm">Jl. Perikanan No. {id}, Selayar</p>
                                                        <div className="flex items-center text-xs">
                                                            <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                                                            <span>{(4 + id * 0.1).toFixed(1)}</span>
                                                            <span className="mx-2">•</span>
                                                            <span>{2 + id} km</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <div className="bg-primary/10 rounded-lg p-6">
                                    <h3 className="mb-3 text-lg font-bold">Butuh Informasi?</h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        Hubungi pengelola pasar untuk informasi lebih lanjut tentang produk dan layanan.
                                    </p>
                                    <Button className="w-full gap-2">
                                        <Phone className="h-4 w-4" />
                                        Hubungi Pengelola
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Products Carousel */}
                <section className="bg-muted/30 py-12">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-6 text-2xl font-bold">Produk Populer di {pasar.nama}</h2>

                        <Carousel className="w-full">
                            <CarouselContent>
                                {pasar.products.map((produk) => (
                                    <CarouselItem key={produk.id} className="md:basis-1/3 lg:basis-1/4">
                                        <Card className="h-full overflow-hidden transition-shadow hover:shadow-md">
                                            <div className="relative aspect-square">
                                                <img src={`/storage/${produk.gambar}`} alt={produk.nama} className="h-full w-full object-cover" />
                                            </div>
                                            <CardContent className="p-4">
                                                <h4 className="font-bold">{produk.nama}</h4>
                                                <div className="mt-2 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-primary font-bold">Rp {produk.harga.toLocaleString('id-ID')}</p>
                                                        <p className="text-muted-foreground text-xs">per {produk.satuan}</p>
                                                    </div>
                                                    {/* <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                                                        <ShoppingCart className="h-4 w-4" />
                                                    </Button> */}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
