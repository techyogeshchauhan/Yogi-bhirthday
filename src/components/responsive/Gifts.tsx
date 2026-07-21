import { useState } from "react";
import { motion } from "framer-motion";
import { Gift, X, QrCode, Heart, Coffee, Music, Book } from "lucide-react";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton } from "./ResponsiveSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GiftOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  action?: () => void;
}

const giftOptions: GiftOption[] = [
  {
    id: "upi",
    title: "UPI Payment",
    description: "Send a gift via UPI",
    icon: <QrCode className="w-6 h-6" />,
  },
  {
    id: "coffee",
    title: "Buy me a coffee",
    description: "Support my work",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: "amazon",
    title: "Amazon Wishlist",
    description: "Pick a gift from my wishlist",
    icon: <Gift className="w-6 h-6" />,
  },
  {
    id: "book",
    title: "Book Recommendation",
    description: "Share a book idea",
    icon: <Book className="w-6 h-6" />,
  },
];

export function Gifts() {
  const [showQR, setShowQR] = useState(false);

  return (
    <ResponsiveSection
      id="gifts"
      title="Send a Gift"
      subtitle="Your generosity makes a difference!"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {giftOptions.map((gift, index) => (
          <motion.div
            key={gift.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <ResponsiveCard
              className="text-center cursor-pointer"
              hover={true}
              onClick={() => {
                if (gift.id === "upi") {
                  setShowQR(true);
                }
              }}
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br from-purple/20 to-pink/20 grid place-items-center mx-auto mb-3 sm:mb-4">
                <div className="text-purple">{gift.icon}</div>
              </div>
              <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
                {gift.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {gift.description}
              </p>
            </ResponsiveCard>
          </motion.div>
        ))}
      </div>

      {/* QR Code Dialog */}
      <Dialog open={showQR} onOpenChange={setShowQR}>
        <DialogContent className="max-w-sm sm:max-w-md">
          <div className="text-center">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg sm:text-xl font-semibold">Scan to Pay</h3>
            </div>
            <div className="bg-white p-4 rounded-2xl inline-block">
              {/* Using a placeholder - replace with actual QR code */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 bg-gray-100 rounded-xl flex items-center justify-center">
                <img
                  src="/qrcode.jpeg"
                  alt="Payment QR Code"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Scan the QR code to send a gift
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-pink" />
              <span>Thank you for your support!</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </ResponsiveSection>
  );
}