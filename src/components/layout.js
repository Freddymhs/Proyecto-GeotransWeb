/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./ComponentesSecciones/HEADER/Header"
import Headertop from "../components/ComponentesSecciones/HEADER/Headertop"
import Footegeotrans from "../components/ComponentesSecciones/FOOTER/footegeotrans"
import "./layout.css" // hoja estilo global
import { CartContext } from "../context/CartContext"

// favicons
// <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
// <link rel="manifest" href="/site.webmanifest">
// <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff6e40">
// <meta name="msapplication-TileColor" content="#da532c">
// <meta name="theme-color" content="#f8f8ff"></meta>

import CustomerChat from "../components/ComponentesGlobales/CustomerChat"

const Layout = ({ children }) => {
  // const { languages, changeLanguage } = useI18next()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      
      <CartContext.Consumer>
        {cart => (
          <main style={{ backgroundColor: "#f8f8ff" }}>
            <Headertop />
            <Header />
            <div
              style={{ backgroundColor: "#FF6E40", paddingTop: "3px" }}
            ></div>
            {children}
            {/* <Footer />  */}

            <Footegeotrans />
          </main>
        )}
      </CartContext.Consumer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
