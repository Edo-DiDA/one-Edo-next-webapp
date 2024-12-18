require("dotenv").config();

module.exports = {
  apps: [
    {
      name: "oneedoweb",
      script: "./node_modules/.bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
      },
    },
  ],
};
