/*
    basic abstract implementation of Q ->
    may want to use a native or 3-pl
*/
interface IQueue<T> {
  size: number;
  storage: T[];
  enqueue(elem: T): T;
  dequeue(): T;
}

export class Queue<T> implements IQueue<T> {
  storage: T[] = [];
  size: number;

  constructor() {
    this.size = 0;
  }
  enqueue(elem: T): T {
    throw new Error('Method not implemented.');
  }
  dequeue(): T {
    throw new Error('Method not implemented.');
  }
}
