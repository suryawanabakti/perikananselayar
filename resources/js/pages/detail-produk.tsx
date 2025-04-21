'use client';

import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Badge } from '@/components/ui/badge';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight, Info, MapPin, MapPinCheck } from 'lucide-react';
import { useState } from 'react';

interface Ulasan {
    id: number;
    nama_pengguna: string;
    foto_pengguna: string;
    rating: number;
    tanggal: string;
    komentar: string;
}

interface Produk {
    id: number;
    user: any;
    nama: string;
    deskripsi: string;
    harga: number;
    harga_diskon?: number;
    satuan: string;
    gambar: string;
    gambar_galeri: string[];
    kategori: string;
    rating: number;
    jumlah_ulasan: number;
    pasar: {
        id: number;
        nama: string;
        alamat: string;
        latitude: number;
        longitude: number;
    };
    stok: number;
    terjual: number;
    berat: number;
    kondisi: string;
    ulasan: Ulasan[];
    produk_terkait: {
        id: number;
        nama: string;
        harga: number;
        gambar: string;
        rating: number;
    }[];
}

export default function DetailProduk({ produk }: { produk: Produk }) {
    const { auth } = usePage<SharedData>().props;
    const [activeTab, setActiveTab] = useState('deskripsi');
    const [isFavorite, setIsFavorite] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        if (quantity < produk.stok) {
            setQuantity(quantity + 1);
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const totalPrice = produk.harga_diskon ? produk.harga_diskon * quantity : produk.harga * quantity;

    return (
        <>
            <Head title={produk.nama} />
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
                            <Link href="/daftar-produk" className="hover:text-primary">
                                Daftar Produk
                            </Link>
                            <ChevronRight className="mx-1 h-4 w-4" />
                            <Link href={`/pasar/${produk.pasar.id}`} className="hover:text-primary">
                                {produk.pasar.nama}
                            </Link>
                            <ChevronRight className="mx-1 h-4 w-4" />
                            <span className="text-foreground font-medium">{produk.nama}</span>
                        </div>
                    </div>
                </div>

                {/* Product Detail */}
                <section className="py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
                            {/* Product Images */}
                            <div className="space-y-4">
                                <div className="border-border overflow-hidden rounded-lg border bg-white shadow-md">
                                    <img
                                        src={
                                            typeof produk.gambar === 'string' ? `/storage/${produk.gambar}` : `/storage/${produk.gambar?.nama || ''}`
                                        }
                                        alt={produk.nama}
                                        className="aspect-square h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </div>

                                {produk.gambar_galeri && Array.isArray(produk.gambar_galeri) && produk.gambar_galeri.length > 0 && (
                                    <div className="grid grid-cols-4 gap-2">
                                        {produk.gambar_galeri.map((img, index) => (
                                            <div
                                                key={index}
                                                className="border-border hover:border-primary cursor-pointer overflow-hidden rounded-md border"
                                            >
                                                <img
                                                    src={typeof img === 'string' ? `/storage/${img}` : `/storage/${img?.nama || ''}`}
                                                    alt={`${produk.nama} - ${index + 1}`}
                                                    className="h-20 w-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Product Info */}
                            <div className="rounded-lg bg-white p-6 shadow-md">
                                <div className="mb-6">
                                    <div className="mb-2 flex items-center gap-2">
                                        <Badge variant="outline" className="bg-primary/5">
                                            {produk.kategori.nama}
                                        </Badge>
                                    </div>

                                    <h1 className="mb-2 text-3xl font-bold">{produk.nama}</h1>

                                    <div className="bg-primary/5 mb-6 rounded-lg p-4">
                                        {produk.harga_diskon ? (
                                            <>
                                                <div className="text-primary text-3xl font-bold">
                                                    Rp {produk.harga_diskon.toLocaleString('id-ID')}
                                                </div>
                                                <div className="mt-1 flex items-center gap-2">
                                                    <span className="text-muted-foreground line-through">
                                                        Rp {produk.harga.toLocaleString('id-ID')}
                                                    </span>
                                                    <Badge className="bg-red-500">
                                                        {Math.round((1 - produk.harga_diskon / produk.harga) * 100)}% OFF
                                                    </Badge>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="text-primary text-3xl font-bold">Rp {produk.harga.toLocaleString('id-ID')}</div>
                                        )}
                                        <div className="text-muted-foreground mt-1 text-sm">Harga per {produk.satuan}</div>
                                    </div>

                                    <div className="mb-6 space-y-4 divide-y">
                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-primary"
                                                    >
                                                        <path d="M5 12V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-6" />
                                                        <path d="M5 12H3" />
                                                        <path d="M5 18v2" />
                                                        <path d="M5 22H9" />
                                                        <path d="m14 12-4 4" />
                                                        <path d="M10 16v-4h4" />
                                                    </svg>
                                                </div>
                                                Stok
                                            </span>
                                            <span className={`${produk.stok < 10 ? 'font-medium text-yellow-600' : ''}`}>
                                                {produk.stok == 0 ? 'Tidak Tersedia' : 'Tersedia'}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-primary"
                                                    >
                                                        <circle cx="12" cy="12" r="10" />
                                                        <path d="M12 8v4l3 3" />
                                                    </svg>
                                                </div>
                                                Berat
                                            </span>
                                            <span>
                                                {produk.berat} {produk.satuan}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-primary"
                                                    >
                                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                    </svg>
                                                </div>
                                                No HP
                                            </span>
                                            <a
                                                href={`https://wa.me/${produk.user?.nohp?.replace(/^0/, '62')}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary flex items-center gap-2 hover:underline"
                                            >
                                                <span>{produk.user?.nohp}</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-green-600"
                                                >
                                                    <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                                                </svg>
                                            </a>
                                        </div>

                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="text-primary"
                                                    >
                                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                                    </svg>
                                                </div>
                                                Email
                                            </span>
                                            <a href={`mailto:${produk.user?.email}`} className="hover:text-primary hover:underline">
                                                {produk.user?.email}
                                            </a>
                                        </div>

                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <MapPin className="text-primary h-4 w-4" />
                                                </div>
                                                Lokasi
                                            </span>
                                            <div className="flex items-center">
                                                <a
                                                    href={`/pasar/${produk.pasar.id}`}
                                                    className="hover:text-primary flex items-center hover:underline"
                                                >
                                                    <span>
                                                        {produk.pasar.nama}, {produk.pasar.alamat}
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between py-2">
                                            <span className="flex items-center gap-2 font-medium">
                                                <div className="bg-primary/10 rounded-full p-1.5">
                                                    <MapPinCheck className="text-primary h-4 w-4" />
                                                </div>
                                                No.Kios
                                            </span>
                                            <div className="flex items-center">{produk.user.no_kios}</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        {/* <Button variant="outline" className="gap-2" onClick={() => setIsFavorite(!isFavorite)}>
                                            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                                            Favorit
                                        </Button> */}
                                        {/* <Button variant="outline" className="gap-2">
                                            <Share2 className="h-5 w-5" />
                                            Bagikan
                                        </Button> */}
                                        {/* <Button className="flex-1 gap-2">
                                            <ShoppingCart className="h-5 w-5" />
                                            Tambah ke Keranjang
                                        </Button> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
                            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                                <MapPin className="text-primary h-5 w-5" />
                                Lokasi Pasar
                            </h3>
                            <div className="overflow-hidden rounded-lg border border-gray-200">
                                <iframe
                                    width="100%"
                                    height="350"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={`https://www.google.com/maps?q=${produk.pasar.latitude},${produk.pasar.longitude}&hl=en&z=14&output=embed`}
                                    style={{ border: 0 }}
                                ></iframe>
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg bg-white p-6 shadow-md">
                            <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                                <Info className="text-primary h-5 w-5" />
                                Deskripsi Produk
                            </h3>
                            <div className="prose max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: produk.deskripsi }} className="text-muted-foreground"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* Floating WhatsApp Button */}
            <div className="fixed right-6 bottom-6 z-50">
                <a
                    href={`https://wa.me/${produk.user?.nohp?.replace(/^0/, '62')}?text=Halo, saya tertarik dengan produk ${produk.nama} yang dijual di ${produk.pasar.nama}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-full bg-green-500 p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                    </svg>
                </a>
            </div>

            {/* Debug information - remove in production */}
            {/* <pre className="hidden">{JSON.stringify(produk, null, 2)}</pre> */}
        </>
    );
}
