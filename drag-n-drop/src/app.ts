/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

// Drag & Drop Project:
namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
