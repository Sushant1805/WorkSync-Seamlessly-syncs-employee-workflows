localStorage.clear()
const employees = [
  {
    "id": 1,
    "firstname": "Aarav",
    "email": "dev.aarav@example.com",
    "pass": "123",
    "tasks": [
      { "title": "Implement User Authentication", "description": "Develop and integrate a secure authentication system using JWT.", "category": "Development", "active": true, "new_task": true, "completed": false, "failed": false },
      { "title": "Optimize Database Queries", "description": "Analyze and improve SQL queries to reduce response time.", "category": "Database Optimization", "active": false, "new_task": false, "completed": true, "failed": false },
      { "title": "Create API Documentation", "description": "Write detailed API documentation for internal and external use.", "category": "Documentation", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Develop Frontend Components", "description": "Create reusable React components for the user dashboard.", "category": "Frontend Development", "active": false, "new_task": true, "completed": false, "failed": false },
      { "title": "Fix Login Page Bugs", "description": "Resolve issues with form validation and improve UX.", "category": "Bug Fixing", "active": true, "new_task": false, "completed": false, "failed": false }
      
    ],
    "task_numbers": { "active": 2, "new_task": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 2,
    "firstname": "Vivaan",
    "email": "dev.vivaan@example.com",
    "pass": "123",
    "tasks": [
      { "title": "Develop Frontend Components", "description": "Create reusable React components for the user dashboard.", "category": "Frontend Development", "active": false, "new_task": true, "completed": false, "failed": false },
      { "title": "Fix Login Page Bugs", "description": "Resolve issues with form validation and improve UX.", "category": "Bug Fixing", "active": true, "new_task": false, "completed": false, "failed": false }
    ],
    "task_numbers": { "active": 1, "new_task": 1, "completed": 0, "failed": 0 }
  },
  {
    "id": 3,
    "firstname": "Kabir",
    "email": "editor.kabir@example.com",
    "pass": "123",
    "tasks": [
      { "title": "Proofread Technical Articles", "description": "Check for grammar, clarity, and accuracy in developer blogs.", "category": "Editing", "active": true, "new_task": true, "completed": false, "failed": false },
      { "title": "Format Code Snippets", "description": "Ensure proper formatting and syntax highlighting in documentation.", "category": "Technical Writing", "active": false, "new_task": false, "completed": true, "failed": false }
    ],
    "task_numbers": { "active": 1, "new_task": 1, "completed": 1, "failed": 0 }
  },
  {
    "id": 4,
    "firstname": "Aryan",
    "email": "editor.aryan@example.com",
    "pass": "123",
    "tasks": [
      { "title": "Review UI/UX Guidelines", "description": "Analyze and suggest improvements for design consistency.", "category": "UX Research", "active": false, "new_task": true, "completed": false, "failed": false },
      { "title": "Edit API Reference Docs", "description": "Ensure clarity and consistency in API documentation.", "category": "Documentation", "active": true, "new_task": false, "completed": false, "failed": false },
      { "title": "Update Blog Content", "description": "Revise old technical blogs with updated information.", "category": "Content Writing", "active": true, "new_task": false, "completed": false, "failed": false }
    ],
    "task_numbers": { "active": 2, "new_task": 1, "completed": 0, "failed": 0 }
  }
];

const admin = {
  "firstname": "Admin",
  "id": 100,
  "email": "admin@example.com",
  "pass": "123"
};

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};
