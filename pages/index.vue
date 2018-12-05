<template>
    <div class="page">
        <section class="section intro">
            <div class="container">
                <div class="row intro__row">
                    <div class="col-lg-6">
                        <img src="/img/123.jpg" alt="">
                        
                    </div>
                    <div class="col-lg-6">
                        <div class="intro__text heading">
                            <h2 class="heading__title intro__title">Добро пожаловать на мой персональный сайт.</h2>
                            <p class="heading__subtitle">На этом сайте вы ближе познакомитесь с мной, узнаете кто я и чем занимаюсь. Мне очень приятно, что Вы оказались здесь.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section benefits">
            <div class="container">
                <div class="heading">
                    <h4 class="heading__title">Что полезного можно здесь получить?</h4>
                    <p class="heading__subtitle">В разделе «Мои компании» Вы найдете специальные скидочные промо коды, которые сможете использовать при заказах товаров в таких компаниях как:</p>
                </div>
                <div class="row">
                    <div class="col-lg-4 col--padding-around">
                        <div class="benefit">
                            <nuxt-link to="/dinoshop">
                                <div class="benefit__image-wrapper">
                                    <img src="/img/dinoshop-logo.png" alt="">
                                </div>
                                <div class="benefit__title">Dinoshop</div>
                                <div class="benefit__text">самый большой ассортимент игрушек на тематику динозавры в России, более 900 видов + настоящие кости динозавров, обломки метеоритов и пр.</div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col--padding-around">
                        <div class="benefit">
                            <nuxt-link to="/romanova-charger">
                                <div class="benefit__image-wrapper">
                                    <img src="/img/romanova-charger-logo.png" alt="">
                                </div>
                                <div class="benefit__title">Romanovа Charger</div>
                                <div class="benefit__text">Это самые компактные повер банки, ёмкостью 3000 mAh, с прямым подключением к телефону + инкрустированные кристаллами Swarovski прямо с завода в Австрии.</div>
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-lg-4 col--padding-around">
                        <div class="benefit">
                            <nuxt-link to="/art-ff">
                                <div class="benefit__image-wrapper">
                                    <img src="/img/art-ff-logo.png" alt="">
                                </div>
                                <div class="benefit__title">Art-FF</div>
                                <div class="benefit__text">потрет по фотографии по особой технологии (флип-флоп), изготовление 24 часа и доставка по Москве/Санкт-Петербургу до двери и почтой по России.</div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section education">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-7">
                        <div class="photos">
                            <div class="photo" id="photo-1">
                                <a href="/img/photo-1-big.jpg" class="photo__link fancybox-link-image" data-fancybox>
                                    <img src="/img/photo-1.jpg" alt="" class="photo__img">
                                </a>
                            </div>
                            <div class="photo" id="photo-2">
                                <a href="/img/photo-2-big.jpg" class="photo__link fancybox-link-image" data-fancybox>
                                    <img src="/img/photo-2.jpg" alt="" class="photo__img">
                                </a>
                            </div>
                            <div class="photo" id="photo-3">
                                <a href="/img/photo-3-big.jpg" class="photo__link fancybox-link-image" data-fancybox>
                                    <img src="/img/photo-3.jpg" alt="" class="photo__img">
                                </a>
                            </div>
                            <div class="photo" id="photo-4">
                                <a href="/img/photo-4-big.jpg" class="photo__link fancybox-link-image" data-fancybox>
                                    <img src="/img/photo-4.jpg" alt="" class="photo__img">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-5">
                        <div class="heading education__text">
                            <h4 class="heading__title">Образование</h4>
                            <p class="heading__subtitle">После школы я поступаю и заканчиваю колледж Управления и Коммерции по специальности «Менеджер» в Санкт-Петербурге (откуда я родом), после учусь 4 года очно и получаю высшее образование в СПБГЭУ на факультете «Коммерция и торговое дело». </p>
                            <p class="heading__subtitle">Переехав в Москву, хожу на бизнес тренинги, одним из которых был БМ (это 2015 год), в 2016 поступаю в Сколково на программу «Стартап Академия», после которой на свет появляется компания Romanovа Charger.</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section ability">
            <div class="container">
                <div class="heading heading--center">
                    <h4 class="heading__title">Навыки</h4>
                    <p class="heading__subtitle">После прохождения всевозможных обучений и проб в бизнесе, могу точно сказать какие компетенции у меня есть:</p>
                </div>
                <div class="row ability__row">
                    <div class="col-lg-6">
                        <div class="ability__text ability__text--left text--default"><span class="text--bold">Запуск бизнеса</span> с нуля и оценка рынка. Важно знать какую долю рынка может занять ваш продукт на рынке, исходя из этого нетрудно посчитать насколько он масштабируем и сколько денег в вашем сегменте можно заработать, учитывая конкурентоспособность.</div>
                        <div class="ability__text ability__text--left text--default"><span class="text--bold">Сайты, ленды.</span> Это то, в чем я начинала разбираться еще в 2015 году. Сейчас могу с уверенностью рассказать о правильном построении сайта с хорошей по рынку конверсией (как и за счет чего ее добиться); могу рассказать разницу между сайтом и лендом и все  их плюсы и минусы; как упаковать сайт, сколько это стоит и сколько занимает по времени в зависимости от задачи.</div>
                        <div class="ability__text ability__text--left text--default"><span class="text--bold">Ведение инстаграмма.</span> В общем, обучение было методом проб и ошибок на протяжении долгого времени, теперь об инстаграмме я точно знаю всё. Собственно поэтому запустила с нуля свой новый профиль. Имя мое там @romanovanatalia.ru, такое же как и домен этого сайта.</div>
                    </div>
                    <div class="col-lg-6 col--sm-of">
                        <div class="ability__image-wrapper">
                            <img src="/img/ability-1.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="row ability__row">
                    <div class="col-lg-6">
                        <div class="ability__image-wrapper">
                            <img src="/img/ability-2.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="ability__text ability__text--right text--default"><span class="text--bold">Клиенты.</span> Как собрать клиентскую базу и не потерять их, продление ltv. Какими программами нужно обязательно пользоваться и какие системы лояльности для клиентов подходят именно вашему бизнесу.</div>
                        <div class="ability__text ability__text--right text--default"><span class="text--bold">Работа с персоналом.</span> Ключевые показатели влияющие на продажи со стороны персонала. Скрипты для сотрудников. Бонусные программы. Мотивация.</div>
                        <div class="ability__text ability__text--right text--default"><span class="text--bold">Маркетинг и пиар.</span> Выявление целевых клиентов, построение карты mind map.  Поиск и отбор площадок для размещения рекламных кампаний, стратегия ведения. Публикации в СМИ и на ТВ.</div>
                        <div class="ability__text ability__text--right text--default"><span class="text--bold">Торговля товарами оффлайн и онлайн.</span> Каналы продаж.</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section progress">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="progress__image-wrapper">
                            <img src="/img/progress-1.jpg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="heading progress__text">
                            <h4 class="heading__title">Достижения</h4>
                            <p class="heading__subtitle">Оборот моих компаний составляет 15 млн в год. Это может не сильно большая цифра, мне есть к чему стремиться, но мне кажется, что это неплохая степень развития на данный момент.</p>
                            <p class="heading__subtitle">Зарядки Romanovа. Это труды почти 2-х лет - продукт с нуля без помощи китайцев, собранные русскими инженерами в сотрудничестве с российскими заводами, полученная лицензия использования чипов mfi от компании Apple, участие в технологических акселераторах с продуктом, привлечение инвестиций, работа с венчурными фондами. Представлены только на нашем рынке. А кристаллы Swarovski лимитированной серии разработаны специально для Romanovа Charger на заводе в Австрии.</p>
                        </div>
                        <div class="text--default progress__btm">Про другие мои компании можно ознакомиться в соответствующей графе на сайте, но могу сказать одно - я считаю все свои компании достижениями, ведь это столько времени и сил в них вложено, что не передать словами.</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--grey">
            <div class="container">
                <div class="poll">
                    <div class="poll__heading">Есть ли у Вас свой бизнес? <br> Если да, то какой?</div>
                    <div class="poll__body">
                        <form @submit.prevent="pollBusinessSubmit">
                            <input type="hidden" name="param" value="Есть ли у вас бизнес?">
                            <div class="row">
                                <div class="col-lg-6 col--padding-around">
                                    <div class="poll__radio">
                                        <input type="radio" name="answer" value="Да" id="checkbox-business-yes" v-model="businessCheck">
                                        <label for="checkbox-business-yes">Да</label>
                                    </div>
                                </div>
                                <div class="col-lg-6 col--padding-around">
                                    <div class="poll__radio">
                                        <input type="radio" name="answer" value="Нет" id="checkbox-business-no" v-model="businessCheck">
                                        <label for="checkbox-business-no">Нет</label>
                                    </div>
                                </div>
                                <div class="col-12 col--padding-around">
                                    <div class="poll__textarea">
                                        <textarea name="msg" placeholder="Описание" :required="req"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="poll__body-btm">
                                <button class="button button--primary" type="submit">Поделиться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section travel">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="heading travel__text">
                            <h4 class="heading__title">Путешествия</h4>
                            <p class="heading__subtitle">Кто не любит путешествия? Такие люди вообще существуют?) Не буду перечислять где я побывала, т к путешествия, как мне кажется, уже незаменимая часть жизни людей и не являются чем-то сложнодоступным или сильно дорогим занятием. Расскажу, пожалуй, только про свою любимую свою страну и город с самыми яркими воспоминаниями. Это Италия, в ней я была в Милане, Риме, Неаполе и… Сан-Бенедетто.</p>
                            <p class="heading__subtitle">Сан-Бенедетто - это не популярный город для туристов, поэтому именно там сохранена некая домашняя итальянская обстановка. Многие там знают друг друга по соседству, ведут себя очень по-свойски, не закрывают машины, доверяют друг другу и полиции (она появляется там через минуту после вызова). Сами итальянцы очень дружелюбные и всегда готовы вступить в разговор. А еда.. Она божественна, я очень люблю итальянскую кухню, благо мне тяжело поправиться, там это можно сделать глазом не моргнув:) Именно этот город и эта страна были первыми в моей жизни, куда я отправилась.  Там я начала учить итальянский язык и даже неплохо разговаривала на нем. Но язык забывается, сейчас помню только «Come stai?», «Tutto bene», «Perfavore», «Grazie» и тд. Сейчас в моих мечтах проехать всю Америку на машине, там я не была пока ни разу в жизни.</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="travel__photo-grid">
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-1-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-1.jpg" alt="">
                                </a>
                            </div>
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-3-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-3.jpg" alt="">
                                </a>
                            </div>
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-5-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-5.jpg" alt="">
                                </a>
                            </div>
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-2-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-2.jpg" alt="">
                                </a>
                            </div>
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-4-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-4.jpg" alt="">
                                </a>
                            </div>
                            <div class="travel__photo-grid-item">
                                <a href="/img/travel-6-big.jpg" class="travel__photo-grid-link photo-zoom fancybox-link-image" data-fancybox>
                                    <img src="/img/travel-6.jpg" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section--grey">
            <div class="container">
                <div class="poll">
                    <div class="poll__heading">Какая Ваша любимая страна? <br> И почему?</div>
                    <div class="poll__body">
                        <form @submit.prevent="pollTravelSubmit">
                            <input type="hidden" name="param" value="Какая Ваша любимая страна?">
                            <div class="row">
                                <div class="col-lg-12 col--padding-around">
                                    <div class="poll__input">
                                        <input type="text" placeholder="Страна" name="answer" required>
                                    </div>
                                </div>
                                <div class="col-12 col--padding-around">
                                    <div class="poll__textarea">
                                        <textarea name="msg" placeholder="Описание" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="poll__body-btm">
                                <button class="button button--primary" type="submit">Поделиться</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <section class="section hobby">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div v-swiper:mySwiper="swiperOption" class="hobby-swiper" @slideChange="changeHobbyDesc()">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <a href="/img/hobby-4.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-4.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-1.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-1.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-2.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-2.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-3.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-3.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-5.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-5.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-6.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-6.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-7.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-7.jpg">
                                    </a>
                                </div>
                                <div class="swiper-slide">
                                    <a href="/img/hobby-8.jpg" class="hobby-swiper__link fancybox-link-image" data-fancybox>
                                        <img src="/img/hobby-8.jpg">
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
                        <div class="hobby__description">
                            <div class="heading hobby__text">
                                <h4 class="heading__title">Увлечения</h4>
                                <p class="heading__subtitle">{{hobbyDesc}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section family">
            <div class="container">
                <div class="heading heading--padding-bottom-no">
                    <h4 class="heading__title">Семья</h4>
                    <p class="heading__subtitle">Мои родители живут в Питере, мы приезжаем друг к другу в гости несколько раз в год, но на связи мы постоянно. Я замужем. Мужа моего зовут Виктор, познакомились мы в Сколково на обучении.</p>
                </div>
                <div class="row family__row">
                    <div class="col-6 col--padding-around family__col">
                        <div class="row family__row">
                            <div class="col-6 col--padding-around family__col">
                                <div class="family__photo">
                                    <a href="/img/family-1-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-1.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col--padding-around family__col">
                                <div class="family__photo">
                                    <a href="/img/family-2-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-2.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-12 col--padding-around family__col">
                                <div class="family__photo">
                                    <a href="/img/family-3-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-3.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col--padding-around family__col">
                        <div class="row family__row">
                            <div class="col-6 col--padding-around family__col">
                                <div class="family__photo">
                                    <a href="/img/family-4-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-4.jpg" alt="">
                                    </a>
                                </div>
                                <div class="family__photo family__photo--pt30">
                                    <a href="/img/family-5-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-5.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="col-6 col--padding-around family__col">
                                <div class="family__photo">
                                    <a href="/img/family-6-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-6.jpg" alt="">
                                    </a>
                                </div>
                                <div class="family__photo family__photo--pt30">
                                    <a href="/img/family-7-big.jpg" class="family__photo-link photo-zoom fancybox-link-image" data-fancybox>
                                        <img src="/img/family-7.jpg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <app-footer></app-footer>
        <div class="poll-successful" v-show="overlayVisible">
            <div class="poll-successful__overlay" @click="overlayVisible = false">
                <div class="poll-successful__content" @click.stop="">
                    <h4>Спасибо за участие в опросе! Мне приятно Ваше внимание:)</h4>
                    <button type="button" class="button button--primary" @click="overlayVisible = false">ОК</button>
                </div>
            </div>
        </div>
    </div>
