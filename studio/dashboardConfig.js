export default {
  widgets: [
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
                  buildHookId: '632eb319fbe18d45d68fa59f',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7tpe3sty',
                  apiId: '8d8899c2-b1f6-43b2-a265-ff8ae0e4cd9a'
                },
                {
                  buildHookId: '632eb31a467d8c63f321b3ff',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jdwjzzf8',
                  apiId: 'de18b7a5-66db-4de9-a94e-4bafc38b0291'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colourfulwebsite/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jdwjzzf8.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
