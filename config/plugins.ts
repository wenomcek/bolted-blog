export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'obD14gNSmkvf6kVd1q4dEA=='),
    },
  },
});
