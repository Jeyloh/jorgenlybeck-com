export default {
  name: 'codeSnippets',
  title: 'Code Snippets',
  type: 'document',
  fields: [
    {
      name: 'description',
      title: 'Description',
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
      title: 'Code',
      name: 'codeSnippet',
      type: 'code'
    }
  ]
}
