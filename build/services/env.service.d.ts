export declare class EnvService<T extends object> {
    private envVars;
    constructor(envVars: T);
    requireEnvVars: () => void;
}
