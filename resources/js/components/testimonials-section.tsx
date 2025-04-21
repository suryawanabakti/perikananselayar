import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Budi Santoso',
            role: 'Pembeli',
            image: '/placeholder.svg?height=100&width=100&text=BS',
            content:
                'Aplikasi ini sangat membantu saya menemukan pasar ikan terdekat dengan harga yang transparan. Ikan yang saya beli selalu segar dan berkualitas.',
            rating: 5,
        },
        {
            name: 'Ani Wijaya',
            role: 'Nelayan',
            image: '/placeholder.svg?height=100&width=100&text=AW',
            content:
                'Sebagai nelayan, aplikasi ini membantu saya menjual hasil tangkapan dengan harga yang lebih baik. Proses penjualan menjadi lebih mudah dan transparan.',
            rating: 5,
        },
        {
            name: 'Deni Hermawan',
            role: 'Pemilik Restoran',
            image: '/placeholder.svg?height=100&width=100&text=DH',
            content: 'Saya bisa mendapatkan pasokan ikan segar untuk restoran saya dengan mudah. Kualitas selalu terjaga dan harga sangat bersaing.',
            rating: 4,
        },
    ];

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="mb-4 text-3xl font-bold">Apa Kata Mereka?</h2>
                    <p className="text-muted-foreground">Dengarkan pengalaman pengguna yang telah merasakan manfaat dari platform kami</p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6 transition-all hover:shadow-md">
                            <div className="mb-4 flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-full">
                                    <img
                                        src={testimonial.image || '/placeholder.svg'}
                                        alt={testimonial.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold">{testimonial.name}</h4>
                                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="mb-4 flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
