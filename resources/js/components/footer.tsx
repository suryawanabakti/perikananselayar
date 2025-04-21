import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from '@inertiajs/react';
import { Fish, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 pt-16 pb-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-6 flex items-center gap-2">
                            <div className="bg-primary/20 rounded-full p-2">
                                <Fish className="text-primary h-6 w-6" />
                            </div>
                            <span className="text-xl font-bold text-white">IkanKuSelayar</span>
                        </div>
                        <p className="mb-6 text-gray-400">
                            Platform perikanan terpercaya yang menghubungkan nelayan lokal dengan pembeli untuk mendapatkan hasil laut terbaik.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Tautan Cepat</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Beranda', href: '/' },
                                { name: 'Daftar Pasar', href: '/daftar-pasar' },
                                { name: 'Daftar Produk', href: '/daftar-produk' },
                                { name: 'Tentang Kami', href: '/tentang' },
                                { name: 'Kontak', href: '/kontak' },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white">
                                        <span className="bg-primary h-1 w-1 rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-lg font-bold text-white">Kontak Kami</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-0.5 h-5 w-5" />
                                <span className="text-gray-400">Jl. Perikanan No. 123, Benteng, Kab. Kepulauan Selayar, Sulawesi Selatan</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary h-5 w-5" />
                                <span className="text-gray-400">+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary h-5 w-5" />
                                <span className="text-gray-400">info@ikankuselayar.id</span>
                            </li>
                        </ul>
                    </div>

                    <div hidden>
                        <h3 className="mb-6 text-lg font-bold text-white">Berlangganan</h3>
                        <p className="mb-4 text-gray-400">Dapatkan informasi terbaru tentang pasar ikan dan produk perikanan</p>
                        <div className="space-y-3">
                            <Input type="email" placeholder="Email Anda" className="border-gray-700 bg-gray-800 text-white" />
                            <Button className="w-full">Berlangganan</Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} IkanKuSelayar</p>
                </div>
            </div>
        </footer>
    );
}
