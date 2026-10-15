const datos = [
    {
        categoria: "🧊 CONSERVACIÓN",
        titulo: "¿Congelar mata las bacterias?",
        texto: "Congelar generalmente detiene o ralentiza el crecimiento de muchos microorganismos, pero no significa que todos mueran."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Qué es la contaminación cruzada?",
        texto: "Es la transferencia de contaminantes desde un alimento, superficie o utensilio contaminado hacia otro alimento que no lo está. Por ejemplo: las tablas utilizadas para cortar carnes crudas son utilizadas luego para cortar o apoyar alimentos listos para consumir"
    },
    
    {
        categoria: "🥩 ALIMENTOS",
        titulo: "¿Por qué cambia de color la carne?",
        texto: "El color de la carne está relacionado, entre otros factores, con los cambios que experimentan sus pigmentos y con la exposición al oxígeno."
    },

    {
        categoria: "🥫 CONSERVACIÓN",
        titulo: "¿Por qué no se recomienda comprar latas hinchadas?",
        texto: "Una lata hinchada puede indicar una alteración del alimento o del envase y es una señal para no consumirlo. Las abolladuras importantes también pueden afectar la estructura y el cierre de la lata, aumentando el riesgo de alteraciones o contaminación. Por eso, es recomendable evitar latas hinchadas, con pérdidas, óxido importante o daños que comprometan su integridad."
    },

    {
        categoria: "🏷️ ETIQUETADO",
        titulo: "¿Qué significa 'consumir preferentemente antes de'?",
        texto: "Es una indicación relacionada principalmente con la calidad del alimento, y no debe confundirse automáticamente con una fecha de vencimiento."
    },

    {
        categoria: "🌡️ TEMPERATURA",
        titulo: "¿Por qué es importante mantener los alimentos refrigerados?",
        texto: "Las bajas temperaturas ayudan a disminuir la velocidad de crecimiento de muchos microorganismos que pueden deteriorar los alimentos o causar enfermedades."
    },

    {
        categoria: "🧼 HIGIENE",
        titulo: "¿Lavarse las manos realmente hace la diferencia?",
        texto: "Sí. Una correcta higiene de manos ayuda a reducir la transferencia de microorganismos hacia los alimentos, utensilios y superficies. Es importante lavar las manos con agua y jabón durante al menos 20 segundos, frotando bien las palmas, el dorso, entre los dedos, las uñas y los pulgares."
    },

    {
        categoria: "🍗 COCCIÓN",
        titulo: "¿Por qué hay que cocinar bien el centro del pollo?",
        texto: "El pollo crudo puede contener microorganismos capaces de causar enfermedades. Una cocción adecuada ayuda a reducir este riesgo. El interior debe verse bien cocido y no presentar jugos rosados."
    },

    {
        categoria: "🥩 CONTAMINACIÓN",
        titulo: "¿Puedo usar la misma tabla para carne cruda y verduras?",
        texto: "No es recomendable sin una correcta limpieza y desinfección entre usos, porque puede producirse contaminación cruzada."
    },

    {
        categoria: "🥚 HUEVOS",
        titulo: "¿Los huevos pueden contener microorganismos?",
        texto: "Sí. Los huevos pueden contaminarse con bacterias como Salmonella. Para reducir el riesgo, es importante mantenerlos refrigerados, separados de otros alimentos y manipularlos correctamente. Si es necesario limpiar la cáscara, se recomienda hacerlo justo antes de utilizarlos y no antes de guardarlos. También es importante cocinar bien el huevo en el centro."
    },

    {
        categoria: "🧊 CONSERVACIÓN",
        titulo: "¿Cuánto tiempo puede quedar un alimento fuera de la heladera?",
        texto: "Depende del tipo de alimento y de las condiciones ambientales. Los alimentos perecederos no deberían permanecer innecesariamente a temperatura ambiente."
    },

    {
        categoria: "🍴 MANIPULACIÓN",
        titulo: "¿Una superficie limpia siempre está desinfectada?",
        texto: "No necesariamente. La limpieza se realiza, por ejemplo, con agua y detergente para eliminar suciedad y restos de alimentos. La desinfección es un paso posterior que busca reducir los microorganismos a niveles seguros y puede realizarse utilizando un desinfectante adecuado, como una solución de lavandina preparada correctamente (leer las etiquetas con instrucciones)."
    },

    {
        categoria: "💧 AGUA",
        titulo: "¿Por qué el agua también puede ser un vehículo de contaminación?",
        texto: "El agua contaminada puede transportar microorganismos y otras sustancias peligrosas, por eso su calidad es fundamental para la seguridad alimentaria."
    },

    {
        categoria: "🥛 LÁCTEOS",
        titulo: "¿Por qué antes algunas personas tomaban leche sin pasteurizar y no les pasaba nada?",
        texto: "Que una persona haya consumido leche sin pasteurizar y no haya enfermado no significa que fuera segura. La leche cruda puede contener microorganismos como Salmonella, Escherichia coli o Listeria, aunque el alimento tenga buen aspecto, olor y sabor. La pasteurización utiliza un tratamiento térmico controlado para reducir los microorganismos que pueden representar un riesgo para la salud."
    },

    {
        categoria: "🥬 VEGETALES Y FRUTAS",
        titulo: "¿Lavar una fruta o verdura elimina todos los microorganismos?",
        texto: "El lavado puede reducir la cantidad de microorganismos presentes en la superficie, pero no garantiza su eliminación total."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Cuál es la importancia de tapar o no un alimento?",
        texto: "La presencia o ausencia de oxígeno en el medio ambiente puede influir en el tipo de microorganismos que pueden crecer en un alimento y en la velocidad a la que se multiplicarán."
    },

    {
        categoria: "🔥 COCCIÓN",
        titulo: "¿La cocción ayuda a controlar los microorganismos?",
        texto: "Sí. Una cocción adecuada puede destruir o reducir significativamente muchos microorganismos presentes en los alimentos."
    },

    {
        categoria: "🍔 MICROBIOLOGÍA",
        titulo: "¿Por qué una hamburguesa mal cocida puede ser peligrosa?",
        texto: "Al picar la carne, los microorganismos que estaban en la superficie pueden distribuirse por el interior de la hamburguesa. Por eso es importante cocinarla completamente y evitar que quede cruda o con partes insuficientemente cocidas. El riesgo es especialmente importante en niños pequeños y adultos mayores, quienes pueden presentar complicaciones más graves frente a algunas enfermedades transmitidas por alimentos."
    },

    {
        categoria: "📦 ENVASES",
        titulo: "¿Un envase dañado puede representar un riesgo?",
        texto: "Sí. Golpes importantes, pérdidas, hinchazón u otras alteraciones pueden comprometer la integridad del envase y del alimento."
    },

    {
        categoria: "🏷️ ETIQUETADO",
        titulo: "¿Por qué es importante leer la etiqueta?",
        texto: "La etiqueta proporciona información útil sobre ingredientes, conservación, contenido, fecha y otras características importantes del alimento."
    },

    {
        categoria: "🧊 CADENA DE FRÍO",
        titulo: "¿Qué es la cadena de frío?",
        texto: "Es el mantenimiento de determinadas condiciones de temperatura durante el almacenamiento, transporte y distribución de ciertos alimentos."
    },

    {
        categoria: "🥗 ALIMENTOS",
        titulo: "¿Los alimentos listos para consumir necesitan cuidados especiales?",
        texto: "Sí. Como generalmente no recibirán una cocción posterior, es especialmente importante evitar su contaminación durante la manipulación y conservación."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Los alimentos pueden verse normales y aun así estar contaminados?",
        texto: "Sí. La presencia de microorganismos peligrosos no siempre modifica el olor, sabor, color o apariencia del alimento."
    },

    {
        categoria: "🍳 HUEVOS",
        titulo: "¿Por qué es importante evitar que el huevo crudo contamine otros alimentos?",
        texto: "Porque el huevo crudo puede contener microorganismos como Salmonella y transferirlos a otros alimentos, utensilios o superficies durante la preparación."
    },

    {
        categoria: "🥔 VEGETALES",
        titulo: "¿Por qué no se recomienda consumir papas verdes o con brotes?",
        texto: "Las papas que desarrollan coloración verde, especialmente cuando están expuestas a la luz, pueden presentar mayores concentraciones de glicoalcaloides como la solanina y la chaconina. En cantidades elevadas pueden resultar tóxicos y no se eliminan completamente mediante la cocción. Por eso se recomienda conservar las papas en un lugar fresco, seco y oscuro, y descartar las que estén muy verdes, muy brotadas o deterioradas."
    },

    {
        categoria: "🧽 LIMPIEZA",
        titulo: "¿Una esponja de cocina puede acumular microorganismos?",
        texto: "Sí. Las esponjas y paños pueden retener humedad y restos de alimentos, creando condiciones que favorecen la supervivencia o multiplicación de microorganismos."
    },

    {
        categoria: "🍴 MANIPULACIÓN",
        titulo: "¿Por qué no hay que tocar alimentos listos para consumir con las manos sucias?",
        texto: "Porque las manos pueden transportar microorganismos desde distintas superficies hacia el alimento."
    },

    {
        categoria: "🌡️ TEMPERATURA",
        titulo: "¿La temperatura influye en el crecimiento de los microorganismos?",
        texto: "Sí. La temperatura es uno de los factores que puede favorecer, limitar o detener el crecimiento de distintos microorganismos."
    },

    {
        categoria: "🥩 ALIMENTOS",
        titulo: "¿Por qué hay que separar los alimentos crudos de los cocidos?",
        texto: "Separarlos ayuda a evitar que los microorganismos presentes en alimentos crudos pasen a alimentos que ya están listos para consumir."
    },

    {
        categoria: "🧪 BROMATOLOGÍA",
        titulo: "¿Qué estudia la Bromatología?",
        texto: "La Bromatología estudia los alimentos desde distintos aspectos, incluyendo su composición, calidad, conservación, seguridad e inocuidad."
    },

    {
        categoria: "🥜 ALIMENTOS",
        titulo: "¿Por qué el maní puede volverse peligroso con el tiempo?",
        texto: "El maní contiene una cantidad importante de grasas que pueden oxidarse cuando están expuestas al oxígeno, la luz y el calor, provocando cambios de sabor y olor y el deterioro de su calidad. Además, si se almacena en condiciones inadecuadas, puede favorecer el desarrollo de hongos capaces de producir micotoxinas, como las aflatoxinas. Por eso, el tiempo y las condiciones de almacenamiento son importantes, especialmente cuando se comercializa a granel."
    },

    {
        categoria: "🍚 MICROBIOLOGÍA",
        titulo: "¿Por qué no conviene guardar el arroz cocido durante demasiados días?",
        texto: "El arroz puede contener esporas de Bacillus cereus que pueden sobrevivir a la cocción. Si el arroz cocido se enfría lentamente o se conserva durante demasiado tiempo en condiciones inadecuadas, las esporas pueden germinar y las bacterias multiplicarse, pudiendo producir toxinas. Por eso es importante enfriarlo rápidamente, refrigerarlo y evitar dejarlo varias horas a temperatura ambiente."
    },

    {
        categoria: "🥜 CONSERVACIÓN",
        titulo: "¿Los alimentos a granel se conservan igual que los envasados?",
        texto: "No necesariamente. Al venderse a granel, algunos alimentos pueden permanecer más tiempo expuestos al oxígeno, la humedad, la luz, el calor y la manipulación. En productos ricos en grasas, como el maní y otros frutos secos, estas condiciones pueden acelerar su deterioro y favorecer la aparición de olores y sabores rancios."
    },

    {
        categoria: "🍟 FRITURA",
        titulo: "¿Qué pasa con el aceite cuando se calienta demasiado?",
        texto: "El calentamiento excesivo o repetido del aceite puede provocar su oxidación y degradación, generando compuestos como aldehídos, cetonas y otros productos de deterioro. Estos cambios pueden afectar el sabor, el olor y la calidad del aceite. Estos productos de degradación pueden ser perjudiciales para la salud, por lo que es importante evitar sobrecalentarlo y no reutilizarlo indefinidamente."
    },

    {
        categoria: "🧊 MICROBIOLOGÍA",
        titulo: "¿Puede una bacteria crecer en la heladera?",
        texto: "Sí. Listeria monocytogenes es capaz de crecer a temperaturas de refrigeración, aunque lo hace más lentamente. Por eso puede representar un riesgo en alimentos listos para consumir que permanecen varios días en la heladera, como fiambres, quesos blandos, pescados ahumados y otras preparaciones refrigeradas."
    },

    {
        categoria: "🥫 CONSERVAS",
        titulo: "¿Por qué hay que tener precaución con las conservas caseras?",
        texto: "Las esporas de Clostridium botulinum pueden sobrevivir a tratamientos térmicos insuficientes. Si una conserva de baja acidez se prepara o almacena en condiciones inadecuadas, las esporas pueden germinar y producir una toxina muy peligrosa. Por eso, las conservas caseras de alimentos como carnes, verduras o preparaciones mixtas requieren procesos de elaboración y tratamiento térmico adecuados."
    },

    {
        categoria: "🥩 CONSERVAS",
        titulo: "¿Por qué las conservas caseras de carne de caza requieren especial cuidado?",
        texto: "Las carnes de caza, como la vizcacha, son alimentos de baja acidez y pueden presentar condiciones favorables para el desarrollo de Clostridium botulinum si se elaboran como conserva sin un proceso adecuado. Una cocción común no necesariamente alcanza para destruir sus esporas, por lo que es fundamental utilizar métodos de conservación seguros y validados."
    },

    {
        categoria: "🥫 BOTULISMO",
        titulo: "¿Una conserva que se ve bien siempre es segura?",
        texto: "No necesariamente. Una conserva contaminada con Clostridium botulinum puede parecer, oler y saber normal y aun así contener toxina botulínica. Por eso, no se debe determinar la seguridad de una conserva únicamente por su aspecto, olor o sabor."
    },

    {
        categoria: "🧪 OXIDACIÓN",
        titulo: "¿Qué tienen que ver los radicales libres con el enranciamiento?",
        texto: "Cuando las grasas insaturadas de alimentos como el maní, las nueces, las semillas o algunos aceites entran en contacto con el oxígeno, pueden iniciarse reacciones de oxidación en cadena. En este proceso se forman radicales libres y posteriormente distintos productos de oxidación que pueden generar olores y sabores rancios y deteriorar la calidad del alimento."
    },

    {
        categoria: "🔥 CALENTAMIENTO",
        titulo: "¿Por qué no conviene comer alimentos muy quemados?",
        texto: "El calentamiento intenso puede favorecer la formación de determinados compuestos potencialmente perjudiciales para la salud. En alimentos como el pan y las papas puede formarse acrilamida, mientras que en carnes cocinadas a temperaturas muy altas pueden generarse aminas heterocíclicas e hidrocarburos aromáticos policíclicos. Por eso, es preferible evitar que los alimentos se quemen o se carbonicen."
    },

    {
        categoria: "🧼 HIGIENE",
        titulo: "¿Por qué no hay que mezclar lavandina con detergente?",
        texto: "Mezclar lavandina con detergente u otros productos de limpieza puede provocar reacciones químicas y generar sustancias o gases irritantes y potencialmente peligrosos. Por eso, los productos de limpieza deben utilizarse por separado y siguiendo siempre las indicaciones de su etiqueta."
    },

    {
        categoria: "🧼 DESINFECCIÓN",
        titulo: "¿Más lavandina significa una mejor desinfección?",
        texto: "No necesariamente. Utilizar una concentración mayor a la recomendada no garantiza una mejor desinfección y puede dejar residuos innecesarios o resultar peligrosa. Es importante preparar la solución siguiendo las indicaciones del producto."
    },

    {
        categoria: "🧼 HIGIENE",
        titulo: "¿Por qué primero hay que limpiar y después desinfectar?",
        texto: "La suciedad y los restos de alimentos pueden interferir con la acción de algunos desinfectantes. Primero se debe realizar una limpieza adecuada para remover la suciedad y luego aplicar el desinfectante según las indicaciones correspondientes."
    },

    {
        categoria: "🧴 DESINFECCIÓN",
        titulo: "¿Cualquier lavandina sirve para desinfectar alimentos o superficies?",
        texto: "No todas las lavandinas tienen la misma formulación ni están destinadas al mismo uso. Para desinfectar superficies o alimentos, cuando corresponda, se debe utilizar un producto apto para ese fin y seguir las indicaciones de su etiqueta."
    },

    {
        categoria: "🧼 DESINFECCIÓN",
        titulo: "¿Alcanza con rociar lavandina y limpiarla enseguida?",
        texto: "No necesariamente. Los desinfectantes necesitan un determinado tiempo de contacto para actuar correctamente. Por eso es importante respetar las indicaciones del fabricante y no retirar el producto antes de tiempo."
    },

    {
        categoria: "🍯 BOTULISMO",
        titulo: "¿Por qué los menores de 1 año no deben consumir miel?",
        texto: "La miel puede contener esporas de Clostridium botulinum. En los bebés, cuyo sistema digestivo todavía está en desarrollo, estas esporas pueden germinar y producir toxina botulínica. Por eso no se recomienda dar miel a menores de 1 año, incluso si es natural, pasteurizada o se encuentra en otros alimentos."
    },

    {
        categoria: "🍄 MICOTOXINAS",
        titulo: "¿Qué son las micotoxinas?",
        texto: "Las micotoxinas son sustancias producidas por algunas especies de hongos que pueden contaminar alimentos como cereales, frutos secos, especias, frutas secas, manzanas y café. Pueden aparecer cuando los cultivos se contaminan antes o después de la cosecha, especialmente si se almacenan en condiciones cálidas y húmedas. Algunas son resistentes al procesamiento y pueden causar efectos perjudiciales para la salud."
    },
    
    {
        categoria: "🥫 BOTULISMO",
        titulo: "¿En qué alimentos puede encontrarse Clostridium botulinum?",
        texto: "Clostridium botulinum se encuentra naturalmente en el suelo, el polvo y los sedimentos de agua dulce y salada, y puede contaminar distintos alimentos. Algunas verduras, especias, hierbas, tés y la miel han sido asociados a casos de botulismo."
    },

    {
        categoria: "🥬 VEGETALES",
        titulo: "¿Por qué hay que tener precaución con las espinacas y acelgas en bebés?",
        texto: "Las espinacas y acelgas pueden contener nitratos de forma natural. En los bebés, estos pueden transformarse en nitritos y afectar la hemoglobina, dificultando el transporte de oxígeno en la sangre y provocando el llamado 'síndrome del bebé azul'."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Todos los microorganismos son perjudiciales?",
        texto: "No. Muchos microorganismos son beneficiosos y se utilizan en la elaboración de alimentos como el yogur, el queso, el pan, el vino y la cerveza. Otros forman parte de nuestra microbiota intestinal y cumplen funciones importantes en el organismo."
    },

    {
        categoria: "🍞 HONGOS",
        titulo: "¿Alcanza con sacar la parte del alimento que tiene moho?",
        texto: "No siempre. En alimentos blandos y porosos, como el pan o algunos quesos, los hongos pueden desarrollarse más allá de la parte visible y producir sustancias que pueden resultar perjudiciales para la salud. Por eso, no se recomienda retirar solamente la parte con moho y consumir el resto."
    },

    {
        categoria: "🔥 COCCIÓN",
        titulo: "¿El fuego mata todo?",
        texto: "No necesariamente. Una cocción adecuada puede destruir muchos microorganismos, pero algunas esporas bacterianas son resistentes al calor y ciertas toxinas pueden no eliminarse completamente con una cocción común. Por eso, cocinar un alimento no siempre permite recuperar uno que fue mal conservado o contaminado."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Cuáles son los alimentos de alto riesgo?",
        texto: "Son alimentos que ofrecen condiciones favorables para el crecimiento de microorganismos y requieren un mayor control de higiene, tiempo y temperatura. Entre ellos se encuentran las carnes, pescados y mariscos, leche y lácteos, huevos, comidas preparadas, carnes picadas y alimentos listos para consumir que necesitan refrigeración."
    },

    {
        categoria: "🌾 ALIMENTOS",
        titulo: "¿Cuáles son los alimentos de bajo riesgo?",
        texto: "Son alimentos que, por sus características, no suelen favorecer la multiplicación de microorganismos. Entre ellos se encuentran el azúcar, la sal, las harinas, los cereales secos, las legumbres secas, las galletitas y otros alimentos con poca humedad."
    },

    {
        categoria: "🥫 BOTULISMO",
        titulo: "¿Qué alimentos presentan mayor riesgo de botulismo?",
        texto: "Los alimentos de mayor riesgo son aquellos de baja acidez, poco oxígeno y conservados a temperaturas inadecuadas, condiciones que favorecen el desarrollo de Clostridium botulinum. Los más asociados son las conservas caseras de vegetales, carnes, pescados y preparaciones mixtas. También pueden representar un riesgo los embutidos, aceites con hierbas, quesos y alimentos envasados al vacío."
    },
    
    {
        categoria: "🦠 CÓLERA",
        titulo: "¿Por qué el agua es tan importante en la prevención del cólera?",
        texto: "El cólera se transmite principalmente a través del consumo de agua contaminada con Vibrio cholerae. Por eso, disponer de agua segura, mantener una buena higiene de manos y manipular correctamente los alimentos son medidas fundamentales para prevenir la enfermedad."
    },

    {
        categoria: "🦠 ENFERMEDADES",
        titulo: "¿Cómo pueden los alimentos transmitir Hepatitis A?",
        texto: "El virus de la Hepatitis A puede transmitirse al consumir agua o alimentos contaminados, especialmente cuando son manipulados por una persona infectada que no mantiene una correcta higiene de manos. También puede encontrarse en alimentos crudos o poco cocidos contaminados durante su producción o manipulación."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Conocías a Staphylococcus aureus?",
        texto: "Staphylococcus aureus puede encontrarse en la piel, las manos y la nariz de personas sanas sin causarles enfermedad. Si contamina un alimento, puede producir una toxina que resiste la cocción y provocar una intoxicación en pocas horas, generalmente sin fiebre. Puede estar presente en alimentos como leche, carnes, cremas y salsas."
    },

    {
        categoria: "🥩 SEGURIDAD ALIMENTARIA",
        titulo: "¿Sabías que la carne picada puede aumentar el riesgo de E. coli?",
        texto: "Cuando la carne se pica, los microorganismos que pueden encontrarse en la superficie pueden distribuirse por todo el interior. Por eso, a diferencia de un corte entero de carne, una hamburguesa debe cocinarse completamente para reducir el riesgo de bacterias como Escherichia coli."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Conocías a Escherichia coli?",
        texto: "Escherichia coli forma parte de la microbiota intestinal de personas y animales, por lo que su presencia en ciertos alimentos puede indicar contaminación fecal. Algunas cepas son capaces de causar enfermedades graves, como el síndrome urémico hemolítico (SUH). Puede encontrarse en distintos alimentos y, en general, una cocción adecuada ayuda a eliminarla."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Conocías a Clostridium perfringens?",
        texto: "Clostridium perfringens puede encontrarse en carnes y es especialmente importante en preparaciones cocidas en grandes cantidades o trozos grandes. Sus esporas pueden sobrevivir a la cocción y, si el alimento se enfría o conserva incorrectamente, las bacterias pueden multiplicarse y producir toxinas."
    },

    {
        categoria: "🦠 MICROBIOLOGÍA",
        titulo: "¿Conocías a Campylobacter jejuni?",
        texto: "Campylobacter jejuni se encuentra frecuentemente en aves de corral y puede causar enfermedades transmitidas por alimentos. La cocción adecuada ayuda a eliminarlo, pero el principal riesgo aparece cuando el pollo crudo contamina otros alimentos, utensilios o superficies. Por eso es fundamental evitar la contaminación cruzada."
    },

    {
        categoria: "🧊 CONSERVACIÓN",
        titulo: "¿Sabías que el orden de los alimentos en la heladera importa?",
        texto: "Los alimentos crudos deben colocarse en las partes inferiores de la heladera, mientras que los alimentos cocidos o listos para consumir deben ubicarse arriba. De esta manera se evita que los líquidos de los alimentos crudos goteen sobre otros alimentos y se reduce el riesgo de contaminación cruzada."
    },

    {
        categoria: "❄️ DESCONGELACIÓN",
        titulo: "¿Cuál es la forma más segura de descongelar un alimento?",
        texto: "Una de las formas más seguras es pasar el alimento del congelador a la heladera y dejarlo descongelar lentamente, preferentemente durante la noche. De esta manera se mantiene a una temperatura que dificulta la multiplicación de microorganismos."
    },

    {
        categoria: "❄️ DESCONGELACIÓN",
        titulo: "¿Sabías que algunos alimentos pueden descongelarse durante la cocción?",
        texto: "Algunos alimentos, como verduras, hamburguesas y pequeñas porciones de carne, pueden cocinarse directamente congelados. Es importante asegurarse de que alcancen una temperatura y un tiempo de cocción adecuados también en el centro del alimento."
    },

    {
        categoria: "❄️ DESCONGELACIÓN",
        titulo: "¿Se puede descongelar un alimento en el microondas?",
        texto: "Sí. El microondas permite descongelar los alimentos rápidamente, pero es importante cocinarlos inmediatamente después de descongelarlos para evitar que permanezcan demasiado tiempo a temperaturas favorables para el crecimiento de microorganismos."
    },
];

