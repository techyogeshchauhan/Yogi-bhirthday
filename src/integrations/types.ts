export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_wishes: {
        Row: {
          approved: boolean
          created_at: string
          id: string
          likes: number
          name: string
          tone: string | null
          wish_text: string
        }
        Insert: {
          approved?: boolean
          created_at?: string
          id?: string
          likes?: number
          name: string
          tone?: string | null
          wish_text: string
        }
        Update: {
          approved?: boolean
          created_at?: string
          id?: string
          likes?: number
          name?: string
          tone?: string | null
          wish_text?: string
        }
        Relationships: []
      }
      capsule: {
        Row: {
          created_at: string
          id: string
          message: string
          name: string
          unlock_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          name: string
          unlock_at: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          name?: string
          unlock_at?: string
        }
        Relationships: []
      }
      friend_wall: {
        Row: {
          approved: boolean
          created_at: string
          id: string
          memory: string
          name: string
          photo_url: string | null
        }
        Insert: {
          approved?: boolean
          created_at?: string
          id?: string
          memory: string
          name: string
          photo_url?: string | null
        }
        Update: {
          approved?: boolean
          created_at?: string
          id?: string
          memory?: string
          name?: string
          photo_url?: string | null
        }
        Relationships: []
      }
      photo_booth: {
        Row: {
          approved: boolean
          created_at: string
          filter_applied: string | null
          id: string
          likes: number
          name: string | null
          photo_url: string
        }
        Insert: {
          approved?: boolean
          created_at?: string
          filter_applied?: string | null
          id?: string
          likes?: number
          name?: string | null
          photo_url: string
        }
        Update: {
          approved?: boolean
          created_at?: string
          filter_applied?: string | null
          id?: string
          likes?: number
          name?: string | null
          photo_url?: string
        }
        Relationships: []
      }
      poll_responses: {
        Row: {
          created_at: string
          id: string
          option_id: string
          poll_id: string
          user_identifier: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          option_id: string
          poll_id: string
          user_identifier?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          option_id?: string
          poll_id?: string
          user_identifier?: string | null
        }
        Relationships: []
      }
      quiz_responses: {
        Row: {
          created_at: string
          id: string
          name: string
          percentage: number | null
          score: number
          time_taken: number | null
          total_questions: number
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          percentage?: number | null
          score: number
          time_taken?: number | null
          total_questions: number
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          percentage?: number | null
          score?: number
          time_taken?: number | null
          total_questions?: number
        }
        Relationships: []
      }
      video_messages: {
        Row: {
          approved: boolean
          created_at: string
          duration: number | null
          id: string
          likes: number
          name: string
          thumbnail_url: string | null
          video_url: string
        }
        Insert: {
          approved?: boolean
          created_at?: string
          duration?: number | null
          id?: string
          likes?: number
          name: string
          thumbnail_url?: string | null
          video_url: string
        }
        Update: {
          approved?: boolean
          created_at?: string
          duration?: number | null
          id?: string
          likes?: number
          name?: string
          thumbnail_url?: string | null
          video_url?: string
        }
        Relationships: []
      }
      visitors: {
        Row: {
          country: string | null
          created_at: string
          id: string
          session_id: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: string
          session_id?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: string
          session_id?: string | null
        }
        Relationships: []
      }
      wishes: {
        Row: {
          approved: boolean
          avatar_url: string | null
          country: string | null
          created_at: string
          emoji: string | null
          id: string
          likes: number
          message: string
          name: string
          pinned: boolean
        }
        Insert: {
          approved?: boolean
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          emoji?: string | null
          id?: string
          likes?: number
          message: string
          name: string
          pinned?: boolean
        }
        Update: {
          approved?: boolean
          avatar_url?: string | null
          country?: string | null
          created_at?: string
          emoji?: string | null
          id?: string
          likes?: number
          message?: string
          name?: string
          pinned?: boolean
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_poll_stats: {
        Args: { _poll_id: string }
        Returns: {
          option_id: string
          vote_count: number
        }[]
      }
      get_visitor_stats: {
        Args: never
        Returns: {
          countries: number
          total: number
        }[]
      }
      increment_ai_wish_likes: { Args: { _wish_id: string }; Returns: number }
      increment_photo_likes: { Args: { _photo_id: string }; Returns: number }
      increment_video_likes: { Args: { _video_id: string }; Returns: number }
      increment_wish_likes: { Args: { _wish_id: string }; Returns: number }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
