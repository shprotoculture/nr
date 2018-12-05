<template>
    <div class="page">
        <section class="contacts">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col--padding-around">
                        <img src="/img/123.jpg" alt="">
                    </div>
                    <div class="col-lg-6 col--padding-around">
                        <div class="poll">
                            <div class="poll__heading">Вы можете оставить мне сообщение по форме</div>
                            <div class="poll__body">
                                <form @submit.prevent="contactSubmit">
                                    <input type="hidden" name="param" value="Обратная связь">
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
                                        <div class="col-12 col--padding-around">
                                            <div class="poll__textarea">
                                                <textarea name="msg" placeholder="Сообщение" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="poll__body-btm">
                                        <button class="button button--primary" type="submit">Отправить</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="contacts__alt">Или связаться со мной через канал в <a href="https://t.me/Romanova_Natalia" target="_blank"><i class="fab fa-telegram-plane"></i> Telegram</a></div>
                    </div>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
        <div class="poll-successful" v-show="overlayVisible">
            <div class="poll-successful__overlay" @click="overlayVisible = false">
                <div class="poll-successful__content" @click.stop="">
                    <h4>Большое спасибо за сообщение! Я обязательно свяжусь с Вами в ближайшее время!:)</h4>
                    <button type="button" class="button button--primary" @click="overlayVisible = false">ОК</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import AppFooter from '~/components/AppFooter';
export default {
    components: {
        AppFooter
    },
    data () {
        return {
            overlayVisible: false,
        }
    },
    methods: {
        contactSubmit (e) {
            var data = new FormData(e.target);
            var $this = this;
            axios.post('/inc/contacts.php', data).then(res => {
                $this.overlayVisible = true;
                e.target.reset();
            });

        }
    }
}
</script>

<style lang="scss" scoped>
    .contacts {
        padding: 35px 0;
        position: relative;
        &__alt {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            a {
                color: #34ace1;
                font-size: 16px;
                white-space: nowrap;
                line-height: 1.7;
            }
        }

        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            background: #f7f7f7;
            width: 70%;
            height: 100%;
            top: 0;
            right: 0;
        }

        @media screen and (max-width: 991px) {
            &:after {
                width: 100%;
            }
        }

        @media screen and (max-width: 575px) {
            padding: 0;
        }
    }
</style>
