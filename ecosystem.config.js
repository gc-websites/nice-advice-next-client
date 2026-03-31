module.exports = {
  apps: [
    {
      name: "nice-advice-next",
      script: "npm",
      args: "start",
      instances: 1,
      exec_mode: "fork"
    }
  ]
}