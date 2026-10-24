# 📺 TV Chile para LG Smart TV (webOS)
### Guía Completa de Instalación, Uso y Marco Legal en Chile

Aplicación nativa Web para Smart TV **LG (webOS)** diseñada especialmente para **adultos mayores y familias**, pensada para sintonizar y disfrutar de forma directa, ágil y gratuita los canales de televisión abierta chilena de libre recepción.

---

## ⚖️ Marco Legal y Regulatorio en Chile

Para total transparencia de los usuarios, desarrolladores y titulares de señales, a continuación se detallan los fundamentos técnicos y legales bajo los cuales opera esta aplicación dentro de la legislación chilena:

### 1. Naturaleza del Software: Reproductor Cliente de Código Abierto
* **TV Chile es única y exclusivamente un software reproductor multimedia (cliente)**, de funcionamiento análogo a un navegador web o a reproductores multimedia abiertos como *VLC*, *Kodi* o *ExoPlayer*.
* La aplicación **no aloja, no transmite, no retransmite, no re-codifica ni almacena ningún tipo de contenido audiovisual ni señal televisiva**.
* El software no cuenta con servidores de streaming propios ni bases de datos de video. Su única función técnica es interpretar enlaces web públicos utilizando el protocolo estándar de la industria **HLS (HTTP Live Streaming)** para renderizarlos en la pantalla del televisor.

### 2. Principio de Televisión de Libre Recepción (Ley N° 18.838 / CNTV)
* En Chile, la televisión abierta se rige por la **Ley N° 18.838** (que crea el Consejo Nacional de Televisión - CNTV) y la **Ley N° 18.168** (Ley General de Telecomunicaciones), bajo el principio fundamental de **emisión abierta, universal y gratuita de libre recepción** para todos los habitantes de la República.
* Las señales nacionales (como *TVN*, *Canal 13*, *Chilevisión*, *Mega*, etc.), así como los múltiples canales regionales, universitarios y comunitarios del país, emiten de forma libre y gratuita por el espectro radioeléctrico y disponen simultáneamente de emisiones de streaming digital abiertas al público general en sus plataformas web oficiales, **sin barreras de pago, sin suscripción y sin cifrado de acceso condicional**.

### 3. Enlaces Públicos y Directorio Comunitario `m3u.cl`
* La aplicación utiliza como fuente de indexación el directorio comunitario y colaborativo público de **`https://m3u.cl`** (específicamente `https://m3u.cl/lista/CL.m3u`).
* Esta lista incluye **exclusivamente canales de libre recepción (Free-To-Air / FTA)** de Chile.
* **No se incluye, no se promueve ni se da soporte a canales de televisión de pago (cable/satélite)**, señales premium, eventos pay-per-view, ni contenido protegido por tecnologías de cifrado DRM (como *Widevine*, *PlayReady* o *FairPlay*).

### 4. Propiedad Intelectual (Ley N° 17.336) y Marcas
* Todos los contenidos, transmisiones, logotipos, nombres comerciales y marcas exhibidas pertenecen a sus respectivos concesionarios y organismos de radiodifusión según la **Ley N° 17.336 sobre Propiedad Intelectual**.
* El uso de los logotipos se realiza estrictamente con propósitos informativos y de referencia visual para facilitar la accesibilidad a adultos mayores, bajo el principio de uso justo y legítima identificación de la fuente pública de origen.
* **Descargo de Responsabilidad (Disclaimer)**: Esta aplicación es un proyecto educativo, de accesibilidad y sin fines de lucro. Si algún canal u organismo titular de una señal abierta desea que su enlace público no sea indexado en el directorio general, puede gestionarlo directamente ante el repositorio de origen en `m3u.cl` o comunicarse con el autor del repositorio para su remoción inmediata.

---

## 🎯 Características Principales de TV Chile (LG webOS)

