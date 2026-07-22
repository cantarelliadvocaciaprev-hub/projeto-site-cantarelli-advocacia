import { useState } from "react";
import { Facebook, Linkedin, Link2, Check, Mail, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ShareButtonsProps {
  title: string;
  url: string;
  /** Compact style for inline placement (e.g. under the title). */
  compact?: boolean;
}

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ShareButtons = ({ title, url, compact = false }: ShareButtonsProps) => {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedTextWa = encodeURIComponent(`${title}\n\n${url}`);
  const encodedEmailBody = encodeURIComponent(
    `Olha esse artigo da Cantarelli Advocacia:\n\n${title}\n${url}`
  );

  const shares = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodedTextWa}`,
      icon: <MessageCircle className="w-4 h-4" />,
      className: "bg-[#25D366] hover:bg-[#20BA5A] text-white border-transparent",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <Facebook className="w-4 h-4" />,
      className: "bg-[#1877F2] hover:bg-[#0e63cf] text-white border-transparent",
    },
    {
      name: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <XLogo className="w-4 h-4" />,
      className: "bg-foreground hover:opacity-90 text-background border-transparent",
    },
    {
      name: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <Linkedin className="w-4 h-4" />,
      className: "bg-[#0A66C2] hover:bg-[#084d95] text-white border-transparent",
    },
    {
      name: "E-mail",
      href: `mailto:?subject=${encodedTitle}&body=${encodedEmailBody}`,
      icon: <Mail className="w-4 h-4" />,
      className: "bg-card hover:bg-muted text-foreground border-border",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({ title: "Link copiado!", description: "Cole onde quiser compartilhar." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Não foi possível copiar",
        description: "Copie manualmente o endereço da página.",
        variant: "destructive",
      });
    }
  };

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${
        compact ? "" : "p-4 md:p-5 rounded-xl border border-border bg-card"
      }`}
    >
      {!compact && (
        <span className="text-sm font-body text-muted-foreground mr-2 font-semibold">
          Compartilhar:
        </span>
      )}
      {shares.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Compartilhar no ${s.name}`}
          className={`inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all hover:scale-105 hover:shadow-md ${s.className}`}
        >
          {s.icon}
        </a>
      ))}
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copiar link do artigo"
        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all hover:scale-105 hover:shadow-md"
      >
        {copied ? <Check className="w-4 h-4 text-primary" /> : <Link2 className="w-4 h-4" />}
      </button>
    </div>
  );
};

export default ShareButtons;
