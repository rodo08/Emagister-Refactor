# Ejercicio de Refactorización de Código JavaScript

## Descripción del ejercicio

Este ejercicio tenía como objetivo refactorizar un código basado en prototipos de JavaScript y convertirlo a una jerarquía de clases utilizando la sintaxis de ES6. Se nos proporcionó un ejemplo inicial utilizando funciones constructoras y herencia prototípica, y el objetivo era modernizar esta implementación para usar clases con las mejores prácticas de ES6+.

### Código original basado en prototipos:

```javascript
function Mascota(nombre, tipo) {
  this.nombre = nombre;
  this.tipo = tipo;
}

Mascota.prototype.getInfo = function () {
  return this.nombre + " es un " + this.tipo;
};

Mascota.prototype.compararMascotas = function (otraMascota) {
  return this.nombre === otraMascota.nombre;
};

function Perro(nombre, raza) {
  Mascota.call(this, nombre, "perro");
  this.raza = raza;
}

Perro.prototype = Object.create(Mascota.prototype);
Perro.prototype.constructor = Perro;

Perro.prototype.getRaza = function () {
  return this.nombre + " es un perro de raza " + this.raza;
};

// Ejemplos de uso
const mascota = new Mascota("Luna", "gato");
console.log(mascota.getInfo()); // "Luna es un gato"
const perro = new Perro("Max", "Labrador");
console.log(perro.getInfo()); // "Max es un perro"
console.log(perro.getRaza()); // "Max es un perro de raza Labrador"

// Comparación de mascotas
const otroPerro = new Perro("Max", "Beagle");
console.log(perro.compararMascotas(otroPerro)); // true
```

## Solución Implementada

El código original fue refactorizado para cumplir con las siguientes especificaciones utilizando la sintaxis de clases de ES6:

### Requisitos:

1. **Clase Mascota (Pet):**
   - Debe tener un constructor que acepte nombre y tipo.
   - Implementar un método `getInfo` que devuelva información sobre la mascota.
2. **Clase Perro (Dog):**

   - Debe extender de la clase Mascota.
   - Debe tener un constructor que acepte nombre y raza.
   - Implementar un método `getBreed` que devuelva información sobre el perro (nombre y raza).

3. **Comparación de Mascotas:**
   - Implementar un método `comparePets` en la clase Mascota que compare dos instancias de Mascota y devuelva `true` si los nombres son iguales, y `false` en caso contrario.

### Solución Refactorizada

En la refactorización, se ha utilizado la sintaxis de clases y se han implementado las siguientes mejoras:

- Uso de **encapsulación** mediante el uso de campos privados (prefijo `#` en las propiedades de la clase).
- Mejora de la legibilidad y modularidad del código utilizando métodos getters para acceder a las propiedades privadas.
- Implementación de **herencia** utilizando `extends` para que la clase `Dog` herede de `Pet` (mascota).

### Código refactorizado:

```javascript
class Pet {
  #name;
  #type;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  getInfo() {
    return `${this.#name} es un ${this.#type}`;
  }

  comparePets(otherPet) {
    return this.#name === otherPet.name;
  }
}

class Dog extends Pet {
  #breed;

  constructor(name, breed) {
    super(name, "perro");
    this.#breed = breed;
  }

  get breed() {
    return this.#breed;
  }

  getBreed() {
    return `${this.name} es un perro de raza ${this.#breed}`;
  }
}

// Ejemplos de uso
const pet = new Pet("Luna", "gato");
console.log(pet.getInfo()); // "Luna es un gato"

const dog = new Dog("Max", "Labrador");
console.log(dog.getInfo()); // "Max es un perro"
console.log(dog.getBreed()); // "Max es un perro de raza Labrador"

// Comparación de mascotas
const anotherDog = new Dog("Max", "Beagle");
console.log(dog.comparePets(anotherDog)); // true
console.log(dog.comparePets(pet)); // false
```

## Mejoras y buenas prácticas implementadas

1. **Encapsulación:**

   - Se han utilizado **campos privados** (`#name`, `#type`, `#breed`) para garantizar la encapsulación de las propiedades internas, siguiendo buenas prácticas de programación orientada a objetos. Estas propiedades solo pueden ser accedidas mediante getters públicos.

2. **Uso de Getters:**

   - Se implementaron **getters** para acceder a las propiedades privadas de los objetos. Esto permite controlar mejor cómo se accede a los atributos internos y añadir lógica adicional en caso de ser necesario, sin exponer directamente las propiedades.

3. **Herencia:**

   - `Dog` extiende de `Pet`, lo que asegura que el código es reutilizable y que `Dog` hereda los métodos y propiedades de `Pet`. Esto asegura que la implementación siga el principio de reutilización de código.

4. **Comparación de Objetos:**

   - El método `comparePets` en `Pet` permite comparar dos instancias de mascotas mediante sus nombres, cumpliendo con el principio de responsabilidad única y reutilización de código.

5. **Modularidad:**
   - La implementación actual permite añadir nuevos tipos de mascotas (por ejemplo, una clase `Cat`) de forma sencilla, siguiendo el principio de abierto/cerrado (OCP de SOLID).

## Ejecución

1. Clonar este repositorio.
2. Navegar al directorio del proyecto.
3. Ejecutar el código en un entorno que soporte ES6, como el navegador o Node.js.

```bash
node index.js
```

## Notas adicionales

- En esta solución se ha utilizado la sintaxis de campos privados (prefijo `#`), que es una característica reciente de ECMAScript. Se debe ejecutar este código en un entorno compatible con ES2020 o superior.
- Los ejemplos de uso están incluidos para ilustrar cómo las clases `Pet` y `Dog` funcionan en conjunto y cómo se puede comparar diferentes instancias de mascotas.

## Conclusión

Esta refactorización moderniza el código, mejora la encapsulación de datos y asegura que la jerarquía de clases siga las mejores prácticas de programación orientada a objetos. Además, el código es más fácil de mantener y extender en el futuro si es necesario implementar nuevas características o tipos de mascotas.

---

<br><br>

# Preguntas sobre SASS y WebPack

## Respuestas:

1.  ¿Qué es SASS?

    - **A) Un preprocesador CSS**

2.  ¿Cuál de las siguientes características es una ventaja de SASS?

    - **A) Permite el uso de variables**

3.  ¿Cómo se define una variable en SASS?

    - **B) $color: #fff;**

**Preguntas sobre Webpack:**

4.  ¿Qué es Webpack?

    - **C) Un empaquetador de módulos**

5.  ¿Cuál de las siguientes es una función de Webpack?

    - **D) Todas las anteriores**  
      (Minificación de CSS, Gestión de dependencias, Compilación de SASS)

6.  ¿Qué archivo es el punto de entrada predeterminado en un proyecto Webpack?

    - **C) main.js**

**Preguntas sobre BEM:**

7.  ¿Qué significa BEM?

    - **A) Block Element Modifier**

8.  ¿Cómo se nombraría un elemento button dentro de un bloque header en BEM?

    - **A) header\_\_button**

9.  ¿Cuál de las siguientes afirmaciones sobre BEM es correcta?

    - **D) Los modificadores se representan con un guion doble (--)**

**Preguntas sobre ITCSS:**

10. ¿Qué significa ITCSS?

- **A) Inverted Triangle CSS**

11. ¿Cuál es la principal ventaja de ITCSS?

- **D) Todas las anteriores**

12. En la estructura de ITCSS, ¿dónde se colocan los estilos de utilidad?

- **B) En la parte inferior**
