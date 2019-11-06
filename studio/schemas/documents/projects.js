export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      type: 'blockContent'
    },
    {
      name: 'color',
      title: 'Project Color',
      type: 'color'
    },
    {
      name: 'technologyString',
      title: 'Technology',
      type: 'string'
    },
    {
      name: 'fromDate',
      title: 'From Date',
      type: 'date'
    },
    {
      name: 'toDate',
      title: 'To date',
      type: 'date'
    }
  ]
}
