/*
    this class will act as worker node.
    it will process the given data and attempt to submit to db
    simple if successful if unsussecful it activated the previous peer to peer architecture
    and chunks the data back into the pooling cache in sendToPool.ts
*/

export class submitJobToDb {
  constructor() {
    //
  }

  run(): void {
    /*
        if an error here depending on the type will end the current thread and
        the reaming data will be sent to the cache pool for resubmission and the
        file or parts will be chunked and restored as one entry in a later stage
    */
  }
}
