import { useStaticQuery, graphql } from "gatsby"


const useMainMenu = () => {
    const menu = useStaticQuery(graphql`
      {
        wpMenu(locations: { eq: GATSBY_HEADER_MENU }) {
          id
          name
          menuItems {
            nodes {
              id
              label
              title
              path
              parentId
              url
            }
          }
        }
      }
    `)





    return menu.wpMenu.menuItems.nodes.map(item => ({
        label: item.label,
        url: item.url
    }))
};

export default useMainMenu;

