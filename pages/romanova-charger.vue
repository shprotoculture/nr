<template>
    <div class="page">
        <div class="charger-intro"></div>
        <section class="section history">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="heading heading--gold history__text">
                            <h2 class="heading__title intro__title">История компании</h2>
                            <p class="heading__subtitle">Компания существует с 2016 года. Мы производим самые компактные зарядные Power Bank на 3000 mAh с прямым подключением к телефону. Сборка устройств производится в Москве российскими инженерами, а корпус изготавливается на Фрязинском заводе в  московской области. Гарантия прилагается к каждому устройству. Подойдет как подарок близкому так и как корпоративный подарок, можем брендировать каждое устройство вашим логотипом.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src="/img/history-1.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
        <section class="section classic">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div v-swiper:mySwiper="swiperOption" class="classic-swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="/img/classic-1-big.jpg" class="classic-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/classic-1.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/classic-2-big.jpg" class="classic-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/classic-2.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/classic-3-big.jpg" class="classic-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/classic-3.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/classic-4-big.jpg" class="classic-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/classic-4.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/classic-5-big.jpg" class="classic-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/classic-5.jpg">
                                    </a>
                                </div>
                            </div>
                            <div class="swiper-controls swiper-controls--left">
                                <div class="swiper-control swiper-control--prev"><i class="fal fa-long-arrow-left"></i></div>
                                <div class="swiper-control-frac"></div>
                                <div class="swiper-control swiper-control--next"><i class="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="heading heading--gold classic__text">
                            <h2 class="heading__title intro__title">Серия Classic</h2>
                            <p class="heading__subtitle">Корпус изготовлен из анодированного алюминия и его невозможно поцарапать. Мы переезжали зарядки машиной весом поти 2 тонны и они остаются целыми, что несомненно говорит о качестве наших устройства. Сборка производится в Москве российскими инженерами.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section swarovski">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div class="heading heading--gold swarovski__text">
                            <h2 class="heading__title intro__title">Серия Swarovski</h2>
                            <p class="heading__subtitle">Серия Swarovski - лимитированная серия. Выпущено всего 100 устройств, большая часть уже распродана. Кристаллы Сваровски изготавливались на головном заводе Swarovski в Австрии под заказ. На каждое устройство имеется сертификат подлинности кристаллов Swarovski.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="swarovski__grid">
                            <div class="swarovski__grid-col swarovski__grid-col-3">
                                <div class="swarovski__grid-tile">
                                    <a href="/img/swarovski-1-big.jpg" class="swarovski__grid-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/swarovski-1.jpg" alt="">
                                    </a>
                                </div>
                                <div class="swarovski__grid-tile">
                                    <a href="/img/swarovski-2-big.jpg" class="swarovski__grid-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/swarovski-2.jpg" alt="">
                                    </a>
                                </div>
                                <div class="swarovski__grid-tile">
                                    <a href="/img/swarovski-3-big.jpg" class="swarovski__grid-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/swarovski-3.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="swarovski__grid-col swarovski__grid-col-9">
                                <div class="swarovski__grid-tile">
                                    <a href="/img/swarovski-4-big.jpg" class="swarovski__grid-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/swarovski-4.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section video">
            <div class="container">
                <div class="video__container">
                    <a href="/video/charger.mp4" class="video__link fancybox-link-iframe" data-fancybox>
                        <img src="/img/charger-video-overlay.jpg" alt="">
                    </a>
                </div>
            </div>
        </section>
        <section class="section section--grey range">
            <div class="container">
                <div class="range__title">Ассортимент</div>
                <div class="range__tabs">
                    <div class="range__tabs-link">
                        <input type="radio" name="category" value="middle" v-model="category" id="middle">
                        <label for="middle">Middle Crystals</label>
                    </div>
                    <span class="range__tabs-line"></span>
                    <div class="range__tabs-link">
                        <input type="radio" name="category" value="small" v-model="category" id="small">
                        <label for="small">Small Crystals</label>
                    </div>
                </div>
                <div class="range__body">
                    <div class="swarovski-middle" v-show="category == 'middle'">
                        <div v-swiper:swiperProductMiddle="swiperProductOptions">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-1.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Middle Crystals Black</div>
                                            <div class="swarovski-product__desc">Черный насыщенный цвет кристаллов подчеркнет вашу экстраординарность и привлекательность! Подойдет к любому гардеробу.</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">9700</span> 8730 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Middle Crystals Black" v-model="products" id="product-1">
                                                <label for="product-1"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-2.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Middle Crystals Silver</div>
                                            <div class="swarovski-product__desc">Серебряный блеск кристаллов добавит шикарную нотку к вашему имиджу и подойдет к любому цвету телефона.</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">9600</span> 8640 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Middle Crystals Silver" v-model="products" id="product-2">
                                                <label for="product-2"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-3.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Middle Crystals Blue</div>
                                            <div class="swarovski-product__desc">Синий цвет продемонстрирует вашу независимость, благородство и уверенность, а россыпь кристаллов подчеркнет глубину вашего взгляда!</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">10200</span> 9180 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Middle Crystals Blue" v-model="products" id="product-3">
                                                <label for="product-3"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-4.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Middle Crystals Red</div>
                                            <div class="swarovski-product__desc">Красный блеск олицетворяет вашу страсть, красоту и лидерство. Магия блеска взбудоражит воображение окружающих!</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">10500</span> 9450 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Middle Crystals Red" v-model="products" id="product-4">
                                                <label for="product-4"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-controls swiper-controls--center">
                                <div class="swiper-control swiper-control--prev3"><i class="fal fa-long-arrow-left"></i></div>
                                <div class="swiper-control-frac"></div>
                                <div class="swiper-control swiper-control--next3"><i class="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="swarovski-small" v-show="category == 'small'">
                        <div v-swiper:swiperProductSmall="swiperProductOptionsSmall">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-5.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Small Crystals Black</div>
                                            <div class="swarovski-product__desc">Black power bank - лучший подарок девушке на день рождения или другой праздник.</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">7900</span> 7100 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Small Crystals Black" v-model="products" id="product-5">
                                                <label for="product-5"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-6.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Small Crystals Silver</div>
                                            <div class="swarovski-product__desc">Серебряный блеск мелких кристаллов - это классика, которая подойдет к любому телефону. Самый лучший power bank создан для особенных девушек.</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">7800</span> 7000 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Small Crystals Silver" v-model="products" id="product-6">
                                                <label for="product-6"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="swarovski-product">
                                        <div class="swarovski-product__inner">
                                            <div class="swarovski-product__img">
                                                <img src="/img/swarovski-product-7.png" alt="">
                                            </div>
                                            <div class="swarovski-product__name">Small Crystals Blue</div>
                                            <div class="swarovski-product__desc">Синие переливы хрустальной пыли на внешнем аккумуляторе  в  нашем магазине Повер Банк - это выражение вашей элегантности и превосходного вкуса.</div>
                                            <div class="swarovski-product__cost">Цена: <span class="swarovski-product__cost-old">8300</span> 7450 <span class="sup">руб</span></div>
                                            <div class="swarovski-product__add">
                                                <input type="checkbox" name="product" value="Small Crystals Blue" v-model="products" id="product-7">
                                                <label for="product-7"><span>Заказать</span></label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-controls swiper-controls--center">
                                <div class="swiper-control swiper-control--prev2"><i class="fal fa-long-arrow-left"></i></div>
                                <div class="swiper-control-frac"></div>
                                <div class="swiper-control swiper-control--next2"><i class="fal fa-long-arrow-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="range__checkout" v-show="products.length > 0">
                    <div class="poll">
                        <div class="poll__heading">Оформить заказ</div>
                        <div class="poll__body">
                            <form @submit.prevent="checkoutSubmit">
                                <input type="hidden" name="param" value="Заказ Romanova Charger">
                                <input type="hidden" name="products" :value="products + ''">
                                <div class="row">
                                    <div class="col-lg-12 col--padding-around">
                                        <div class="poll__input">
                                            <input type="text" placeholder="Имя" name="name" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col--padding-around">
                                        <div class="poll__input">
                                            <input type="text" placeholder="Телефон" name="phone" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 col--padding-around">
                                        <div class="poll__input">
                                            <input type="email" placeholder="E-mail" name="email" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="poll__body-btm">
                                    <button class="button button--primary" type="submit">Заказать</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="range__social">
                    <a href="http://swarovski.limited" target="blank"><i class="fal fa-globe"></i> swarovski.limited</a>
                    <a href="https://instagram.com/romanova_co?utm_source=ig_profile_share&igshid=rxba269zdg7" target="blank"><i class="fab fa-instagram"></i> @romanova_co</a>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
        <div class="poll-successful" v-show="overlayVisible">
            <div class="poll-successful__overlay" @click="overlayVisible = false">
                <div class="poll-successful__content" @click.stop="">
                    <h4>Спасибо за заказ! Мы с Вами свяжемся как можно скорее!</h4>
                    <button type="button" class="button button--primary" @click="overlayVisible = false">ОК</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppFooter from '~/components/AppFooter';
