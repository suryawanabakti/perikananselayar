import { Button } from '@/components/ui/button';
import { type SharedData } from '@/types';
import { Link } from '@inertiajs/react';
import { Menu, ShoppingCart, User, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavbarProps {
    auth: SharedData['auth'];
}

export default function Navbar({ auth }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white/90 shadow-md backdrop-blur-md' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="rounded-full p-2 transition-colors">
                        <img
                            className="h-10 w-10"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFXXZLKa11qKUZ2KRuSeFPVZBU0arJ8xQGu_wg8GmQxqpUFuubsW5AcKxUeidcYLfvqc&usqp=CAU"
                            alt=""
                        />
                    </div>
                    <span className="group-hover:text-primary text-xl font-bold transition-colors">IkanKuSelayar</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 md:flex">
                    <Link href="/daftar-pasar" className="hover:text-primary group relative text-sm font-medium transition-colors">
                        Daftar Pasar
                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/daftar-produk" className="hover:text-primary group relative text-sm font-medium transition-colors">
                        Daftar Produk
                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                    </Link>
                    <Link href="/tentang" className="hover:text-primary group relative text-sm font-medium transition-colors">
                        Tentang Aplikasi
                        <span className="bg-primary absolute -bottom-1 left-0 h-0.5 w-0 transition-all group-hover:w-full"></span>
                    </Link>
                    {auth?.user ? (
                        <div className="flex items-center gap-3">
                            <a href="/admin">
                                <Button variant="outline" className="gap-2">
                                    <User className="h-4 w-4" />
                                    Dashboard
                                </Button>
                            </a>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <a href="/login">
                                <Button variant="outline">Login</Button>
                            </a>
                            <a href="/register">
                                <Button>Daftar</Button>
                            </a>
                        </div>
                    )}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="bg-primary/10 hover:bg-primary/20 rounded-full p-2 transition-colors md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {isMenuOpen ? <X className="text-primary h-6 w-6" /> : <Menu className="text-primary h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="animate-in slide-in-from-top border-t bg-white md:hidden">
                    <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
                        <Link
                            href="/daftar-pasar"
                            className="hover:bg-primary/5 flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="bg-primary h-2 w-2 rounded-full"></span>
                            Daftar Pasar
                        </Link>
                        <Link
                            href="/daftar-produk"
                            className="hover:bg-primary/5 flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="bg-primary h-2 w-2 rounded-full"></span>
                            Daftar Produk
                        </Link>
                        <Link
                            href="/tentang"
                            className="hover:bg-primary/5 flex items-center gap-2 rounded-md px-2 py-3 text-sm font-medium transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="bg-primary h-2 w-2 rounded-full"></span>
                            Tentang Aplikasi
                        </Link>

                        <div className="my-2 h-px bg-gray-200"></div>

                        {auth?.user ? (
                            <div className="space-y-3">
                                <Link href="/keranjang" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="outline" className="w-full justify-start gap-2">
                                        <ShoppingCart className="h-4 w-4" />
                                        Keranjang Belanja
                                        <span className="bg-primary ml-auto flex h-5 w-5 items-center justify-center rounded-full text-xs text-white">
                                            3
                                        </span>
                                    </Button>
                                </Link>
                                <a href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full justify-start gap-2">
                                        <User className="h-4 w-4" />
                                        Dashboard
                                    </Button>
                                </a>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                <Link href="/admin/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="outline" className="w-full">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/admin/register" onClick={() => setIsMenuOpen(false)}>
                                    <Button className="w-full">Daftar</Button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
