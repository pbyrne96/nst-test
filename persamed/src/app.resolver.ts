import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class DataResolver {
  @Query((returns) => String)
  async hello() {
    return 'Hello, World';
  }
}
