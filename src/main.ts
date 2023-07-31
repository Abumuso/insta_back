import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

const start = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    const PORT = process.env.PORT || 3030;

    const config = new DocumentBuilder()
      .setTitle("Insta_back App")
      .setDescription("Instagram backend practice")
      .setVersion("1.0.0")
      .addTag("NestJS, Postgress, Sequielize")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/api/docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server running on port:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
