"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvService = void 0;
class EnvService {
    constructor(envVars) {
        this.requireEnvVars = () => {
            const keys = Object.keys(this.envVars);
            for (const key of keys) {
                if (this.envVars[key] === undefined) {
                    throw new Error(`${key} is not defined`);
                }
            }
        };
        this.envVars = envVars;
    }
}
exports.EnvService = EnvService;
//# sourceMappingURL=env.service.js.map