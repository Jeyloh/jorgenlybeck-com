export default {
  name: 'philosophy',
  title: 'Philosophy',
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
      name: 'philosophy',
      title: 'Philosophy',
      description: 'You can only fill out this. Use Rich Text to make the page shine',
      type: 'blockContent'
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}
