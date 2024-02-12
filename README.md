# SermalucCrud

Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli)  y [Angular Material](https://github.com/angular/angular-cli) en sus versiones 15.2.10 y 15.2.9 respectivamente.

## Descripción del proyecto

El proyecto consiste en un CRUD para Equipos de NBA, lista, agrega, edita y elimina los mismos. 
Para el listado se hizo uso de una api pública [API NBA TEAMS](https://free-nba.p.rapidapi.com/teams) y sus respectivas credenciales las cuales se encuentran mapeadas dentro del archivo environment y son enviadas mediante HeadersInterceptor a cada petición HTTP.

También se hace uso de LoaderInterceptor, el cual muestra un loader por cada petición HTTP que se realice o se encuentre en curso, al finalizar se ocualta el loader. Este interceptor hace uso de LoaderService, el cual cambia el valor del BehaviorSubject que indica si se debe o no mostrar el loader.

Se realizó la validación dentro del formulario de Agregar y Editar para cuando los campos sean requeridos y no completados el botón de Guardar no se  habilite.


## Ejecutar el proyecto

Instalar las dependencias ejecutado el comando `npm install`, luego levantar el proyecto ejecutando el comando `npm run start`.
Ir a la dirección `http://localhost:4200/`. Si realiza cambios la aplicación se recargará automáticamente.