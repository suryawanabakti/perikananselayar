@extends('layouts.guest')

@section('content')
    <main class="main">

        <!-- Hero Section -->
        <section id="hero" class="hero section light-background">

            <div class="container">
                <div class="row gy-4 justify-content-center justify-content-lg-between">
                    <div class="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1 data-aos="fade-up">Nikmati Ikan Segar dan Lezat di Kabupaten Selayar</h1>
                        <p data-aos="fade-up" data-aos-delay="100">Kami adalah tim penjual ikan terpercaya yang
                            menyediakan berbagai jenis ikan segar langsung dari laut Kabupaten Selayar.</p>


                    </div>
                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="https://lh5.googleusercontent.com/p/AF1QipOn2taVCcJqMXWpjgkV42yne0npxced157Ft6-F=w810-h468-n-k-no"
                            class="img-fluid animated" alt="">
                    </div>
                </div>
            </div>

        </section><!-- /Hero Section -->
        <!-- Events Section -->
        <section id="events" class="events section">

            <div class="container-fluid" data-aos="fade-up" data-aos-delay="100">

                <div class="swiper init-swiper">
                    <script type="application/json" class="swiper-config">
        {
          "loop": true,
          "speed": 600,
          "autoplay": {
            "delay": 5000
          },
          "slidesPerView": "auto",
          "pagination": {
            "el": ".swiper-pagination",
            "type": "bullets",
            "clickable": true
          },
          "breakpoints": {
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 40
            },
            "1200": {
              "slidesPerView": 3,
              "spaceBetween": 1
            }
          }
        }
      </script>
                    <div class="swiper-wrapper">
                        @foreach ($pasar as $data)
                            <div class="swiper-slide event-item d-flex flex-column justify-content-end"
                                style="background-image: url(/storage/{{ $data->gambar_utama }})">
                                <h3>{{ $data->nama }}</h3>
                                <div class="price align-self-start"></div>
                            </div><!-- End Event item -->
                        @endforeach

                    </div>
                    <div class="swiper-pagination"></div>
                </div>

            </div>

        </section><!-- /Events Section -->

    </main>
@endsection
