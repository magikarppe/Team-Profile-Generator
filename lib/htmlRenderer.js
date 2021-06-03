const path = require("path");
const fs = require("fs");

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];

  html.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => renderManager(manager))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => renderEngineer(engineer))
  );
  html.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => renderIntern(intern))
  );

  return renderMain(html.join(""));

};

const renderManager = manager => {
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = repPlaceholders(template, "name", manager.getName());
  template = repPlaceholders(template, "role", manager.getRole());
  template = repPlaceholders(template, "email", manager.getEmail());
  template = repPlaceholders(template, "id", manager.getId());
  template = repPlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = engineer => {
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = repPlaceholders(template, "name", engineer.getName());
  template = repPlaceholders(template, "role", engineer.getRole());
  template = repPlaceholders(template, "email", engineer.getEmail());
  template = repPlaceholders(template, "id", engineer.getId());
  template = repPlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = intern => {
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = repPlaceholders(template, "name", intern.getName());
  template = repPlaceholders(template, "role", intern.getRole());
  template = repPlaceholders(template, "email", intern.getEmail());
  template = repPlaceholders(template, "id", intern.getId());
  template = repPlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return repPlaceholders(template, "team", html);
};

const repPlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
