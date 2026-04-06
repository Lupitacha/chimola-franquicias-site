# Tracking Implementado

## `cta_click`
- Se dispara en:
  - CTA primario del hero
  - CTA secundario del hero
  - CTA principal del header
  - CTA sticky mobile
- Parámetros implementados:
  - `cta_name`
  - `cta_location`

## `begin_quiz`
- Se dispara en la primera interacción con el formulario stepper.
- Parámetros implementados:
  - `form_type`

## `generate_lead`
- Se dispara luego de un submit exitoso.
- Parámetros implementados:
  - `form_type`
  - `plaza_status`
  - `timing`
  - `capital_range`
  - `score`
  - `is_sql`

## Nota técnica
- Los eventos se envían a `window.dataLayer`.
- Si `NEXT_PUBLIC_GTM_ID` está definido, el layout carga GTM.
- `NEXT_PUBLIC_GA4_ID` quedó como placeholder para una futura conexión directa si hiciera falta.
