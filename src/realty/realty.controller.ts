import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RealtyService } from './realty.service';
import { UpdateRealtyDto } from './dto/update-realty.dto';

@Controller('realty')
export class RealtyController {
  constructor(private realtyService: RealtyService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findRealty(@Req() req: any) {
    return this.realtyService.findByOwnerId(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  updatePrice(@Param('id') id: string, @Body() body: UpdateRealtyDto) {
    return this.realtyService.update(parseInt(id), body);
  }
}
