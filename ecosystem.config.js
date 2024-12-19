module.exports = {
  apps: [
    {
      name: "oneedoweb",
      script: "./node_modules/.bin/next",
      args: "start",
      instances: "1",
      exec_mode: "cluster"
    },
  ],
};
