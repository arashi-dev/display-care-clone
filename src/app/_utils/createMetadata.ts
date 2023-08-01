import { type Metadata } from "next";

type MetadataInput = {
  title?: string;
};

export const createMetadata = (metadata: MetadataInput = {}): Metadata => ({
  title: metadata?.title ? `Display — ${metadata.title}` : "Dislpay",
});
