// import { forEach } from 'core-js/core/array';

function postInfo() {
    const specifications = document.querySelector('.specifications');
    const table = document.querySelector('.table');
    const schemes = document.querySelector('.shemes_pictures');
    const opportunities = document.querySelector('.opportunities');

    specifications.innerHTML = `
        <div class="title">
            Система управления процессом подготовки рабочей камеры установки токамак к экспериментам (СУТП)
        </div>
        <div class="specifications_descr">
            Система СУТП предназначена для автоматизации выполнения операций прогрева, вакуумной откачки, напуска рабочих газов, очистки тлеющим разрядом и водяного охлаждения узлов установки. Пуско-наладочные работы и ввод в действие СУТП были проведены в декабре 2009 г. совместно специалистами ООО «ТомИУС-ПРОЕКТ» и Института Атомной Энергии Республики Казахстан 
            <a href="http://www.nnc.kz" class="specifications_descr_link">(http://www.nnc.kz)</a>.
        </div>
    `;

    table.innerHTML = `
        <table class="table_indicators">
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество уровней в системе, шт</td>
            <td class="table_indicators_row_count">4</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Тип используемого промышленного контроллера (удаленного УСО)</td>
            <td class="table_indicators_row_count">PC-based, 2ТРМ-202, ADAM-6000</td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество вычислительных узлов, шт</td>
            <td class="table_indicators_row_count">5</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Типы интерфейсов системной интеграции</td>
            <td class="table_indicators_row_count">RS-485, Ethernet</td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество входных параметров, шт</td>
            <td class="table_indicators_row_count">650</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">в том числе аналоговых, шт</td>
            <td class="table_indicators_row_count">320</td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">погрешность измерения аналоговых параметров, %</td>
            <td class="table_indicators_row_count">менее 1</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Тип измеряемых и контролируемых физических величин</td>
            <td class="table_indicators_row_count">давление, вакуум, расход, температура, ток, напряжение
            </td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество контуров цифрового регулирования, шт</td>
            <td class="table_indicators_row_count">8</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Длительность цикла сбора данных и управления, с</td>
            <td class="table_indicators_row_count">1</td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество экранов мнемосхем/визуальных форм и окон ввода/вывода, шт</td>
            <td class="table_indicators_row_count">24/600</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Максимальное количество отображаемых параметров, шт</td>
            <td class="table_indicators_row_count">1500</td>
        </tr>
        <tr class="table_indicators_row white_bg">
            <td class="table_indicators_row_name">Количество поддерживаемых команд оператора, шт</td>
            <td class="table_indicators_row_count">256</td>
        </tr>
        <tr class="table_indicators_row grey_bg">
            <td class="table_indicators_row_name">Глубина архива технологических параметров, месяцев</td>
            <td class="table_indicators_row_count">до 3</td>
        </tr>
    </table>
    `;

    schemes.innerHTML = `
        <img src="./img/scheme1.png" alt="scheme1" class="shemes_pictures_img">
        <img src="./img/scheme2.png" alt="scheme2" class="shemes_pictures_img">
    `;

    opportunities.innerHTML = `
    <div class="title opportunities_title">
        Функциональные возможности СУТП:
    </div>
    <ul class="opportunities_list">
        <li class="opportunities_list_item">
            Сбор данных о параметрах технологического процесса подготовки камеры и параметрах состояния оборудования;
        </li>
        <li class="opportunities_list_item">
            Регистрация данных на магнитных носителях и формирование архива технологической информации;
        </li>
        <li class="opportunities_list_item">
            Формирование сообщений предупредительной и аварийной сигнализации, отработка алгоритмов противоаварийной защиты оборудования;
        </li>
        <li class="opportunities_list_item">
            Логико-программное управление операциями вакуумной подготовки камеры с одновременным прогревом конструктивных элементов камеры, стабилизацией температуры и поддержанием регламентных значений технологических параметров;
        </li>
        <li class="opportunities_list_item">
            Представление технологической информации на графических мнемосхемах и ее документирование.
        </li>
    </ul>
    `;
}

export default postInfo;