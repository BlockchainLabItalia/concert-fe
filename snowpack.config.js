/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-optimize',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
    { match: 'all', src: '/api/.*', dest: (req, res) => proxy.web(req, res) },
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
    polyfillNode: true,
  },
  devOptions: {
    port: 3000
  },
  buildOptions: {
    /* ... */
  },
};
