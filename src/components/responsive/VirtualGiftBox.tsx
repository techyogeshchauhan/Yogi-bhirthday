import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { Gift, GiftIcon, QrCode, Download, Share2, Lock, Unlock, Star, Heart, Crown } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";

interface GiftBox {
  id: string;
  name: string;
  description: string;
  type: "physical" | "digital" | "couple" | "friend";
  price?: number;
  opened: boolean;
  imageUrl: string;
  items?: string[];
  qrCodeUrl?: string;
}

const initialGifts: GiftBox[] = [
  {
    id: "1",
    name: "Theme Park Special",
    description: "Weekend pass for two to the local theme park with unlimited rides",
    type: "couple",
    price: 150,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1594738284582-17cbf85b547b?w=600&h=400&fit=crop",
    items: ["2-Day Pass", "Free Food Voucher", "Fast Track Access"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=THEMEPARK2026"
  },
  {
    id: "2",
    name: "Spa Day Deluxe",
    description: "60-minute couple massage with refreshments and aromatherapy",
    type: "couple",
    price: 200,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    items: ["Couple Massage", "Sauna Access", "Fresh Juice Bar", "Aromatherapy"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SPADAY2026"
  },
  {
    id: "3",
    name: "VIP Concert Experience",
    description: "Front row seats for a local concert with backstage access",
    type: "friend",
    price: 250,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
    items: ["2 VIP Tickets", "Meet & Greet", "Limited Edition Merchandise", "Photo Op"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=VIPCONCERT2026"
  },
  {
    id: "4",
    name: "Digital Photography Course",
    description: "Lifetime access to premium Photography & Photoshop tutorial course",
    type: "digital",
    price: 75,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=400&fit=crop",
    items: ["50+ Video Lessons", "Project Files", "Certificate", "Lifetime Updates"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DIGITALCOURSE2026"
  },
  {
    id: "5",
    name: "Fine Dining Experience",
    description: "$150 gift card for romantic dinner at premium restaurant",
    type: "couple",
    price: 150,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    items: ["$150 Gift Card", "Complimentary Dessert", "Live Music"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DINNERCARD2026"
  },
  {
    id: "6",
    name: "Weekend Getaway Package",
    description: "2 nights luxury hotel stay with breakfast and spa access",
    type: "couple",
    price: 400,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    items: ["2 Night Stay", "Breakfast Buffet", "Pool & Spa Access", "Late Checkout"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=WEEKENDGETAWAY2026"
  },
  {
    id: "7",
    name: "Gaming Console Bundle",
    description: "Latest gaming console with 3 premium games",
    type: "physical",
    price: 500,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=600&h=400&fit=crop",
    items: ["Gaming Console", "3 Premium Games", "Extra Controller", "1 Year Warranty"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=GAMINGBUNDLE2026"
  },
  {
    id: "8",
    name: "Adventure Sports Package",
    description: "Bungee jumping, paragliding, and zip-lining experience",
    type: "friend",
    price: 180,
    opened: false,
    imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    items: ["Bungee Jump", "Paragliding Session", "Zip-line Adventure", "Photos & Video"],
    qrCodeUrl: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=ADVENTURE2026"
  },
];

function GiftCard({ gift }: { gift: GiftBox; onOpen: (id: string) => void; onShare: (gift: GiftBox) => void; }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "physical": return <Gift className="w-5 h-5 text-blue" />;
      case "digital": return <Download className="w-5 h-5 text-purple" />;
      case "couple": return <Heart className="w-5 h-5 text-pink" />;
      case "friend": return <Star className="w-5 h-5 text-yellow" />;
      default: return <GiftIcon className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <ResponsiveCard className={gift.opened ? "border-2 border-gold/50" : ""} hover={!gift.opened}>
        <div className="relative">
          {!gift.opened && (
            <div className="absolute top-2 right-2 z-10 bg-black/50 backdrop-blur rounded-full p-2">
              <Lock className="w-4 h-4 text-white" />
            </div>
          )}
          
          <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
            <img
              src={gift.imageUrl}
              alt={gift.name}
              className={`w-full h-full object-cover transition-all duration-300 ${
                gift.opened ? "opacity-40 scale-110" : "hover:scale-105"
              }`}
            />
            {gift.opened && (
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gold/20 to-yellow/20 backdrop-blur-sm"
              >
                <div className="text-center">
                  <Unlock className="w-12 h-12 text-gold mx-auto mb-2 drop-shadow-lg" />
                  <span className="text-white font-bold text-sm bg-black/40 px-3 py-1 rounded-full">
                    Opened!
                  </span>
                </div>
              </motion.div>
            )}
            {!gift.opened && (
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            )}
          </div>
          
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-lg line-clamp-1">{gift.name}</h3>
            <div className="p-2 rounded-lg bg-secondary/50 ml-2">
              {getTypeIcon(gift.type)}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {gift.description}
          </p>
          
          {gift.price && (
            <div className="text-lg font-bold text-gold mb-3">
              ${gift.price}
            </div>
          )}
          
          {gift.opened && gift.items && (
            <div className="space-y-2 mb-3">
              <h4 className="text-sm font-semibold">Items included:</h4>
              {gift.items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                  {item}
                </div>
              ))}
            </div>
          )}
          
          {gift.opened && gift.qrCodeUrl && (
            <div className="space-y-2 mb-4 p-3 bg-gradient-to-br from-secondary/50 to-secondary/30 rounded-lg border border-gold/20">
              <h4 className="text-sm font-semibold flex items-center gap-2">
                <QrCode className="w-4 h-4 text-gold" />
                Scan to Redeem:
              </h4>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-inner">
                <img
                  src={gift.qrCodeUrl}
                  alt="Gift QR Code"
                  className="w-32 h-32"
                />
              </div>
              <p className="text-xs text-center text-muted-foreground">
                Show this QR code to redeem your gift
              </p>
            </div>
          )}
          
          <div className="flex gap-2 mt-4">
            {!gift.opened ? (
              <ResponsiveButton
                onClick={() => onOpen(gift.id)}
                fullWidth
                className="flex-1"
              >
                <Crown className="w-4 h-4 mr-2 inline" />
                Open Gift
              </ResponsiveButton>
            ) : (
              <ResponsiveButton
                onClick={() => onShare(gift)}
                variant="secondary"
                fullWidth
                className="flex-1"
              >
                <Share2 className="w-4 h-4 mr-2 inline" />
                Share Gift
              </ResponsiveButton>
            )}
          </div>
        </div>
      </ResponsiveCard>
    </motion.div>
  );
}

export function VirtualGiftBox() {
  const [gifts, setGifts] = useState<GiftBox[]>(initialGifts);
  const [filter, setFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState(false);

  const handleOpenGift = (id: string) => {
    const gift = gifts.find((g) => g.id === id);
    if (!gift) return;
    
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });
    
    setGifts((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, opened: true } : g
      )
    );
    
    toast.success(`You've opened ${gift.name}!`, {
      description: "Enjoy your special gift! 🎉"
    });
  };

  const handleShareGift = (gift: GiftBox) => {
    const text = `
    ✨ ${gift.name} ✨
    
    ${gift.description}
    
    Value: $${gift.price}
    
    #BirthdayGifts #${gift.type}
    `;
    
    if (navigator.share) {
      navigator.share({ text });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Gift details copied to clipboard!");
    }
  };

  const filteredGifts = gifts.filter((gift) => {
    if (filter === "all") return true;
    return gift.type === filter;
  });

  const visibleGifts = showAll ? filteredGifts : filteredGifts.slice(0, 6);

  const giftTypes = [
    { value: "all", label: "All Gifts" },
    { value: "physical", label: "Physical" },
    { value: "digital", label: "Digital" },
    { value: "couple", label: "For Couple" },
    { value: "friend", label: "For Friend" },
  ];

  return (
    <ResponsiveSection
      id="virtual-gift-box"
      title="Virtual Gift Box"
      subtitle="Discover amazing gifts with real value!"
    >
      <ResponsiveCard className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          {giftTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => setFilter(type.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all $
                ${filter === type.value
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-secondary/70 hover:bg-secondary"
                }
              `}
            >
              {type.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <AnimatePresence mode="popLayout">
            {visibleGifts.map((gift) => (
              <GiftCard
                key={gift.id}
                gift={gift}
                onOpen={handleOpenGift}
                onShare={handleShareGift}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredGifts.length > 6 && !showAll && (
          <div className="text-center">
            <ResponsiveButton
              onClick={() => setShowAll(true)}
              variant="secondary"
            >
              <Gift className="w-4 h-4 mr-2 inline" />
              View All Gifts ({filteredGifts.length})
            </ResponsiveButton>
          </div>
        )}
      </ResponsiveCard>
    </ResponsiveSection>
  );
}