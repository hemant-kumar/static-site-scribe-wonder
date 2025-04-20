
import { Helmet } from "react-helmet-async";
import { metaConfig } from "../config/metaConfig";

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string[];
  type?: "article" | "website";
  imageUrl?: string;
}

const Meta = ({ 
  title = "Tech Chatter Box",
  description,
  keywords,
  type = "website",
  imageUrl = "https://techchatterbox.com/og-image.png"
}: MetaProps) => {
  // Combine default keywords with page-specific keywords
  const finalKeywords = [...(keywords || metaConfig.default.keywords)].join(", ");
  const finalDescription = description || metaConfig.default.description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={imageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Meta;
