import { Entrenador, Cliente, asignarClientes } from '../index';

describe('Asignación de clientes a entrenadores', () => {
  it('debería asignar a los clientes más importantes primero, basándose en la mayor satisfacción disponible', () => {
    const entrenadores = [
      new Entrenador('A', 4.5, 1),
      new Entrenador('B', 3.2, 4),
      new Entrenador('C', 1.2, 3),
      new Entrenador('D', 3.4, 2),
    ];

    const clientes = [
      new Cliente('q', 2.6),
      new Cliente('r', 3.7),
      new Cliente('s', 8.5),
      new Cliente('t', 9.7),
    ];

    const asignaciones = asignarClientes(entrenadores, clientes);

    expect(asignaciones.length).toBe(4);

    expect(asignaciones).toContainEqual({ cliente: 't', entrenador: 'A' });
    expect(asignaciones).toContainEqual({ cliente: 's', entrenador: 'D' });
    expect(asignaciones).toContainEqual({ cliente: 'r', entrenador: 'D' });
    expect(asignaciones).toContainEqual({ cliente: 'q', entrenador: 'B' });
  });

  it('debería reducir las plazas disponibles después de asignar un cliente', () => {
    const entrenador = new Entrenador('A', 4.5, 1);
    expect(entrenador.plazasDisponibles).toBe(1);

    entrenador.asignarCliente();
    expect(entrenador.plazasDisponibles).toBe(0);
  });
});

describe('Cálculo de satisfacción', () => {
  it('debería calcular correctamente la satisfacción entre un cliente y un entrenador', () => {
    const entrenador = new Entrenador('A', 4.5, 1);
    const cliente = new Cliente('q', 2.6);

    const satisfaccion = entrenador.reputacion * cliente.importanciaReputacion;

    expect(satisfaccion).toBeCloseTo(11.7);
  });
});
