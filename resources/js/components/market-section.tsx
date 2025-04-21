import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Link } from '@inertiajs/react';
import { ArrowRight, Clock, Fish, MapPin } from 'lucide-react';

interface MarketSectionProps {
    pasars: any[];
}

export default function MarketSection({ pasars }: MarketSectionProps) {
    return (
        <section className="relative bg-white py-20">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 left-0 h-40 bg-gradient-to-b from-gray-50 to-white"></div>

            <div className="relative container mx-auto px-4">
                <div className="mb-12 flex flex-col justify-between md:flex-row md:items-end">
                    <div>
                        <div className="bg-primary/10 text-primary mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium">
                            <Fish className="h-4 w-4" />
                            Pasar Ikan Terpopuler
                        </div>
                        <h2 className="mb-4 text-3xl font-bold">Jelajahi Pasar Ikan di Selayar</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            Temukan berbagai pasar ikan di Selayar dengan informasi lengkap untuk kebutuhan Anda
                        </p>
                    </div>
                    <Link href="/daftar-pasar" className="mt-6 md:mt-0">
                        <Button variant="outline" className="gap-2">
                            Lihat Semua Pasar
                            <ArrowRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {pasars.map((data: any, index: number) => (
                        <Card key={data.id || index} className="group overflow-hidden border-none shadow-md transition-all hover:shadow-lg">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <img
                                    src={`/storage/${data.gambar_utama}`}
                                    alt={data.nama}
                                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute top-3 left-3 z-20">
                                    <Badge variant="secondary" className="bg-white/90 hover:bg-white/90">
                                        {index % 2 === 0 ? 'Populer' : 'Baru'}
                                    </Badge>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <h3 className="group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                                    {data.nama || `Pasar Ikan ${index + 1}`}
                                </h3>
                                <div className="space-y-2 text-sm">
                                    <div className="text-muted-foreground flex items-center">
                                        <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                                        <span>{data.alamat || `Jl. Perikanan No. ${index + 1}, Selayar`}</span>
                                    </div>
                                    <div className="text-muted-foreground flex items-center">
                                        <Clock className="mr-2 h-4 w-4 flex-shrink-0" />
                                        <span>Buka 06.00 - 17.00 WITA</span>
                                    </div>
                                </div>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {['Ikan Segar', 'Seafood', 'Olahan Ikan'].map((tag, i) => (
                                        <Badge key={i} variant="outline" className="bg-primary/5">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>

                            <CardFooter className="bg-muted/30 flex items-center justify-between px-6 py-4">
                                <div className="text-sm">
                                    <span className="text-muted-foreground">Mulai dari</span>
                                    <p className="text-primary font-bold">Rp {25000 + index * 5000}</p>
                                </div>
                                <Link href={`/pasar/${data.id || index}`}>
                                    <Button size="sm">Lihat Detail</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {pasars.length > 6 && (
                    <div className="mt-12 text-center">
                        <Link href="/daftar-pasar">
                            <Button variant="outline">Lihat Semua Pasar</Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
