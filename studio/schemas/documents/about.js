export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Index Header',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Intro Text',
      type: 'blockContent'
    },
    {
      name: 'image',
      title: 'Intro image',
      type: 'mainImage',
      options: {
        hotspot: true
      }
    }
  ]
}
