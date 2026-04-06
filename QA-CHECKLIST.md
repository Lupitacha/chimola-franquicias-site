# QA Mobile + Accesibilidad

## Mobile
- Verificar hero sin cortes entre 360px y 430px.
- Confirmar que el CTA sticky no tape botones del success state.
- Revisar que el stepper mantenga un solo foco de atención por pantalla.
- Validar inputs, selects y textarea con teclado móvil.
- Probar los links de `Agendar llamada`, `WhatsApp` y `/privacidad`.

## Formulario
- Paso 1 no debe avanzar con campos obligatorios vacíos.
- Paso 2 no debe enviar sin experiencia, rol, ubicación y motivación.
- El progreso debe pasar de 50% a 100%.
- El success state debe mostrar score, SLA y CTAs de salida.
- El payload debe incluir `score` e `isSql`.

## Tracking
- `cta_click` en hero, header y sticky mobile.
- `begin_quiz` en la primera interacción del form.
- `generate_lead` sólo en submit exitoso.

## Accesibilidad
- Revisar navegación completa con teclado.
- Verificar contraste de texto sobre fondos pastel.
- Confirmar labels visibles en todos los campos.
- Validar `role="progressbar"` y estados de error legibles.
- Revisar foco visible en botones, links y campos.
