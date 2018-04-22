/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require("path");
 const createPaginatedPages = require("gatsby-paginate")

 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
     const eventDetailTemplate = path.resolve(`src/templates/EventDetail.js`)
     const upcomingEventsTemplate = path.resolve('src/templates/UpcomingEventsList.js')
     // Query for markdown nodes to use in creating pages.
     resolve(
       graphql(
         `
         query showSummary {
          allContentfulShow (
            sort: { fields: [date], order:DESC }
          ) {
            edges {
              node {
                id
                name
                date
                slug
                coverPrice
                image {
                 file {
                  url
                }
                }
              }
            }
          }
        }
     `
       ).then(result => {
         if (result.errors) {
           reject(result.errors)
         }

         createPaginatedPages({
          edges: result.data.allContentfulShow.edges,
          createPage: createPage,
          pageTemplate: upcomingEventsTemplate,
          pageLength: 5, // This is optional and defaults to 10 if not used
          pathPrefix: "", // This is optional and defaults to an empty string if not used
          context: {} // This is optional and defaults to an empty object if not used
        });
 
         // Create blog post pages.
         result.data.allContentfulShow.edges.forEach(edge => {
             createPage({
               path: `${edge.node.slug}`, // required
               component: eventDetailTemplate,
               context: {
                 slug: edge.node.slug,
               },
             })
         })
 
         return
       })
     )
   })
 }
