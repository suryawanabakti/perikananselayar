import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Anchor, Award, BarChart3, CheckCircle2, Fish, Mail, MapPin, Phone, Ship, ShoppingBag, Users } from 'lucide-react';

export default function TentangAplikasi() {
    const { auth } = usePage<SharedData>().props;

    const teamMembers = [
        {
            name: 'Budi Santoso',
            role: 'CEO & Founder',
            image: '/images/team/team-1.jpg',
            bio: 'Berpengalaman lebih dari 10 tahun di industri perikanan dan teknologi.',
        },
        {
            name: 'Ani Wijaya',
            role: 'COO',
            image: '/images/team/team-2.jpg',
            bio: 'Ahli dalam manajemen operasional dan pengembangan bisnis perikanan.',
        },
        {
            name: 'Deni Hermawan',
            role: 'CTO',
            image: '/images/team/team-3.jpg',
            bio: 'Pengembang teknologi dengan fokus pada solusi digital untuk sektor perikanan.',
        },
        {
            name: 'Siti Rahayu',
            role: 'Marketing Manager',
            image: '/images/team/team-4.jpg',
            bio: 'Spesialis pemasaran digital dengan pengalaman di industri perikanan.',
        },
    ];

    const faqs = [
        {
            question: 'Apa itu Aplikasi Perikanan Selayar?',
            answer: 'Aplikasi Perikanan Selayar adalah platform digital yang menghubungkan nelayan, pasar ikan, dan konsumen di Kabupaten Selayar. Aplikasi ini menyediakan informasi tentang pasar ikan, produk perikanan, harga, dan memfasilitasi transaksi jual beli hasil laut.',
        },
        {
            question: 'Bagaimana cara mendaftar di aplikasi ini?',
            answer: "Untuk mendaftar, klik tombol 'Daftar' di pojok kanan atas halaman. Isi formulir pendaftaran dengan data diri Anda, verifikasi email, dan akun Anda siap digunakan.",
        },
        {
            question: 'Apakah aplikasi ini gratis?',
            answer: 'Ya, aplikasi ini gratis untuk digunakan. Kami tidak memungut biaya pendaftaran atau biaya berlangganan. Kami hanya mengenakan biaya transaksi kecil untuk setiap pembelian yang berhasil.',
        },
        {
            question: 'Bagaimana sistem pengiriman produk?',
            answer: 'Kami menyediakan dua opsi pengiriman: pengiriman langsung ke alamat Anda (dalam area Selayar) atau Anda dapat mengambil sendiri produk di lokasi pasar. Biaya pengiriman bervariasi tergantung jarak dan berat produk.',
        },
        {
            question: 'Bagaimana menjamin kesegaran produk?',
            answer: 'Semua produk yang dijual di aplikasi kami dijamin kesegarannya. Kami bekerja sama dengan nelayan dan pedagang terpercaya yang menjaga kualitas produk. Produk dikemas dengan es untuk menjaga kesegaran selama pengiriman.',
        },
        {
            question: 'Bagaimana jika saya ingin menjadi mitra?',
            answer: 'Kami terbuka untuk kerjasama dengan nelayan, pedagang, atau pasar ikan di Selayar. Silakan hubungi kami melalui halaman Kontak atau email ke mitra@perikananselayar.id untuk informasi lebih lanjut.',
        },
    ];

    return (
        <>
            <Head title="Tentang Aplikasi" />
            <Navbar auth={auth} />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="from-primary/10 bg-gradient-to-b to-white py-16 md:py-24">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-4xl text-center">
                            <div className="bg-primary/20 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full">
                                <Fish className="text-primary h-8 w-8" />
                            </div>
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl">Tentang Aplikasi Perikanan Selayar</h1>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Menghubungkan nelayan, pasar, dan konsumen untuk ekosistem perikanan yang lebih baik di Kabupaten Selayar
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Button size="lg" className="gap-2">
                                    <Users className="h-5 w-5" />
                                    Bergabung Sekarang
                                </Button>
                                <Button size="lg" variant="outline" className="gap-2">
                                    <Phone className="h-5 w-5" />
                                    Hubungi Kami
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Visi & Misi Kami</h2>
                            <p className="text-muted-foreground">
                                Kami berkomitmen untuk memajukan sektor perikanan di Kabupaten Selayar melalui teknologi dan inovasi
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            <Card className="overflow-hidden">
                                <div className="bg-primary h-2"></div>
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Ship className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold">Visi</h3>
                                    <p className="text-muted-foreground">
                                        Menjadi platform digital terdepan yang menghubungkan seluruh ekosistem perikanan di Kabupaten Selayar,
                                        mendorong pertumbuhan ekonomi lokal, dan meningkatkan kesejahteraan nelayan serta masyarakat pesisir.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="overflow-hidden">
                                <div className="bg-primary h-2"></div>
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Anchor className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold">Misi</h3>
                                    <ul className="text-muted-foreground space-y-2">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                            <span>Menyediakan akses informasi pasar yang transparan dan akurat</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                            <span>Memfasilitasi transaksi jual beli hasil perikanan yang adil</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                            <span>Mendorong praktik perikanan berkelanjutan dan ramah lingkungan</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                            <span>Meningkatkan literasi digital di kalangan nelayan dan pedagang</span>
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section className="bg-muted/30 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Fitur Utama</h2>
                            <p className="text-muted-foreground">
                                Aplikasi Perikanan Selayar menyediakan berbagai fitur untuk memudahkan akses ke pasar dan produk perikanan
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <ShoppingBag className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Informasi Pasar</h3>
                                    <p className="text-muted-foreground">
                                        Akses informasi lengkap tentang pasar ikan di Selayar, termasuk lokasi, jam operasional, dan fasilitas.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Fish className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Katalog Produk</h3>
                                    <p className="text-muted-foreground">
                                        Jelajahi berbagai produk ikan segar dan olahan dengan informasi harga yang transparan dan up-to-date.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <BarChart3 className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Tren Harga</h3>
                                    <p className="text-muted-foreground">
                                        Pantau tren harga produk perikanan untuk membuat keputusan pembelian yang lebih baik.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Award className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Sertifikasi Produk</h3>
                                    <p className="text-muted-foreground">
                                        Informasi tentang kualitas dan sertifikasi produk untuk menjamin keamanan pangan.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Users className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Komunitas</h3>
                                    <p className="text-muted-foreground">
                                        Bergabung dengan komunitas nelayan dan pembeli untuk berbagi informasi dan pengalaman.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="transition-shadow hover:shadow-md">
                                <CardContent className="p-6">
                                    <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                                        <Ship className="text-primary h-6 w-6" />
                                    </div>
                                    <h3 className="mb-2 text-lg font-bold">Pengiriman</h3>
                                    <p className="text-muted-foreground">
                                        Layanan pengiriman produk perikanan segar langsung ke lokasi Anda di area Selayar.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Team */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Tim Kami</h2>
                            <p className="text-muted-foreground">
                                Kenali tim di balik Aplikasi Perikanan Selayar yang berdedikasi untuk memajukan sektor perikanan
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-4">
                            {teamMembers.map((member, index) => (
                                <Card key={index} className="overflow-hidden transition-shadow hover:shadow-md">
                                    <div className="relative aspect-square">
                                        <img src={member.image || '/placeholder.svg'} alt={member.name} className="h-full w-full object-cover" />
                                    </div>
                                    <CardContent className="p-4 text-center">
                                        <h3 className="font-bold">{member.name}</h3>
                                        <p className="text-primary mb-2 text-sm">{member.role}</p>
                                        <p className="text-muted-foreground text-sm">{member.bio}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bg-muted/30 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto mb-12 max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Pertanyaan Umum</h2>
                            <p className="text-muted-foreground">
                                Temukan jawaban untuk pertanyaan yang sering diajukan tentang Aplikasi Perikanan Selayar
                            </p>
                        </div>

                        <div className="mx-auto max-w-3xl">
                            <Tabs defaultValue="umum" className="w-full">
                                <TabsList className="mb-8 grid w-full grid-cols-3">
                                    <TabsTrigger value="umum">Umum</TabsTrigger>
                                    <TabsTrigger value="akun">Akun & Pendaftaran</TabsTrigger>
                                    <TabsTrigger value="transaksi">Transaksi</TabsTrigger>
                                </TabsList>

                                <TabsContent value="umum">
                                    <Accordion type="single" collapsible className="w-full">
                                        {faqs.slice(0, 3).map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`}>
                                                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </TabsContent>

                                <TabsContent value="akun">
                                    <Accordion type="single" collapsible className="w-full">
                                        {faqs.slice(1, 4).map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`}>
                                                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </TabsContent>

                                <TabsContent value="transaksi">
                                    <Accordion type="single" collapsible className="w-full">
                                        {faqs.slice(3, 6).map((faq, index) => (
                                            <AccordionItem key={index} value={`item-${index}`}>
                                                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                                                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid items-center gap-8 md:grid-cols-2">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold">Hubungi Kami</h2>
                                <p className="text-muted-foreground mb-6">
                                    Jika Anda memiliki pertanyaan atau ingin bekerja sama dengan kami, jangan ragu untuk menghubungi tim kami.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 mt-1 rounded-full p-2">
                                            <MapPin className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Alamat</h3>
                                            <p className="text-muted-foreground">
                                                Jl. Perikanan No. 123, Benteng, Kab. Kepulauan Selayar, Sulawesi Selatan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 mt-1 rounded-full p-2">
                                            <Mail className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Email</h3>
                                            <p className="text-muted-foreground">info@perikananselayar.id</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 mt-1 rounded-full p-2">
                                            <Phone className="text-primary h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Telepon</h3>
                                            <p className="text-muted-foreground">+62 812 3456 7890</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <h3 className="mb-3 font-medium">Ikuti Kami</h3>
                                    <div className="flex gap-4">
                                        {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                                            <a
                                                key={social}
                                                href={`#${social}`}
                                                className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                                            >
                                                <img src={`/images/social/${social}.svg`} alt={social} className="h-5 w-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="from-primary absolute -inset-1 rounded-xl bg-gradient-to-r to-blue-600 opacity-30 blur-lg"></div>
                                <Card className="relative">
                                    <CardContent className="p-6">
                                        <h3 className="mb-4 text-xl font-bold">Kirim Pesan</h3>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Nama</label>
                                                    <input
                                                        type="text"
                                                        className="border-border bg-background w-full rounded-md border p-2"
                                                        placeholder="Nama Anda"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-medium">Email</label>
                                                    <input
                                                        type="email"
                                                        className="border-border bg-background w-full rounded-md border p-2"
                                                        placeholder="email@anda.com"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Subjek</label>
                                                <input
                                                    type="text"
                                                    className="border-border bg-background w-full rounded-md border p-2"
                                                    placeholder="Subjek pesan"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-medium">Pesan</label>
                                                <textarea
                                                    className="border-border bg-background min-h-[120px] w-full rounded-md border p-2"
                                                    placeholder="Tulis pesan Anda di sini..."
                                                ></textarea>
                                            </div>

                                            <Button className="w-full">Kirim Pesan</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-primary/10 py-16">
                    <div className="container mx-auto px-4">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className="mb-4 text-3xl font-bold">Bergabunglah dengan Kami Sekarang</h2>
                            <p className="text-muted-foreground mb-8 text-lg">
                                Jadilah bagian dari revolusi digital di sektor perikanan Selayar dan nikmati manfaatnya
                            </p>
                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Button size="lg" className="gap-2">
                                    <Users className="h-5 w-5" />
                                    Daftar Sekarang
                                </Button>
                                <Link href="/daftar-pasar">
                                    <Button size="lg" variant="outline" className="gap-2">
                                        <Fish className="h-5 w-5" />
                                        Jelajahi Pasar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
