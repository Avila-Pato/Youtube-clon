# 01 Configuración

## Configurar el Entorno

- **Tiempo de ejecución**: Bun  
- **Gestor de paquetes**: Bun  

## ¿Por qué usar Bun?

- Más eficiente que NPM.  
- Permite ejecutar TypeScript con importaciones ES6 de manera sencilla.  
- Menos problemas de dependencias en comparación con NPM.  

## Comandos Básicos

- `bun run dev`: Inicia el servidor de desarrollo.  
- `bun run build`: Compila el proyecto.  
- `bunx === npx`: Ejecuta paquetes de manera similar a `npx`.  

---

# 02 Diseño Básico  

## Estructura Visual  


  - Agregar un logo y un panel de control básico.  
  - Aprender la estructura de carpetas del enrutador de la aplicación.  

---

## - **Imagen**:  
![Dashboard](./public/prueba%201.png)  

## Barra Lateral  

- **Secciones de la Barra Lateral**:  
  - Elementos de la barra lateral.  
  - Enlaces de la barra lateral.  
  - Acciones dentro de la barra lateral.  

- **Otras Secciones**:  
  - Campo de búsqueda.  
  - Componentes de autenticación.  

---

# 03 Autenticación  

- Integrar Clerk.  
- Agregar pantallas de inicio de sesión.  
- Incluir el `userButton`.  
- Añadir middleware.  
- Usar el estado de autenticación en las secciones de la barra lateral.  
- Proteger rutas.  

## - **Imagen**:  
![Auth](./public/1.jpeg)  
![Auth](./public/2.jpeg)  
![Auth](./public/3.jpeg)  

---

# 04 Configurando base de datos 

- Creado un PostgreAQL database *(www.neon.tech)*.
- Configurando DrizzleORM.
- Creando un schema para la base de datos
- Migrando los cambios a la base de datos
## - **Imagen**: 
![Database](./public/schema.png)

## ¿Por qué DrizzleORM?

- Compatibilidad con múltiples bases de datos (PostgreSQL, MySQL, SQLite)
- Único ORM con soporte para SQL relacional y consultas tipo SQL-like.
- Optimizado para entornos serverless por defecto.
- Forza a escribir consultas explícitas, mejorando la comprensión del código.

---

# 05 Configurando Webhook sync 

- crear una cuenta ngrok( permite exponer un servidor local a Internet mediante túneles seguros )
- obtener un dominio estatico(no requerido)
- agregar script al local run y la app( ver Package.json )

- crear los usuarios webhook
- conectar la webhook a el dashboard de clerk 

## - ** Usuario guardado Drizzle**:

![Webhook](./public/webhook1.png)

---

## - ** configurando  webhook para subir al usuario a la base de datos  **:
![Webhook](./public/webhook3.png)

---


# 06 Configurando TRPC( librería que permite comunicar el frontend y el backend sin necesidad de definir APIs REST)

## ¿Por qué TRPC 

- Elimina la necesidad de definir manualmente endpoints en el backend.
- Integración sencilla con Next.js, Express, y otros frameworks.
- Menos código repetitivo en validaciones y respuestas.
- Ecosistema ligero sin dependencias innecesarias.  
- Hook familiares (use  query, useMutation etc)


