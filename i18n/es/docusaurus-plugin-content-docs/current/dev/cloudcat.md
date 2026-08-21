---
title: Ejecución en la nube
---

> Se proporcionan varias formas de ejecutar en la nube; consulte [Entornos de ejecución](#running-environments) para más detalles. Además, [CloudCat](https://github.com/scriptscat/cloudcat) es un servicio para ejecutar scripts de fondo en la nube — una plataforma FAAS que aún está en desarrollo.

⚠ Tenga en cuenta ⚠, una vez subido a la nube, el significado de `once` en una expresión de script programado cambia: el tiempo antes de `once` se reemplaza con su valor mínimo al ejecutar.

Por ejemplo:

* `* * once * *` => `0 0 * * *`: se ejecuta una vez al día, se convierte en ejecutarse a las 00:00 todos los días
* `* 1-23 once * *` => `0 1 * * *`: se ejecuta una vez entre 1:00 y 23:00 todos los días, se convierte en ejecutarse a las 01:00 todos los días
* `* 1,3,5 once * *` => `0 1 * * *`: se ejecuta una vez a las 1:00, 3:00 o 5:00 todos los días, se convierte en ejecutarse a las 01:00 todos los días
* `* */4 once * *` => `0 0 * * *`: se ejecuta una vez cada 4 horas todos los días, se convierte en ejecutarse a las 00:00 todos los días
* `* 1-23/4 once * *` => `0 1 * * *`: se ejecuta una vez cada 4 horas entre 1:00 y 23:00 todos los días, se convierte en ejecutarse a las 01:00 todos los días
* `* 10 once * *` => `0 10 * * *`: se ejecuta una vez a las 10:00 todos los días, se convierte en ejecutarse en el minuto 00 de la hora 10 todos los días
* `* * * once *` => `0 0 1 * *`: se ejecuta una vez al mes, se convierte en ejecutarse a las 00:00 el día 1 de cada mes

## Valores adicionales de descripción de CloudCat

Un script de referencia: [Bilibili Auto Check-in](https://scriptcat.org/script-show-page/48)

### cloudCat

Declarar este atributo permite que el script se ejecute a través de `CloudCat`. Una vez que un script tiene esta opción, aparece un botón de ejecución en la nube en la lista de scripts; al hacer clic puede elegir un método de ejecución — consulte [Entornos de ejecución](#running-environments).

![image-20220203225847694](@site/docs/dev/cloudcat.assets/image-20220203225847694.png)

### cloudServer

> Relacionado con cloudCat, aún no implementado

La dirección del servidor cloudCat predeterminada

### exportValue

Describe los Values a exportar a la nube; se permiten múltiples declaraciones.

```ts
// @exportValue key1,key2,key3
// @exportValue key4,key5,key6
```

### exportCookie

Describe las cookies a exportar a la nube; se permiten múltiples declaraciones. Los parámetros se describen usando `CookieDetails` de `GM_cookie`, por ejemplo:

```ts
// Lo siguiente exporta la cookie llamada cookie1 de https://docs.scriptcat.org/docs/use/
// @exportCookie url=https://docs.scriptcat.org/docs/use;name=cookie1

// Esto exporta todas las cookies del dominio scriptcat.org
// @exportCookie domain=scriptcat.org

// Todos los parámetros disponibles:
// @exportCookie domain=scriptcat.org;url=https://docs.scriptcat.org/docs/use;name=cookie1;path=/docs/use;secure=true;session=true
```

## Cambios en el soporte de API
> Actualmente solo se soportan las siguientes APIs; a menos que se indique lo contrario, se comportan igual que la API original.

### GM_xmlhttpRequest


### GM_notification


### GM_log

### GM_getValue

Actualmente solo soporta obtener Values exportados mediante `@exportValue`; los métodos set/delete/list y otros no están soportados.

## Entornos de ejecución {#running-environments}

### Local

Exporta un paquete zip; después de extraerlo en una carpeta, ejecute los siguientes comandos para ejecutarlo localmente (requiere un entorno Node.js local):

```bash
npm i
node index.js
```


### Tencent Cloud

Primero cree una clave de Tencent Cloud en [**Access Keys**](https://console.cloud.tencent.com/cam/capi) — si usa una sub-cuenta, asegúrese de otorgarle permisos de Cloud Function. Luego habilite el servicio en [**Function Service**](https://console.cloud.tencent.com/scf/list), que incluye una cierta cantidad de uso gratuito cada mes. La región predeterminada es Shanghái; ajústela si es necesario. Después de hacer clic en subir, se crea automáticamente un activador programado basado en `@crontab` para ejecutar la función según el horario.

![image-20220203224956248](@site/docs/dev/cloudcat.assets/image-20220203224956248.png)
