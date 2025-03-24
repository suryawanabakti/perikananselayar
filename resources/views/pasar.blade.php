@extends('layouts.guest')

@section('content')
    <main class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section light-background">
            <div class="container">
                <div class="row gy-4 justify-content-center justify-content-lg-between">
                    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">{{ $pasar->nama }}</h1>
                        <div data-aos="fade-up" data-aos-delay="100">{!! $pasar->deskripsi !!} <br>

                        </div>
                    </div>
                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="/storage/{{ $pasar->gambar_utama }}" class="img-fluid animated" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!-- /Hero Section -->
        <!-- Menu Section -->
        <section id="menu" class="menu section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Our Menu</h2>
                <p><span>Check Our</span> <span class="description-title">Yummy Menu</span></p>
            </div><!-- End Section Title -->

            <div class="container">


                <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

                    <div class="tab-pane fade active show" id="menu-starters">



                        <div class="row gy-5">
                            @foreach ($pasar->products as $product)
                                <div class="col-lg-4 menu-item">
                                    <a href="/storage/{{ $product->gambar }}" class="glightbox"><img
                                            src="/storage/{{ $product->gambar }}" class="menu-img img-fluid"
                                            alt=""></a>
                                    <h4>{{ $product->nama }} </h4>
                                    <p class="ingredients text-sm">
                                        {!! str()->limit($product->deskripsi) !!}
                                    </p>
                                    <p class="price">
                                        Rp. {{ number_format($product->harga) }}
                                    </p>
                                </div><!-- Menu Item -->
                            @endforeach

                        </div>
                    </div><!-- End Starter Menu Content -->

                </div>

            </div>

        </section><!-- /Menu Section -->

        <!-- Contact Section -->
        <section id="contact" class="contact section">

            <!-- Section Title -->
            <div class="container section-title" data-aos="fade-up">
                <h2>Lokasi</h2>
                <p><span>Ayo berkunjung ke pasar 🤩</span> <span class="description-title">Segar, murah, dan banyak
                        pilihan!</span>
                </p>
            </div><!-- End Section Title -->

            <div class="container" data-aos="fade-up" data-aos-delay="100">

                <div class="mb-5">
                    {!! $pasar->map !!}
                </div><!-- End Google Maps -->

                <div class="row gy-4">

                    <div class="col-md-6">
                        <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                            <i class="icon bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h3>Address</h3>
                                <p>{{ $pasar->alamat }}</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->



                    <div class="col-md-6">
                        <div class="info-item d-flex align-items-center" data-aos="fade-up" data-aos-delay="500">
                            <i class="icon bi bi-clock flex-shrink-0"></i>
                            <div>
                                <h3>Opening Hours<br></h3>
                                <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
                            </div>
                        </div>
                    </div><!-- End Info Item -->

                </div>


            </div>

        </section><!-- /Contact Section -->

    </main>
@endsection
