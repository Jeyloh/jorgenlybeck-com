export default {
  name: 'uses',
  title: 'Uses',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'string'}]
    }
  ]
}
