<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__content">
                <div class="footer-nav">
                    <ul class="footer-nav__list">
                        <li class="footer-nav__item">
                            <nuxt-link to="/dinoshop" class="footer-nav__link">Dinoshop</nuxt-link>
                        </li>
                        <li class="footer-nav__item">
                            <nuxt-link to="/romanova-charger" class="footer-nav__link">Romanova Charger</nuxt-link>
                        </li>
                        <li class="footer-nav__item">
                            <nuxt-link to="/art-ff" class="footer-nav__link">Art-FF</nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-logo">Natalia Romanova</div>
                <div class="footer-social">
                    <ul class="footer-social__list">
                        <li class="footer-social__item">
                            <a href="https://facebook.com/romanovanatalia.ru" class="footer-social__link" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        </li>
                        <li class="footer-social__item">
                            <a href="https://www.instagram.com/romanovanatalia.ru" class="footer-social__link" target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .footer {
        padding: 60px 0;
        background: #abb175;
        &__content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
        }
        &-nav {
            &__item {
                margin-bottom: 10px;
            }
            &__link {
                color: #fff;
            }
        }
        &-logo {
            font-family: 'Playfair Display SC', serif;
            font-weight: 600;
            font-size: 24px;
            color: #fff;
        }
        &-social {
            &__list {
                display: flex;
                align-items: center;
            }
            &__item {
                margin-left: 30px;
            }
            &__link {
                font-size: 18px;
                color: #fff;
            }
        }

        @media screen and (max-width: 575px) {
            &-logo {
                display: none;
            }
        }
    }
</style>
