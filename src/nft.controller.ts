import { Controller, Get, Param } from '@nestjs/common';
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
}
