export interface Candidate {
    id: number;
    avatar_url: string;
    name: string;
    login: string;
    location: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    html_url: string;
  }