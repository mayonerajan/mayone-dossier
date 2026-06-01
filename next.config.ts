/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // CLUSTER 1: Biological Sovereignty
      {
        source: '/protocols/metabolic-sovereignty',
        destination: 'https://www.mayonemaharajan.com/research/metabolic-sovereignty',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/soil-gut-brain-axis',
        destination: 'https://www.mayonemaharajan.com/research/soil-gut-brain-axis',
        permanent: true,
      },
      {
        source: '/intelligence/briefs/neurotechnology-non-medical-outlook',
        destination: 'https://www.mayonemaharajan.com/research/neurotechnology-non-medical-outlook',
        permanent: true,
      },

      // CLUSTER 2: Algorithmic Capture
      {
        source: '/intelligence/briefs/algorithmic-lock-in',
        destination: 'https://www.mayonemaharajan.com/research/algorithmic-lock-in',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/overclocked',
        destination: 'https://www.mayonemaharajan.com/research/overclocked',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/consumer-to-producer',
        destination: 'https://www.mayonemaharajan.com/research/consumer-to-producer',
        permanent: true,
      },

      // CLUSTER 3: Digital Sovereignty & Zero-Payload
      {
        source: '/protocols/digital-firewall',
        destination: 'https://www.mayonemaharajan.com/research/digital-firewall',
        permanent: true,
      },
      {
        source: '/protocols/hardware-sovereignty',
        destination: 'https://www.mayonemaharajan.com/research/hardware-sovereignty',
        permanent: true,
      },
      {
        source: '/intelligence/briefs/hyperscaler-storage-disposition',
        destination: 'https://www.mayonemaharajan.com/research/hyperscaler-storage-disposition',
        permanent: true,
      },
      {
        source: '/intelligence/briefs/us-foundry-sovereignization',
        destination: 'https://www.mayonemaharajan.com/research/us-foundry-sovereignization',
        permanent: true,
      },

      // CLUSTER 4: The Maha Principle (Doctrine)
      {
        source: '/protocols/architecting-renewal',
        destination: 'https://www.mayonemaharajan.com/research/architecting-renewal',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/protocol-of-precision',
        destination: 'https://www.mayonemaharajan.com/research/protocol-of-precision',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/strategic-gravity',
        destination: 'https://www.mayonemaharajan.com/research/strategic-gravity',
        permanent: true,
      },
      {
        source: '/doctrine/briefs/the-ordeal',
        destination: 'https://www.mayonemaharajan.com/research/the-ordeal',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;