export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ea7c19bb31d544ab23d84bd',
                  title: 'Sanity Studio',
                  name: 'taxonomy-pages-in-gatsby-tutorial-studio',
                  apiId: '1ad516b3-aa0d-4662-9a31-a47d09b8a98f'
                },
                {
                  buildHookId: '5ea7c19bd3d2f590d44944ff',
                  title: 'Blog Website',
                  name: 'taxonomy-pages-in-gatsby-tutorial',
                  apiId: '568883d0-da11-4181-89d1-ec04db83e97c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelve/taxonomy-pages-in-gatsby-tutorial',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://taxonomy-pages-in-gatsby-tutorial.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
