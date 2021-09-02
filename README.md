Instalar node js de la siguiente pagina: https://nodejs.org/es/ 14.17.6 LTS
Instalar Visual Studio Code: https://code.visualstudio.com/ 
Crear una carpeta y abrirlas desde visual code
Abrir la terminal y descargar el proyecto con el siguiente comando: git clone https://github.com/FcoVeraV/TestFalaballeCafe.git
Luego instalar las depencias con el siguiente comando: npm install

Luego existen dos formas de ejecución:
- UI        : npx cypress open, y seleccionar el archivo TestFalabella
- Headless  : npx cypress run

NOTA: Al ejecutar headless se creara una carpeta video que contiene la grabación de la ejecución de la prueba, en caso de que una prueba falle, se generará una carpeta screenshot con el print del error.