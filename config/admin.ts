export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fadd31e102b8a41035450bc507e6447d'),
  },
});