</template>


































<script>
import axios from 'axios';
import AppFooter from '~/components/AppFooter';
axios.defaults.baseURL = '';

export default {
    components: {
        AppFooter
    },
    data () {
        return {
            overlayVisible: false,
            businessCheck: null,
            hobbyList: [
                'Дайвинг. Прошла обучение, получила сертификат Padi и сертификат на использование баллонов с обогащенным кислородом. Теперь могу одна нырять в любой точке мира.',
                'Сёрф и вейкборд. Я начала кататься на вейкборде года 2 назад, в этом году освоила сёрф за катером. В планах полететь в школу серфа на Бали и пройти обучение там.',
                'Про спорт. При работе с весами на тренировках пока что мой личный рекорд это приседания со штангой 3 подхода по 10 раз с весом 35 кг. На секунду, я вешу 47 кг. Это на данный момент.',
                'Год бокса и 3 года Тхэквондо. Люблю борьбу, может отсюда и такие увлечения. Мне очень нравилось драться один на один с тренером, эти тренировки я очень ждала. Подумываю вернуться на самом деле в бокс.',
                'Стрельба. Я обожаю стрелять. Обожаю пистолеты. Все, что касается самозащиты так же мне интересно. Не знаю, откуда у меня возникла такая страсть у оружию, но по факту давно, чуть ли не с детства.',
                'Прыжок с моста в Сочи, 207 м свободного падения. Чем старше становишься, тем тяжелее это делать. После прыжка мы приезжали туда с мужем прыгать с тарзанкой и тогда я поняла, что второй раз 207 м я прыгать уже не готова и что я действительно боюсь высоты. Однако в планах есть еще парашют, надо хотя бы раз в жизни прыгнуть.',
                'Театр. Очень люблю хорошие спектакли, живую актерскую игру и красивые декорации. Кажется, как будто ты участник некоего действия. Это хорошая смена обстановки и  каждый спектакль - это погружение в какую-то новую историю.',
                'Я люблю водить машину. Раньше очень часто ездила из Москвы в Питер и обратно на машине, слушая интересную аудиокнигу - время летит незаметно.',
                
            ],
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
            hobbyDesc: 'Дайвинг. Прошла обучение, получила сертификат Padi и сертификат на использование баллонов с обогащенным кислородом. Теперь могу одна нырять в любой точке мира.'
        }
    },
    computed: {
        req () {
            return this.businessCheck == 'Да' ? true : false; 
        },
    },
    methods: {
        changeHobbyDesc () {
            let i = this.mySwiper.realIndex;
            this.hobbyDesc = this.hobbyList[i];
        },
        pollBusinessSubmit (e) {
            if(!this.businessCheck) {
                return false;
            }
            var data = new FormData(e.target);
            var $this = this;
            axios.post('/inc/pollBusiness.php', data).then(res => {
                $this.overlayVisible = true;
                e.target.reset();
            });

        },

        pollTravelSubmit (e) {
            var data = new FormData(e.target);
            var $this = this;
            axios.post('/inc/pollTravel.php', data).then(res => {
                $this.overlayVisible = true;
                e.target.reset();
            });

        }
    },
    mounted () {
    }
}
</script>



































