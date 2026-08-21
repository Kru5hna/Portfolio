#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text & Links Data
const data = {
  name: chalk.cyan.bold("                Krushna Raut"),
  handle: chalk.white.bold("Full Stack @ Portfolio"),
  work: chalk.white("Building Rate-Shield, Privault & AI Vision Pipelines"),
  
  github: chalk.gray("https://github.com/") + chalk.green("Kru5hna"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("krushna-raut-347a3b27b"),
  npm: chalk.gray("https://www.npmjs.com/package/") + chalk.red("rate-shield"),
  web: chalk.cyan("https://portfolio-kru5hna.vercel.app/"),
  
  npx: chalk.red("npx") + " " + chalk.white.bold("krushna"),
  
  labelWork: chalk.white.bold("       Work:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelNPM: chalk.white.bold("        NPM:"),
  labelWeb: chalk.white.bold("       Card:"),
  labelCard: chalk.white.bold("        CLI:")
};

// Formatted Card Content
const output = `
${data.name}
${chalk.gray("                " + data.handle)}

${data.labelWork}  ${data.work}

${data.labelGitHub}  ${data.github}
${data.labelLinkedIn}  ${data.linkedin}
${data.labelNPM}  ${data.npm}
${data.labelWeb}  ${data.web}

${data.labelCard}  ${data.npx}

${chalk.gray.italic("   'i make software that looks clean & works blazingly fast <3'")}
`;

// Boxen Configuration
const boxOptions = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan",
  backgroundColor: "#09090b"
};

console.log(boxen(output, boxOptions));
