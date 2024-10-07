class Entrenador {
  constructor(
    public nombre: string,
    public reputacion: number,
    public plazasDisponibles: number
  ) {}

  tienePlaza(): boolean {
    return this.plazasDisponibles > 0;
  }

  asignarCliente() {
    this.plazasDisponibles -= 1;
  }
}

class Cliente {
  constructor(
    public nombre: string,
    public importanciaReputacion: number
  ) {}
}

const calcularSatisfaccion = (entrenador: Entrenador, cliente: Cliente) => {
  return entrenador.reputacion * cliente.importanciaReputacion;
};

export const asignarClientes = (entrenadores: Entrenador[], clientes: Cliente[]) => {
  const asignaciones: { cliente: string, entrenador: string }[] = [];

  clientes.sort(function (a, b) {
    return b.importanciaReputacion - a.importanciaReputacion;
  });

  clientes.forEach(cliente => {
    let mejorEntrenador: Entrenador | null = null;
    let mejorSatisfaccion = -1;

    entrenadores.forEach(entrenador => {
      if (entrenador.tienePlaza()) {
        const satisfaccion = calcularSatisfaccion(entrenador, cliente);
        if (satisfaccion > mejorSatisfaccion) {
          mejorSatisfaccion = satisfaccion;
          mejorEntrenador = entrenador;
        }
      }
    });

    if (mejorEntrenador) {
      (mejorEntrenador as Entrenador).asignarCliente();
      asignaciones.push({ 
        cliente: cliente.nombre, 
        entrenador: (mejorEntrenador as Entrenador).nombre 
      });
    }    
  });

  return asignaciones;
};

export { Entrenador, Cliente };

const entrenadores: Entrenador[] = [
  new Entrenador('A', 4.5, 1),
  new Entrenador('B', 3.2, 4),
  new Entrenador('C', 1.2, 3),
  new Entrenador('D', 3.4, 2),
];

const clientes: Cliente[] = [
  new Cliente('q', 2.6),
  new Cliente('r', 3.7),
  new Cliente('s', 8.5),
  new Cliente('t', 9.7),
  new Cliente('u', 2.6),
  new Cliente('v', 4.7),
  new Cliente('w', 5.6),
  new Cliente('x', 3.7),
  new Cliente('y', 8.1),
  new Cliente('z', 2.5),
];

const asignaciones = asignarClientes(entrenadores, clientes);

console.log("Asignaciones de Clientes a Entrenadores:");
if (asignaciones.length > 0) {
  asignaciones.forEach(asignacion => {
    console.log(`El cliente ${asignacion.cliente} ha sido asignado al Entrenador ${asignacion.entrenador}.`);
  });
} else {
  console.log("No se realizaron asignaciones.");
}
