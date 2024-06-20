class Config {
    private static instance: Config;
    private settings: { [key: string]: string } = {};

    private constructor() {
        // Configuración inicial
        this.settings = {
            'appTitle': 'My Singleton App',
            'version': '1.0.0'
        };
    }

    // Método estático para obtener la única instancia de Config
    public static getInstance(): Config {
        if (!Config.instance) {
            Config.instance = new Config();
        }
        return Config.instance;
    }

    // Método para obtener un valor de configuración
    public getSetting(key: string): string {
        return this.settings[key];
    }

    // Método para establecer un valor de configuración
    public setSetting(key: string, value: string): void {
        this.settings[key] = value;
    }
}

export default Config;
