const path = require('path')

function addStyleResource (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/*.scss'),
      ],
    })
}

module.exports = {
  siteName: 'Fonte Imagem',
  siteDescription: "A clínica referência em diagnóstico por imagem no Rio de Janeiro",

  templates: {
    Post: '/artigos/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
    Category: '/category/:id',
    Exam: '/exam/:id',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: './content/posts/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
          author:{
            typeName: 'Author',
            create: true
          },
          category:{
            typeName: 'Category',
            create: true
          }                     
        }        
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Author',
        path: './content/authors/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Exam',
        path: './content/exams/*.md',
      }
    }           
  ],
  chainWebpack (config) {
    // Load variables for all vue-files
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
	}  
}
