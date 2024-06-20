import Config from './Config';

function main() {
    // Obtener la instancia única de Config
    const config1 = Config.getInstance();
    console.log('App Title:', config1.getSetting('appTitle'));
    console.log('Version:', config1.getSetting('version'));

    // Cambiar un valor de configuración
    config1.setSetting('appTitle', 'My Updated Singleton App');
    console.log('Updated App Title:', config1.getSetting('appTitle'));

    // Intentar obtener otra instancia de Config
    const config2 = Config.getInstance();
    console.log('Is same instance:', config1 === config2);

    // Intentar crear otra instancia directamente (esto debería fallar)
    //const invalidConfig = new Config(); // Esto dará un error de compilación en TypeScript
}

main();
