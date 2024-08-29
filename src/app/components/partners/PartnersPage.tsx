"use client";

import React, { useEffect, useState } from "react";
import Partners from "./Partners";

interface Partner {
  id: string;
  name: string;
  logo: string;
}

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await fetch("https://sunchase.backend.aait-d.com/api/home");
        if (!res.ok) {
          throw new Error("Failed to fetch partners data");
        }
        const data = await res.json();
        setPartners(data.data.partners);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  if (loading) return <div className="text-center font-bold">Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Partners partners={partners} />
    </div>
  );
}
