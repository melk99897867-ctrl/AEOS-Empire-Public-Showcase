/**
 * AEOS Empire Official Client SDK
 * Architect & Sovereign Founder: Kamel HOMRI
 * License: MIT
 */

const PLATFORMS = [
  { id: "globconnectworld", name: "GlobConnectWorld", domain: "B2B Global Orchestration & Enterprise AI Hub", url: "https://globconnectworld.com" },
  { id: "nftfutur", name: "NFTFutur", domain: "Web3 Digital Art & Sovereign Smart Contracts", url: "https://nftfutur.com" },
  { id: "blitzshop", name: "BlitzShop", domain: "High-Velocity Flash Sales E-Commerce", url: "https://blitzshop.com" },
  { id: "cryptoplatformpro", name: "CryptoPlatformPro", domain: "Advanced Crypto Analytics & Arbitrage Engine", url: "https://cryptoplatformpro.com" },
  { id: "ruchecognitive", name: "Ruche Cognitive", domain: "Collective Multi-Agent Swarm Intelligence Mesh", url: "https://ruchecognitive.com" },
  { id: "semantixseo", name: "Semantix SEO", domain: "Autonomous Programmatic Semantic SEO & Topic Clustering", url: "https://semantix-seo.com" },
  { id: "harmonizepal", name: "HarmonizePal", domain: "Enterprise Workflow Harmonization & Team Automation", url: "https://harmonizepal.com" },
  { id: "quickfrequencytrade", name: "QuickFrequencyTrade", domain: "Sub-Second Algorithmic Signals & Financial Arbitrage", url: "https://quickfrequencytrade.com" },
  { id: "aisalespilot", name: "AISalesPilot", domain: "Autonomous AI CRM, Pipeline Acceleration & Lead Conversion", url: "https://aisalespilot.com" },
  { id: "fitflix", name: "FitFlix", domain: "AI-Driven Adaptive Fitness & Wellness Streaming", url: "https://fitflix.com" },
  { id: "quantumadsnetwork", name: "Quantum Ads Network", domain: "Autonomous Programmatic Ad Auctioning & Retargeting", url: "https://quantumadsnetwork.com" },
  { id: "agencyautomationb2b", name: "Agency Automation B2B", domain: "Turnkey White-Label B2B Agency Infrastructure", url: "https://agencyautomationb2b.com" },
  { id: "aiscalepartners", name: "AIScalePartners", domain: "Strategic Partner Scaling & Joint Venture Affiliation", url: "https://aiscalepartners.com" },
  { id: "ciphermailservice", name: "Cipher Mail Service", domain: "Encrypted Privacy-First Sovereign Communications", url: "https://ciphermailservice.com" }
];

class AeosClient {
  constructor(options = {}) {
    this.endpoint = options.endpoint || "https://globconnectworld.com";
    this.founder = "Kamel HOMRI";
  }

  listPlatforms() {
    return PLATFORMS;
  }

  getPlatform(id) {
    return PLATFORMS.find(p => p.id === id || p.name.toLowerCase() === id.toLowerCase()) || null;
  }

  getArchitectureManifest() {
    return {
      founder: this.founder,
      constellation: "AEOS Empire",
      total_platforms: PLATFORMS.length,
      showcase_url: "https://melk99897867-ctrl.github.io/AEOS-Empire-Public-Showcase/",
      feed_url: `${this.endpoint}/feed.xml`,
      llms_spec: "https://melk99897867-ctrl.github.io/AEOS-Empire-Public-Showcase/llms.txt"
    };
  }
}

module.exports = { AeosClient, PLATFORMS };