* 👵 **Diseñada para Adultos Mayores**: Al abrir la app, entra directamente a sintonizar en pantalla completa sin menús complejos ni botones confusos.
* 🔢 **Sintonización Numérica Directa**: Si el control remoto tiene números (`0` al `9`), se teclea el canal directamente (ej: `1` y `3` para Canal 13). Con temporizador generoso (2.5 s) para digitar cómodamente.
* 🎮 **Zapping Tradicional**: Botones `CH+` y `CH-` (o flechas arriba y abajo) para cambiar de canal tal como en la televisión de toda la vida.
* 📺 **Banner OSD Gigante**: Letras y números grandes con alto contraste adaptados a la zona segura de pantallas Full HD y 4K (evita que los marcos de la TV corten la información).
* 📋 **Guía Lateral de Canales**: Menú lateral amplio (620 px) con centrado suave del canal seleccionado y logos alineados.
* 🧠 **Memoria Automática**: Recuerda cuál fue el último canal visto para volver a sintonizarlo automáticamente al volver a abrir la app.
* 🔙 **Soporte Botón Atrás (Back)**: Configurado con el código nativo `461` de LG webOS para cerrar menús sin salir accidentalmente de la app.

---

## 🛠️ Guía de Instalación Paso a Paso en LG Smart TV

Compatible con cualquier televisor **LG Smart TV con sistema webOS** (modelos desde 2014 hasta 2026+: series LB, LF, LH, UJ, UK, UM, UN, UP, UQ, UR, UT, OLED y QNED).

---

### Paso 1: Crear una Cuenta Gratuita de LG Developer (Solo 1 vez)
Para poder habilitar el modo de desarrollo oficial en tu televisor LG, necesitas una cuenta de desarrollador:

