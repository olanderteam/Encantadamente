import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  age: z.string().optional(),
  message: z.string().optional(),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator(leadSchema)
  .handler(async ({ data }) => {
    const token = process.env.RD_STATION_TOKEN;
    if (!token) {
      console.error("RD_STATION_TOKEN não configurado");
      return { ok: true };
    }

    const phone = data.phone.replace(/\D/g, "");
    const notes = [
      data.age ? `Idade da criança: ${data.age}` : null,
      data.message ? `Mensagem: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join(" | ");

    const payload: Record<string, string> = {
      conversion_identifier: "agendamento-visita-formulario",
      name: data.name,
      mobile_phone: phone,
    };
    if (notes) payload["personal_notes"] = notes;

    const res = await fetch("https://api.rd.services/platform/conversions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        event_type: "CONVERSION",
        event_family: "CDP",
        payload,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error(`RD Station error ${res.status}: ${body}`);
    }

    return { ok: true };
  });
