import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

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

  public add(name: string) {
    const nextId = nanoid();
    list.push({ id: nextId, name });
    return nextId;
  }

  public delete(id: string) {
    const index = list.findIndex((item) => item.id === id);
    if (index >= 0) {
      list.splice(index, 1);
    }
    return index;
  }

  public update(id: string, name: string) {
    const index = list.findIndex((item) => item.id === id);
    if (index >= 0) {
      list[index].name = name;
    }
    return list[index];
  }
}
