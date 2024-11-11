import { Controller, Get, Param, Post, Delete, Put, Body } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('api/nft')
export class NFTController {
  constructor(private readonly nftService: NftService) { }

  @Get()
  list(): any[] {
    return this.nftService.list();
  }

  @Get(':id')
  detail(@Param('id') id: string) {
    return this.nftService.detail(id);
  }

  @Post()
  public add(@Body('name') name: string) {
    return this.nftService.add(name);
  }

  @Delete()
  public delete(@Body('id') id: string) {
    return this.nftService.delete(id);
  }

  @Put()
  public update(@Body('id') id: string, @Body('name') name: string) {
    return this.nftService.update(id, name);
  }
}
