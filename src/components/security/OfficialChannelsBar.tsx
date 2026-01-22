import { Phone, Shield } from "lucide-react";

const OfficialChannelsBar = () => {
  const officialNumbers = [
    { number: "(81) 3049-3799", tel: "+558130493799" },
    { number: "(81) 99544-1368", tel: "+5581995441368" },
    { number: "(81) 98771-8606", tel: "+5581987718606" },
    { number: "(81) 98342-1727", tel: "+5581983421727" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#c5c9ce] py-2 transition-transform duration-300 hover:-translate-y-full group">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <Shield className="w-4 h-4 text-[#1a1a1a]" />
          <span className="text-[#1a1a1a] text-xs font-display font-semibold uppercase tracking-wider">
            Canais Oficiais Exclusivos:
          </span>
          <div className="flex items-center gap-4">
            {officialNumbers.map((item, index) => (
              <a
                key={index}
                href={`tel:${item.tel}`}
                className="flex items-center gap-1 text-[#1a1a1a] hover:text-primary transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span className="text-xs font-body font-medium">{item.number}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialChannelsBar;
