module.exports = {
  apps: [
    {
      name: "lead-backend",
      script: "./bin/www",
      args: "",
      instances: 1,
      autorestart: true,
      watch: [
        "routes/*",
        "app.js",
        "ecosystem.config.js"
      ],
      ignore_watch: ["node_modules/*", "uploads/*"],
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "development",
        PORT: 3001,

      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3001,
        AWS_SECRET_ACCESS_KEY: "AKIAIFXRDAHXGEJGTADQ",
        AWS_ACCESS_KEY_ID: "TRNPFo+ELjLf8iX7XoYnErgoXBZu7F2HI7W2GPSM",
        AWS_REGION: "sa-east-1",
        TOKEN: "./O;bBzSYpZGguA7zVal$kG-JiBz[*"
      }
    }
  ]
};

