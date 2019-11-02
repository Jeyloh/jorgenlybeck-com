export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dbd87a1c79beb49fad1f12d',
                  title: 'Sanity Studio',
                  name: 'jorgenlybeck-com-studio',
                  apiId: '9b0b4904-acc0-4d33-ba13-0b791e91cd63'
                },
                {
                  buildHookId: '5dbd87a1e0516b8c6937daaf',
                  title: 'Portfolio Website',
                  name: 'jorgenlybeck-com',
                  apiId: '417ec389-9c6b-43c1-9e3c-067ebeb24a35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jeyloh/jorgenlybeck-com',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://jorgenlybeck-com.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
