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
                  buildHookId: '604c34c13849e554b8374122',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v5gxh63n',
                  apiId: '44e68064-04e2-49f5-8a02-b5f32052ac0e'
                },
                {
                  buildHookId: '604c34c1294def5c5a36b186',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-92pc59uk',
                  apiId: '6c7b748a-478b-4396-85e2-4377c3e38dcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rawestmoreland/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-92pc59uk.netlify.app', category: 'apps'}
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
