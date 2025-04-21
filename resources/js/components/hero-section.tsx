import { Button } from '@/components/ui/button';
import { Link, router } from '@inertiajs/react';
import { Anchor, ArrowRight, Fish, Ship } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-36 md:pb-24">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-25"></div>
            <div className="bg-primary/10 absolute top-20 right-0 h-72 w-72 rounded-full opacity-70 blur-3xl filter"></div>
            <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-blue-500/10 opacity-70 blur-3xl filter"></div>

            {/* Floating Icons */}
            <div className="absolute top-40 left-10 animate-bounce opacity-20">
                <Fish className="text-primary h-12 w-12" />
            </div>
            <div className="absolute right-20 bottom-20 animate-pulse opacity-20">
                <Anchor className="h-16 w-16 text-blue-500" />
            </div>
            <div className="absolute top-1/2 right-1/3 animate-bounce opacity-10 delay-300">
                <Ship className="h-10 w-10 text-gray-500" />
            </div>

            <div className="container mx-auto px-4">
                <div className="grid items-center gap-12 md:grid-cols-2">
                    <div className="max-w-xl space-y-8">
                        <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
                            </span>
                            Platform Perikanan Terpercaya di Selayar
                        </div>

                        <h1 className="text-4xl leading-tight font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Temukan Pasar Ikan{' '}
                            <span className="text-primary relative">
                                Terbaik
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 5.5C32.3333 1.16667 96.6 -4.5 144 5.5C191.4 15.5 277.667 11.1667 299 5.5"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>{' '}
                            di Selayar
                        </h1>

                        <p className="text-muted-foreground text-lg">
                            Akses informasi lengkap tentang pasar ikan dan produk perikanan di Selayar untuk memudahkan aktivitas jual beli hasil
                            perikanan dengan harga terbaik.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button size="lg" className="group z-20 w-full sm:w-auto" onClick={() => router.visit('/daftar-pasar')}>
                                Jelajahi Pasars
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>

                            <Link href="/daftar-produk" className="z-20">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                    Lihat Produk Ikan
                                </Button>
                            </Link>
                        </div>

                        <div className="flex hidden items-center gap-6 pt-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="bg-muted h-10 w-10 overflow-hidden rounded-full border-2 border-white">
                                        <img src={`/images/user-${i}.jpg`} alt={`User ${i}`} className="h-full w-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <div className="hidden text-sm">
                                <p className="font-medium">500+ Pengguna Aktif</p>
                                <div className="flex text-yellow-500">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                                            <path
                                                fillRule="evenodd"
                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ))}
                                    <span className="ml-1 text-gray-700">4.9/5</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="from-primary absolute -inset-1 animate-pulse rounded-2xl bg-gradient-to-r to-blue-600 opacity-30 blur-lg"></div>
                        <div className="relative rounded-2xl bg-white p-2 shadow-2xl">
                            <img src="/images/pasar-ikan-hero.jpg" alt="Pasar Ikan Selayar" className="h-auto w-full rounded-xl object-cover" />

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -left-6 w-40 rounded-lg bg-white p-4 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <div className="bg-primary/10 rounded-full p-2">
                                        <Fish className="text-primary h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Ikan Segar</p>
                                        <p className="text-muted-foreground text-xs">Setiap Hari</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Price Card */}
                            <div className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
                                <div className="text-center">
                                    <p className="text-muted-foreground text-xs">Mulai dari</p>
                                    <p className="text-primary text-xl font-bold">Rp 25.000</p>
                                    <p className="text-muted-foreground text-xs">per kg</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
