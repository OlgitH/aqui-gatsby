/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allContentfulProject {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  const projects = result.data.allContentfulProject.edges;

  projects.forEach(({ node }) => {
    console.log(node.slug);
    createPage({
      path: `/projects/${node.slug}/`,
      component: path.resolve(`src/templates/project.js`),
      context: {
        slug: node.slug
      },
    })
  })
}
