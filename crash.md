# Crash to fix

## Notas

- La propiedad Gap solo acepta pixeles exactos en mobile.
- los TextInput no coinciden bien con su defaulvalue en mobile de igual forma se espera un string y no un prop de un objeto.
- Posiblemente "Cursor Pointer" no lo reciba o cause errores.

## Acerca del Dropable:

Lo curioso es que las librerías para hacer drop en react native no funcionan en web, y las de web no funcionan en mobil, es decir, tengo que configurar por aparte para el drop de las listas en la versión web y el drop el la versión Mobil.

# OverFlow:

En el componente Maintask Linea 93 aprox overflow: "hidden", no funciona en mobil, así que este podría presentar problemas en mobil.
