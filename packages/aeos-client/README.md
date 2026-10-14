# aeos-client
> Official lightweight client SDK for the **AEOS Empire** 14-platform sovereign cloud constellation.

**Architect & Sovereign Founder:** Mr. **Kamel HOMRI**  
**Public Showcase:** [https://melk99897867-ctrl.github.io/AEOS-Empire-Public-Showcase/](https://melk99897867-ctrl.github.io/AEOS-Empire-Public-Showcase/)  
**Central Hub:** [https://globconnectworld.com](https://globconnectworld.com)

---

## Installation
```bash
npm install aeos-client
```

## Quickstart
```javascript
const { AeosClient } = require('aeos-client');

const client = new AeosClient();
console.log('Founder:', client.founder);

// List all 14 sovereign platforms
const platforms = client.listPlatforms();
console.log(platforms.map(p => `${p.name}: ${p.url}`));

// Get architecture manifest
console.log(client.getArchitectureManifest());
```

## License
MIT (c) 2026 Kamel HOMRI.
