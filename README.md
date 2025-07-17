# Componentes Funcionales React

## Descripción

Este proyecto es una aplicación de React que demuestra el uso de componentes funcionales y de clase, así como la implementación de un formulario de registro con validación utilizando Material UI. El proyecto sirve como ejemplo educativo para entender las diferencias entre los distintos tipos de componentes en React y cómo manejar formularios con validación.

## Características

- Comparación entre componentes funcionales y de clase
- Implementación de un contador en ambos tipos de componentes
- Formulario de registro con validación de campos
- Uso de Material UI para la interfaz de usuario
- Manejo de estado con useState en componentes funcionales

## Tecnologías Utilizadas

- React 19
- Material UI 7
- Emotion (para estilos)
- React Testing Library

## Componentes Principales

### FuncComponent

Un componente funcional simple que implementa un contador utilizando el hook useState.

### ClassComponent

Un componente de clase que implementa la misma funcionalidad de contador pero utilizando el estado de clase y métodos de ciclo de vida.

### FormSignUp

Un formulario de registro implementado como componente funcional que incluye:
- Validación de campos (nombre, apellido, email)
- Switches para opciones de promociones y novedades
- Manejo de errores en tiempo real
- Envío de datos al componente padre

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio del proyecto
cd componentes-funcionales

# Instalar dependencias
npm install

# Iniciar la aplicación en modo desarrollo
npm start
```

## Scripts Disponibles

- `npm start`: Inicia la aplicación en modo desarrollo
- `npm build`: Compila la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Expone la configuración de webpack (¡usar con precaución!)

## Estructura del Proyecto

```
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── components/
    │   ├── ClassComponent.jsx
    │   ├── FormSignUp.jsx
    │   └── FuncComponent.jsx
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

---

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).
