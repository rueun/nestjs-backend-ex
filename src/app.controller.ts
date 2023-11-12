import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  
  // @Req() 데코레이터는 Request 객체를 가져온다.
  @Get()
  getHello2(@Req() req: Request): string {
    console.log(req);
    return this.appService.getHello();
  }

  // @query() 데코레이터는 쿼리 스트링을 가져온다.
  @Get('/name')
  getName(@Query() name: string): string {
    return name;
  }

  // @Param() 데코레이터는 URL 파라미터를 가져온다.
  @Get('key/:key')
  getKey(@Param() key: string): string {
    return key;
  }


}