const categoriaDato = document.getElementById("categoriaDato");
const tituloDato = document.getElementById("tituloDato");
const textoDato = document.getElementById("textoDato");
const botonDato = document.getElementById("botonDato");

if (botonDato) {

    botonDato.addEventListener("click", function() {

        const numeroAleatorio = Math.floor(Math.random() * datos.length);

        categoriaDato.textContent = datos[numeroAleatorio].categoria;
        tituloDato.textContent = datos[numeroAleatorio].titulo;
        textoDato.textContent = datos[numeroAleatorio].texto;

    });

}

document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector('.dato');
    const button = card.querySelector('button');
    const dice = button ? button.querySelector('.icono-dado') : null;
    const title = card.querySelector('h2');
    const paragraph = card.querySelector('p');

    // Evento al presionar el botón "Tirame un dato"
    if (button) {
        button.addEventListener('click', () => {
            // 1. Giro exclusivo del dado
            if (dice) {
                dice.classList.add('spin-dice');
                setTimeout(() => {
                    dice.classList.remove('spin-dice');
                }, 600);
            }

            // 2. Transición suave para el texto (h2 y p)
            if (title && paragraph) {
                title.classList.remove('fade-change');
                paragraph.classList.remove('fade-change');

                // Forzar "reflow" para reiniciar la animación CSS
                void title.offsetWidth;

                /* Acá va tu lógica de cambio de texto */
                // title.textContent = "Nuevo título...";
                // paragraph.textContent = "Nueva explicación...";

                title.classList.add('fade-change');
                paragraph.classList.add('fade-change');
            }
        });
    }
});


function scrollCarrusel(direccion) {
    // Busca el contenedor del carrusel por su ID
    const pista = document.getElementById('carruselETAS');
    
    if (pista) {
        // Calcula cuánto desplazar (ancho de 1 tarjeta + el espacio/gap entre ellas)
        const tarjeta = pista.querySelector('.tarjeta-enfermedad');
        const desplazamiento = tarjeta.offsetWidth + 16; 

        // Realiza el scroll suave
        pista.scrollBy({
            left: direccion * desplazamiento,
            behavior: 'smooth'
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const n = Math.floor(Math.random() * datos.length);
    categoriaDato.textContent = datos[n].categoria;
    tituloDato.textContent = datos[n].titulo;
    textoDato.textContent = datos[n].texto;
});