import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpCode, BadRequestException, Header } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Res() 데코레이터는 응답 객체를 가져온다.
  @Get()
  findAll(@Res() res) {
    const users = this.usersService.findAll();
    return res.status(200).json(users);
  }

  /* // id가 0보다 작으면 BadRequestException을 발생시킨다.
  @Get(':id')
  findOne(@Param('id') id: string) {
    if(+id < 1) {
      throw new BadRequestException('id는 0보다 큰 값이어야 합니다.');
    }
    return this.usersService.findOne(+id);
  } */


  // @HttpCode() 데코레이터는 HTTP 상태 코드를 설정한다. 성공적으로 요청이 처리되었을 때 202를 반환한다.
  @HttpCode(202)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // 응답 헤더를 설정한다.
  @Header('Custom', 'Test Header')
  @Get(':id')
  findOneWithHeader(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

}
