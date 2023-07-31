"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const start = async () => {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT || 3030;
        const config = new swagger_1.DocumentBuilder()
            .setTitle("Insta_back App")
            .setDescription("Instagram backend practice")
            .setVersion("1.0.0")
            .addTag("NestJS, Postgress, Sequielize")
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup("/api/docs", app, document);
        await app.listen(PORT, () => {
            console.log(`Server running on port:${PORT}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
//# sourceMappingURL=main.js.map