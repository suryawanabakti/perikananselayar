@extends('layouts.guest')

@section('content')
    <main class="main">

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
                            @foreach ($products as $product)
                                <div class="col-lg-4 menu-item">
                                    <a href="/storage/{{ $product->gambar }}" class="glightbox"><img
                                            src="/storage/{{ $product->gambar }}" class="menu-img img-fluid"
                                            alt=""></a>
                                    <h4>{{ $product->nama }} </h4>
                                    <p class="ingredients">
                                        {!! $product->deskripsi !!}
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

    </main>
@endsection
