@extends('layouts.guest')

@section('content')
    <main class="main">

        <div class="row">
            <div class="col-md-6">
                <section id="menu" class="menu section">

                    <!-- Section Title -->
                    <div class="container section-title" data-aos="fade-up">
                        <p> <span class="description-title">{{ $product->nama }}</span></p>
                    </div><!-- End Section Title -->

                    <div class="container">


                        <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

                            <div class="tab-pane fade active show" id="menu-starters">



                                <div class="row gy-5">

                                    <div class="col-lg-12 menu-item">
                                        <a href="/storage/{{ $product->gambar }}" class="glightbox"><img
                                                src="/storage/{{ $product->gambar }}" class="menu-img img-fluid"
                                                alt=""></a>
                                        <h4> <a href="/products/{{ $product->id }}">{{ $product->nama }}</a> </h4>
                                        <p class="ingredients">
                                            {!! $product->deskripsi !!}
                                        </p>
                                        <p class="price">
                                            Rp. {{ number_format($product->harga) }}
                                        </p>
                                    </div><!-- Menu Item -->


                                </div>
                            </div><!-- End Starter Menu Content -->

                        </div>

                    </div>

                </section><!-- /Menu Section -->
            </div>
            <div class="col-md-6">
                <!-- Contact Section -->

                <section id="contact" class="contact section">
                    <!-- Section Title -->

                    <div class="container section-title" data-aos="fade-up">
                        <p><span>Informasi Penjual</span></p>
                    </div><!-- End Section Title -->

                    <div class="container" data-aos="fade-up" data-aos-delay="100">

                        <div class="mb-2">
                            <a href="https://www.google.com/maps?q=-6.200000,106.816666">Klik untuk menuju ke lokasi 🚀</a>
                            <iframe width="100%" height="105" style="border:0;" loading="lazy" allowfullscreen
                                referrerpolicy="no-referrer-when-downgrade"
                                src="https://www.google.com/maps?q=-6.200000,106.816666&output=embed">
                            </iframe>

                        </div><!-- End Google Maps -->

                        <div class="row gy-4">
                            <div class="col-md-6">
                                <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                                    <i class="icon bi bi-whatsapp flex-shrink-0"></i>
                                    <div onclick="sendWhatsApp('{{ $product->user->nohp }}')" style="cursor: pointer;">
                                        <h3>Nomor WA</h3>
                                        <p>{{ $product->user->nohp }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                                    <i class="icon bi bi-envelope flex-shrink-0"></i>
                                    <div onclick="sendEmail('{{ $product->user->email }}')" style="cursor: pointer;">
                                        <h3>Email</h3>
                                        <p>{{ $product->user->email }}</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">

                                <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                                    <i class="icon bi bi-person flex-shrink-0"></i>
                                    <div>
                                        <h3>Nama</h3>
                                        <p>{{ $product->user->name }}</p>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </section><!-- /Contact Section -->


            </div>
        </div>


        <section class="map section">

        </section>
    </main>

    <script>
        function sendWhatsApp(phone) {
            var message = encodeURIComponent("Halo, saya tertarik dengan produk Anda.");
            var whatsappUrl = `https://wa.me/${phone}?text=${message}`;
            window.open(whatsappUrl, "_blank");
        }

        function sendEmail(email) {
            var subject = encodeURIComponent("Judul Email Anda");
            var body = encodeURIComponent("Isi pesan email yang ingin dikirim.");
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
    </script>
@endsection
