// Load components
async function loadComponents() {
    const components = ['header', 'footer'];
    
    for (const component of components) {
        const response = await fetch(`components/${component}.html`);
        const html = await response.text();
        document.querySelector(component).innerHTML = html;
    }
}

// Initialize the app
async function init() {
    await loadComponents();
    await i18n.load();
    
    // Language switcher
    document.querySelector('.lang-switcher')?.addEventListener('change', (e) => {
        i18n.load(e.target.value);
    });
}

document.addEventListener('DOMContentLoaded', init);
