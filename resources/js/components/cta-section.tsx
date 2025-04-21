import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="bg-primary/5 relative overflow-hidden py-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 h-full w-full bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
                    <div className="grid md:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <h2 className="mb-4 text-3xl font-bold">Dapatkan Informasi Terbaru</h2>
                            <p className="text-muted-foreground mb-8">
                                Bergabunglah dengan kami untuk mendapatkan informasi terbaru tentang pasar ikan dan produk perikanan di Selayar
                            </p>
                            <div className="flex flex-col gap-4 sm:flex-row">
                                <Link href="/register">
                                    <Button size="lg" className="group w-full sm:w-auto">
                                        Daftar Sekarang
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                                <Link href="/tentang">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                                        Pelajari Lebih Lanjut
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            <img
                                src="/placeholder.svg?height=400&width=500&text=Bergabung+Sekarang"
                                alt="Bergabung Sekarang"
                                className="h-full w-full object-cover"
                            />
                            <div className="bg-primary/20 absolute inset-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
