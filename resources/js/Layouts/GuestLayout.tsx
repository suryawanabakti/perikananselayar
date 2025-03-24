import React from "react";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }: any) {
    return (
        <div className="min-h-screen bg-background font-sans antialiased">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
                <div className="container flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold">Pasar Digital</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link
                            href="#hero"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link
                            href="#menu"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Menu
                        </Link>
                        <Link
                            href="#contact"
                            className="text-sm font-medium transition-colors hover:text-primary"
                        >
                            Location
                        </Link>
                    </nav>
                </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © {new Date().getFullYear()} Pasar Digital. All rights
                        reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
