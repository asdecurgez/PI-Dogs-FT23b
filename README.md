<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Sobre el proyecto

SPA (Single Page Application) utilizando React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS sin uso de librerías externas. La SPA consume datos de la API The Dog API (https://thedogapi.com/) a través de un Back End desarrollado en Node.JS utilizando Express, sequelize y postgreSql agregando nuevas funcionalidades a la API original.

## Funcionalidades del proyecto
- Barra de búsqueda de razas.
- Ordenamientos ascendente y descendente de razas por nombre y por peso.
- Formulario controlado para que el usuario tenga la posibilidad de crear una raza adicional.
- Filtros por temperamentos y origen de las razas (existentes desde la API y creadas por los usuarios).
- Acceso a los detalles de cada raza (nombre, imagen, años de vida, peso, altura y temperamentos).

## Instrucciones para ejecutar la SPA

1.Clonar el repositorio.
2.Abrir el proyecto en la consola.
3.En la carpeta api ejecutar npm install
4.En la carpeta Client ejecutar npm install
5.En la ruta api/src/db, completar para la base de datos de Postgres: DB_USER (usuario), DB_PASSWORD (password), DB_HOST (localhost) y DB_NAME (nombre base de datos).
6.En las rutas api/src/Controllers/Breeds.js y api/src/Controllers/Breeds.js reemplazar URL_APIKEY por la url más clave otorgada por The Dog API (https://thedogapi.com/).
7.En la carpeta api ejecutar npm start.
8.En la carpeta Client ejecutar npm start.
9.Abrir http: //localhost:3001 para visualizar la app en el navegador.
