module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    // 'react-refresh/only-export-components': 'warn', // Disabled to allow for multiple component exports per file
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off', // Disable for modern React (React 17+)
    'react/no-unknown-property': ['error', { ignore: ['args', 'position', 'rotation', 'intensity', 'groundColor', 'angle', 'penumbra', 'castShadow', 'receiveShadow', 'shadow-mapSize', 'object', 'polygonOffset', 'polygonOffsetFactor', 'flatShading', 'position-y', 'rotation-y'] }],
  },
}