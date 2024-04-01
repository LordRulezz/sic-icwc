<template>
 <section class="news__flip">
            <div class="container">
                <div class="flip__row">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front fc0">
                                <img src="@/assets/images/icon-research.png"  alt=""/>
                                <h3 class="flip-card-title">Исследования и экспертиза</h3>
                            </div>
                            <div class="flip-card-back">
                                <p class="flip__txt">Используем современные научные достижения и знания для их
                                    применения с учетом местных нужд и условий</p>
                                <br>
                                <p class="flip__txt">Выполняем полевые исследования, осуществляем сбор информации
                                    о
                                    передовом опыте и методах и их распространения</p>
                                <br>
                                <p class="flip__txt">Предоставляем рекомендации лицам, принимающим решения</p>
                                <button class="flip__card-btn btn">Подробнее &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front fc1">
                                <img src="@/assets/images/icon-partner.png" alt=""/>
                                <h3 class="flip-card-title">Сотрудничество</h3>
                            </div>
                            <div class="flip-card-back">
                                <p class="flip__txt">Сотрудничаем с национальными водохозяйственными ведомствами и
                                    прочими
                                    организациями,
                                    участвуем в совместных программах и работах.</p> <br>
                                <p class="flip__txt">Участвуем в работе экспертных и целевых рабочих групп по вопросам,
                                    связанным с водой.
                                </p> <br>
                                <p class="flip__txt">Налаживаем и поддерживаем связи между международным водным
                                    сообществом и
                                    русскоговорящей
                                    аудиторией.</p>
                                <button class="flip__card-btn btn">Подробнее &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front fc2">
                                <img src="@/assets/images/icon-services.png" alt=""/>
                                <h3 class="flip-card-title"> Управление знаниями</h3>
                            </div>
                            <div class="flip-card-back">
                                <p class="flip__txt">Практические инструменты оценки водохозяйственной ситуации в
                                    регионе
                                    на основе данных о
                                    располагаемых водных ресурсах, их распределении, режимах водохранилищ, потерь,
                                    экологических
                                    попусков
                                    и др.:</p><br>
                                <ul>
                                    <li>Региональная информационная система и базы данных</li>
                                    <li>Аналитические инструменты и модели</li>
                                    <li>Базы знаний</li>
                                    <li>Публикации</li>
                                </ul>
                                <button class="flip__card-btn btn">Подробнее &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front fc3">
                                <img src="@/assets/images/icon-training.png" alt=""/>
                                <h3 class="flip-card-title"> Повышение потенциала</h3>
                            </div>
                            <div class="flip-card-back">
                                <p class="flip__txt">Разрабатываем учебно-методические материалы.</p> <br>
                                <p class="flip__txt">Накапливаем информацию и знания.</p> <br>
                                <p class="flip__txt">Проводим тренинги, оцениваем потребность в тренингах.</p> <br>
                                <p class="flip__txt">Обучаем тренеров и координируем обучение на региональном уровне.
                                </p>
                                <button class="flip__card-btn btn">Подробнее &gt;&gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="news">
                    <h3 class="news__h3 h3_title">Новости</h3>

                    <a v-for="(item, index) in jsonData.slice(-5).reverse()" :key="index" class="news__item" :href="'public/release/rus/' + item.fileName">
                        <div class="news__item-desc">
                            <h5 class="news__data">{{ item.date }}</h5>
                            <p>{{ item.paragraph  }}</p>

                        </div>
                        <div class="news__item-img">
                            <img :src="item.image" alt="">
                        </div>
                    </a>

                    <a href="arhive.htm" class="all__news">ВСЕ НОВОСТИ &gt;&gt;&gt;</a>
                </div>


                
                

            </div>
        </section>
</template>

<script setup>

import jsonData from '@/news.json';

</script>



