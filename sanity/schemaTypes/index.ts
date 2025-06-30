import { type SchemaTypeDefinition } from 'sanity';
import product from '../schema/product';
import order from '../schema/order'; 

export const schemaTypes: SchemaTypeDefinition[] = [product, order]; 

export const schema = {
  types: schemaTypes, 
};
