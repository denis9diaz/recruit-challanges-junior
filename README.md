# Solución

El código asigna clientes a entrenadores basándose en la reputación de los entrenadores y la importancia que cada cliente da a la reputación. La satisfacción del cliente se calcula como el **producto entre la reputación del entrenador y la importancia que el cliente le da a esa reputación**.

## Lógica de Asignación

La asignación se realiza de manera que:

- Se selecciona al **entrenador con plazas disponibles** que maximice la satisfacción del cliente.
- Si se encuentra un **entrenador con mayor satisfacción disponible**, se asigna a ese entrenador.
- Una vez que un entrenador se queda **sin plazas**, ya no se pueden asignar más clientes a ese entrenador.

---

## Estructura del Código

- **`Entrenador`**: Clase que representa a un entrenador, con nombre, reputación y número de plazas disponibles.
- **`Cliente`**: Clase que representa a un cliente, con nombre y la importancia que da a la reputación de su entrenador.
- **`calcularSatisfaccion(entrenador, cliente)`**: Función que calcula la satisfacción del cliente con un entrenador.
- **`asignarClientes(entrenadores, clientes)`**: Función principal que asigna a los clientes a los entrenadores de manera que se maximice la satisfacción total.

---

## Tests

He añadido pruebas automatizadas usando el framework de testing **Jest** para verificar el funcionamiento correcto del sistema:

- Verificar que los clientes son asignados correctamente a los entrenadores con mayor satisfacción.
- Comprobar que las plazas disponibles de los entrenadores se reducen al asignar un cliente.
- Validar el cálculo de satisfacción entre un cliente y un entrenador.

---

## Comandos

- Para ejecutar la aplicación:

  ```bash
  npx ts-node src/index.ts

- Para ejecutar los tests: (He añadido un script al `package.json` para ejecutar los tests de manera más sencilla).

  ```bash
  npm test
