export default {
    name: 'blog',
    title: 'Blog',
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
            name: 'image',
            title: 'Cover image',
            type: 'mainImage',
            options: {
              hotspot: true
            }
          },
        {
            name: 'content',
            title: 'Content',
            type: 'blockContent'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'string'
        }
    ]
}
