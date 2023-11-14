import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({host: ':version.api.localhost'}) // 하위 도메인 요청 처리 설정
export class ApiController {

    @Get()
    index(@HostParam('version') version: string): string {
        return `Hello, API ${version}`;
    }
}
