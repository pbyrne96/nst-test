import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

class _GraphQLSchema {
  constructor() {
    // will need to init db Connection here
  }

  public static upperDirectiveTransformer(
    schema: GraphQLSchema,
    directiveName: string,
  ) {
    return mapSchema(schema, {
      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
        const upperDirective = getDirective(
          schema,
          fieldConfig,
          directiveName,
        )?.[0];

        if (upperDirective) {
          const { resolve = defaultFieldResolver } = fieldConfig;

          // Replace the original resolver with a function that *first* calls
          // the original resolver, then converts its result to upper case
          fieldConfig.resolve = async function (source, args, context, info) {
            const result = await resolve(source, args, context, info);
            return result;
          };
          return fieldConfig;
        }
      },
    });
  }
}
