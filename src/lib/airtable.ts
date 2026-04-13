export interface AirtableEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  badge: string;
  description: string;
  thumbnail: string | null;
}

export async function getEvents(): Promise<AirtableEvent[]> {
  const { AIRTABLE_TOKEN, AIRTABLE_BASE_ID, AIRTABLE_TABLE_ID } = process.env;

  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_ID) {
    console.error("Missing Airtable environment variables.");
    return [];
  }

  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}?sort[0][field]=Date&sort[0][direction]=asc`,
    {
      headers: { Authorization: `Bearer ${AIRTABLE_TOKEN}` },
      next: { revalidate: 60 }, // re-fetch at most every 60 seconds
    }
  );

  if (!res.ok) return [];

  const data = await res.json();

  interface AirtableRecord {
    id: string;
    fields: {
      Title?: string;
      Date?: string;
      Location?: string;
      Badge?: string;
      Description?: string;
      Thumbnail?: { url: string }[];
    };
  }

  return data.records.map((record: AirtableRecord) => {
    const f = record.fields;
    return {
      id: record.id,
      title: f.Title ?? "",
      date: f.Date ?? "",
      location: f.Location ?? "",
      badge: f.Badge ?? "",
      description: f.Description ?? "",
      thumbnail: f.Thumbnail?.[0]?.url ?? null,
    };
  });
}