1. Ingresa desde tu computadora o teléfono a:  
   👉 **[Sitio Oficial LG webOS Developer](https://webostv.developer.lge.com/)**
2. Haz clic en **Sign In** (arriba a la derecha) y luego en **Create Account** (Crear cuenta).
3. Acepta los términos, escribe tu correo y contraseña, y verifica tu email haciendo clic en el enlace que LG te enviará.

---

### Paso 2: Instalar la app "Developer Mode" en tu TV LG
1. Enciende tu Smart TV LG (debe estar conectada a internet, por Wi-Fi o cable).
2. Presiona el botón **Home** (la casita) del control remoto y abre la **LG Content Store** (la tienda de aplicaciones de la tele).
3. En la lupa del buscador, escribe: **`Developer Mode`**.
4. Selecciona la aplicación oficial creada por **LG Electronics** e instálala.

---

### Paso 3: Activar el Modo Desarrollador en la TV
1. Abre la aplicación **Developer Mode** en tu televisor.
2. Inicia sesión con el correo y contraseña que registraste en el **Paso 1**.
3. Verás una pantalla con varias opciones:
   * Cambia el interruptor **Dev Mode Status** a **ON**.
   * El televisor te pedirá reiniciar. Presiona **OK** (la TV se apagará y encenderá sola).
4. Al reiniciar, vuelve a abrir la app **Developer Mode** en la tele:
   * Asegúrate de poner el interruptor **Key Server** en **ON**. *(Obligatorio cada vez que reinicias la tele)*.
   * **Anota los datos que muestra en pantalla:**
     * **IP Address**: Dirección IP del TV (ejemplo: `192.168.1.39`).
     * **Passphrase**: Clave de 6 letras/números (ejemplo: `000000`).

---

### Paso 4: Instalar TV Chile en tu TV (Método Recomendado)

#### Opción A: Con la herramienta visual "webOS Dev Manager" (Para Windows, Mac y Linux)

1. **Descargar webOS Dev Manager**:
   * En tu computadora, entra a la página oficial de lanzamientos:  
     👉 **[Descargar webOS Dev Manager (GitHub Releases)](https://github.com/webosbrew/dev-manager-desktop/releases/latest)**
   * Descarga el instalador según tu sistema:
     * **Windows**: Archivo que termina en **`.msi`**.
     * **Mac**: Archivo que termina en **`.dmg`**.
     * **Linux**: Archivo **`.AppImage`** o **`.deb`**.
2. **Abrir la aplicación**:
   * *En Mac*: Si te sale el aviso de que Apple no pudo verificar el desarrollador, ve a **Ajustes del Sistema ➔ Privacidad y seguridad** y haz clic en **Abrir de todos modos**.
3. **Conectar tu televisor**:
   * En webOS Dev Manager, haz clic en **Add Device** (o el botón `+`).
   * En **Device Type**, selecciona: **Developer Mode**.
   * En **IP Address**, escribe la IP de tu TV.
   * En **Passphrase**, escribe la clave de 6 caracteres que muestra tu televisor.
   * Presiona **Connect**.
4. **Instalar el paquete `.ipk`**:
   > [!NOTE]
   > Si al conectar ves un aviso que dice `-1 failed to install service`, dale a **Aceptar / Dismiss**. Esto solo significa que tu TV no tiene *root* para instalar servicios ocultos, pero **no afecta en nada a la instalación de TV Chile**.
   * En la parte superior de la ventana, haz clic en el botón **Install** (o **+ Install**).
   * Selecciona el archivo: **`TVChile.ipk`** (incluido en esta carpeta).
   * En 5 segundos verás el aviso de éxito y **TV Chile aparecerá en la barra inferior de aplicaciones de tu Smart TV**.

---

#### Opción B: Por Línea de Comandos Oficial (Terminal / CLI)

Si prefieres la terminal o eres desarrollador:

1. Instala el CLI oficial de LG:
   ```bash
   npm install -g @webos-tools/cli
   ```
2. Registra tu televisor:
   ```bash
   ares-setup-device -a LGTV -i "{'username':'prisoner','host':'TU_IP_TV','port':'9922'}"
   ```
3. Descarga la llave ingresando la Passphrase de la tele:
   ```bash
   ares-novacom --device LGTV --getkey
   ```
4. Instala y ejecuta la app:
   ```bash
   ares-install -d LGTV TVChile.ipk
   ares-launch -d LGTV org.tvchile.app
   ```

---

## ⚡ Recomendación Clave: Configurar DNS en tu Smart TV LG

Para evitar que tu compañía de internet (VTR, Movistar, Entel, Claro, Mundo, etc.) aplique filtros o bloqueos a las señales abiertas, y para que los canales carguen de forma instantánea:

1. En tu TV LG, presiona el botón **Settings / Ajustes** (icono de engranaje).
2. Ve a **Toda la configuración** (icono de 3 puntos) ➔ **Red** ➔ **Conexión Wi-Fi** (o Ethernet).
3. Entra en **Configuración avanzada de Wi-Fi** ➔ selecciona **Editar**.
4. **Desmarca** la casilla *"Configurar automáticamente"*.
5. Baja hasta **Servidor DNS** y cámbialo por:
   * **`8.8.8.8`** *(Google Public DNS)*, o bien
   * **`1.1.1.1`** *(Cloudflare DNS)*
6. Presiona **Conectar**.

---

## 🎮 Guía de Teclas del Control Remoto LG

| Botón en el Control LG | Acción en TV Chile |
| :--- | :--- |
| **Flecha Arriba / CH+** | Canal siguiente |
| **Flecha Abajo / CH-** | Canal anterior |
| **OK / Rueda central** | Abrir la Guía completa de canales (o sintonizar si la guía está abierta) |
| **Teclas 0 al 9** | Sintonización directa por número (ej: teclear `1` y `3` sintoniza Canal 13) |
| **Atrás (Back)** | Cerrar la guía de canales o esconder el banner informativo |
| **Play / Pause** | Pausar o reanudar la señal en vivo |

---

## ❓ Preguntas Frecuentes

**¿Por qué el Modo Desarrollador muestra un contador de horas (ej: 50 horas)?**  
Por política oficial de LG, las sesiones de Developer Mode duran entre 50 y 1000 horas. Para extenderlo, simplemente abre la app **Developer Mode** en tu TV y presiona **Extend**, o en **webOS Dev Manager** haz clic en el botón de renovar sesión.

**¿Qué pasa si la TV se reinicia y no conecta?**  
Cada vez que el televisor se apaga por completo, la opción **Key Server** se pone en OFF por seguridad. Solo debes abrir la app Developer Mode y volver a poner **Key Server en ON**.

---

## 📄 Licencia

Este proyecto se distribuye bajo la licencia **MIT** de código abierto con propósitos educativos, comunitarios y de accesibilidad para adultos mayores. Todos los derechos sobre marcas y señales pertenecen a sus respectivos concesionarios conforme a las leyes chilenas N° 17.336, 18.838 y 18.168.
