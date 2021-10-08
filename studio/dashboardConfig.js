export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '616075aa1bc79469e538c268',
                  title: 'Sanity Studio',
                  name: 'tishman-speyer-studio',
                  apiId: '75181f76-0fe8-4df5-99b9-450fea957199'
                },
                {
                  buildHookId: '616075aa6fecab6cc8d0f74e',
                  title: 'Landing pages Website',
                  name: 'tishman-speyer',
                  apiId: '79090052-5c82-48a3-a873-bd93fd6a8166'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrenchBully/tishman-speyer',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tishman-speyer.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
