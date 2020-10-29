module.exports = {
  siteMetadata: {
    title: `GEOTRANS-retroexcavadora,tolva,aljibe,batea,pluma.. `,
    description: `en ARICA ,Servicios ,Ventas, Arriendos a diferentes Precios según área :Minera,Obras,Construcción, Áridos ,Movimiento Tierra, Izajes ,Limpieza en otros...`,
    author: `@fmarcosdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "geotrans",
        short_name: "GEOTRANS",
        theme_color: "#f8f8ff",
        background_color: "#f8f8ff",
        display: "fullscreen",
        // display: "minimal-ui'",
        start_url: `/geotrans`,
        icon: "src/favicons/android-chrome-192x192.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        path: `${__dirname}/locales`,
        languages: [`es`, `en`],
        defaultLanguage: `es`,

        i18nextOptions: {
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: ".",
          nsSeparator: false,
        },

        pages: [
          {
            matchPath: "/:lang?/blog/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["es"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-mysql2`,
      options: {
        connectionDetails: {
          host: "localhost",
          user: "root",
          password: "",
          database: "geotransbd",
        },
        queries: [
          {
            statement: "SELECT * FROM area",
            idFieldName: "CODAREA",
            name: "TodasLasAreas",
          },
          {
            statement: "SELECT * FROM generadorproducto",
            idFieldName: "CODPRODUCTORR",
            name: "TodosLosProductores",
          },
          {
            statement: "SELECT * FROM generadorservicio",
            idFieldName: "CODSERVIDOR",
            name: "TodosLosServidores",
          },
          {
            statement: "SELECT * from producto",
            idFieldName: "CODPRODUCTO",
            name: "TodosLosProductos",
          },
          {
            statement: "SELECT * from servicio",
            idFieldName: "CODSERVICIO",
            name: "TodosLosServicios",
          },
       ],
      },
    },
    // test
  ],
}

// {
//   statement: "SELECT * FROM select * from generadorservicio UNION SELECT * FROM generadorproducto",
//   idFieldName: "allServiciosYProductos",
//   name: "allServiciosYProductos",
// },

// Dar un servicio integral de excelencia a lo largo de Chile, buscando la ... Proveemos el servicio de arriendo y transporte de maquinaria, movimiento de tierras
// Servicios , Arriendo de equipos en Obras, Limpiezas, Demoliciones, Transportes, Mineria con equipos excavacion , carga entre otros
// Realizamos Servicios ,Ventas, Arriendos a diferentes Precios segun area como Minera,Obras,Construccion, Aridos ,Movimiento Tierra, Izajes ,Lmpieza en otros para Arica.

//precio ,  empresa,renta,arriendo,
//jbc , newholland , grande , usadas ,
// servicio ,equipos para obras, para excavacion
//  ,maquinaria,carga,,obra,construccion,,minera, materiales aridos,
// excavacion,retroexcavadora,
// movimiento de tierra,  carga tierra,
//cargador frontal

// Realizamos Servicios de Obras y Transporte con nuestras Maquinarias Aljibe,
//  Batea,Pluma, Retroexcavadora,Tolva etc. Tambien se realiza servicios en Áridos
//  y Reciclaje Industrial.

// GEOTRANS Servicios ,Ventas,Arriendos de equipos para obras,limpieza,Transporte,Mineria.
// Equipos de Excavacion , Movimiento de Tierra, produccion de Aridos , carga y reciclaje.
//
//GEOTRANS Servicios, Arriendos, Transportes , equipos para Obras ,limpieza


//consultas graphql de tipo mysql
// query {
//   allMysqlTodos{
//     edges {
//       node {
//         asdaaa
        
//       }
//     }
//   }
// }



// consultas de graphql para mysql

// {
//   allMysqlCountry {
//     edges {
//       nodes {
//         cosas
//       }
//     }
//   }

