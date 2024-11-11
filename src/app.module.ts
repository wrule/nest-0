import { Module } from '@nestjs/common';
import { NFTController } from './nft.controller';
import { NftService } from './nft.service';

@Module({
  imports: [],
  controllers: [NFTController],
  providers: [NftService],
})
export class AppModule { }
