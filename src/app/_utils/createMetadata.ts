import { type Metadata } from "next";

type MetadataInput = {
  title: string;
};

export const createMetadata = (metadata: MetadataInput): Metadata => ({
  title: `Display — ${metadata.title}`,
});
