import { Controller, Get } from '@nestjs/common';
import { NftService } from './nft.service';

@Controller()
export class AppController {
  constructor(private readonly nftService: NftService) { }

  @Get()
  list(): any[] {
    return this.nftService.list();
  }
}
