/**
 * Client-side public GitHub utility for Peter Nyagaka (@CyberNerd351).
 * Completely safe, zero secrets, gracefully falls back to verified static data on rate-limit or network failure.
 */

const GITHUB_USERNAME = "CyberNerd351";
const CACHE_KEY = `github_profile_${GITHUB_USERNAME}`;
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

export const fallbackProfile = {
  login: "CyberNerd351",
  name: "Peter Nyagaka",
  bio: "Full-Stack Developer & Computer Scientist building practical software systems, business applications, and APIs.",
  html_url: "https://github.com/CyberNerd351",
  public_repos: 5,
  followers: 0,
  following: 0,
  avatar_url: "https://github.com/CyberNerd351.png",
  created_at: "2024-01-01T00:00:00Z"
};

export const verifiedRepositories = [
  {
    name: "Busa-Election-System",
    html_url: "https://github.com/CyberNerd351/Busa-Election-System",
    description: "Web-based election management system designed for student association voting across 8 executive leadership positions.",
    language: "Python",
    topics: ["flask", "python", "elections", "sql", "full-stack"]
  },
  {
    name: "Cyber-Inventory-System",
    html_url: "https://github.com/CyberNerd351",
    description: "Transaction-based business inventory, POS checkout, expense tracking, and immutable audit logging for retail cyber shops.",
    language: "JavaScript",
    topics: ["react", "sqlite", "inventory-management", "pos"]
  },
  {
    name: "Smart-HelbWallet",
    html_url: "https://github.com/CyberNerd351",
    description: "Student loan financial allocation and multi-tier budget management platform (Kotlin Android + Flask REST API).",
    language: "Kotlin",
    topics: ["android", "kotlin", "flask", "mysql", "rest-api"]
  },
  {
    name: "GrabHub-FoodOrdering",
    html_url: "https://github.com/CyberNerd351",
    description: "Responsive food discovery and e-commerce meal ordering platform with real-time cart and payment workflows.",
    language: "JavaScript",
    topics: ["react", "ecommerce", "ui-ux", "cart-state"]
  }
];

export async function fetchGitHubProfile() {
  // Check localStorage cache
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return { data: parsed.data, fromCache: true, error: null };
      }
    }
  } catch {
    // ignore storage error
  }

  // Attempt network fetch
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github.v3+json"
      }
    });
    clearTimeout(timeoutId);

    if (!res.ok) {
      return { data: fallbackProfile, fromCache: false, error: `GitHub API status ${res.status}` };
    }

    const json = await res.json();
    const profileData = {
      login: json.login || GITHUB_USERNAME,
      name: json.name || "Peter Nyagaka",
      bio: json.bio || fallbackProfile.bio,
      html_url: json.html_url || `https://github.com/${GITHUB_USERNAME}`,
      public_repos: json.public_repos || fallbackProfile.public_repos,
      followers: json.followers || 0,
      following: json.following || 0,
      avatar_url: json.avatar_url || `https://github.com/${GITHUB_USERNAME}.png`,
      created_at: json.created_at || fallbackProfile.created_at
    };

    try {
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ timestamp: Date.now(), data: profileData })
      );
    } catch {
      // ignore
    }

    return { data: profileData, fromCache: false, error: null };
  } catch (err) {
    return { data: fallbackProfile, fromCache: false, error: err.message };
  }
}
