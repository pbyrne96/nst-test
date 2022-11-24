/*
    this class will act a master node requesting worker nodes
    it will also process the given file(s) memory as files will be
    processed in a peer to peer approach where large corpus of files
    or files will be split or truncated across the network
*/

export class OnSubmitJob {
  constructor() {
    //
  }

  processMemory(): number {
    // will get the memory given alongside a request
    return 0;
  }

  truncData(): void {
    // will split the data in a request into smaller chunks in a peer to peer approach
  }

  joinTruncedData(): any {
    // will join jobs/data objects that have been trunced into one space
  }

  run(): void {
    // method that runs the tasks of asking for worker nodes from the system
  }
}
