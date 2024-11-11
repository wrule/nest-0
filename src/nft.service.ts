import { Injectable } from '@nestjs/common';

const list = [
  { id: '1', name: 'jimao' },
  { id: '2', name: 'btc' },
  { id: '3', name: 'eth' },
];

@Injectable()
export class NftService {
  public list(): any[] {
    return list;
  }

  public detail(id: string) {
    return list.find((item) => item.id === id);
  }
}
