import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ResponsiveSection, ResponsiveCard, ResponsiveButton, ResponsiveInput, ResponsiveTextarea } from "./ResponsiveSection";
import { useFriendWall, FriendWallPost } from "./useDynamicData";

function FriendWallForm({ onSubmit, sending }: { onSubmit: (data: { name: string; memory: string; photo_url?: string }) => void; sending: boolean }) {
  const [form, setForm] = useState({ name: "", memory: "", photo_url: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.memory.trim()) return;
    onSubmit({
      name: form.name,
      memory: form.memory,
      photo_url: form.photo_url || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="glass rounded-3xl p-5 sm:p-6 md:p-8">
      <div className="grid sm:grid-cols-2 gap-4">
        <ResponsiveInput
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
          placeholder="Your name"
          required
          label="Name"
        />
        <ResponsiveInput
          value={form.photo_url}
          onChange={(v) => setForm({ ...form, photo_url: v })}
          placeholder="Photo URL (optional)"
          label="Photo URL"
        />
      </div>
      
      <div className="mt-4">
        <ResponsiveTextarea
          value={form.memory}
          onChange={(v) => setForm({ ...form, memory: v })}
          placeholder="Share a memory with Yogesh…"
          required
          rows={3}
          label="Memory"
        />
      </div>

      <div className="mt-5">
        <ResponsiveButton type="submit" disabled={sending || !form.name.trim() || !form.memory.trim()} fullWidth>
          {sending ? "Posting…" : "Post to wall"}
        </ResponsiveButton>
      </div>
    </form>
  );
}

function WallPostCard({ post }: { post: FriendWallPost }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ResponsiveCard className="overflow-hidden !p-0" hover={true}>
        {post.photo_url && (
          <div className="relative h-40 sm:h-48 overflow-hidden">
            <img
              src={post.photo_url}
              alt={post.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}
        <div className="p-4 sm:p-5">
          <div className="font-semibold text-base sm:text-lg">{post.name}</div>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">{post.memory}</p>
          <p className="mt-3 text-xs text-muted-foreground">
            {new Date(post.created_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </ResponsiveCard>
    </motion.div>
  );
}

export function FriendWall() {
  const { posts, loading, addPost } = useFriendWall(30);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (data: { name: string; memory: string; photo_url?: string }) => {
    setSending(true);
    try {
      await addPost({
        name: data.name,
        memory: data.memory,
        photo_url: data.photo_url,
      });
      toast.success("Posted to the wall!");
      setForm({ name: "", memory: "", photo_url: "" });
    } catch (err) {
      toast.error("Couldn't post. Try again.");
    } finally {
      setSending(false);
    }
  };

  // Reset form after successful submission
  const [, setForm] = useState({ name: "", memory: "", photo_url: "" });

  return (
    <ResponsiveSection
      id="wall"
      title="Friend Wall"
      subtitle="Share a photo and a memory."
    >
      {/* Form */}
      <FriendWallForm onSubmit={handleSubmit} sending={sending} />

      {/* Posts Grid */}
      <div className="mt-8 sm:mt-10 md:mt-12">
        {loading ? (
          // Loading skeletons
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden animate-pulse">
                <div className="h-40 sm:h-48 bg-secondary" />
                <div className="p-4 sm:p-5">
                  <div className="h-5 w-24 bg-secondary rounded mb-3" />
                  <div className="h-3 bg-secondary/50 rounded w-full mb-2" />
                  <div className="h-3 bg-secondary/50 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="glass rounded-2xl p-8 sm:p-12 text-center">
            <p className="text-muted-foreground">No memories yet. Share yours!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {posts.map((post) => (
              <WallPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </ResponsiveSection>
  );
}