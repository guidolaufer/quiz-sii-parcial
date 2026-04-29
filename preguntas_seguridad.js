const CAT_LABELS = {
  "cia":         "CIA Triad",
  "riesgo":      "Gestión de Riesgo",
  "cripto-sim":  "Cripto Simétrica",
  "cripto-asi":  "Cripto Asimétrica",
  "auth":        "Autenticación",
  "auditoria":   "Auditoría",
  "acceso":      "Control de Acceso",
  "fundamentos": "Fundamentos",
};

const questions = [

  // ══════════════════════════════════════════════════════════
  // CIA TRIAD
  // ══════════════════════════════════════════════════════════
  {
    cat: "cia",
    q: "¿Cuál de los pilares de la Triada CIA garantiza que solo las personas autorizadas pueden acceder a la información?",
    options: [
      { text: "Disponibilidad" },
      { text: "Integridad" },
      { text: "Confidencialidad" },
      { text: "Autenticidad" },
    ],
    correct: 2,
    explanation: "<strong>c) Confidencialidad.</strong> Garantiza que solo quienes están autorizados pueden acceder a la información. Se viola con filtraciones de datos o accesos no autorizados. Se protege con cifrado AES-256, MFA y control de acceso."
  },
  {
    cat: "cia",
    q: "Un atacante modifica silenciosamente registros en una base de datos. ¿Cuál pilar de la Triada CIA fue violado?",
    options: [
      { text: "Confidencialidad — los datos fueron expuestos" },
      { text: "Integridad — los datos fueron alterados sin autorización" },
      { text: "Disponibilidad — el sistema quedó fuera de servicio" },
      { text: "No viola ningún pilar — fue una modificación interna" },
    ],
    correct: 1,
    explanation: "<strong>b) Integridad.</strong> La integridad garantiza que la información no pueda ser modificada sin autorización. Un atacante que altera registros viola este pilar. Se protege con hashes SHA-256, firmas digitales y logs de auditoría."
  },
  {
    cat: "cia",
    q: "Un ataque de ransomware cifra todos los servidores de una empresa y los deja inaccesibles. ¿Qué pilar de la Triada CIA es el más afectado?",
    options: [
      { text: "Confidencialidad — los datos podrían ser expuestos" },
      { text: "Integridad — los datos fueron modificados" },
      { text: "Disponibilidad — los sistemas no están operativos cuando se necesitan" },
      { text: "Los tres pilares por igual" },
    ],
    correct: 2,
    explanation: "<strong>c) Disponibilidad.</strong> La disponibilidad garantiza que los sistemas estén operativos cuando se necesiten. Un ransomware que los deja inaccesibles la viola directamente. Se mitiga con backups, redundancia y planes de recuperación (DRP)."
  },
  {
    cat: "cia",
    q: "En entornos OT (tecnologías operativas como SCADA o PLCs), ¿cuál pilar de la CIA tiene mayor prioridad respecto a IT?",
    options: [
      { text: "Confidencialidad, porque los datos industriales son secretos comerciales" },
      { text: "Integridad, porque los procesos físicos requieren datos precisos" },
      { text: "Disponibilidad, porque una interrupción puede causar daños físicos o pérdida de vidas" },
      { text: "La priorización es idéntica a IT" },
    ],
    correct: 2,
    explanation: "<strong>c) Disponibilidad.</strong> En OT (PLCs, SCADA, sensores industriales), una interrupción no implica solo pérdida económica sino riesgos físicos reales: accidentes en plantas, cortes de energía en hospitales. Cero tolerancia a downtime. En IT la prioridad es Confidencialidad."
  },
  {
    cat: "cia",
    q: "¿Cuál de las siguientes medidas protege principalmente la <strong>Integridad</strong> de la información?",
    options: [
      { text: "Cifrado AES-256 de los archivos almacenados" },
      { text: "Sistemas de backups automáticos diarios" },
      { text: "Hash SHA-256 para verificar que un archivo no fue modificado" },
      { text: "MFA para el acceso al sistema" },
    ],
    correct: 2,
    explanation: "<strong>c) Hash SHA-256.</strong> El hash permite verificar que un archivo no fue alterado: si el hash calculado coincide con el hash original, la integridad está intacta. AES-256 protege confidencialidad. Los backups protegen disponibilidad. MFA protege autenticación."
  },

  // ══════════════════════════════════════════════════════════
  // GESTIÓN DE RIESGO
  // ══════════════════════════════════════════════════════════
  {
    cat: "riesgo",
    q: "¿Cuál de los siguientes componentes representa una debilidad interna que puede ser explotada por una amenaza?",
    options: [
      { text: "Activo" },
      { text: "Amenaza" },
      { text: "Vulnerabilidad" },
      { text: "Impacto" },
    ],
    correct: 2,
    explanation: "<strong>c) Vulnerabilidad.</strong> La vulnerabilidad es la debilidad explotable (ej: software sin parchear, contraseñas débiles, falta de MFA). La amenaza es quien o qué puede causar daño. Sin vulnerabilidad, la amenaza no puede materializarse."
  },
  {
    cat: "riesgo",
    q: "Una empresa decide no almacenar números de tarjetas de crédito de sus clientes para evitar que sean robados. ¿Qué estrategia de tratamiento del riesgo está aplicando?",
    options: [
      { text: "Mitigar — redujo el impacto potencial con un control técnico" },
      { text: "Transferir — delegó la responsabilidad a un tercero" },
      { text: "Evitar — eliminó la actividad que genera el riesgo" },
      { text: "Aceptar — decidió convivir con el riesgo" },
    ],
    correct: 2,
    explanation: "<strong>c) Evitar.</strong> Al no almacenar los datos, elimina directamente la actividad que crea el riesgo. Si los datos no existen, no pueden ser robados. Esta estrategia se usa cuando el riesgo es inaceptable y no hay forma viable de mitigarlo suficientemente."
  },
  {
    cat: "riesgo",
    q: "Una universidad contrata un ciberseguro para cubrirse ante posibles ataques. ¿Qué estrategia de riesgo aplica?",
    options: [
      { text: "Evitar" },
      { text: "Transferir" },
      { text: "Mitigar" },
      { text: "Aceptar" },
    ],
    correct: 1,
    explanation: "<strong>b) Transferir.</strong> El ciberseguro delega la consecuencia económica a un tercero (la aseguradora). El riesgo no desaparece — si ocurre el incidente, la aseguradora absorbe el costo. También aplica cuando se usa un proveedor cloud certificado."
  },
  {
    cat: "riesgo",
    q: "Dado un activo crítico con probabilidad ALTA de ser atacado e impacto ALTO en caso de concretarse, ¿cómo clasifica la Matriz de Riesgo 3×3 a este riesgo?",
    options: [
      { text: "Bajo — se acepta y se monitorea rutinariamente" },
      { text: "Medio — se prepara un plan de contingencia" },
      { text: "Alto — requiere atención prioritaria" },
      { text: "Crítico — requiere atención inmediata e inaplazable" },
    ],
    correct: 3,
    explanation: "<strong>d) Crítico.</strong> En la Matriz 3×3, Alta Probabilidad × Alto Impacto = celda Crítica (🔴). Requiere atención inmediata. Alta Probabilidad × Medio Impacto = Alto. Media Probabilidad × Alto Impacto = Alto. Solo Baja Probabilidad + Bajo Impacto = Verde."
  },
  {
    cat: "riesgo",
    q: "¿Cuál es la norma ISO de la familia 27000 que define los requisitos del SGSI y es <strong>certificable</strong>?",
    options: [
      { text: "ISO 27002 — Código de buenas prácticas de controles" },
      { text: "ISO 27005 — Gestión de riesgos de seguridad" },
      { text: "ISO 27001 — Requisitos del SGSI" },
      { text: "ISO 27000 — Vocabulario y definiciones generales" },
    ],
    correct: 2,
    explanation: "<strong>c) ISO 27001.</strong> Es la única certificable de la familia. Define los requisitos del SGSI con el ciclo PHVA. ISO 27002 provee controles (complementaria, no certificable). ISO 27005 es para gestión de riesgos. Las organizaciones se certifican en ISO 27001."
  },
  {
    cat: "riesgo",
    q: "En el ciclo PHVA del SGSI, ¿qué sucede en la fase <strong>Verificar</strong>?",
    options: [
      { text: "Se identifican activos y se define el alcance del SGSI" },
      { text: "Se implementan los controles técnicos y se capacita al personal" },
      { text: "Se mide el desempeño, se realizan auditorías internas y se monitorean incidentes" },
      { text: "Se toman medidas correctivas para mejorar continuamente" },
    ],
    correct: 2,
    explanation: "<strong>c) Verificar.</strong> Planificar (identificar, analizar riesgos) → Hacer (implementar controles) → <em>Verificar</em> (medir, auditar, monitorear) → Actuar (corregir y mejorar). El ciclo se repite continuamente."
  },
  {
    cat: "riesgo",
    q: "La fórmula del riesgo es: Riesgo = Probabilidad × Impacto. ¿De qué depende la Probabilidad?",
    options: [
      { text: "Solo de la fortaleza del atacante" },
      { text: "De la Amenaza y la Vulnerabilidad" },
      { text: "Del valor del activo" },
      { text: "Del costo del control de seguridad aplicado" },
    ],
    correct: 1,
    explanation: "<strong>b) Amenaza × Vulnerabilidad.</strong> Probabilidad = Amenaza × Vulnerabilidad. Sin vulnerabilidad (debilidad explotable), la amenaza no puede materializarse → probabilidad cae a cero. Mitigar vulnerabilidades reduce la probabilidad de ocurrencia."
  },

  // ══════════════════════════════════════════════════════════
  // CRIPTOGRAFÍA SIMÉTRICA
  // ══════════════════════════════════════════════════════════
  {
    cat: "cripto-sim",
    q: "¿Cuál es la característica fundamental que define a la criptografía <strong>simétrica</strong>?",
    options: [
      { text: "Usa una clave pública para cifrar y una privada para descifrar" },
      { text: "Usa la misma clave para cifrar y descifrar" },
      { text: "No usa claves — la seguridad está en el algoritmo" },
      { text: "Genera una clave nueva para cada mensaje" },
    ],
    correct: 1,
    explanation: "<strong>b) Misma clave.</strong> La criptografía simétrica usa una única clave compartida entre emisor y receptor. Es muy rápida para grandes volúmenes de datos, pero tiene el problema de distribución segura de claves: ¿cómo compartir la clave sin que un atacante la intercepte?"
  },
  {
    cat: "cripto-sim",
    q: "¿Cuál algoritmo simétrico es el estándar actual para cifrado de datos?",
    options: [
      { text: "DES — Data Encryption Standard" },
      { text: "3DES — Triple DES" },
      { text: "AES — Advanced Encryption Standard" },
      { text: "MD5 — Message Digest 5" },
    ],
    correct: 2,
    explanation: "<strong>c) AES.</strong> AES (especialmente AES-256) es el estándar actual. DES fue declarado obsoleto en 2005 (clave 56 bits, roto en 56 horas en 1998). 3DES es legado (lento, retirado en 2023). MD5 es una función hash, no un algoritmo de cifrado."
  },
  {
    cat: "cripto-sim",
    q: "¿Cuál es la diferencia fundamental entre una función <strong>hash</strong> y el <strong>cifrado</strong>?",
    options: [
      { text: "El hash es más lento que el cifrado" },
      { text: "El hash es unidireccional (no se puede revertir, no hay clave). El cifrado es bidireccional (se descifra con la clave)" },
      { text: "El hash usa clave pública; el cifrado usa clave privada" },
      { text: "No hay diferencia — son términos intercambiables" },
    ],
    correct: 1,
    explanation: "<strong>b) Unidireccional vs bidireccional.</strong> Un hash es una 'huella digital' del dato: no hay clave, no se puede revertir. Si alguien te da un hash, no podés obtener el dato original. El cifrado sí se puede revertir si tenés la clave. Esta distinción es crítica en el examen."
  },
  {
    cat: "cripto-sim",
    q: "¿Qué es el <strong>efecto avalancha</strong> en las funciones hash?",
    options: [
      { text: "Que el hash crece en tamaño a medida que el input es más largo" },
      { text: "Que un mínimo cambio en el input (una letra, un bit) produce un hash completamente diferente" },
      { text: "Que el hash puede producir el mismo resultado para dos inputs diferentes" },
      { text: "Que calcular el hash requiere mucho poder de cómputo" },
    ],
    correct: 1,
    explanation: "<strong>b) Cambio mínimo → hash totalmente distinto.</strong> Si cambio 'hola' por 'Hola', el SHA-256 resultante es completamente diferente. Esto garantiza que cualquier modificación, por pequeña que sea, es detectable comparando los hashes."
  },
  {
    cat: "cripto-sim",
    q: "¿Para qué sirve el <strong>salt</strong> en el contexto del hash de contraseñas?",
    options: [
      { text: "Para acelerar el cálculo del hash" },
      { text: "Para que el hash sea reversible en caso de recuperación de cuenta" },
      { text: "Para evitar ataques de Rainbow Table añadiendo un valor aleatorio único a cada contraseña antes de hashear" },
      { text: "Para cifrar el hash con una clave adicional" },
    ],
    correct: 2,
    explanation: "<strong>c) Evitar Rainbow Tables.</strong> Una Rainbow Table es una tabla precalculada de hashes de contraseñas comunes. El salt añade un valor aleatorio único por usuario antes de hashear, así dos usuarios con la misma contraseña tienen hashes distintos y las tablas precalculadas no sirven."
  },
  {
    cat: "cripto-sim",
    q: "¿Por qué <strong>MD5</strong> ya no debe usarse para almacenar contraseñas?",
    options: [
      { text: "Porque es demasiado lento para sistemas modernos" },
      { text: "Porque produce hashes demasiado cortos (solo 64 bits)" },
      { text: "Porque se demostró que es posible crear colisiones (dos entradas distintas con el mismo hash)" },
      { text: "Porque fue prohibido por la ISO en 2020" },
    ],
    correct: 2,
    explanation: "<strong>c) Colisiones.</strong> Desde 2004 se demostró que es posible generar dos archivos distintos con el mismo hash MD5 (colisión). Esto rompe la propiedad de unicidad del hash. MD5 solo es aceptable para checksums no criptográficos. Para contraseñas usar bcrypt, scrypt o Argon2."
  },
  {
    cat: "cripto-sim",
    q: "Se necesita descifrar el mensaje cifrado con César con desplazamiento +3: la letra <strong>F</strong>. ¿Cuál es la letra original?",
    options: [
      { text: "H" },
      { text: "I" },
      { text: "C" },
      { text: "D" },
    ],
    correct: 2,
    explanation: "<strong>c) C.</strong> Para descifrar César con desplazamiento +3 se resta 3 a cada letra. F (posición 6) − 3 = C (posición 3). El alfabeto: A=1, B=2, C=3, D=4, E=5, F=6... Si el desplazamiento fue +3 para cifrar, se aplica −3 para descifrar."
  },

  // ══════════════════════════════════════════════════════════
  // CRIPTOGRAFÍA ASIMÉTRICA
  // ══════════════════════════════════════════════════════════
  {
    cat: "cripto-asi",
    q: "Para enviarle un mensaje <strong>confidencial</strong> a Ana, ¿con qué clave lo cifrás?",
    options: [
      { text: "Con tu propia clave privada" },
      { text: "Con tu propia clave pública" },
      { text: "Con la clave pública de Ana" },
      { text: "Con la clave privada de Ana" },
    ],
    correct: 2,
    explanation: "<strong>c) Clave pública de Ana.</strong> Solo Ana puede descifrarlo con su clave privada (que solo ella tiene). La clave pública de Ana es de libre distribución — cualquiera puede usarla para cifrar mensajes que solo Ana puede leer."
  },
  {
    cat: "cripto-asi",
    q: "Para <strong>firmar digitalmente</strong> un documento, ¿qué clave usás?",
    options: [
      { text: "La clave pública del destinatario" },
      { text: "Tu propia clave pública" },
      { text: "Tu propia clave privada" },
      { text: "La clave privada del destinatario" },
    ],
    correct: 2,
    explanation: "<strong>c) Tu clave privada.</strong> Solo vos tenés tu clave privada → la firma prueba que vino de vos (autenticidad). Cualquiera puede verificar la firma con tu clave pública. Este esquema garantiza integridad + autenticidad + no repudio."
  },
  {
    cat: "cripto-asi",
    q: "¿Qué garantías ofrece una <strong>firma digital</strong>? (seleccioná la más completa)",
    options: [
      { text: "Solo confidencialidad — nadie más puede leer el mensaje" },
      { text: "Solo autenticidad — sabemos quién lo envió" },
      { text: "Integridad, Autenticidad y No Repudio — el mensaje no fue alterado, proviene del firmante y este no puede negarlo" },
      { text: "Disponibilidad — el mensaje siempre llega al destinatario" },
    ],
    correct: 2,
    explanation: "<strong>c) Integridad + Autenticidad + No Repudio.</strong> La firma digital NO cifra el contenido (no garantiza confidencialidad). Garantiza que el mensaje no fue alterado (integridad), que viene del firmante (autenticidad) y que el firmante no puede negar haberlo firmado (no repudio)."
  },
  {
    cat: "cripto-asi",
    q: "En el proceso de verificación de una firma digital, el receptor descifra la firma con la clave pública del emisor y obtiene un hash. ¿Qué hace luego para verificar la integridad?",
    options: [
      { text: "Compara la firma con una lista de firmas válidas en el servidor" },
      { text: "Calcula el hash del mensaje recibido y lo compara con el hash obtenido de la firma" },
      { text: "Cifra el mensaje con la clave privada del receptor para comprobar el par" },
      { text: "Consulta a la CA si la firma es válida" },
    ],
    correct: 1,
    explanation: "<strong>b) Comparar hashes.</strong> Receptor descifra firma (con clave pública emisor) → obtiene hash_original. Luego calcula SHA-256 del mensaje recibido → hash_recibido. Si hash_original == hash_recibido: integridad OK y autenticidad OK. Si difieren: el mensaje fue alterado o la firma es falsa."
  },
  {
    cat: "cripto-asi",
    q: "¿Cuál es la base matemática del algoritmo <strong>RSA</strong>?",
    options: [
      { text: "Logaritmo discreto sobre cuerpos finitos" },
      { text: "Ecuaciones sobre curvas elípticas" },
      { text: "La dificultad de factorizar el producto de dos números primos grandes" },
      { text: "Permutaciones y sustituciones de bloques de bits" },
    ],
    correct: 2,
    explanation: "<strong>c) Factorización de primos.</strong> RSA se basa en que multiplicar dos números primos grandes es computacionalmente fácil, pero factorizar el producto (encontrar los factores primos) es extremadamente difícil con la tecnología actual. ECC usa curvas elípticas; Diffie-Hellman usa logaritmo discreto."
  },
  {
    cat: "cripto-asi",
    q: "¿Qué es la <strong>criptografía híbrida</strong> y dónde se usa?",
    options: [
      { text: "Combina hash y cifrado para garantizar confidencialidad e integridad al mismo tiempo" },
      { text: "Usa criptografía asimétrica para intercambiar la clave y simétrica para cifrar los datos — más rápida que asimétrica pura. Usada en HTTPS/TLS" },
      { text: "Cifra dos veces: primero con clave pública y luego con clave privada" },
      { text: "Combina dos algoritmos simétricos distintos para mayor seguridad" },
    ],
    correct: 1,
    explanation: "<strong>b) Asimétrica para clave + simétrica para datos.</strong> La asimétrica es hasta 1000× más lenta que la simétrica. HTTPS/TLS usa híbrida: Diffie-Hellman/RSA para acordar la clave de sesión (asimétrico) → AES para cifrar todos los datos (simétrico). Lo mejor de ambos mundos."
  },

  // ══════════════════════════════════════════════════════════
  // AUTENTICACIÓN
  // ══════════════════════════════════════════════════════════
  {
    cat: "auth",
    q: "Un banco pide tu contraseña (factor 1) y luego envía un código por SMS a tu celular (factor 2). ¿A qué factor pertenece el SMS?",
    options: [
      { text: "Algo que SABES — porque es información que recibís" },
      { text: "Algo que TIENES — el celular es un objeto físico en tu posesión" },
      { text: "Algo que ERES — el número de celular es tuyo" },
      { text: "No es un factor de autenticación válido" },
    ],
    correct: 1,
    explanation: "<strong>b) Algo que TENÉS.</strong> El celular es un objeto físico. El SMS llega a ese dispositivo — un atacante necesitaría tener físicamente tu teléfono para interceptarlo. Los 3 factores: SABES (contraseña/PIN), TENÉS (teléfono/token/tarjeta), ERES (huella/iris/rostro)."
  },
  {
    cat: "auth",
    q: "¿Cuál es la <strong>diferencia</strong> entre autenticación y autorización?",
    options: [
      { text: "Son sinónimos — ambos verifican si tenés permiso de acceso" },
      { text: "Autenticación verifica QUIÉN sos. Autorización define QUÉ podés hacer una vez autenticado" },
      { text: "Autenticación es para usuarios; autorización es para sistemas" },
      { text: "La autenticación ocurre después de la autorización" },
    ],
    correct: 1,
    explanation: "<strong>b) QUIÉN sos vs QUÉ podés hacer.</strong> Autenticación: '¿Eres realmente el usuario 'guido'?' (verificar identidad). Autorización: '¿Puede 'guido' leer la carpeta /admin?' (permisos). Primero autenticás, luego el sistema verifica qué tenés autorizado."
  },
  {
    cat: "auth",
    q: "La biometría (huella dactilar, reconocimiento facial) es el factor de autenticación más fuerte. ¿Cuál es su principal desventaja?",
    options: [
      { text: "Es el más lento de los tres factores" },
      { text: "Si se compromete, no se puede resetear — no podés cambiar tu huella como cambiarías una contraseña" },
      { text: "Solo funciona en dispositivos de gama alta" },
      { text: "Requiere conexión a internet para verificar la identidad" },
    ],
    correct: 1,
    explanation: "<strong>b) No se puede resetear.</strong> Si roban tu contraseña, la cambiás. Si pierden tu token, pedís uno nuevo. Si comprometen tu huella dactilar o iris, no podés 'cambiarlos'. Por eso la biometría NUNCA debe usarse como factor único — siempre combinada con otro factor."
  },
  {
    cat: "auth",
    q: "¿Por qué el protocolo <strong>Kerberos</strong> nunca envía contraseñas por la red?",
    options: [
      { text: "Porque cifra las contraseñas con AES antes de enviarlas" },
      { text: "Porque usa tickets de tiempo limitado: el KDC verifica la contraseña localmente y emite un TGT. Las comunicaciones posteriores usan ese ticket, nunca la contraseña" },
      { text: "Porque almacena las contraseñas en el cliente y nunca las transfiere" },
      { text: "Porque usa hashing unidireccional en tránsito" },
    ],
    correct: 1,
    explanation: "<strong>b) Tickets de tiempo limitado.</strong> El cliente prueba su identidad al KDC localmente. El KDC emite un TGT (Ticket Granting Ticket). El cliente usa ese TGT para pedir acceso a servicios — la contraseña nunca viaja por la red. Los tickets tienen TTL para prevenir ataques de replay."
  },
  {
    cat: "auth",
    q: "¿Qué es la <strong>autenticación adaptativa</strong>?",
    options: [
      { text: "Autenticación que se adapta al dispositivo (móvil, PC, tablet)" },
      { text: "Sistema que evalúa el riesgo en tiempo real (ubicación, dispositivo, comportamiento) y ajusta el nivel de autenticación requerido" },
      { text: "MFA que permite elegir qué factor usar según la preferencia del usuario" },
      { text: "Autenticación sin contraseña basada solo en biometría" },
    ],
    correct: 1,
    explanation: "<strong>b) Evaluación de riesgo en tiempo real.</strong> Si iniciás sesión desde tu ciudad habitual con tu dispositivo de siempre → solo pide contraseña. Si iniciás desde otro país a las 3am con dispositivo desconocido → exige factor adicional. El sistema evalúa el contexto y aumenta los requisitos cuando detecta anomalías."
  },
  {
    cat: "auth",
    q: "¿Qué es el <strong>SSO (Single Sign-On)</strong>?",
    options: [
      { text: "Un sistema donde cada servicio requiere su propio usuario y contraseña para mayor seguridad" },
      { text: "Autenticación única que otorga acceso a múltiples sistemas sin reautenticarse en cada uno" },
      { text: "Un método de autenticación sin contraseña basado únicamente en biometría" },
      { text: "Un protocolo para sincronizar contraseñas entre múltiples sistemas" },
    ],
    correct: 1,
    explanation: "<strong>b) Autenticación única, acceso múltiple.</strong> Con SSO iniciás sesión una vez y accedés a múltiples servicios (correo, ERP, CRM) sin volver a autenticarte. Kerberos implementa SSO en redes corporativas. OAuth/SAML para servicios web ('Iniciar sesión con Google')."
  },

  // ══════════════════════════════════════════════════════════
  // AUDITORÍA
  // ══════════════════════════════════════════════════════════
  {
    cat: "auditoria",
    q: "¿Cuál es la diferencia principal entre <strong>monitoreo</strong> y <strong>auditoría</strong> de seguridad?",
    options: [
      { text: "El monitoreo es más caro pero más preciso que la auditoría" },
      { text: "El monitoreo es en tiempo real (detectar y reaccionar ahora). La auditoría es histórica (verificar cumplimiento de un período pasado)" },
      { text: "La auditoría ocurre durante el incidente; el monitoreo ocurre después" },
      { text: "Son sinónimos — ambos revisan logs del sistema" },
    ],
    correct: 1,
    explanation: "<strong>b) Tiempo real vs histórico.</strong> Monitoreo: tablero del auto (velocidad actual, alertas en vivo). Auditoría: revisión técnica anual (¿se cumplieron las políticas en los últimos 12 meses?). Un SIEM es herramienta de monitoreo; una auditoría ISO 27001 es histórica y sistemática."
  },
  {
    cat: "auditoria",
    q: "Un firewall bloquea tráfico malicioso. ¿Qué tipo de control de seguridad es?",
    options: [
      { text: "Solo correctivo — recupera el sistema después del ataque" },
      { text: "Solo detectivo — identifica y alerta sobre intentos maliciosos" },
      { text: "Principalmente preventivo (bloquea el tráfico antes de que entre), pero también detectivo (registra intentos en logs)" },
      { text: "Solo preventivo — no genera ningún tipo de registro" },
    ],
    correct: 2,
    explanation: "<strong>c) Preventivo Y detectivo.</strong> Un mismo control puede tener múltiples funciones. El firewall es preventivo (bloquea tráfico antes de que entre) y detectivo (registra cada intento de acceso no autorizado en logs). Los IDS/IPS son principalmente detectivos pero pueden bloquear (correctivo)."
  },
  {
    cat: "auditoria",
    q: "¿Qué son los backups y a qué tipo de control de seguridad corresponden?",
    options: [
      { text: "Preventivos — evitan que los datos sean robados" },
      { text: "Detectivos — alertan cuando los datos son modificados" },
      { text: "Correctivos — permiten restaurar el sistema después de un incidente" },
      { text: "Los backups no son un control de seguridad formal" },
    ],
    correct: 2,
    explanation: "<strong>c) Correctivo.</strong> Los backups no previenen el incidente ni lo detectan — actúan después para reducir el impacto y recuperar el sistema. Son parte del DRP (Disaster Recovery Plan). Preventivo = MFA, cifrado. Detectivo = IDS, logs, SIEM."
  },
  {
    cat: "auditoria",
    q: "¿Cuáles son las 5 funciones del <strong>NIST Cybersecurity Framework</strong>?",
    options: [
      { text: "Planificar → Hacer → Verificar → Actuar → Mejorar" },
      { text: "Identificar → Proteger → Detectar → Responder → Recuperar" },
      { text: "Prevenir → Detectar → Contener → Erradicar → Recuperar" },
      { text: "Analizar → Diseñar → Implementar → Operar → Mejorar" },
    ],
    correct: 1,
    explanation: "<strong>b) Identificar → Proteger → Detectar → Responder → Recuperar.</strong> El NIST CSF es un marco voluntario muy adoptado. Planificar-Hacer-Verificar-Actuar (PHVA) es el ciclo de ISO 27001. Prevenir-Detectar-Contener-Erradicar-Recuperar es el proceso de respuesta a incidentes (PICERL)."
  },
  {
    cat: "auditoria",
    q: "¿Cuál es el <strong>principio de independencia</strong> en auditoría de seguridad?",
    options: [
      { text: "La auditoría solo puede ser realizada por consultores externos — nunca internos" },
      { text: "El auditor debe ser imparcial y libre de conflictos de interés. Quien audita no puede ser quien diseñó o implementó los controles auditados" },
      { text: "Cada área de la organización debe auditarse a sí misma sin interferencia externa" },
      { text: "La auditoría debe ser independiente del ciclo PHVA del SGSI" },
    ],
    correct: 1,
    explanation: "<strong>b) Imparcialidad y sin conflicto de interés.</strong> Si el mismo equipo que diseñó los controles los audita, podría pasar por alto sus propios errores. La independencia garantiza objetividad. Las auditorías externas (requeridas para certificación ISO 27001) maximizan este principio."
  },
  {
    cat: "auditoria",
    q: "La <strong>Ley 25.326</strong> en Argentina regula:",
    options: [
      { text: "El uso de criptografía en sistemas gubernamentales" },
      { text: "Los requisitos de auditoría para empresas del sector financiero" },
      { text: "La protección de datos personales — consentimiento, finalidad, calidad y seguridad. Autoridad de aplicación: AAIP" },
      { text: "El estándar nacional de gestión de seguridad informática equivalente a ISO 27001" },
    ],
    correct: 2,
    explanation: "<strong>c) Protección de datos personales.</strong> La Ley 25.326 define principios de Consentimiento (el titular debe autorizar el uso), Finalidad (solo para el propósito declarado), Calidad (datos exactos y actualizados) y Seguridad (medidas técnicas para protegerlos). La AAIP es la Agencia de Acceso a la Información Pública."
  },
  {
    cat: "auditoria",
    q: "¿Cuál es la diferencia entre <strong>privacidad de datos</strong> y <strong>seguridad de la información</strong>?",
    options: [
      { text: "Son exactamente lo mismo — se usan indistintamente" },
      { text: "Seguridad aplica medidas técnicas (CIA). Privacidad es el derecho de las personas a controlar cómo se usan sus datos. Se puede tener una sin la otra" },
      { text: "La privacidad es un subconjunto de la seguridad — no existen sin seguridad" },
      { text: "La seguridad es un concepto legal; la privacidad es técnico" },
    ],
    correct: 1,
    explanation: "<strong>b) Técnica vs derecho fundamental.</strong> Ejemplo: una empresa cifra perfectamente su base de datos (seguridad OK) pero vende los datos a terceros sin consentimiento (privacidad violada). O al revés: una empresa tiene política de privacidad clara pero sin controles técnicos (seguridad violada). Son complementarias pero distintas."
  },

  // ══════════════════════════════════════════════════════════
  // FUNDAMENTOS — CLASIFICACIÓN, HUELLA DIGITAL, SEG. FÍSICA
  // ══════════════════════════════════════════════════════════
  {
    cat: "fundamentos",
    q: "¿Cuál es la diferencia entre <strong>seguridad informática</strong> y <strong>seguridad de la información</strong>?",
    options: [
      { text: "Son sinónimos — ambas protegen los mismos activos de la misma forma" },
      { text: "Seguridad informática protege sistemas, redes y dispositivos tecnológicos. Seguridad de la información protege la información independientemente del formato o medio (papel, digital, verbal)" },
      { text: "Seguridad informática es más amplia — incluye todo lo que abarca la seguridad de la información" },
      { text: "La seguridad de la información es un subconjunto exclusivo de la ciberseguridad" },
    ],
    correct: 1,
    explanation: "<strong>b) Alcance distinto.</strong> Seguridad informática: foco en activos tecnológicos (servidores, redes, dispositivos). Seguridad de la información: protege la información sin importar su formato — un documento impreso con datos confidenciales también debe protegerse aunque no sea digital."
  },
  {
    cat: "fundamentos",
    q: "Según la clasificación basada en sensibilidad, ¿cuál nivel corresponde a información que puede causar daño significativo si es divulgada?",
    options: [
      { text: "Pública — sin restricciones de acceso" },
      { text: "Interna — de uso interno pero no divulgada al público" },
      { text: "Restringida — solo personal clave tiene acceso" },
      { text: "Confidencial — puede causar daño significativo si se expone" },
    ],
    correct: 3,
    explanation: "<strong>d) Confidencial.</strong> La jerarquía de clasificación por sensibilidad es: Pública → Interna → Restringida → Confidencial. La información Confidencial es la de mayor criticidad — su divulgación puede causar daño significativo a la organización o sus partes involucradas."
  },
  {
    cat: "fundamentos",
    q: "¿Cuál es la diferencia entre <strong>seguridad física</strong> y <strong>seguridad lógica</strong>?",
    options: [
      { text: "La seguridad física protege servidores y la lógica protege datos" },
      { text: "Seguridad física: protección de activos tangibles (hardware, instalaciones). Seguridad lógica: protección mediante controles de software, políticas digitales y permisos" },
      { text: "La seguridad lógica es más importante que la física en todos los contextos" },
      { text: "Son lo mismo aplicado a distintas capas del modelo OSI" },
    ],
    correct: 1,
    explanation: "<strong>b) Tangible vs digital.</strong> Física: candados, cámaras, control de acceso a sala de servidores, guardias. Lógica: firewall, cifrado, control de acceso con roles, políticas de contraseñas. Ambas son necesarias — un servidor perfectamente cifrado pero en una sala sin llave es vulnerable físicamente."
  },
  {
    cat: "fundamentos",
    q: "¿Qué es la <strong>huella digital activa</strong>?",
    options: [
      { text: "Los datos recolectados sin acción directa del usuario, como cookies o geolocalización" },
      { text: "La información compartida conscientemente por el usuario, como posts en redes sociales o formularios completados" },
      { text: "Los datos archivados permanentemente en bases de datos de terceros" },
      { text: "El conjunto de contraseñas e identidades digitales de una persona" },
    ],
    correct: 1,
    explanation: "<strong>b) Información compartida conscientemente.</strong> Huella activa: posts, likes, formularios — el usuario decide publicarlos. Huella pasiva: cookies, geolocalización, historial de navegación — se recolectan sin acción directa. Huella permanente: datos archivados en servidores de terceros que persisten incluso si el usuario los borra."
  },
  {
    cat: "fundamentos",
    q: "¿Cuál es la jerarquía documental correcta en políticas de seguridad, de mayor a menor nivel de abstracción?",
    options: [
      { text: "Procedimiento → Norma → Política" },
      { text: "Norma → Política → Procedimiento" },
      { text: "Política → Norma → Procedimiento" },
      { text: "Política → Procedimiento → Norma" },
    ],
    correct: 2,
    explanation: "<strong>c) Política → Norma → Procedimiento.</strong> Política: documento de alto nivel (dirección) que define QUÉ y POR QUÉ. Norma: especifica estándares técnicos, define CUÁNTO y CON QUÉ. Procedimiento: instrucciones paso a paso, define CÓMO hacerlo. La política es la más abstracta; el procedimiento, la más concreta y operacional."
  },

  // ══════════════════════════════════════════════════════════
  // CRIPTOGRAFÍA SIMÉTRICA — MAC, MODOS, ECB/CBC
  // ══════════════════════════════════════════════════════════
  {
    cat: "cripto-sim",
    q: "¿Qué es un <strong>MAC (Message Authentication Code)</strong> y en qué se diferencia de un hash simple?",
    options: [
      { text: "Es igual a un hash SHA-256 pero calculado más rápido" },
      { text: "Es como una función hash pero requiere una clave secreta compartida — garantiza integridad Y autenticidad del mensaje" },
      { text: "Es el nombre técnico del hash en protocolos de red" },
      { text: "Es un certificado digital simplificado sin CA" },
    ],
    correct: 1,
    explanation: "<strong>b) Hash + clave secreta.</strong> Un hash simple verifica integridad pero cualquiera puede calcularlo. El MAC requiere la clave secreta — si el MAC coincide, el mensaje no fue alterado (integridad) Y provino de alguien que tiene la clave (autenticidad). Sin la clave no se puede generar ni falsificar el MAC."
  },
  {
    cat: "cripto-sim",
    q: "En el modo de operación <strong>ECB (Electronic Codebook)</strong>, cada bloque se cifra independientemente. ¿Cuál es su principal debilidad?",
    options: [
      { text: "Es demasiado lento para datos en tiempo real" },
      { text: "Bloques de texto plano idénticos producen bloques cifrados idénticos, revelando patrones en los datos" },
      { text: "No es compatible con AES-256" },
      { text: "Requiere un IV (vector de inicialización) diferente para cada mensaje" },
    ],
    correct: 1,
    explanation: "<strong>b) Patrones visibles.</strong> ECB cifra cada bloque independientemente con la misma clave. Si dos bloques de texto plano son iguales, producen el mismo bloque cifrado → los patrones del original se filtran al cifrado. El modo CBC (Cipher Block Chaining) soluciona esto encadenando cada bloque con el resultado del anterior."
  },
  {
    cat: "cripto-sim",
    q: "El modo <strong>CBC (Cipher Block Chaining)</strong> encadena bloques usando el resultado cifrado del bloque anterior. ¿Qué necesita además la operación del primer bloque?",
    options: [
      { text: "Una clave adicional diferente a la clave principal" },
      { text: "Un IV (vector de inicialización) — valor aleatorio que inicia la cadena para garantizar que mensajes idénticos produzcan cifrados distintos" },
      { text: "El hash SHA-256 del mensaje completo" },
      { text: "Una firma digital del emisor" },
    ],
    correct: 1,
    explanation: "<strong>b) Vector de inicialización (IV).</strong> El primer bloque no tiene bloque anterior para encadenar, entonces se usa el IV. Debe ser aleatorio y único por mensaje — así dos mensajes idénticos cifrados con la misma clave producen cifrados completamente distintos, evitando los patrones de ECB."
  },

  // ══════════════════════════════════════════════════════════
  // CRIPTOGRAFÍA ASIMÉTRICA — PKI, Diffie-Hellman
  // ══════════════════════════════════════════════════════════
  {
    cat: "cripto-asi",
    q: "¿Para qué sirve el protocolo <strong>Diffie-Hellman</strong>?",
    options: [
      { text: "Para firmar digitalmente documentos de forma anónima" },
      { text: "Para acordar una clave secreta compartida a través de un canal público sin necesidad de intercambiar el secreto directamente" },
      { text: "Para cifrar grandes volúmenes de datos de forma asimétrica" },
      { text: "Para revocar certificados digitales comprometidos" },
    ],
    correct: 1,
    explanation: "<strong>b) Acuerdo de claves sin compartir el secreto.</strong> Diffie-Hellman usa aritmética modular (operaciones fáciles de calcular en una dirección, difíciles de revertir). Dos partes pueden derivar la misma clave secreta sin que un interceptador pueda deducirla aunque vea todo el intercambio. Es la base del establecimiento de claves en TLS."
  },
  {
    cat: "cripto-asi",
    q: "En la jerarquía de PKI, ¿cuál es el rol de la <strong>Root CA</strong>?",
    options: [
      { text: "Emitir certificados directamente a usuarios finales y servidores web" },
      { text: "Es la autoridad raíz de máxima confianza que firma certificados de CAs intermedias — su clave privada es el activo más crítico de toda la infraestructura" },
      { text: "Gestionar la base de datos de certificados revocados (CRL)" },
      { text: "Validar identidades de usuarios a través de documentos de identidad" },
    ],
    correct: 1,
    explanation: "<strong>b) Autoridad raíz de máxima confianza.</strong> Jerarquía: Root CA → Intermediate CA → End Entity (usuarios/servidores). La Root CA firma los certificados de las CAs intermedias, que a su vez emiten los certificados finales. La Root CA usualmente está offline para proteger su clave privada — si se compromete, toda la jerarquía cae."
  },
  {
    cat: "cripto-asi",
    q: "¿Qué problema resuelve la <strong>PKI (Infraestructura de Clave Pública)</strong>?",
    options: [
      { text: "Acelera el cifrado asimétrico para que sea tan rápido como el simétrico" },
      { text: "El problema de autenticidad de claves públicas: sin PKI, no podés saber si una clave pública realmente pertenece a quien dice ser" },
      { text: "Permite reutilizar la misma clave privada en múltiples certificados" },
      { text: "Elimina la necesidad de certificados digitales en comunicaciones HTTPS" },
    ],
    correct: 1,
    explanation: "<strong>b) Autenticidad de claves públicas.</strong> Sin PKI, un atacante podría interceptar tu comunicación y substituir la clave pública legítima por la suya (ataque man-in-the-middle). La CA firma el certificado que vincula la clave pública con la identidad verificada del propietario — el navegador confía en la CA y por eso confía en el certificado."
  },

  // ══════════════════════════════════════════════════════════
  // CONTROL DE ACCESO — BELL-LAPADULA, BIBA, MODELOS
  // ══════════════════════════════════════════════════════════
  {
    cat: "acceso",
    q: "El modelo <strong>Bell-LaPadula</strong> establece que un sujeto no puede leer datos de nivel superior a su clearance (<em>no read up</em>) ni escribir a niveles inferiores (<em>no write down</em>). ¿Qué propiedad de la CIA protege principalmente?",
    options: [
      { text: "Disponibilidad — garantiza que los datos siempre estén accesibles" },
      { text: "Integridad — evita que datos correctos sean contaminados" },
      { text: "Confidencialidad — evita que información clasificada se filtre a niveles inferiores" },
      { text: "Autenticidad — verifica la identidad de quien accede" },
    ],
    correct: 2,
    explanation: "<strong>c) Confidencialidad.</strong> Bell-LaPadula es el modelo clásico de confidencialidad militar. No read up: un agente de nivel Secreto no puede leer datos Top Secret. No write down: un agente de nivel Top Secret no puede escribir en un archivo de nivel Secreto (evitaría filtración hacia abajo). El objetivo es impedir que la información clasificada baje de nivel."
  },
  {
    cat: "acceso",
    q: "El modelo <strong>Biba</strong> prohíbe leer datos de nivel inferior (<em>no read down</em>) y escribir a niveles superiores (<em>no write up</em>). ¿Qué propiedad protege?",
    options: [
      { text: "Confidencialidad — igual que Bell-LaPadula pero en sentido inverso" },
      { text: "Integridad — evita que datos de alta integridad sean contaminados por datos de menor confianza" },
      { text: "Disponibilidad — garantiza que los datos de alta integridad siempre estén disponibles" },
      { text: "No repudio — garantiza que los cambios puedan atribuirse a su autor" },
    ],
    correct: 1,
    explanation: "<strong>b) Integridad.</strong> Biba es el dual de Bell-LaPadula pero para integridad. No read down: un proceso de alta integridad no lee datos de baja confianza (no se contamina). No write up: un proceso de baja integridad no puede escribir en datos de alta integridad (no los corrompe). Ejemplo: un proceso de usuario no puede modificar archivos del sistema operativo."
  },
  {
    cat: "acceso",
    q: "¿Cuál es la diferencia entre <strong>identificación</strong>, <strong>autenticación</strong> y <strong>autorización</strong> en el proceso de control de acceso?",
    options: [
      { text: "Son tres formas distintas de referirse al mismo proceso de login" },
      { text: "Identificación: declarar identidad. Autenticación: probar que esa identidad es legítima. Autorización: definir qué recursos puede acceder una vez autenticado" },
      { text: "Identificación y autenticación son lo mismo; la autorización es un proceso separado" },
      { text: "La autorización ocurre antes que la autenticación en sistemas modernos" },
    ],
    correct: 1,
    explanation: "<strong>b) Tres pasos secuenciales.</strong> Identificación: 'Soy el usuario guido' (declaro). Autenticación: 'Acá está mi contraseña/huella/token para probarlo' (verifico). Autorización: 'guido puede leer /docs pero no puede borrar /admin' (permisos). El orden es siempre: Identificación → Autenticación → Autorización."
  },
  {
    cat: "acceso",
    q: "¿Qué es el <strong>Monitor de Referencias</strong> en seguridad?",
    options: [
      { text: "Una herramienta de monitoreo de logs en tiempo real" },
      { text: "El núcleo de seguridad que media todos los accesos a recursos — debe ser imposible de eludir, siempre invocado, y lo suficientemente pequeño para ser verificable" },
      { text: "Un certificado digital que autentica al administrador del sistema" },
      { text: "Un firewall de capa de aplicación que filtra tráfico HTTP" },
    ],
    correct: 1,
    explanation: "<strong>b) Núcleo de seguridad mediador.</strong> El Monitor de Referencias es el concepto que garantiza que ningún acceso a un recurso pueda ocurrir sin pasar por el control de seguridad. Sus tres propiedades: siempre invocado (no se puede bypasear), a prueba de manipulación, y verificable (lo suficientemente pequeño para ser auditado formalmente)."
  },

  // ══════════════════════════════════════════════════════════
  // PREGUNTAS INTEGRADORAS
  // ══════════════════════════════════════════════════════════
  {
    cat: "fundamentos",
    q: "Un dato es 'la cantidad 37'. Al procesarlo en contexto se convierte en 'la temperatura corporal de un paciente es 37°C'. ¿Qué describe esta transformación?",
    options: [
      { text: "Dato → Cifrado → Información" },
      { text: "Dato (recurso en bruto sin significado) → Procesamiento (darle contexto) → Información (dato procesado con utilidad para decisiones)" },
      { text: "Información → Procesamiento → Dato" },
      { text: "Solo aplica en bases de datos relacionales, no en seguridad" },
    ],
    correct: 1,
    explanation: "<strong>b) Dato → Procesamiento → Información.</strong> Un dato aislado no significa nada. Al darle contexto (procesarlo) se convierte en información útil para tomar decisiones. En seguridad esto importa porque clasifica qué proteger: '37' almacenado en bruto es un dato; la historia clínica completa es información que requiere clasificación y protección."
  },
  {
    cat: "riesgo",
    q: "¿Por qué no existe el <strong>riesgo cero</strong> en seguridad de la información?",
    options: [
      { text: "Porque los controles de seguridad son muy costosos para implementarlos todos" },
      { text: "Porque el panorama de amenazas evoluciona constantemente, los sistemas son complejos y la intervención humana introduce vulnerabilidades inevitables" },
      { text: "Porque la normativa ISO no permite declarar riesgo cero" },
      { text: "Porque siempre existe al menos una amenaza activa en la red" },
    ],
    correct: 1,
    explanation: "<strong>b) Tres razones fundamentales.</strong> (1) Las amenazas evolucionan: lo que hoy es seguro mañana puede tener una vulnerabilidad descubierta. (2) Complejidad: los sistemas modernos son tan complejos que es imposible auditar todo. (3) Factor humano: el error humano, el phishing o el insider threat son imposibles de eliminar completamente. El objetivo es reducir el riesgo a un nivel aceptable."
  },
  {
    cat: "cripto-sim",
    q: "El <strong>principio de Kerckhoffs</strong> establece que la seguridad de un sistema criptográfico debe residir en la clave, no en el secreto del algoritmo. ¿Cuál es una consecuencia práctica de este principio?",
    options: [
      { text: "Los algoritmos de cifrado deben mantenerse secretos para mayor seguridad" },
      { text: "Algoritmos como AES y RSA son públicos y auditables — la seguridad depende de mantener la clave secreta, no de que el algoritmo sea desconocido" },
      { text: "La clave puede ser corta si el algoritmo es suficientemente complejo" },
      { text: "Solo los gobiernos pueden conocer los detalles de los algoritmos de cifrado" },
    ],
    correct: 1,
    explanation: "<strong>b) Algoritmos públicos, claves secretas.</strong> AES, RSA, SHA-256 son completamente públicos — su código fuente es auditable por cualquier investigador. Esto es una fortaleza: miles de criptógrafos han intentado romperlos sin éxito. La seguridad real está en la clave. Un algoritmo secreto ('security by obscurity') colapsa en cuanto alguien lo descubre."
  },
  {
    cat: "auditoria",
    q: "¿Cuál es el marco de <strong>gobernanza de TI</strong> que ayuda a las organizaciones a optimizar el valor de TI y gestionar riesgos, más allá de la seguridad específica?",
    options: [
      { text: "ISO 27001 — requisitos del SGSI" },
      { text: "NIST CSF — framework de ciberseguridad" },
      { text: "COBIT — marco integral para gobernanza y gestión de información y tecnología empresarial" },
      { text: "ISO 27005 — gestión de riesgos de seguridad" },
    ],
    correct: 2,
    explanation: "<strong>c) COBIT.</strong> COBIT (Control Objectives for Information and related Technology) es el marco más amplio: gobernanza integral de TI alineada con objetivos de negocio. ISO 27001: SGSI enfocado en seguridad. NIST CSF: gestión de riesgos de ciberseguridad. ISO 27005: específicamente gestión de riesgos de seguridad."
  },
  {
    cat: "acceso",
    q: "Un sistema de e-banking pide contraseña (factor 1), luego detecta que el login viene de un país distinto al habitual y exige además el token físico. ¿Qué concepto de autenticación describe esto?",
    options: [
      { text: "MFA estático — siempre pide los mismos dos factores" },
      { text: "SSO — autenticación única para múltiples servicios" },
      { text: "Autenticación adaptativa — ajusta los requisitos según el riesgo detectado en tiempo real" },
      { text: "Autenticación biométrica — usa características físicas del usuario" },
    ],
    correct: 2,
    explanation: "<strong>c) Autenticación adaptativa.</strong> El sistema evaluó el contexto (país inusual = riesgo elevado) y escaló dinámicamente los requisitos de autenticación. En condiciones normales (mismo país, mismo dispositivo) habría aceptado solo la contraseña. La adaptatividad permite mayor seguridad sin sacrificar usabilidad en el caso habitual."
  },
  {
    cat: "cripto-asi",
    q: "¿Qué ventaja tiene <strong>ECC (Elliptic Curve Cryptography)</strong> sobre RSA para dispositivos con recursos limitados como IoT o móviles?",
    options: [
      { text: "ECC es más fácil de implementar en software que RSA" },
      { text: "ECC ofrece seguridad equivalente con claves mucho más cortas — 256 bits ECC ≈ 3072 bits RSA — consumiendo menos CPU, memoria y batería" },
      { text: "ECC no requiere generación de números primos, por lo que es determinista" },
      { text: "ECC está basado en la misma matemática que RSA pero optimizado para hardware pequeño" },
    ],
    correct: 1,
    explanation: "<strong>b) Misma seguridad, claves más cortas.</strong> Las curvas elípticas permiten alcanzar el mismo nivel de seguridad que RSA con claves significativamente más cortas. Esto es crítico en IoT y móviles donde CPU, memoria y batería son limitados. Una operación con ECC-256 consume mucho menos recursos que RSA-3072 para el mismo nivel de seguridad."
  },
  {
    cat: "auditoria",
    q: "Una empresa sufre un incidente. El equipo de seguridad contiene el ataque, elimina el malware y restaura los sistemas desde backups. ¿En cuáles funciones del <strong>NIST CSF</strong> actuaron?",
    options: [
      { text: "Solo en Detectar — identificaron el incidente" },
      { text: "En Detectar, Responder y Recuperar — identificaron el incidente, lo contuvieron/eliminaron y restauraron los servicios" },
      { text: "Solo en Responder — tomaron medidas ante el incidente" },
      { text: "En las 5 funciones simultáneamente" },
    ],
    correct: 1,
    explanation: "<strong>b) Detectar + Responder + Recuperar.</strong> Detectar: identificaron que había un incidente. Responder: contuvieron el ataque y eliminaron el malware (mitigación activa). Recuperar: restauraron sistemas desde backups (vuelta a la normalidad). Identificar y Proteger son funciones proactivas previas al incidente."
  },
  {
    cat: "fundamentos",
    q: "¿Cuál es la diferencia entre <strong>ciberespacio</strong>, <strong>ciberamenaza</strong> y <strong>ciberhigiene</strong>?",
    options: [
      { text: "Son tres nombres distintos para el mismo concepto de seguridad digital" },
      { text: "Ciberespacio: el universo de interacción digital. Ciberamenaza: los riesgos y ataques en ese entorno. Ciberhigiene: las prácticas cotidianas fundamentales para protegerse" },
      { text: "Ciberhigiene es la versión avanzada de la ciberseguridad para expertos" },
      { text: "El ciberespacio solo incluye internet público, no redes corporativas privadas" },
    ],
    correct: 1,
    explanation: "<strong>b) Tres capas del ciclo evolutivo.</strong> Ciberespacio (dónde ocurre todo) → Ciberamenazas (qué riesgos existen) → Ciberseguridad (defensa activa) → Ciberhigiene (prácticas básicas diarias como actualizar software, usar contraseñas seguras, no abrir adjuntos sospechosos). La ciberhigiene es el nivel más básico y accesible para cualquier usuario."
  },
  {
    cat: "riesgo",
    q: "Una organización decide no corregir una vulnerabilidad de bajo impacto porque el costo del parche supera ampliamente el daño potencial. ¿Qué estrategia de riesgo aplica y qué debe hacer obligatoriamente?",
    options: [
      { text: "Transferir — debe contratar un seguro para ese riesgo específico" },
      { text: "Evitar — debe eliminar el sistema vulnerable" },
      { text: "Aceptar — asume conscientemente el riesgo y debe documentar formalmente esa decisión" },
      { text: "Mitigar — implementa controles alternativos de menor costo" },
    ],
    correct: 2,
    explanation: "<strong>c) Aceptar.</strong> Aceptar no significa ignorar — significa decidir conscientemente que el costo/esfuerzo de mitigar supera el impacto potencial y documentar esa decisión formalmente. Esta documentación es crítica: demuestra que la organización fue diligente y tomó una decisión informada, no que simplemente se olvidó del riesgo."
  },

  // ══════════════════════════════════════════════════════════
  // INGENIERÍA SOCIAL Y FACTOR HUMANO
  // ══════════════════════════════════════════════════════════
  {
    cat: "fundamentos",
    q: "Un empleado recibe un correo urgente: <em>\"Tu cuenta será bloqueada. Actualiza tu contraseña aquí: [enlace]\"</em>. ¿Qué tipo de ataque es y cuál es la señal de alerta más importante?",
    options: [
      { text: "Ataque de fuerza bruta — intenta adivinar la contraseña directamente en el sistema" },
      { text: "Phishing — usa urgencia y un enlace fraudulento para robar credenciales. La señal clave es la presión emocional para actuar sin verificar." },
      { text: "Man-in-the-middle — intercepta la comunicación entre el usuario y el servidor" },
      { text: "Ransomware — cifra los archivos del equipo al hacer clic" },
    ],
    correct: 1,
    explanation: "<strong>b) Phishing.</strong> El phishing explota el factor humano: urgencia, miedo o autoridad para que la víctima actúe sin pensar. Señales de alerta: urgencia injustificada, remitente desconocido o similar al legítimo, enlace que no coincide con el dominio oficial. La defensa principal es la concientización + verificar siempre el dominio antes de ingresar credenciales."
  },
  {
    cat: "fundamentos",
    q: "¿Cuál es la diferencia entre <strong>phishing</strong> y <strong>spear phishing</strong>?",
    options: [
      { text: "El phishing es más peligroso porque afecta a más personas simultáneamente" },
      { text: "El phishing es masivo e indiscriminado. El spear phishing está personalizado para una víctima específica usando información real sobre ella, lo que lo hace mucho más convincente." },
      { text: "El spear phishing solo ocurre por SMS, nunca por correo" },
      { text: "Son el mismo ataque — 'spear' es solo el término técnico de phishing" },
    ],
    correct: 1,
    explanation: "<strong>b) Masivo vs personalizado.</strong> Phishing: correo genérico enviado a miles. Spear phishing: el atacante investiga a la víctima (nombre, cargo, empresa, proyectos) y construye un correo creíble. Ejemplo: 'Hola Guido, te reenvío el contrato del proveedor que discutimos ayer' → el destinatario baja la guardia porque parece legítimo."
  },
  {
    cat: "fundamentos",
    q: "¿Qué es la <strong>ingeniería social</strong> y por qué el factor humano es considerado el eslabón más débil en seguridad?",
    options: [
      { text: "Es el uso de herramientas de hacking avanzadas que automatizan ataques a sistemas" },
      { text: "Es la manipulación psicológica de personas para que revelen información confidencial o realicen acciones que comprometan la seguridad — los humanos son susceptibles a emociones, confianza y autoridad que los sistemas no tienen." },
      { text: "Es una técnica de criptografía para ocultar mensajes en imágenes o archivos" },
      { text: "Es el conjunto de controles técnicos que protegen contra ataques internos" },
    ],
    correct: 1,
    explanation: "<strong>b) Manipulación psicológica.</strong> Un sistema con AES-256 y MFA puede ser inexpugnable técnicamente, pero si un atacante convence a un empleado de que es del soporte de IT y le pide su contraseña, todos los controles técnicos se saltan. El 80–90% de los incidentes tienen un componente humano. La defensa es capacitación y cultura de seguridad."
  },

  // ══════════════════════════════════════════════════════════
  // CRIPTOGRAFÍA — CIFRADO POR BLOQUES VS FLUJO, TRANSPOSICIÓN
  // ══════════════════════════════════════════════════════════
  {
    cat: "cripto-sim",
    q: "¿Cuál es la diferencia entre un <strong>cifrado de bloque</strong> y un <strong>cifrado de flujo</strong>?",
    options: [
      { text: "El cifrado de flujo es más seguro porque procesa más datos por segundo" },
      { text: "El cifrado de bloque divide el mensaje en bloques de tamaño fijo (ej: AES usa 128 bits) y los cifra. El cifrado de flujo cifra bit a bit o byte a byte en tiempo real, ideal para transmisiones continuas." },
      { text: "El cifrado de bloque solo funciona con texto; el de flujo con imágenes y video" },
      { text: "Son idénticos — la diferencia está solo en el largo de la clave usada" },
    ],
    correct: 1,
    explanation: "<strong>b) Bloque fijo vs flujo continuo.</strong> Bloque (AES, DES): divide el mensaje en bloques de tamaño fijo, cifra cada uno. Necesita padding si el último bloque no llena. Flujo (RC4, ChaCha20): genera un keystream y lo combina con el mensaje bit a bit — ideal para streaming de audio/video o comunicaciones en tiempo real donde no se sabe el tamaño total de los datos."
  },
  {
    cat: "cripto-sim",
    q: "La técnica de <strong>transposición</strong> (como la escítala espartana) cifra un mensaje reordenando el orden de los caracteres sin sustituirlos. Si el mensaje 'SEGURIDAD' se escribe en una grilla de 3 columnas y se lee por columnas, ¿qué tipo de transformación aplica?",
    options: [
      { text: "Sustitución — cada letra es reemplazada por otra del alfabeto" },
      { text: "Transposición — los caracteres son los mismos pero en distinto orden" },
      { text: "Hash — el resultado es irreversible" },
      { text: "Cifrado asimétrico — usa dos claves distintas" },
    ],
    correct: 1,
    explanation: "<strong>b) Transposición.</strong> La transposición no cambia las letras — reorganiza su posición. La escítala espartana enrollaba un pergamino en un bastón de diámetro específico: el bastón era la 'clave'. Sin el bastón exacto el mensaje era ilegible. Hoy la transposición se combina con sustitución en algoritmos modernos (rondas de permutación + sustitución en AES)."
  },

  // ══════════════════════════════════════════════════════════
  // AUTENTICACIÓN — PASSKEYS, OTP, MFA AVANZADO
  // ══════════════════════════════════════════════════════════
  {
    cat: "auth",
    q: "¿Qué son las <strong>passkeys</strong> (FIDO2/WebAuthn) y por qué son más seguras que las contraseñas tradicionales?",
    options: [
      { text: "Son contraseñas muy largas generadas aleatoriamente y almacenadas en un gestor de contraseñas" },
      { text: "Son credenciales criptográficas basadas en par de claves pública/privada — la clave privada nunca sale del dispositivo, eliminando el riesgo de phishing y filtraciones de contraseñas." },
      { text: "Son tokens físicos USB que reemplazan el segundo factor de autenticación" },
      { text: "Son contraseñas de un solo uso enviadas por email al momento del login" },
    ],
    correct: 1,
    explanation: "<strong>b) Par de claves, privada en el dispositivo.</strong> Con passkeys no hay contraseña que robar: el servidor solo conoce tu clave pública. Al autenticarte, tu dispositivo firma un desafío con tu clave privada (que nunca sale). No hay contraseña que pueda ser phished, adivinada ni filtrada. FIDO2 es el estándar adoptado por Google, Apple y Microsoft desde 2022."
  },
  {
    cat: "auth",
    q: "¿Cuál es la diferencia entre un <strong>OTP (One-Time Password)</strong> basado en tiempo (TOTP) y uno basado en contador (HOTP)?",
    options: [
      { text: "TOTP se usa en apps móviles; HOTP solo en tokens físicos de banco" },
      { text: "TOTP genera un código que cambia cada 30 segundos sincronizado con el tiempo. HOTP genera un código que cambia cada vez que se usa (contador incremental) — ambos son válidos un solo uso." },
      { text: "No hay diferencia práctica — ambos generan el mismo tipo de código" },
      { text: "HOTP es más seguro porque no depende de la sincronización horaria entre cliente y servidor" },
    ],
    correct: 1,
    explanation: "<strong>b) Tiempo vs contador.</strong> TOTP (RFC 6238): el código cambia cada 30s usando el tiempo actual como entrada → Google Authenticator, Authy. HOTP (RFC 4226): el código cambia por cada uso usando un contador → tokens RSA SecurID. TOTP puede expirar si el reloj del dispositivo está desincronizado. HOTP puede desincronizarse si se generan muchos códigos sin usar."
  },
  {
    cat: "auth",
    q: "¿Qué es el <strong>principio de mínimo privilegio</strong> y cómo se relaciona con el control de acceso?",
    options: [
      { text: "Significa que el administrador del sistema debe tener el menor número de privilegios posibles" },
      { text: "Establece que cada usuario, proceso o sistema debe tener solo los permisos estrictamente necesarios para cumplir su función — ni más ni menos." },
      { text: "Define que los privilegios deben asignarse de forma temporal y renovarse mensualmente" },
      { text: "Es el principio que prohíbe usar cuentas de administrador para tareas cotidianas" },
    ],
    correct: 1,
    explanation: "<strong>b) Solo lo estrictamente necesario.</strong> Un desarrollador no necesita acceso a producción. Un empleado de RRHH no necesita acceso a servidores. Si una cuenta comprometida tiene pocos privilegios, el daño potencial es limitado. El principio de mínimo privilegio reduce la superficie de ataque y limita el impacto de cuentas comprometidas o empleados maliciosos."
  },

  // ══════════════════════════════════════════════════════════
  // AUDITORÍA — TIPOS, EVIDENCIA, CICLO PDCA
  // ══════════════════════════════════════════════════════════
  {
    cat: "auditoria",
    q: "¿Cuál es la diferencia entre una <strong>auditoría interna</strong> y una <strong>auditoría externa</strong> de seguridad?",
    options: [
      { text: "La auditoría interna es más rigurosa porque los auditores conocen mejor los sistemas" },
      { text: "La auditoría interna la realiza personal de la propia organización (mayor conocimiento, menor independencia). La externa la realizan terceros certificados (mayor objetividad e independencia, requerida para certificación ISO 27001)." },
      { text: "Solo la auditoría externa puede detectar vulnerabilidades técnicas" },
      { text: "La auditoría interna es obligatoria por ley; la externa es opcional" },
    ],
    correct: 1,
    explanation: "<strong>b) Interna (conocimiento) vs Externa (independencia).</strong> Interna: el equipo propio revisa los controles, conoce el contexto pero puede tener conflicto de interés. Externa: auditores independientes sin relación previa — la ISO 27001 requiere auditorías externas para la certificación. Muchas organizaciones hacen ambas: interna para mejora continua y externa para certificación formal."
  },
  {
    cat: "auditoria",
    q: "Una universidad detecta accesos sospechosos a su sistema académico. ¿Qué tipo de auditoría es más adecuada realizar <strong>primero</strong> y qué evidencia debe recopilarse?",
    options: [
      { text: "Auditoría de cumplimiento normativo — verificar que se cumplen las políticas ISO 27001" },
      { text: "Auditoría forense/técnica — analizar logs de acceso, IPs, timestamps, sesiones activas y cambios en base de datos para reconstruir la línea de tiempo del incidente." },
      { text: "Auditoría de gestión — revisar si los controles administrativos están documentados" },
      { text: "Auditoría de terceros — delegar la investigación a la empresa proveedora del sistema" },
    ],
    correct: 1,
    explanation: "<strong>b) Auditoría forense/técnica.</strong> Ante un incidente activo, la prioridad es preservar y analizar evidencia técnica: logs de autenticación (quién, cuándo, desde dónde), cambios en registros académicos, sesiones abiertas, hashes de archivos críticos para detectar modificaciones. La evidencia debe recopilarse sin alterarla (cadena de custodia) para que sea válida legalmente."
  },
  {
    cat: "auditoria",
    q: "¿Qué es el <strong>riesgo residual</strong> y cuándo es aceptable?",
    options: [
      { text: "Es el riesgo antes de aplicar cualquier control de seguridad" },
      { text: "Es el riesgo que permanece después de aplicar los controles de seguridad. Es aceptable cuando la dirección lo aprueba formalmente y está dentro del apetito de riesgo definido por la organización." },
      { text: "Es el costo económico restante después de pagar una póliza de seguro" },
      { text: "Es un tipo de riesgo que no puede ser controlado bajo ninguna circunstancia" },
    ],
    correct: 1,
    explanation: "<strong>b) Riesgo que queda tras los controles.</strong> Riesgo inherente (sin controles) → aplicar controles → Riesgo residual. Ningún control elimina el 100% del riesgo. El riesgo residual es aceptable cuando la dirección lo aprueba explícitamente y está dentro del 'apetito de riesgo' de la organización — el nivel de riesgo que está dispuesta a tolerar para operar. Debe documentarse siempre."
  },

  // ══════════════════════════════════════════════════════════
  // GESTIÓN DE RIESGO — ACTIVOS, SGSI AVANZADO
  // ══════════════════════════════════════════════════════════
  {
    cat: "riesgo",
    q: "En un análisis de riesgo, ¿cuál de los siguientes es un <strong>activo intangible</strong> de información?",
    options: [
      { text: "El servidor de base de datos donde se almacenan los datos de clientes" },
      { text: "La reputación corporativa, la propiedad intelectual y el know-how del equipo de desarrollo" },
      { text: "Los cables de red y los switches del data center" },
      { text: "Las laptops asignadas a los empleados" },
    ],
    correct: 1,
    explanation: "<strong>b) Reputación, propiedad intelectual, know-how.</strong> Los activos de información se clasifican en: tangibles (hardware, infraestructura física) e intangibles (reputación, datos de clientes, código fuente, procesos documentados, conocimiento del equipo). Los intangibles suelen ser los más valiosos y difíciles de recuperar si se pierden — un breach que dañe la reputación puede valer más que el hardware robado."
  },
  {
    cat: "riesgo",
    q: "La dependencia universitaria del ejemplo de clase tiene: base de datos de calificaciones (activo crítico), acceso administrativo compartido sin control (vulnerabilidad alta), y empleados descontentos (amenaza interna alta). Usando la <strong>Matriz 3×3</strong>, ¿cómo se clasifica este riesgo y qué medida tiene mayor prioridad?",
    options: [
      { text: "Riesgo Bajo — implementar un firewall como primera medida" },
      { text: "Riesgo Medio — realizar auditorías anuales es suficiente" },
      { text: "Riesgo Crítico (Alta probabilidad × Alto impacto) — la medida prioritaria es eliminar el acceso compartido e implementar cuentas individuales con logs de auditoría." },
      { text: "Riesgo Alto — contratar un ciberseguro es la medida más adecuada" },
    ],
    correct: 2,
    explanation: "<strong>c) Crítico.</strong> Amenaza interna + vulnerabilidad alta = Probabilidad Alta. Activo crítico (calificaciones académicas) = Impacto Alto. Alta × Alta = 🔴 Crítico en la Matriz 3×3. Medida prioritaria: eliminar cuentas compartidas (control técnico inmediato de bajo costo y alto impacto). Luego: logs de auditoría por usuario. Finalmente: revisar y documentar política de accesos."
  },

  // ══════════════════════════════════════════════════════════
  // PRIVACIDAD Y MARCO LEGAL
  // ══════════════════════════════════════════════════════════
  {
    cat: "auditoria",
    q: "¿Qué establece el <strong>derecho al olvido</strong> (o derecho de supresión) en el contexto de la privacidad de datos?",
    options: [
      { text: "Que las organizaciones deben borrar todos sus backups cada 12 meses" },
      { text: "Que una persona puede solicitar que sus datos personales sean eliminados de los sistemas de una organización cuando ya no son necesarios para el fin original o cuando retira su consentimiento." },
      { text: "Que los logs de auditoría no deben conservarse por más de 30 días" },
      { text: "Que las contraseñas antiguas no deben almacenarse en el historial del sistema" },
    ],
    correct: 1,
    explanation: "<strong>b) Derecho de supresión.</strong> Reconocido en el RGPD europeo (Art. 17) y en la Ley 25.326 argentina. Una persona puede pedir que se eliminen sus datos cuando: ya cumplieron su propósito, retiró su consentimiento, o la organización los usa ilegalmente. La organización tiene la obligación de eliminarlos en plazos definidos, salvo que existan obligaciones legales que exijan conservarlos (ej: registros contables)."
  },
  {
    cat: "fundamentos",
    q: "¿Cuál de los siguientes principios de la <strong>Ley 25.326</strong> se viola cuando una empresa recolecta tu email para enviarte una factura y luego lo usa para enviarte publicidad sin tu consentimiento?",
    options: [
      { text: "Principio de Calidad — los datos no están actualizados" },
      { text: "Principio de Finalidad — los datos se usan para un propósito distinto al declarado originalmente" },
      { text: "Principio de Seguridad — los datos no están cifrados" },
      { text: "Principio de Consentimiento — porque nunca se pidió el email" },
    ],
    correct: 1,
    explanation: "<strong>b) Principio de Finalidad.</strong> La Ley 25.326 establece que los datos deben usarse estrictamente para el fin declarado al momento de la recolección. Si el email fue recolectado 'para enviar la factura', usarlo para marketing es una violación de finalidad, aunque el consentimiento original existió. El titular debe consentir específicamente cada uso distinto."
  },

  // ══════════════════════════════════════════════════════════
  // CIA AVANZADO — IT vs OT, APLICACIONES
  // ══════════════════════════════════════════════════════════
  {
    cat: "cia",
    q: "En un sistema bancario online, ¿cuál pilar de la CIA tiene mayor prioridad y por qué?",
    options: [
      { text: "Disponibilidad — los bancos deben estar operativos 24/7 sin importar nada más" },
      { text: "Confidencialidad — los datos financieros de los clientes no pueden ser expuestos bajo ninguna circunstancia" },
      { text: "Integridad — un saldo modificado ilegalmente puede generar pérdidas inmediatas e irreversibles" },
      { text: "Los tres tienen igual prioridad en entornos financieros" },
    ],
    correct: 1,
    explanation: "<strong>b) Confidencialidad.</strong> En banca online, la confidencialidad es crítica: exposición de datos financieros, contraseñas o números de cuenta puede resultar en fraude directo, daño reputacional severo y sanciones regulatorias (PCI-DSS, BCRA). A diferencia de OT (donde la disponibilidad es vital por riesgo físico), en IT financiera proteger la información del cliente es la máxima prioridad."
  },
  {
    cat: "cia",
    q: "Una VPN garantiza principalmente ¿cuál pilar de la Triada CIA?",
    options: [
      { text: "Disponibilidad — asegura que los recursos remotos siempre estén accesibles" },
      { text: "Integridad — garantiza que los datos no sean alterados en tránsito" },
      { text: "Confidencialidad — cifra el tráfico para que nadie en la red pública pueda leerlo" },
      { text: "Los tres pilares por igual, ya que es una medida de seguridad completa" },
    ],
    correct: 2,
    explanation: "<strong>c) Confidencialidad.</strong> Una VPN crea un túnel cifrado entre el dispositivo y el servidor destino, protegiendo los datos de ser interceptados en redes públicas (ej: Wi-Fi de aeropuerto). No garantiza que los datos sean correctos (integridad) ni que el servicio esté disponible — para eso hay otras medidas. La VPN protege principalmente la confidencialidad del tráfico en tránsito."
  },

];
