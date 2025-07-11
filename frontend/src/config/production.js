// Production Configuration for Beynon Sports React Application
// This file centralizes all production server configurations

export const PRODUCTION_CONFIG = {
  // Server Configuration
  SERVER_IP: '96.30.199.117',
  
  // API Endpoints
  API_BASE_URL: 'http://96.30.199.117/api',
  LLM_BASE_URL: 'http://96.30.199.117/llm',
  
  // Keycloak Configuration
  KEYCLOAK_CONFIG: {
    url: 'http://96.30.199.117/auth/',
    realm: 'team_online',
    clientId: 'benyon_fe'
  },
  
  // Full URLs for direct usage
  KEYCLOAK_TOKEN_URL: 'http://96.30.199.117/auth/realms/team_online/protocol/openid-connect/token',
  KEYCLOAK_WELL_KNOWN_URL: 'http://96.30.199.117/auth/realms/team_online/.well-known/openid_configuration',
  
  // Timeouts
  API_TIMEOUT: 15000,
  LLM_TIMEOUT: 30000,
  
  // Environment
  NODE_ENV: 'production'
};

// Export individual configs for convenience
export const {
  SERVER_IP,
  API_BASE_URL,
  LLM_BASE_URL,
  KEYCLOAK_CONFIG,
  KEYCLOAK_TOKEN_URL,
  KEYCLOAK_WELL_KNOWN_URL,
  API_TIMEOUT,
  LLM_TIMEOUT
} = PRODUCTION_CONFIG;

export default PRODUCTION_CONFIG;
