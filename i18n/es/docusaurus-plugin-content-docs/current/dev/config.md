---
title: UserConfig
---

El contenido dentro de `==UserConfig==` va después de `==UserScript==`, y describe algunas opciones configurables por el usuario para el script. La configuración se escribe en formato [YAML](https://yaml.org/):

```js
/* ==UserConfig==
group1:
  configA:                                # la clave es group.config, por ejemplo esta clave es group1.configA
    title: Config A                       # título de la configuración
    description: Esta es una configuración de tipo texto # descripción de la configuración
    type: text                            # tipo de opción; se detecta automáticamente de los datos si se omite
    default: valor predeterminado          # valor predeterminado de la configuración
    min: 2                                # mínimo 2 caracteres
    max: 18                               # máximo 18 caracteres
    password: true                        # marcar como campo de contraseña
  configB:
    title: Config B
    description: Esta es una configuración de casilla de verificación
    type: checkbox
    default: true
  configC:
    title: Config C
    description: Esta es una configuración de lista de selección
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Config D
    description: Esta es una configuración de lista de selección dinámica
    type: select
    bind: $cookies                       # valores enlazados dinámicamente; la clave comienza con $, y el valor debe ser un array
  configE:
    title: Config E
    description: Esta es una configuración de lista de selección múltiple
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Config F
    description: Esta es una configuración de lista de selección múltiple dinámica
    type: mult-select
    bind: $cookies
  configG:
    title: Config G
    description: Esta es una configuración numérica
    type: number
    default: 1
    min: 10  # valor mínimo
    max: 16  # valor máximo
    unit: min # etiqueta de unidad
  configH:
    title: Config H
    description: Esta es una configuración de texto largo
    type: textarea
    default: valor predeterminado
  configI:
    title: Config I
    description: Esta es una configuración de tipo tiempo
    type: time
    default: "12:00"
---
group2: # segundo grupo de configuración
  configX:
    title: Config X
    description: Esta es una configuración de tipo texto
    default: valor predeterminado
 ==/UserConfig== */
```

Una vez definido aquí, aparece un botón de configuración en el panel de control para que el usuario configure. Los desarrolladores usan `GM_getValue` para leer el valor de la configuración, con la clave expresada como `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
