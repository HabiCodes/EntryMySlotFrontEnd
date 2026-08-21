/**
 * EMS Frontend Configuration
 * Centralized config — edit here to point to your backend.
 *
 * Production: set window.EMS_API_CONFIG_OVERRIDE before this loads,
 * or use an environment-specific build. Otherwise BASE_URL defaults
 * to localhost for local development.
 */
window.EMS_API_CONFIG = (function () {
  // Allow override from a global set by server-side rendering or env script
  var override = window.EMS_API_CONFIG_OVERRIDE || {};

  var cfg = {
    API_BASE: '/api/v1',
    // Production: replace with your actual backend URL.
    // When running on the same origin, leaving BASE_URL empty uses relative paths.
    BASE_URL: (override.BASE_URL || 'http://localhost:4000').replace(/\/+$/, ''),
    WS_URL: (override.WS_URL || 'http://localhost:4000').replace(/\/+$/, ''),

    MAX_TICKETS_PER_BOOKING: 10,
    CURRENCY: 'INR',
    CURRENCY_SYMBOL: '₹',
    TAX_RATE: 0,
    CANCELLATION_WINDOW_HOURS: 6,
    SLOT_HOLD_DURATION_MS: 5 * 60 * 1000,
    SEAT_HOLD_DURATION_MS: 5 * 60 * 1000,
    SLOTS_PER_HOUR: 4,
    DEFAULT_OPTOUT_REASONS: [
      'No longer available',
      'Better price elsewhere',
      'Schedule conflict',
      'Personal reasons',
      'Organiser cancelled',
      'Weather / venue issue',
      'Other',
    ],
  };

  return cfg;
})();
