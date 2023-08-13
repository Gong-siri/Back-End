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

@Controller('realty')
export class RealtyController {
  constructor(private realtyService: RealtyService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findRealty(@Req() req: any) {
    return this.realtyService.findByOwnerId(req.user.userId);
  }
}
