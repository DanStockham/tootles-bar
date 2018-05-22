/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require("path");
 const createPaginatedPages = require("gatsby-paginate");

//  exports.createLayouts = ({ graphql, boundActionCreators }) => {
//   return new Promise((resolve, reject) => {
//     const addressBlock = path.resolve('src/templates/AddressBlock.js')
//     resolve(
//       graphql( 
//         `
//         query {
//           allContentfulContact {
//             edges {
//               node {
//                 hours {
//                   hours
//                 }
//                 phone
//                 email
//               }
//             }
//           }
//         }
//         `
//       )
//     ).then(result => {
//       if(result.errors) {
//         reject(result.errors)
//       }
//       console.log(result)
//     })
//   })
//  }

// exports.sourceNode = ({ boundActionCreators}) => {
//   const { createNode } = boundActionCreators

//   createNode({
//     // Data for the node.
//     field1: `a string`,
//     field2: 10,
//     field3: true,
  
//     // Required fields.
//     id: `a-node-id`,
//     parent: `the-id-of-the-parent-node`, // or null if it's a source node without a parent
//     children: [],
//     internal: {
//       type: `CoolServiceMarkdownField`,
//       contentDigest: crypto
//         .createHash(`md5`)
//         .update(JSON.stringify(fieldData))
//         .digest(`hex`),
//       mediaType: `text/markdown`, // optional
//       content: JSON.stringify(fieldData), // optional
//       description: `Cool Service: "Title of entry"`, // optional
//     }
//   })

//   return
// }

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
          context: { showCount: result.data.allContentfulShow.edges.length} // This is optional and defaults to an empty object if not used
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
