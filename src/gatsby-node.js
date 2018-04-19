/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 const path = require("path");

 exports.createPages = ({ graphql, boundActionCreators }) => {
   const { createPage } = boundActionCreators
   return new Promise((resolve, reject) => {
     const eventDetailTemplate = path.resolve(`src/templates/EventDetails.js`)
     // Query for markdown nodes to use in creating pages.
     resolve(
       graphql(
         `
         {
             allContentfulPost {
               edges {
                 node {
                   date
                   id
                   slug
                 }
               }
             }
           }
     `
       ).then(result => {
         if (result.errors) {
           reject(result.errors)
         }
 
         // Create blog post pages.
         result.data.allContentfulPost.edges.forEach(edge => {
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