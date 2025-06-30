export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'userId',
      type: 'string',
    },
    {
      name: 'products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
            {
              name: 'imageUrl',
              type: 'url',
              title: 'Product Image URL',
             }
          ],
        },
      ],
    },
    {
      name: 'totalPrice',
      type: 'number',
    },
    {
      name: 'paid',
      type: 'boolean',
    },
    {
      name: 'deliveryDate',
      type: 'datetime',
    },
  ],
};
