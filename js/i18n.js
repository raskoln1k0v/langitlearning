class I18n {
    constructor() {
        this.language = 'en';
        this.translations = {};
    }

    async load(lang = 'en') {
        this.language = lang;
        const response = await fetch(`../languages/${lang}.json`);
        this.translations = await response.json();
        this.applyTranslations();
    }

    applyTranslations() {
        // Update meta tags
        document.title = this.translations.meta.title;
        document.documentElement.lang = this.translations.meta.lang;

        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.dataset.i18n.split('.');
            let translation = this.translations;
            
            keys.forEach(key => {
                translation = translation[key];
            });
            
            element.textContent = translation;
        });
    }
}

const i18n = new I18n();