import axios from 'axios';
export default {
    components: {
        AppFooter
    },
    data () {
        return {
            overlayVisible: false,
            category: 'middle',
            products: [],
            swiperOption: {
                navigation: {
                    nextEl: '.swiper-control--next',
                    prevEl: '.swiper-control--prev',
                },
                pagination: {
                    el: '.swiper-control-frac',
                    type: 'fraction'
                },
                
            },
            swiperProductOptions: {
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-control--next3',
                    prevEl: '.swiper-control--prev3',
                },
                pagination: {
                    el: '.swiper-control-frac',
                    type: 'fraction'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                }
                
            },
            swiperProductOptionsSmall: {
                slidesPerView: 4,
                navigation: {
                    nextEl: '.swiper-control--next2',
                    prevEl: '.swiper-control--prev2',
                },
                pagination: {
                    el: '.swiper-control-frac',
                    type: 'fraction'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 2,
                    },
                    576: {
                        slidesPerView: 1,
                    },
                }
                
            },
        }
    },

    methods: {
        checkoutSubmit (e) {
            var data = new FormData(e.target);
            var $this = this;
            axios.post('/inc/charger.php', data).then(res => {
                $this.overlayVisible = true;
                e.target.reset();
            });

        }
    }
}
</script>

<style lang="scss" scoped>
    .charger-intro {
        min-height: 768px;
        background: url(/img/charger-intro.jpg) no-repeat center/cover;
        
        @media screen and (max-width: 767px) {
            min-height: 560px;
        }

        @media screen and (max-width: 575px) {
            min-height: 400px;
        }
    }
    
    .history {
        &__text {
            padding-right: 45px;
        }
        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            width: 70%;
            height: 100%;
            background: #f7f7f7;
            top: 0;
            left: 0;
        }

        @media screen and (max-width: 991px) {
            &__text {
                padding-right: 0;
            }
            &:after {
                width: 100%;
            }
        }
    }

    .classic {
        padding-bottom: 50px;
        &__text {
            padding-left: 45px;
        }
        &-swiper {
            margin-left: -15px;
            &__link {
                padding: 15px;
                display: block;
                img {
                    box-shadow: 0 0 15px rgba(#000, 0.15);
                }
            }
        }
        &__description {
            &-content {
                display: none;
                &:first-child {
                    display: block;
                }
            }
        }
        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            width: 70%;
            height: 100%;
            background: #f7f7f7;
            top: 0; 
            right: 0;
        }

        @media screen and (max-width: 991px) {
            margin-top: 50px;
            &:after {
                width: 100%;
            }
            &-swiper {
                max-width: 555px;
                margin: 0 -15px;
            }
            &__text {
                padding-left: 0;
            }
        }
    }

    .swarovski {
        &__text {
            padding-right: 45px;
        }
        &__grid {
            display: flex;
            margin: 0 -5px;
            &-tile {
                padding: 5px;
            }
        }
    }

    .range {
        &__social {
            padding-top: 50px;
            text-align: center;
            a {
                display: inline-block;
                margin: 10px 15px;
                color: #abb175;
                i {
                    font-size: 18px;
                }
            }
        }
        &__title {
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            font-weight: 400;
            text-align: center;
            color: #abb175;
            margin-bottom: 30px;
        }
        &__tabs {
            display: flex;
            align-items: center;
            justify-content: center;
            &-link {
                margin: 0 15px;
                display: inline-block;
                position: relative;
                input {
                    position: absolute;
                    opacity: 0;
                    z-index: -1;
                    &:checked {
                        & + label {
                            color: #abb175;
                        }
                    }
                }
                label {
                    display: inline-block;
                    cursor: pointer;
                    font-size: 16px;
                    transition: .25s ease;
                }
            }
            &-line {
                width: 1px;
                height: 20px;
                background: #d7d7d7;
                display: inline-block;
            }
        }
        &__body {
            padding-top: 50px;
            .swiper-wrapper {
                justify-content: center;
            }
            .swiper-controls {
                display: none;
            }
        }
        &__checkout {
            padding-top: 50px;
        }

        @media screen and (max-width: 1199px) {
            &__body {
                .swiper-wrapper {
                    justify-content: flex-start;
                }
                .swiper-controls {
                    display: flex;
                }
            }
        }
    }

    .swarovski-product {
        padding: 15px;
        max-width: 320px;
        margin: 0 auto;
        &__inner {
            background: #fff;
            box-shadow: 0 0 10px rgba(#000, 0.05);
            border-radius: 5px;
            padding: 30px 20px;
        }
        &__img {
            text-align: center;
        }
        &__name {
            padding: 15px 0;
            font-family: 'Playfair Display', serif;
            font-size: 18px;
        }
        &__desc {
            font-size: 13px;
            font-weight: 400;
            color: #878787;
            line-height: 1.6;
            margin-bottom: 15px;
            height: 100px;
            overflow: hidden;
        }
        &__cost {
            font-size: 15px;
            margin-bottom: 15px;
            .sup {
                text-transform: uppercase;
                font-size: 9px;
                font-weight: 500;
                vertical-align: super;
            }
            &-old {
                color:#cacaca;
                text-decoration: line-through;
                display: inline-block;
                margin-right: 5px;
            }
        }
        &__add {
            position: relative;
            input {
                position: absolute;
                opacity: 0;
                z-index: -1;
                &:checked {
                    &+label {
                        background: #539273;
                        span {
                            display: none;
                        }
                        &:after {
                            content: '\f00c';
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            color: #fff;
                            font-family: 'Font Awesome 5 Pro';
                            font-weight: 400;
                            font-size: 15px;
                        }
                    }
                }
            }
            label {
                display: inline-block;
                width: 160px;
                height: 40px;
                border: none;
                background: #D2D4C0;
                color: #fff;
                font-size: 13px;
                font-weight: 500;
                border-radius: 5px;
                transition: .25s ease;
                text-align: center;
                line-height: 40px;
                cursor: pointer;
                position: relative;
                vertical-align: middle;
                &:hover {
                    background: #abb175;
                }
            }
        }
    }

    .poll {
        max-width: 570px;
        margin: 0 auto;
        &__heading {
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 36px;
            font-weight: 400;
            line-height: 1.2;
            margin-bottom: 30px;
        }
        &__body {
            &-btm {
                padding-top: 15px;
            }
        }
        &__radio {
            position: relative;
            input {
                position: absolute;
                z-index: -2;
                opacity: 0;
                &:checked + label {
                    box-shadow: 0px 0px 15px rgba(#000, 0.25) inset;
                    background: #abb175;
                }
            }
            label {
                text-align: center;
                padding: 15px;
                display: block;
                background: #D2D4C0;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                color: #fff;
                transition: .25s ease;
                &:hover {
                    background: #abb175;
                }
            }
        }
        &__textarea {
            textarea {
                width: 100%;
                height: 200px;
                resize: none;
                border: 2px solid #D2D4C0;
                padding: 15px;
                background: #f7f7f7;
                &:focus {
                    background: #fff;
                }
            }
        }
        &__input {
            input {
                width: 100%;
                resize: none;
                border: 2px solid #D2D4C0;
                padding: 15px;
                background: #f7f7f7;
                &:focus {
                    background: #fff;
                }
            }
        }

        @media screen and (max-width: 575px) {
            &__heading {
                font-size: 24px;
            }
        }
    }

    .poll-successful {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        &__overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(#000, 0.65);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &__content {
            background: #fff;
            padding: 30px;
            text-align: center;
            box-shadow: 0 0 7px rgba(#000, 0.15);
            max-width: 290px;
            h4 {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 15px;
            }
            button {
                width: 100%;
                padding: 10px 15px;
                max-width: 160px;
            }
        }
    }
</style>
