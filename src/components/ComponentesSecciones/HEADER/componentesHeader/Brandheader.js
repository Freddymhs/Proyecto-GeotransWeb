import React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next" //en todos los comps
import { Card, Col, Container, Navbar, Row } from "react-bootstrap"
import styled from "styled-components"

import {
  Titulowebv1,
  Subtitulowebv1,
  Subtitulo2,
} from "../../../ComponentesGlobales/MisTextos"

import Img from "gatsby-image"

const Brand = props => {
  const { logoweb, estilos, data } = props

  const { t } = useTranslation() // necesario
  return (
    <StyledBrand>
      <Container>
        <Row>
          <Col>
            <Card>
              <Img fixed={logoweb} className="w-100 h-100" />
            </Card>
          </Col>
        </Row>
      </Container>

      {/* <Img fluid={logoweb} /> */}
      <Link to="/" className=" d-none d-md-block">
        <Navbar.Brand
          className="
        w-auto 
        d-flex 
        justify-content-start
         align-items-start 
         text-center 
        
       "
        >
          <table className="w-100 h-100">
            <tr className="w-100 h-100">
              <td rowspan={2}>
                <Img fixed={logoweb} />
              </td>
            </tr>
          </table>
          <table>
            <tr>
              <td>
                <Titulowebv1>{t("header.title")}</Titulowebv1>
              </td>
            </tr>
            <tr>
              <td>
                <Subtitulowebv1>{t("header.subtitle")}</Subtitulowebv1>
              </td>
            </tr>
          </table>
        </Navbar.Brand>
      </Link>
    </StyledBrand>
  )
}

export default Brand

const StyledBrand = styled.div`
  img {
    margin: 0px !important;
    padding: 0px !important;
    height: 68px !important;
    max-height: 68px !important;
    width: 68px !important;
    max-width: 68px !important;
  }
  a {
    text-decoration: none !important;
  }
  * {
    user-select: none !important;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none; /* IE 10+ */
  }
`
