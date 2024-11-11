import { Injectable } from '@nestjs/common';

@Injectable()
export class NftService {
  public list(): any[] {
    return [
      { id: 1, name: 'jimao' },
      { id: 2, name: 'btc' },
      { id: 3, name: 'eth' },
    ];
  }

  public detail(id: number) {
    return { id, name: 'btc' };
  }
}
