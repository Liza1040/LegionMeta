
import BasePage from '../BasePage.js';

export default class MainPage extends BasePage {
    /**
     * Конструктор, создающий конструктор базовой страницы с нужными параметрами
     * @param {Element} parent HTML-элемент, в который будет осуществлена отрисовка
     */
    constructor(parent) {
        super(
            parent,
            window.Handlebars.templates['MainPage.hbs'],
        );
    }

     /**
     * Метод, отрисовывающий страницу.
     * @param {object} config контекст отрисовки страницы
     */
      async render(config) {
        super.render(config);

    }
}