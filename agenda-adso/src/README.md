# Laboratorio: Commits Atómicos + Conventional Commits
El objetivo principal fue construir un historial de Git claro, organizado y profesional, separando cada cambio en unidades lógicas independientes.

## Estructura del Proyecto
src/
│
├── features/
│   └── calculator.js
├── utils/
│   └── validation.js
├── services/
│   └── api.js
├── App.jsx
└── main.jsx

## Tareas Realizadas
Tarea 1: Nueva Funcionalidad
Archivo: features/calculator.js
Se creó una función para realizar la suma de dos números:

export function sum(a, b) {
  return a + b;
}
Commit realizado: feat(calc): add sum function


Tarea 2: Corrección de Bug
Archivo: utils/validation.js
Se implementó una función para validar correos electrónicos y se corrigió un bug que no manejaba correctamente el caso en que el email estaba vacío.

export function validateEmail(email) {
  if (!email) {
    return false;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

Commit realizado: fix(validation): handle empty email input

Tarea 3: Documentación
Archivo: README.md
Se agregó documentación explicando la estructura del proyecto y las funcionalidades implementadas.
Commit realizado: docs: add usage examples to README

Tarea 4: Refactorización
Archivo: services/api.js
Se mejoró la organización del código extrayendo la lógica de manejo de errores en una función independiente, sin modificar el comportamiento original.

function handleError(error) {
  console.error('API error:', error);
  throw error;
}

export async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error fetching data');
    }

    return await response.json();
  } catch (error) {
    handleError(error);
  }
}
Commit realizado: refactor(api): extract error handling logic

## Verificación del Historial
Para comprobar los commits realizados, ejecutar:
git log --oneline -4

El resultado debe mostrar cuatro commits claros, organizados y atómicos.

## Cambio chikito
Se crea rama con el comando git switch -c feat/encabezado
