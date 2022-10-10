/*

    THIS FILE IMPLEMENTS THE MODELING OF THE SCHEMA
    ALL TYPES DECLARED FROM READING AND UPDATING THE DATABASE
    SHOULD BE MADE HERE.

    WHAT SHOULD BE DECLARED HERE:
        custom wrapper functions
        declare interfaces types and enums
        generic types for interfaces
        factory functions which return an object

    TO OPTIMIZE:
        - Lazy load all data where possible
        - review d.s and queries made.
        - Declare schema type to returned from function
            and utilize generics where only needed as can slow the compiler
*/

export interface OnFileReturn<T> {
  /*
    this file will ether be an ArrayBuffer containing file chunks
    OR a link to an S3 bucket with a factory to partition
    the file in a lazy load technique
  */
  fileType: T | T[];
}
