module.exports = {
  apps: [
    {
      name: "oneedoweb",
      script: "./node_modules/.bin/next",
      args: "start",
      instances: "max",
      exec_mode: "cluster"
    },
  ],
};
