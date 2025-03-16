import { type SchemaTypeDefinition } from 'sanity';
import product from '../schema/product'; // ✅ Ensure the correct path

export const schemaTypes: SchemaTypeDefinition[] = [product]; // ✅ Proper export

export const schema = {
  types: schemaTypes, // ✅ Now using schemaTypes correctly
};
