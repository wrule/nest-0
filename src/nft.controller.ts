import { Controller, Get } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller('api/nft')
export class NFTController {
  constructor(private readonly nftService: NftService) { }

  @Get()
  list(): any[] {
    return this.nftService.list();
  }
}
