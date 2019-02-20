<template>
	<div class="page">
		<div class="intro"></div>
		<section class="section road">
			<div class="container">
				<div class="row road__row">
					<div class="col-lg-6">
						<div class="headline">
							<div class="headline__title">DINOSHOP</div>
							<div class="headline__subtitle">Это первый в России специализированный тематический магазин динозавров. Более 800 позиций динозавров, включая настоящие кости вымерших животных. Магазин расположен при самом большом динопарке под открытым небом в Москве (Москва, Крылатская ул 18, территория парка «Сказка»).</div>
						</div>
					</div>
					<div class="col-lg-6 col--sm-of">
						<div class="road__img">
							<img
							 src="/img/dino-1.svg"
							 alt=""
							>
						</div>
					</div>
				</div>
				<div class="row road__row">
					<div class="col-lg-6">
						<div class="road__img">
							<img
							 src="/img/dino-2.svg"
							 alt=""
							>
						</div>
					</div>
					<div class="col-lg-6">
						<div class="headline">
							<div class="headline__title">Эксклюзивная скидка</div>
							<div class="headline__subtitle">При покупке товаров или подарков для детей с сайта <a
								 href="http://dinoshop.msk.ru"
								 target="_blank"
								>Dinoshop.msk.ru</a>, получите эксклюзивную скидку 15% по промокоду: ROMANOVA_DISCOUNT</div>
						</div>
					</div>
				</div>
				<div class="row road__row">
					<div class="col-lg-6">
						<div class="headline">
							<div class="headline__title">Дино боксы</div>
							<div class="headline__subtitle">На официальном сайте магазина мы подготовили фирменные подарочные Дино боксы для детей всех возрастов и на любой праздник. Доставка на дом по Москве или по России. Заказ оформляется в один клик, вы можете собрать бокс сами и довериться нам! Переходите и познакомьтесь с нашей продукцией, Вам понравится!</div>
						</div>
					</div>
					<div class="col-lg-6 col--sm-of">
						<div class="road__img">
							<img
							 src="/img/dino-3.svg"
							 alt=""
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="dino-video">
			<div class="container">
				<div class="dino-video__overlay">
					<a
					 href="/video/dino.mp4"
					 class="fancybox-link-iframe"
					 data-fancybox
					>
						<img
						 src="/img/dino-video-overlay.jpg"
						 alt=""
						>
					</a>
				</div>
			</div>
		</section>
		<section class="section dino-clients">
			<div class="container">
				<div class="headline headline--center headline--white">
					<div class="headline__title">Наши маленькие посетители</div>
				</div>
				<div class="dino-clients__body">
					<div v-swiper:swiperClients="swiperClinetsOpt">
						<div class="swiper-wrapper">
							<div
							 class="swiper-slide"
							 v-for="(client, i) in clients"
							 :key="i"
							>
								<div class="dino-clients__tile">
									<a
									 :href="'/img/' + client"
									 class="dino-clients__link fancybox-link-image photo-zoom"
									 data-fancybox
									>
										<img
										 :src="'/img/' + client"
										 alt=""
										>
									</a>
								</div>
							</div>
						</div>
						<div class="swiper-controls swiper-controls--center swiper-controls--white">
							<div class="swiper-control swiper-control--prev"><i class="fal fa-long-arrow-left"></i></div>
							<div class="swiper-control-frac"></div>
							<div class="swiper-control swiper-control--next"><i class="fal fa-long-arrow-right"></i></div>
						</div>
					</div>
				</div>
				<div class="dino-clients__social">
					<a
					 href="https://instagram.com/dinoshop_msk?utm_source=ig_profile_share&igshid=10mit3ajfhaid"
					 target="blank"
					><i class="fab fa-instagram"></i> Dinoshop в Instagram</a>
					<a
					 href="https://vk.com/dinoshop_msk"
					 target="blank"
					><i class="fab fa-vk"></i> Dinoshop в VK</a>
				</div>
			</div>
		</section>
		<section class="dino-contacts">
			<div class="container">
				<div class="dino-contacts__content">
					<div class="row">
						<div class="col-lg-6 col--padding-around">
							<div
							 class="map"
							 id="dino-map"
							></div>
						</div>
						<div class="col-lg-6 col--padding-around">
							<div class="dino-contacts__text">
								<p>Адрес: <span>Москва, ул. Крылатская 18</span></p>
								<p>Телефон: <span><a href="tel:+79660326666">+7(966) 032 66 66</a></span></p>
								<p>Мессенжеры:
									<span><a
										 href="https://telegram.me/Romanova_Natalia"
										 target="_blank"
										><i class="fab fa-telegram-plane"></i></a></span>
									<span><a
										 href="https://api.whatsapp.com/send?phone=79660326666"
										 target="_blank"
										><i class="fab fa-whatsapp"></i></a></span>
								</p>
								<p>Ежедневно с 10.00-21.00</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import AppFooter from '~/components/AppFooter';
