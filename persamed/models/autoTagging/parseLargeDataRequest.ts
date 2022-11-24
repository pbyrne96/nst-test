// this file will trigger a spark like instance of the db.
/*
    it will break elements into the DB into JOB objects

    these objects will call the dataModel class which will as an orm wrapper for the current
    spark like job. in this case spark may just be an EC2 instance.

    it will call instances of wrangleData which will process the data for the tag and it will interact with
    the autoTaggingModal from there

*/

export class ParseLargeDataRequest {
  constructor() {
    // here will call instance of dataModal to be available to the class
  }

  runDataJobs(): void {
    /*
        will pool all the resource into one method
        will run concurrent processing of utilizing various classes related
        each worker in the concurrent process will submit the wrangledData to the
        autoTagger model.
    */
  }
}
