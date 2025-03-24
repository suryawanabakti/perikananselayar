"use client";
import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ShoppingBag,
    MapPin,
    Clock,
    Star,
    ChevronRight,
} from "lucide-react";

import { Button } from "@/Components/ui/button";
import { Card, CardContent } from "@/Components/ui/card";
import { AspectRatio } from "@/Components/ui/aspect-ratio";
import { Badge } from "@/Components/ui/badge";
import { Separator } from "@/Components/ui/separator";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

export default function Welcome({ auth, markets }) {
    // Sample data - replace with actual data from your backend
    const featuredMarkets = markets || [
        {
            id: 1,
            nama: "Pasar Tradisional Baru",
            deskripsi:
                "Pasar tradisional dengan berbagai pilihan produk segar dan berkualitas.",
            gambar_utama: "markets/market1.jpg",
            alamat: "Jl. Pasar Raya No. 123, Jakarta",
            rating: 4.8,
        },
        {
            id: 2,
            nama: "Pasar Organik Sehat",
            deskripsi: "Khusus menjual produk organik dan ramah lingkungan.",
            gambar_utama: "markets/market2.jpg",
            alamat: "Jl. Hijau Daun No. 45, Bandung",
            rating: 4.9,
        },
        {
            id: 3,
            nama: "Pasar Ikan Laut",
            deskripsi: "Pusat jual beli ikan laut segar langsung dari nelayan.",
            gambar_utama: "markets/market3.jpg",
            alamat: "Jl. Pelabuhan No. 78, Surabaya",
            rating: 4.7,
        },
    ];

    const features = [
        {
            icon: <ShoppingBag className="h-10 w-10 text-primary" />,
            title: "Produk Segar & Berkualitas",
            description:
                "Dapatkan produk segar langsung dari petani dan produsen lokal dengan kualitas terjamin.",
        },
        {
            icon: <MapPin className="h-10 w-10 text-primary" />,
            title: "Lokasi Strategis",
            description:
                "Temukan pasar terdekat dengan lokasi Anda melalui fitur peta interaktif.",
        },
        {
            icon: <Clock className="h-10 w-10 text-primary" />,
            title: "Informasi Lengkap",
            description:
                "Cek jam operasional, produk tersedia, dan informasi penting lainnya sebelum berkunjung.",
        },
    ];

    const testimonials = [
        {
            name: "Budi Santoso",
            role: "Pengunjung Setia",
            content:
                "Aplikasi ini sangat membantu saya menemukan pasar tradisional terdekat dengan informasi yang lengkap. Produk yang saya beli selalu segar!",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Siti Rahayu",
            role: "Pedagang Pasar",
            content:
                "Sejak bergabung dengan platform ini, jumlah pembeli di toko saya meningkat. Terima kasih Pasar Digital!",
            avatar: "/placeholder.svg?height=40&width=40",
        },
        {
            name: "Ahmad Hidayat",
            role: "Food Blogger",
            content:
                "Saya selalu menggunakan aplikasi ini untuk mencari bahan-bahan segar untuk konten masakan saya. Sangat direkomendasikan!",
            avatar: "/placeholder.svg?height=40&width=40",
        },
    ];

    const categories = [
        {
            name: "Sayuran",
            count: "24 Pasar",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            name: "Buah-buahan",
            count: "18 Pasar",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            name: "Ikan & Seafood",
            count: "15 Pasar",
            image: "/placeholder.svg?height=200&width=300",
        },
        {
            name: "Daging",
            count: "12 Pasar",
            image: "/placeholder.svg?height=200&width=300",
        },
    ];

    return (
        <>
            <Head title="Welcome to Pasar Digital" />

            {/* Header */}
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <ShoppingBag className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">Pasar Digital</span>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="#features"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Fitur
                        </Link>
                        <Link
                            href="#markets"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Pasar
                        </Link>
                        <Link
                            href="#testimonials"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Testimoni
                        </Link>
                        <Link
                            href="#categories"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Kategori
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">
                        {auth?.user ? (
                            <Link href="/dashboard">
                                <Button>Dashboard</Button>
                            </Link>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <Link href="/login">
                                    <Button variant="outline">Masuk</Button>
                                </Link>
                                <Link href="/register">
                                    <Button>Daftar</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-background py-20 md:py-32">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0"></div>
                    <div className="container relative z-10">
                        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
                            <motion.div
                                className="flex flex-col space-y-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="w-fit" variant="outline">
                                    Temukan Pasar Terbaik
                                </Badge>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                    Jelajahi Pasar{" "}
                                    <span className="text-primary">
                                        Tradisional
                                    </span>{" "}
                                    di Sekitar Anda
                                </h1>
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    Temukan pasar tradisional terdekat dengan
                                    produk segar dan berkualitas. Dukung ekonomi
                                    lokal dan nikmati pengalaman berbelanja yang
                                    menyenangkan.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button size="lg" className="gap-2">
                                        Jelajahi Sekarang{" "}
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                    <Button size="lg" variant="outline">
                                        Pelajari Lebih Lanjut
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative mx-auto w-full max-w-[500px]"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <AspectRatio ratio={4 / 3}>
                                        <img
                                            src="/placeholder.svg?height=600&width=800"
                                            alt="Pasar Tradisional"
                                            className="object-cover"
                                        />
                                    </AspectRatio>
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                        <h3 className="text-xl font-bold text-white">
                                            Pasar Tradisional
                                        </h3>
                                        <p className="text-white/80">
                                            Pengalaman berbelanja autentik
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-4 shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <div className="rounded-full bg-white p-2">
                                            <ShoppingBag className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-white">
                                                100+
                                            </p>
                                            <p className="text-xs text-white/80">
                                                Pasar Tersedia
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Fitur Unggulan
                            </h2>
                            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                                Nikmati berbagai fitur yang memudahkan Anda
                                menemukan dan mengeksplorasi pasar tradisional
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-3">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full">
                                        <CardContent className="p-6 flex flex-col items-center text-center">
                                            <div className="mb-4 rounded-full bg-primary/10 p-3">
                                                {feature.icon}
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Markets */}
                <section id="markets" className="py-20">
                    <div className="container">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    Pasar Pilihan
                                </h2>
                                <p className="mt-4 text-muted-foreground md:text-lg max-w-2xl">
                                    Jelajahi pasar-pasar terbaik yang telah kami
                                    kurasi untuk pengalaman berbelanja terbaik
                                    Anda
                                </p>
                            </div>
                            <Link
                                href="/markets"
                                className="mt-4 md:mt-0 group flex items-center text-primary font-medium"
                            >
                                Lihat Semua Pasar
                                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {featuredMarkets.map((market, index) => (
                                <motion.div
                                    key={market.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full overflow-hidden">
                                        <div className="relative">
                                            <AspectRatio ratio={16 / 9}>
                                                <img
                                                    src={
                                                        market.gambar_utama.startsWith(
                                                            "markets/"
                                                        )
                                                            ? `/placeholder.svg?height=300&width=500`
                                                            : `/storage/${market.gambar_utama}`
                                                    }
                                                    alt={market.nama}
                                                    className="object-cover w-full h-full transition-transform hover:scale-105"
                                                />
                                            </AspectRatio>
                                            <div className="absolute top-3 right-3">
                                                <Badge className="flex items-center gap-1 bg-white/90 text-foreground">
                                                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                    {market.rating}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <h3 className="text-xl font-bold mb-2">
                                                {market.nama}
                                            </h3>
                                            <p className="text-muted-foreground mb-4 line-clamp-2">
                                                {market.deskripsi}
                                            </p>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <MapPin className="h-4 w-4 mr-1" />
                                                {market.alamat}
                                            </div>
                                            <div className="mt-4 pt-4 border-t">
                                                <Link
                                                    href={`/markets/${market.id}`}
                                                >
                                                    <Button className="w-full">
                                                        Kunjungi Pasar
                                                    </Button>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Categories Section */}
                <section id="categories" className="py-20 bg-muted/30">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Kategori Pasar
                            </h2>
                            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                                Temukan pasar berdasarkan kategori produk yang
                                Anda cari
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {categories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="group relative overflow-hidden rounded-xl"
                                >
                                    <AspectRatio ratio={3 / 2}>
                                        <img
                                            src={
                                                category.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={category.name}
                                            className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20"></div>
                                        <div className="absolute bottom-0 left-0 p-4 text-white">
                                            <h3 className="text-xl font-bold">
                                                {category.name}
                                            </h3>
                                            <p className="text-white/80">
                                                {category.count}
                                            </p>
                                        </div>
                                    </AspectRatio>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-20">
                    <div className="container">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Apa Kata Mereka
                            </h2>
                            <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
                                Pengalaman pengguna yang telah menggunakan
                                platform Pasar Digital
                            </p>
                        </div>

                        <Carousel className="w-full max-w-5xl mx-auto">
                            <CarouselContent>
                                {testimonials.map((testimonial, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="md:basis-1/2 lg:basis-1/3 p-2"
                                    >
                                        <Card className="h-full">
                                            <CardContent className="p-6">
                                                <div className="flex flex-col h-full">
                                                    <div className="mb-4">
                                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline-block" />
                                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline-block" />
                                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline-block" />
                                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline-block" />
                                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 inline-block" />
                                                    </div>
                                                    <p className="flex-1 text-muted-foreground mb-4">
                                                        "{testimonial.content}"
                                                    </p>
                                                    <div className="flex items-center">
                                                        <img
                                                            src={
                                                                testimonial.avatar ||
                                                                "/placeholder.svg"
                                                            }
                                                            alt={
                                                                testimonial.name
                                                            }
                                                            className="h-10 w-10 rounded-full mr-3"
                                                        />
                                                        <div>
                                                            <h4 className="font-semibold">
                                                                {
                                                                    testimonial.name
                                                                }
                                                            </h4>
                                                            <p className="text-sm text-muted-foreground">
                                                                {
                                                                    testimonial.role
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="flex justify-center mt-8">
                                <CarouselPrevious className="relative mr-2" />
                                <CarouselNext className="relative" />
                            </div>
                        </Carousel>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-primary-foreground">
                    <div className="container">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    Siap Menjelajahi Pasar Tradisional?
                                </h2>
                                <p className="mt-4 text-primary-foreground/80 md:text-lg">
                                    Daftarkan diri Anda sekarang dan mulai
                                    temukan pasar tradisional terbaik di sekitar
                                    Anda.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="gap-2"
                                >
                                    Daftar Sekarang{" "}
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    Pelajari Lebih Lanjut
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-muted py-12 border-t">
                <div className="container">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <ShoppingBag className="h-6 w-6 text-primary" />
                                <span className="text-xl font-bold">
                                    Pasar Digital
                                </span>
                            </div>
                            <p className="text-muted-foreground mb-4">
                                Platform digital yang menghubungkan Anda dengan
                                pasar tradisional di seluruh Indonesia.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
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
                                        className="lucide lucide-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
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
                                        className="lucide lucide-twitter"
                                    >
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="text-muted-foreground hover:text-primary"
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
                                        className="lucide lucide-instagram"
                                    >
                                        <rect
                                            width="20"
                                            height="20"
                                            x="2"
                                            y="2"
                                            rx="5"
                                            ry="5"
                                        />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line
                                            x1="17.5"
                                            x2="17.51"
                                            y1="6.5"
                                            y2="6.5"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">
                                Tautan Cepat
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Beranda
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Tentang Kami
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Pasar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Kategori
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Kontak
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Kategori</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Sayuran
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Buah-buahan
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Ikan & Seafood
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Daging
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="#"
                                        className="text-muted-foreground hover:text-primary"
                                    >
                                        Bumbu Dapur
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4">Kontak</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                                    <span className="text-muted-foreground">
                                        Jl. Pasar Digital No. 123, Jakarta,
                                        Indonesia
                                    </span>
                                </li>
                                <li className="flex items-center">
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
                                        className="lucide lucide-phone h-5 w-5 mr-2 text-muted-foreground"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    <span className="text-muted-foreground">
                                        +62 123 4567 890
                                    </span>
                                </li>
                                <li className="flex items-center">
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
                                        className="lucide lucide-mail h-5 w-5 mr-2 text-muted-foreground"
                                    >
                                        <rect
                                            width="20"
                                            height="16"
                                            x="2"
                                            y="4"
                                            rx="2"
                                        />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    <span className="text-muted-foreground">
                                        info@pasardigital.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} Pasar Digital. All
                            rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <Link
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Kebijakan Privasi
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-muted-foreground hover:text-primary"
                            >
                                Syarat & Ketentuan
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