export default {
    components: {
        AppFooter
    },
    head: {
        script: [
            {src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAh8oP8VinOjfXO4w19DRkjWxx7ndxD-1U", type: "text/javascript"}
        ]
    },
    data () {
        return {
            clients: [
                'dino-client-1.jpg',
                'dino-client-2.jpg',
                'dino-client-3.jpg',
                'dino-client-4.jpg',
                'dino-client-5.jpg',
                'dino-client-6.jpg',
                'dino-client-7.jpg',
                'dino-client-8.jpg',
                'dino-client-10.jpg',
                'dino-client-11.jpg',
                'dino-client-12.jpg',
                'dino-client-13.jpg',
                'dino-client-14.jpg',
                'dino-client-15.jpg',
                'dino-client-16.jpg',
                'dino-client-17.jpg',
                'dino-client-18.jpg',
                'dino-client-19.jpg',
                'dino-client-20.jpg',
                'dino-client-21.jpg',
                'dino-client-22.jpg',
                'dino-client-23.jpg',
                'dino-client-24.jpg',
            ],
            swiperClinetsOpt: {
                slidesPerView: 3,
                navigation: {
                    nextEl: '.swiper-control--next',
                    prevEl: '.swiper-control--prev',
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
    mounted () {
        function initialize() {     
            var myLatlng = new google.maps.LatLng(55.772153, 37.435232);
            var myOptions = {
                zoom: 15,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                scrollwheel: false,
                panControl: false,
            }
            
                var map = new google.maps.Map(document.getElementById("dino-map"), myOptions);
                var marker = new google.maps.Marker({
                    position: myLatlng,
                    map: map,
                });
                
                var popupContent = '<div id="content" class="map-desc"><h2>Москва</h2><p>Москва, ул. Крылатская 18</p><p>+7 (966) 032 66 66</p></div>';

                var infowindow = new google.maps.InfoWindow({
                    content: popupContent
                });

                infowindow.open(map, marker);
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
        }
        initialize();
    }
}
</script>

<style lang="scss" scoped>
.intro {
	min-height: 837px;
	background: url(/img/dinoshop-intro.png) no-repeat center/cover;

	@media screen and (max-width: 767px) {
		min-height: 450px;
	}
}

.headline {
	padding: 0 60px;
	&__title {
		font-family: "Amatic SC", cursive;
		font-size: 36px;
		font-weight: 700;
	}
	&__subtitle {
		margin-top: 15px;
		font-size: 14px;
		font-weight: 300;
		color: #4d4d4d;
		line-height: 2.15;
		a {
			text-decoration: underline;
		}
	}
	&--center {
		text-align: center;
	}
	&--white {
		.headline {
			&__title {
				color: #fff;
			}
			&__subtitle {
				color: #fff;
			}
		}
	}

	@media screen and (max-width: 991px) {
		margin-bottom: 50px;
	}

	@media screen and (max-width: 575px) {
		padding: 0;
	}
}
.road {
	padding-bottom: 0;
	&__img {
		text-align: center;
	}
	&__row {
		margin-bottom: 300px;
		position: relative;
		&:nth-child(1) {
			&:after {
				content: "";
				position: absolute;
				width: 565px;
				height: 356px;
				background: url(/img/dino-line-1.svg) no-repeat center/cover;
				bottom: 100px;
				left: 45%;
				transform: translate(-50%, 100%);
			}
		}
		&:nth-child(2) {
			margin-bottom: 400px;
			&:after {
				content: "";
				position: absolute;
				width: 565px;
				height: 356px;
				background: url(/img/dino-line-2.svg) no-repeat center/cover;
				bottom: 0;
				left: 45%;
				transform: translate(-50%, 100%);
			}
		}

		&:nth-child(3) {
			margin-bottom: 400px;
			&:after {
				content: "";
				position: absolute;
				width: 302px;
				height: 288px;
				background: url(/img/dino-line-3.svg) no-repeat center/cover;
				bottom: -50px;
				left: 37%;
				transform: translate(-50%, 100%);
			}
		}
	}

	@media screen and (max-width: 991px) {
		&__img {
			margin-bottom: 50px;
		}
		&__row {
			margin-bottom: 0;
			&:nth-child(1) {
				margin-bottom: 0;
				&:after {
					display: none;
				}
			}
			&:nth-child(2) {
				margin-bottom: 0;
				&:after {
					display: none;
				}
			}
			&:nth-child(3) {
				margin-bottom: 0;
				&:after {
					display: none;
				}
			}
		}
	}
}

.dino-video {
	padding-bottom: 100px;
	&__overlay {
		width: 67.7777777%;
		margin: 0 auto;
	}

	@media screen and (max-width: 767px) {
		padding-bottom: 50px;
		&__overlay {
			width: 100%;
		}
	}
}

.dino-clients {
	background: url(/img/dino-clients.png) no-repeat center top/cover;
	&__body {
		margin-top: 50px;
	}
	&__tile {
		padding: 15px;
	}
	&__link {
		padding: 10px;
		background: #fff;
		display: block;
		box-shadow: 0 0 15px rgba(#000, 0.15);
	}
	&__social {
		padding-top: 50px;
		text-align: center;
		a {
			display: inline-block;
			margin: 10px 15px;
			color: #fff;
			i {
				font-size: 18px;
			}
		}
	}
}

.dino-contacts {
	&__content {
		padding: 50px 0;
	}
	&__text {
		color: #00b1fd;
		padding-left: 45px;
		p {
			font-family: "Amatic SC", cursive;
			font-size: 36px;
			font-weight: 700;
			margin-bottom: 30px;
			&:last-child {
				margin-bottom: 0;
			}
			span {
				font-family: "Roboto", Arial, Helvetica, sans-serif;
				font-size: 24px;
				font-weight: 300;
			}
			a {
				color: #00b1fd;
				margin-right: 15px;
			}
		}
	}

	@media screen and (max-width: 991px) {
		&__text {
			padding-left: 0;
		}
	}

	@media screen and (max-width: 575px) {
		&__content {
			padding: 30px 0;
		}
		&__text {
			p {
				font-size: 24px;
				span {
					font-size: 18px;
				}
			}
		}
	}
}
</style>
