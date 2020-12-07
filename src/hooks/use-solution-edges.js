import { useStaticQuery, graphql } from "gatsby";
export const useSolutionEdges = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SolutionMenuListing {
        allMarkdownRemark(
          filter: { frontmatter: { contenttype: { eq: "solution" } } }
          sort: { order: DESC, fields: fields___date }
        ) {
          edges {
            node {
              fields {
                date
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  );
  return allMarkdownRemark.edges;
};
