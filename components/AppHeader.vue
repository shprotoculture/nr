<template>
    <div class="nav-wrap" :class="{'nav-wrap--dark': getHeaderClass}">
        <header class="header">
            <div class="header__content container">
                <div class="main-nav">
                    <ul class="main-nav__list">
                        <li class="main-nav__item">
                            <nuxt-link to="/" class="main-nav__link">Обо мне</nuxt-link>
                        </li>
                        <li class="main-nav__item main-nav__item--dropdown">
                            <a href="#" class="main-nav__link main-nav__link" @click.prevent="">Мои компании</a>
                            <ul class="main-nav__dropdown">
                                <li class="main-nav__dropdown-item">
                                    <nuxt-link to="/dinoshop/" class="main-nav__dropdown-link">Dinoshop</nuxt-link>
                                </li>
                                <li class="main-nav__dropdown-item">
                                    <nuxt-link to="/romanova-charger" class="main-nav__dropdown-link">Romanova Charger</nuxt-link>
                                </li>
                                <li class="main-nav__dropdown-item">
                                    <nuxt-link to="/art-ff" class="main-nav__dropdown-link">Art-FF</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li class="main-nav__item">
                            <nuxt-link to="/contacts" class="main-nav__link">Связаться со мной</nuxt-link>
                        </li>
                    </ul>
                </div>
                <button type="button" class="toggle-menu" :class="{'toggle-menu--active': mobileMenuIsActive}" @click="toggleMobileMenu">
                    <span class="toggle-menu__line toggle-menu__line-f"></span>
                    <span class="toggle-menu__line toggle-menu__line-s"></span>
                    <span class="toggle-menu__line toggle-menu__line-t"></span>
                </button>
            </div>
        </header>
        <div class="mobile-menu" :class="{'mobile-menu--active': mobileMenuIsActive}">
            <div class="mobile-nav">
                <ul class="mobile-nav__list">
                    <li class="mobile-nav__item">
                        <nuxt-link to="/" class="mobile-nav__link">Обо мне</nuxt-link>
                    </li>
                    <li class="mobile-nav__item">
                        <a to="#" class="mobile-nav__link" @click.prevent="mobileDropDown = !mobileDropDown">Мои компании</a>
                        <ul class="mobile-dropdown" :class="{'mobile-dropdown--active':mobileDropDown}">
                            <li class="mobile-dropdown__item">
                                <nuxt-link to="/dinoshop" class="mobile-dropdown__link">Dinoshop</nuxt-link>
                            </li>
                            <li class="mobile-dropdown__item">
                                <nuxt-link to="/romanova-charger" class="mobile-dropdown__link">Romanova Charger</nuxt-link>
                            </li>
                            <li class="mobile-dropdown__item">
                                <nuxt-link to="/art-ff" class="mobile-dropdown__link">Art-FF</nuxt-link>
                            </li>
                        </ul>
                    </li>
                    <li class="mobile-nav__item">
                        <nuxt-link to="/contacts" class="mobile-nav__link">Связаться со мной</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            mobileDropDown: false,
        }
    },
    methods: {
        toggleMobileMenu() {
            this.$store.commit('toggleMobileMenu');
        }
    },
    computed: {
        getHeaderClass () {
            return this.$route.path == '/romanova-charger' || this.$route.path == '/art-ff' ? true : false;
        },
        mobileMenuIsActive () {
            return this.$store.state.mobileMenuIsActive;
        }
    }
}
</script>

<style lang="scss">

    .nav-wrap {
        
        &--dark {
            .header {
                background: #333;
            }
            .main-nav {
                &__link {
                    color: #fff;
                }
            }
            .toggle-menu {
                &__line {
                    background: #fff;
                }
            }
        }
    }

    .header {
        width: 100%;
        background: #fff;
        position: relative;
        z-index: 99;
        top: 0;
        left: 0;
        transition: .25s ease;
        @media screen and (max-width: 575px) {
            position: fixed;
        }
    }

    .main-nav {
        &__list {
            display: flex;
            align-items: center;
        }
        &__item {
            margin-right: 30px;
            height: 50px;
            &--dropdown {
                position: relative;
                &:hover {
                    .main-nav {
                        &__dropdown {
                            display: block;
                        }
                    }
                }
            }
        }
        &__link {
            color: #4d4d4d;
            text-transform: uppercase;
            font-size: 13px;
            font-weight: 500;
            height: 50px;
            display: block;
            line-height: 50px;
        }
        &__dropdown {
            background: #fff;
            position: absolute;
            width: 300px;
            padding: 15px;
            box-shadow: 0 15px 15px rgba(#000, 0.15);
            left: 0;
            top: 100%;
            display: none;
            &-item {
                margin-bottom: 10px;
                &:last-child {
                    margin-bottom: 0;
                }
            }
            &-link {
                display: block;
                transition: .25s ease;
                &:hover {
                    padding-left: 5px;
                }
            }
        }

        @media screen and (max-width: 575px) {
            display: none;
        }
    }

    .toggle-menu {
        width: 50px;
        height: 50px;
        border: none;
        background: none;
        position: relative;
        display: none;
        margin-left: -15px;
        &__line {
            position: absolute;
            width: 20px;
            height: 2px;
            background: #000;
            left: 15px;
            top: 50%;
            transition: margin 0.25s 0.25s ease, transform 0.25s ease;
            &-f {
                margin-top: -6px;
            }
            &-s {
                margin-top: -1px;
            }
            &-t {
                margin-top: 4px;
            }
        }
        &--active {
            .toggle-menu {
                &__line {
                    transition: margin 0.25s ease, transform 0.25s 0.25s ease;
                    margin-top: -1px;
                    &-f, &-s {
                        transform: rotate(-45deg);
                    }
                    &-t {
                        transform: rotate(45deg);
                    }
                }
            }
        }

        @media screen and (max-width: 575px) {
            display: block;
        }
    }

    .mobile-menu {
        position: fixed;
        z-index: 90;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        padding: 80px 15px;
        display: none;
        transform: translate3d(-100%, 0, 0);
        transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
        &--active {
            transform: translate3d(0, 0, 0);
        }
        @media screen and (max-width: 575px) {
            display: block;
        }
    }

    .mobile-nav {
        &__item {
            border-bottom: 1px solid #D2D4C0;;
        }
        &__link {
            display: block;
            text-align: center;
            text-transform: uppercase;
            padding: 15px 0;
        }
    }

    .mobile-dropdown {
        height: 0;
        overflow: hidden;
        transition: .25s ease;
        &__item {
            margin-bottom: 10px;
            text-align: center;
        }
        &--active {
            height: 87px;
        }
    }
</style>
