import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * 应用程序的引导函数
 * 
 * @description
 * 这个函数负责初始化和启动 NestJS 应用程序:
 * 1. 使用 NestFactory.create() 创建应用实例，传入根模块 AppModule
 * 2. 启动 HTTP 服务器监听 3000 端口
 * 
 * @remarks
 * - NestFactory 是 NestJS 的工厂类，用于创建应用实例
 * - create() 方法返回 Promise<INestApplication>
 * - listen() 启动 HTTP 服务器，返回 Promise<void>
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

// 执行引导函数启动应用
bootstrap();
