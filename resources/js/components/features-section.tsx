import { Anchor, Fish, ShoppingCart, TrendingUp } from 'lucide-react';

export default function FeaturesSection() {
    const features = [
        {
            icon: <Fish className="text-primary h-10 w-10" />,
            title: 'Ikan Segar Berkualitas',
            description: 'Dapatkan ikan segar langsung dari nelayan lokal dengan kualitas terbaik dan harga yang kompetitif.',
        },
        {
            icon: <ShoppingCart className="text-primary h-10 w-10" />,
            title: 'Belanja Mudah',
            description: 'Proses belanja yang mudah dan transparan dengan informasi harga yang jelas dan up-to-date.',
        },
        {
            icon: <Anchor className="text-primary h-10 w-10" />,
            title: 'Nelayan Terpercaya',
            description: 'Semua produk berasal dari nelayan terpercaya yang telah terverifikasi dan memiliki reputasi baik.',
        },
        {
            icon: <TrendingUp className="text-primary h-10 w-10" />,
            title: 'Harga Kompetitif',
            description: 'Dapatkan harga terbaik dengan pemantauan harga pasar yang selalu diperbarui setiap hari.',
        },
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">Mengapa Memilih Kami?</h2>
                    <p className="text-muted-foreground">
                        Platform perikanan terpercaya yang menghubungkan nelayan lokal dengan pembeli secara langsung untuk mendapatkan hasil laut
                        terbaik
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="hover:border-primary/20 rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all hover:shadow-lg"
                        >
                            <div className="bg-primary/10 mb-4 flex h-16 w-16 items-center justify-center rounded-lg">{feature.icon}</div>
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 overflow-hidden rounded-xl bg-white shadow-lg">
                    <div className="grid md:grid-cols-2">
                        <div className="flex flex-col justify-center p-8 md:p-12">
                            <h3 className="mb-4 text-2xl font-bold">Statistik Perikanan Selayar</h3>
                            <p className="text-muted-foreground mb-8">
                                Kami telah membantu menghubungkan nelayan dan pembeli di seluruh Selayar dengan hasil yang memuaskan
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-primary text-4xl font-bold">25+</p>
                                    <p className="text-muted-foreground text-sm">Pasar Ikan</p>
                                </div>
                                <div>
                                    <p className="text-primary text-4xl font-bold">100+</p>
                                    <p className="text-muted-foreground text-sm">Nelayan Terdaftar</p>
                                </div>
                                <div>
                                    <p className="text-primary text-4xl font-bold">500+</p>
                                    <p className="text-muted-foreground text-sm">Pengguna Aktif</p>
                                </div>
                                <div>
                                    <p className="text-primary text-4xl font-bold">1000+</p>
                                    <p className="text-muted-foreground text-sm">Transaksi Sukses</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            {/* <img
                                src="/placeholder.svg?height=400&width=500&text=Statistik+Perikanan"
                                alt="Statistik Perikanan"
                                className="h-full w-full object-cover"
                            /> */}
                            <div className="bg-primary/20 absolute inset-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
