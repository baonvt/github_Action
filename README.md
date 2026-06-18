# React + Node 22 + GitHub Actions

Dự án React để test GitHub Actions với Node.js 22.x
##  GitHub Actions

Dự án đã bao gồm GitHub Actions workflow tự động:
- Chạy khi push hoặc tạo pull request
- Cài đặt Node 22.x
- Cài đặt dependencies
- Chạy linter
- Build project
- Chạy tests

Xem file `.github/workflows/react-build.yml` để chi tiết.

##  Cấu trúc dự án

├── src/
│   ├── main.jsx       # Entry point
│   ├── App.jsx        # Main component
│   ├── App.css        # Styles
│   └── App.test.jsx   # Tests
├── public/
│   └── index.html     # HTML template
├── .github/
│   └── workflows/     # GitHub Actions workflows
├── package.json
├── vite.config.js
└── vitest.config.js