<style lang="scss" scoped>
$gold: #D2D4C0;
    .intro {
        padding: 50px 0;
        &__row {
            align-items: center;
        }
        &__text {
            padding-left: 100px;
        }
        &__title {
            margin-bottom: 55px;
        }
        &:after {
            content: '';
            position: absolute;
            width: 60%;
            height: 100%;
            background: #f7f7f7;
            z-index: -1;
            top: 0;
            right: 0;
        }

        @media screen and (max-width: 1199px) {
            &__text {
                padding-left: 50px;
            }
        }

        @media screen and (max-width: 991px) {
            text-align: center;
            &__text {
                padding-left: 0;
                margin: 50px auto 0;
            }
            &:after {
                width: 100%;
            }
        }

        @media screen and (max-width: 575px) {
            &__text {
                margin: 30px auto 0;
            }
            &__title {
                margin-bottom: 30px;
            }
        }
    }

    .benefit {
        text-align: center;
        padding: 0 30px;
        &__image-wrapper {
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 30px;
            border-radius: 100%;
            overflow: hidden;
            background: #f7f7f7;
            margin: 0 auto 15px;
        }
        &__title {
            font-family: 'Playfair Display', serif;
            font-size: 18px;
            font-weight: 400;
            margin-bottom: 15px;
        }
        &__text {
            font-size: 16px;
            font-weight: 300;
            line-height: 1.5;
            color: #878787;
        }

        @media screen and (max-width: 575px) {
            &__text {
                font-size: 14px;
            }
        }
    }

    .education {
        &__text {
            padding-left: 100px;
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

        @media screen and (max-width: 1199px) {
            &__text {
                padding-left: 50px;
            }
        }

        @media screen and (max-width: 991px) {
            &__text {
                padding-left: 0px;
                margin-top: 50px;
            }
            &:after {
                width: 100%;
            }
        }
    }

    .photos {
        position: relative;
        height: 675px;

        @media screen and (max-width: 575px) {
            height: 550px;
        }
    }

    .photo {
        background: #fff;
        padding: 10px;
        position: absolute;
        box-shadow: 0 0 25px rgba(#000, 0.25);
        transition: transform .25s ease;
        &:hover {
            z-index: 99 !important;
            transform: scale(1.1);
        }
    }

    #photo-1 {
        z-index: 4;
        bottom: 0;
        left: 120px;
    }

    #photo-2 {
        z-index: 3;
        left: 0;
        top: 120px;
    }

    #photo-3 {
        z-index: 2;
        top: 0;
        left: 120px;
    }

    #photo-4 {
        z-index: 1;
        right: 0;
        top: 150px;
    }

    @media screen and (max-width: 575px) {
        #photo-1 {
            max-width: 80%;
            left: 10%;
        }

        #photo-2 {
            max-width: 80%;
            top: 10%;
        }

        #photo-3 {
            max-width: 80%;
            left: 10%;
        }

        #photo-4 {
            max-width: 70%;
            top: 30%;
        }
    }

    .ability {
        &__row {
            margin-bottom: 60px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        &__text {
            margin-bottom: 50px;
            line-height: 1.7;
            &--left {
                padding-right: 45px;
            }
            &--right {
                padding-left: 45px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }

        @media screen and (max-width: 991px) {
            &__image-wrapper {
                text-align: center;
                margin-bottom: 50px;
            }
            &__text {
                &--left {
                    padding-right: 0;
                }
                &--right {
                    padding-left: 0;
                }
            }
        }

        @media screen and (max-width: 575px) {
            &__text {
                margin-bottom: 30px;
            }
            &__image-wrapper {
                margin-bottom: 30px;
            }
            &__row {
                margin-bottom: 30px;
            }
        }
    }

    .progress {
        &__text {
            padding-left: 45px;
        }
        &__btm {
            padding-left: 45px;
            padding-top: 80px;
            max-width: 560px;
        }
        &:after {
            content: '';
            position: absolute;
            width: 60%;
            height: 65%;
            top: 0;
            right: 0;
            background: #f7f7f7;
            z-index: -1;
        }

        @media screen and (max-width: 991px) {
            &:after {
                width: 100%;
                height: 100%;
            }
            &__image-wrapper {
                text-align: center;
                margin-bottom: 50px;
            }
            &__text {
                max-width: none;
                padding-left: 0;
            }
            &__btm {
                padding-left: 0;
                padding-top: 0;
                max-width: none;
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
                background: $gold;
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
                border: 2px solid $gold;
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
                border: 2px solid $gold;
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

    .travel {
        &__text {
            padding-right: 45px;
        }
        &__photo-grid {
            column-count: 2;
            column-gap: 0;
            counter-reset: item-counter;
            &-item {
                break-inside: avoid;
                padding: 5px;
                counter-increment: item-counter;
            }
            &-link {
                display: block;
            }
        }

        @media screen and (max-width: 991px) {
            &__text {
                padding-right: 0;
            }
            &__photo-grid {
                column-count: 3;
            }
        }
    }

    .hobby {
        margin-top: 100px;
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
            width: 60%;
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

    .family {
        &__photo {
            &--pt30 {
                padding-top: 30px;
            }
        }

        @media screen and (max-width: 575px) {
            &__row {
                margin: 0 -5px;
            }
            &__col {
                padding: 5px;
            }
            &__photo {
            &--pt30 {
                padding-top: 10px;
            }
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
            h4 {
                font-size: 18px;
                font-weight: 400;
                margin-bottom: 15px;
            }
            button {
                width: 100%;
                padding: 10px 15px;
            }
        }
    }
</style>

